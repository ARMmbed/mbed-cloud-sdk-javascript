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
    define(['ApiClient', 'model/DeviceDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeviceDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.DeviceCatalogApi) {
      root.DeviceCatalogApi = {};
    }
    root.DeviceCatalogApi.DeviceListResp = factory(root.DeviceCatalogApi.ApiClient, root.DeviceCatalogApi.DeviceDetail);
  }
}(this, function(ApiClient, DeviceDetail) {
  'use strict';




  /**
   * The DeviceListResp model module.
   * @module model/DeviceListResp
   * @version 0.1
   */

  /**
   * Constructs a new <code>DeviceListResp</code>.
   * @alias module:model/DeviceListResp
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DeviceListResp</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceListResp} obj Optional instance to populate.
   * @return {module:model/DeviceListResp} The populated <code>DeviceListResp</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('has_more')) {
        obj['has_more'] = ApiClient.convertToType(data['has_more'], 'Boolean');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Integer');
      }
      if (data.hasOwnProperty('after')) {
        obj['after'] = ApiClient.convertToType(data['after'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], [DeviceDetail]);
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], 'String');
      }
    }
    return obj;
  }

  /**
   * API Resource name
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * Whether there are more results to display
   * @member {Boolean} has_more
   */
  exports.prototype['has_more'] = undefined;
  /**
   * Total number of records
   * @member {Integer} total_count
   */
  exports.prototype['total_count'] = undefined;
  /**
   * Entity id for fetch after it
   * @member {String} after
   */
  exports.prototype['after'] = undefined;
  /**
   * The number of results to return
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Array.<module:model/DeviceDetail>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * Order of returned records
   * @member {String} order
   */
  exports.prototype['order'] = undefined;



  return exports;
}));


