/**
 * Device Catalog API
 * This is the API Documentation for the mbed device catalog update service.
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import superagent = require('superagent');

let defaultBasePath = 'http://api.mbedcloud.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export interface RequestOptions {
    auth?:{username?:string, password?:string};
    form?:any;
    formData?:any;
    method?:string;
    qs?:any;
    headers?:any;
    uri?:string;
    useQuerystring?: boolean;
    json?: boolean;
    encoding?: string | null;
    body?:any;
}

export function request(options:any, callback?:Function): superagent.SuperAgentRequest {
    var url = options.uri;

    // Normalize slashes in url
    url = url.replace(/([:])?\/+/g, function($0, $1) {
        return $1 ? $0: "/";
    });

    var request = superagent(options.method, url);

    if (options.auth && (options.auth.username || options.auth.password)) {
        request.auth(options.auth.username || '', options.auth.password || '');
    }

    // set query parameters
    request.query(normalizeParams(options.qs));

    // set header parameters
    request.set(normalizeParams(options.headers));

    // set request timeout
    request.timeout(60000);

    if (options.json) {
        request.type("application/json");
        request.accept("application/json");
    }

    if (options.form) {
        request.type("application/x-www-form-urlencoded");
        request.send(normalizeParams(options.form));
    } else if (options.formData) {
        request.type("multipart/form-data");
        var formParams = normalizeParams(options.formData);
        for (var key in formParams) {
            if (formParams.hasOwnProperty(key)) {
                if (isFileParam(formParams[key])) {
                    // file field
                    request.attach(key, formParams[key]);
                } else {
                    request.field(key, formParams[key]);
                }
            }
        }
    } else if (options.body) {
        request.send(options.body);
    }

    request.end(function(error, response) {
        if (callback) {
            var data = null;

            if (response && !error) {
                data = response.body || response.text;
            }

            callback(error, data, response);
        }
    });

    return request;
}

/**
* Normalizes parameter values:
* <ul>
* <li>remove nils</li>
* <li>keep files and arrays</li>
* <li>format to string with `paramToString` for other cases</li>
* </ul>
* @param {Object.<String, Object>} params The parameters as object properties.
* @returns {Object.<String, Object>} normalized parameters.
*/
export function normalizeParams(params:any) {
    var newParams = {};

    for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
            var value = params[key];
            if (isFileParam(value) || Array.isArray(value)) {
                newParams[key] = value;
            } else {
                newParams[key] = paramToString(value);
            }
        }
    }

    return newParams;
}

/**
* Checks whether the given parameter value represents file-like content.
* @param param The parameter to check.
* @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
*/
export function isFileParam(param:any) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
        return true;
    }

    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
    }

    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
    }

    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
        return true;
    }

    return false;
}

/**
* Returns a string representation for an actual parameter.
* @param param The actual parameter.
* @returns {String} The string representation of <code>param</code>.
*/
export function paramToString(param:any) {
    if (param == undefined || param == null) {
        return '';
    }

    if (param instanceof Date) {
        return param.toJSON();
    }

    return param.toString();
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: RequestOptions): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: RequestOptions): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: RequestOptions): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: RequestOptions): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(_: RequestOptions): void {
        // Do nothing
    }
}

export interface DeviceDetail {
    "bootstrapped_timestamp"?: string;
    /**
     * The time the object was updated
     */
    "updated_at"?: Date;
    /**
     * Up to 5 custom JSON attributes
     */
    "custom_attributes"?: any;
    /**
     * The device class
     */
    "device_class"?: string;
    /**
     * The ID of the device
     */
    "id"?: string;
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * Mark this device for auto firmware update
     */
    "auto_update"?: boolean;
    /**
     * The ID of the channel used to communicate with the device
     */
    "mechanism"?: DeviceDetailMechanismEnum;
    /**
     * The current state of the device
     */
    "state"?: DeviceDetailStateEnum;
    /**
     * The entity instance signature
     */
    "etag"?: Date;
    /**
     * The key used to provision the device
     */
    "provision_key"?: string;
    /**
     * The serial number of the device
     */
    "serial_number"?: string;
    /**
     * The device vendor ID
     */
    "vendor_id"?: string;
    /**
     * The owning IAM account ID
     */
    "account_id"?: string;
    /**
     * The state of the device's deployment
     */
    "deployed_state"?: DeviceDetailDeployedStateEnum;
    /**
     * The API resource entity
     */
    "object"?: string;
    /**
     * The device trust class
     */
    "trust_class"?: number;
    /**
     * The last deployment used on the device
     */
    "deployment"?: string;
    /**
     * The address of the connector to use
     */
    "mechanism_url"?: string;
    /**
     * The device trust level
     */
    "trust_level"?: number;
    /**
     * DEPRECATED: The ID of the device
     */
    "device_id"?: string;
    /**
     * The name of the object
     */
    "name"?: string;
    /**
     * The time the object was created
     */
    "created_at"?: Date;
    /**
     * URL for the current device manifest
     */
    "manifest"?: string;
}

export type DeviceDetailMechanismEnum = "connector" | "direct";
export type DeviceDetailStateEnum = "unenrolled" | "cloud_enrolling" | "bootstrapped" | "registered";
export type DeviceDetailDeployedStateEnum = "development" | "production";
export interface DeviceListResp {
    /**
     * API Resource name
     */
    "object"?: string;
    /**
     * Whether there are more results to display
     */
    "has_more"?: boolean;
    /**
     * Total number of records
     */
    "total_count"?: number;
    /**
     * Entity id for fetch after it
     */
    "after"?: string;
    /**
     * The number of results to return
     */
    "limit"?: number;
    "data"?: Array<DeviceDetail>;
    /**
     * Order of returned records
     */
    "order"?: string;
}

export interface DeviceLogSerializer {
    /**
     * API Resource name
     */
    "object"?: string;
    /**
     * Whether there are more results to display
     */
    "has_more"?: boolean;
    /**
     * Total number of records
     */
    "total_count"?: number;
    /**
     * Entity id for fetch after it
     */
    "after"?: string;
    /**
     * The number of results to return
     */
    "limit"?: number;
    "data"?: Array<DeviceLogSerializerData>;
    /**
     * Order of returned records
     */
    "order"?: string;
}

export interface DeviceLogSerializerData {
    "date_time": Date;
    "state_change"?: boolean;
    "description"?: string;
    "changes"?: string;
    "event_type_description"?: string;
    "device_log_id"?: string;
    "event_type"?: DeviceLogSerializerDataEventTypeEnum;
    "data"?: string;
    "device_id"?: string;
}

export type DeviceLogSerializerDataEventTypeEnum = "update.device.device-created" | "update.device.device-updated" | "update.deployment.campaign-device-metadata-created" | "update.deployment.campaign-device-metadata-updated" | "update.deployment.campaign-device-metadata-removed" | "update.connector.connector-device.firmware-update.state" | "update.connector.connector-device.firmware-update.result";
export interface DeviceUpdateDetail {
    /**
     * The owning IAM account ID
     */
    "account_id"?: string;
    /**
     * The name of the object
     */
    "name"?: string;
    /**
     * Mark this device for auto firmware update
     */
    "auto_update"?: boolean;
    /**
     * The device vendor ID
     */
    "vendor_id"?: string;
    /**
     * Up to 5 custom JSON attributes
     */
    "custom_attributes"?: any;
    /**
     * URL for the current device manifest
     */
    "manifest"?: string;
    /**
     * The device trust class
     */
    "trust_class"?: number;
    /**
     * The key used to provision the device
     */
    "provision_key"?: string;
    /**
     * The ID of the channel used to communicate with the device
     */
    "mechanism"?: DeviceUpdateDetailMechanismEnum;
    /**
     * The device class
     */
    "device_class"?: string;
    /**
     * The address of the connector to use
     */
    "mechanism_url"?: string;
    /**
     * The serial number of the device
     */
    "serial_number"?: string;
    /**
     * The device trust level
     */
    "trust_level"?: number;
    /**
     * The description of the object
     */
    "description"?: string;
}

export type DeviceUpdateDetailMechanismEnum = "connector" | "direct";

export enum DefaultApiApiKeys {
    Bearer,
}

export class DefaultApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'Bearer': new ApiKeyAuth('header', 'Authorization'),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Create device&lt;/p&gt;
     * @param mechanism The ID of the channel used to communicate with the device
     * @param provisionKey The key used to provision the device
     * @param accountId The owning IAM account ID
     * @param autoUpdate Mark this device for auto firmware update
     * @param bootstrappedTimestamp 
     * @param createdAt 
     * @param customAttributes Up to 5 custom JSON attributes
     * @param deployedState The state of the device&#39;s deployment
     * @param deployment The last deployment used on the device
     * @param description The description of the object
     * @param deviceClass 
     * @param deviceId DEPRECATED: The ID of the device
     * @param etag The entity instance signature
     * @param id The ID of the device
     * @param manifest URL for the current device manifest
     * @param mechanismUrl The address of the connector to use
     * @param name The name of the object
     * @param object The API resource entity
     * @param serialNumber The serial number of the device
     * @param state The current state of the device
     * @param trustClass The device trust class
     * @param trustLevel The device trust level
     * @param updatedAt The time the object was updated
     * @param vendorId The device vendor ID
     */
    public deviceCreate (mechanism: string, provisionKey: string, accountId?: string, autoUpdate?: boolean, bootstrappedTimestamp?: string, createdAt?: Date, customAttributes?: { [key: string]: string; }, deployedState?: string, deployment?: string, description?: string, deviceClass?: string, deviceId?: string, etag?: Date, id?: string, manifest?: string, mechanismUrl?: string, name?: string, object?: string, serialNumber?: string, state?: string, trustClass?: number, trustLevel?: number, updatedAt?: Date, vendorId?: string, callback?: (error:any, data:DeviceDetail, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'mechanism' is not null or undefined
        if (mechanism === null || mechanism === undefined) {
            throw new Error('Required parameter mechanism was null or undefined when calling deviceCreate.');
        }

        // verify required parameter 'provisionKey' is not null or undefined
        if (provisionKey === null || provisionKey === undefined) {
            throw new Error('Required parameter provisionKey was null or undefined when calling deviceCreate.');
        }

        let useFormData = false;

        if (accountId !== undefined) {
            formParams['account_id'] = accountId;
        }

        if (autoUpdate !== undefined) {
            formParams['auto_update'] = autoUpdate;
        }

        if (bootstrappedTimestamp !== undefined) {
            formParams['bootstrapped_timestamp'] = bootstrappedTimestamp;
        }

        if (createdAt !== undefined) {
            formParams['created_at'] = createdAt;
        }

        if (customAttributes !== undefined) {
            formParams['custom_attributes'] = customAttributes;
        }

        if (deployedState !== undefined) {
            formParams['deployed_state'] = deployedState;
        }

        if (deployment !== undefined) {
            formParams['deployment'] = deployment;
        }

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (deviceClass !== undefined) {
            formParams['device_class'] = deviceClass;
        }

        if (deviceId !== undefined) {
            formParams['device_id'] = deviceId;
        }

        if (etag !== undefined) {
            formParams['etag'] = etag;
        }

        if (id !== undefined) {
            formParams['id'] = id;
        }

        if (manifest !== undefined) {
            formParams['manifest'] = manifest;
        }

        if (mechanism !== undefined) {
            formParams['mechanism'] = mechanism;
        }

        if (mechanismUrl !== undefined) {
            formParams['mechanism_url'] = mechanismUrl;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (object !== undefined) {
            formParams['object'] = object;
        }

        if (provisionKey !== undefined) {
            formParams['provision_key'] = provisionKey;
        }

        if (serialNumber !== undefined) {
            formParams['serial_number'] = serialNumber;
        }

        if (state !== undefined) {
            formParams['state'] = state;
        }

        if (trustClass !== undefined) {
            formParams['trust_class'] = trustClass;
        }

        if (trustLevel !== undefined) {
            formParams['trust_level'] = trustLevel;
        }

        if (updatedAt !== undefined) {
            formParams['updated_at'] = updatedAt;
        }

        if (vendorId !== undefined) {
            formParams['vendor_id'] = vendorId;
        }

        let requestOptions: RequestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Delete device&lt;/p&gt;
     * @param deviceId 
     */
    public deviceDestroy (deviceId: string, callback?: (error:any, data:DeviceListResp, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceDestroy.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all update devices. The result is paged into pages of 100.&lt;/p&gt;
     * @param limit 
     * @param order 
     * @param after 
     * @param filter 
     * @param include 
     */
    public deviceList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data:DeviceListResp, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        if (after !== undefined) {
            queryParameters['after'] = after;
        }

        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }

        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all device logs.&lt;/p&gt;
     * @param limit 
     * @param order 
     * @param after 
     * @param filter 
     * @param include 
     */
    public deviceLogList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data:DeviceLogSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devicelog/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        if (limit !== undefined) {
            queryParameters['limit'] = limit;
        }

        if (order !== undefined) {
            queryParameters['order'] = order;
        }

        if (after !== undefined) {
            queryParameters['after'] = after;
        }

        if (filter !== undefined) {
            queryParameters['filter'] = filter;
        }

        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device log.&lt;/p&gt;
     * @param deviceLogId 
     */
    public deviceLogRetrieve (deviceLogId: string, callback?: (error:any, data:DeviceLogSerializerData, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devicelog/{device_log_id}/'
            .replace('{' + 'device_log_id' + '}', String(deviceLogId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'deviceLogId' is not null or undefined
        if (deviceLogId === null || deviceLogId === undefined) {
            throw new Error('Required parameter deviceLogId was null or undefined when calling deviceLogRetrieve.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device fields&lt;/p&gt;
     * @param deviceId The ID of the device
     */
    public devicePartialUpdate (deviceId: string, callback?: (error:any, data:DeviceListResp, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling devicePartialUpdate.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device.&lt;/p&gt;
     * @param deviceId 
     */
    public deviceRetrieve (deviceId: string, callback?: (error:any, data:DeviceListResp, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceRetrieve.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device.&lt;/p&gt;
     * @param deviceId The ID of the device
     * @param body Device object to update
     */
    public deviceUpdate (deviceId: string, body: DeviceUpdateDetail, callback?: (error:any, data:DeviceDetail, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/devices/{device_id}/'
            .replace('{' + 'device_id' + '}', String(deviceId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'deviceId' is not null or undefined
        if (deviceId === null || deviceId === undefined) {
            throw new Error('Required parameter deviceId was null or undefined when calling deviceUpdate.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling deviceUpdate.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
}
