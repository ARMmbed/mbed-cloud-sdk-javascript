/*
* mbed Cloud JavaScript SDK
* Copyright ARM Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var fs = require("fs");
var http = require("http");
var express = require("express");

var mbedCloudSDK = require("../../index");
var config = require("./config");

// ngrok http 3002
var url = "http://fa0a2825.ngrok.io";
var port = 3002;

var connect = new mbedCloudSDK.ConnectApi(config);
var app = express();

// Set system to await notifications for callbacks instead of emitting asyncIds
connect.handleNotifications = true;

// Get specified device or first device
var deviceId = "";
function getDevice(completeFn) {
    if (deviceId) {
        return connect.getDevice({
            id: deviceId
        });
    }

    return connect.listConnectedDevices()
    .then(response => {
        return response[0];
    });
}

// Get device, it's resources and values
function listDevices() {
    return getDevice()
    .then(device => {
        console.log(`Device: ${device.name || device.id}`);
        return device.listResources();
    })
    .then(resources => {
        resources.forEach(resource => {
            resource.getValue()
            .then(value => {
                console.log(`\t└\x1b[1m${resource.path}\x1b[0m: ${value}`);
            })
            .catch(error => {
                console.log(`\t└\x1b[1m${resource.path}\x1b[0m: Error: ${error.message}`);
            });
        });
    });
}

// Listen for PUTs at the root URL
app.put("/", (req, res, next) => {

    var data = "";
    req.on("data", function(chunk) {
        data += chunk;
    });

    req.on("end", function() {
        // Parse data into JSON and inject into connect notification system
        data = JSON.parse(data);
        connect.notify(data);
    });

    res.sendStatus(200);
});

// Start server
http.createServer(app).listen(port, () => {
    console.log(`Webhook server listening on port ${port}`);
});

// Set up webhook
connect.getWebhook()
.then(webhook => {
    if (!webhook) console.log("No webhook currently registered");
    else console.log(`Webhook currently set to ${webhook.url}`);

    return connect.updateWebhook(url);
})
.then(() => {
    console.log(`Webhook now set to ${url}`);
    listDevices();
})
.catch(error => {
    console.log(`${error.message} - Unable to set webhook to ${url}, please ensure the URL is publicly accessible`);
    process.exit();
});
