/**
 * Deployment Service API
 * This is the API Documentation for the mbed deployment service which is part of the update service.
 *
 * OpenAPI spec version: 0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DeploymentServiceApi) {
      root.DeploymentServiceApi = {};
    }
    root.DeploymentServiceApi.WriteCampaignDeviceMetadataSerializer = factory(root.DeploymentServiceApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WriteCampaignDeviceMetadataSerializer model module.
   * @module model/WriteCampaignDeviceMetadataSerializer
   * @version 0.1
   */

  /**
   * Constructs a new <code>WriteCampaignDeviceMetadataSerializer</code>.
   * @alias module:model/WriteCampaignDeviceMetadataSerializer
   * @class
   * @param campaign {String} The update campaign to which this device belongs
   * @param mechanism {String} The ID of the channel used to communicated with the device
   * @param name {String} The name of the object
   * @param deviceId {String} The ID of the device to deploy
   */
  var exports = function(campaign, mechanism, name, deviceId) {
    var _this = this;


    _this['campaign'] = campaign;

    _this['mechanism'] = mechanism;
    _this['name'] = name;


    _this['device_id'] = deviceId;
  };

  /**
   * Constructs a <code>WriteCampaignDeviceMetadataSerializer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WriteCampaignDeviceMetadataSerializer} obj Optional instance to populate.
   * @return {module:model/WriteCampaignDeviceMetadataSerializer} The populated <code>WriteCampaignDeviceMetadataSerializer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('campaign')) {
        obj['campaign'] = ApiClient.convertToType(data['campaign'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('mechanism')) {
        obj['mechanism'] = ApiClient.convertToType(data['mechanism'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('mechanism_url')) {
        obj['mechanism_url'] = ApiClient.convertToType(data['mechanism_url'], 'String');
      }
      if (data.hasOwnProperty('deployment_state')) {
        obj['deployment_state'] = ApiClient.convertToType(data['deployment_state'], 'String');
      }
      if (data.hasOwnProperty('device_id')) {
        obj['device_id'] = ApiClient.convertToType(data['device_id'], 'String');
      }
    }
    return obj;
  }

  /**
   * The description of the object
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The update campaign to which this device belongs
   * @member {String} campaign
   */
  exports.prototype['campaign'] = undefined;
  /**
   * The API resource entity
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * The ID of the channel used to communicated with the device
   * @member {String} mechanism
   */
  exports.prototype['mechanism'] = undefined;
  /**
   * The name of the object
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The address of the Connector to use
   * @member {String} mechanism_url
   */
  exports.prototype['mechanism_url'] = undefined;
  /**
   * The state of the deployment
   * @member {module:model/WriteCampaignDeviceMetadataSerializer.DeploymentStateEnum} deployment_state
   */
  exports.prototype['deployment_state'] = undefined;
  /**
   * The ID of the device to deploy
   * @member {String} device_id
   */
  exports.prototype['device_id'] = undefined;


  /**
   * Allowed values for the <code>deployment_state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeploymentStateEnum = {
    /**
     * value: "pending"
     * @const
     */
    "pending": "pending",
    /**
     * value: "updated_device_catalog"
     * @const
     */
    "updated_device_catalog": "updated_device_catalog",
    /**
     * value: "updated_connector_channel"
     * @const
     */
    "updated_connector_channel": "updated_connector_channel",
    /**
     * value: "deployed"
     * @const
     */
    "deployed": "deployed",
    /**
     * value: "manifestremoved"
     * @const
     */
    "manifestremoved": "manifestremoved"  };


  return exports;
}));


