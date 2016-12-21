/**
 * IAM Identities REST API
 * REST API to manage accounts, groups, users and API keys
 *
 * OpenAPI spec version: v3
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
    if (!root.IamIdentitiesRestApi) {
      root.IamIdentitiesRestApi = {};
    }
    root.IamIdentitiesRestApi.GroupSummary = factory(root.IamIdentitiesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GroupSummary model module.
   * @module model/GroupSummary
   * @version v3
   */

  /**
   * Constructs a new <code>GroupSummary</code>.
   * This object contains basic information about groups.
   * @alias module:model/GroupSummary
   * @class
   * @param name {String} The name of the group.
   * @param apiKeyCount {Integer} The number of API keys in this group.
   * @param _object {module:model/GroupSummary.ObjectEnum} Entity name: always 'group'
   * @param etag {String} API resource entity version.
   * @param id {String} The UUID of the group.
   * @param userCount {Integer} The number of users in this group.
   */
  var exports = function(name, apiKeyCount, _object, etag, id, userCount) {
    var _this = this;

    _this['name'] = name;

    _this['apiKeyCount'] = apiKeyCount;

    _this['object'] = _object;

    _this['etag'] = etag;

    _this['id'] = id;
    _this['userCount'] = userCount;
  };

  /**
   * Constructs a <code>GroupSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupSummary} obj Optional instance to populate.
   * @return {module:model/GroupSummary} The populated <code>GroupSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lastUpdateTime')) {
        obj['lastUpdateTime'] = ApiClient.convertToType(data['lastUpdateTime'], 'Integer');
      }
      if (data.hasOwnProperty('apiKeyCount')) {
        obj['apiKeyCount'] = ApiClient.convertToType(data['apiKeyCount'], 'Integer');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('creationTime')) {
        obj['creationTime'] = ApiClient.convertToType(data['creationTime'], 'Integer');
      }
      if (data.hasOwnProperty('etag')) {
        obj['etag'] = ApiClient.convertToType(data['etag'], 'String');
      }
      if (data.hasOwnProperty('creationTimeMillis')) {
        obj['creationTimeMillis'] = ApiClient.convertToType(data['creationTimeMillis'], 'Integer');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userCount')) {
        obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The name of the group.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A timestamp of the latest group update, in milliseconds.
   * @member {Integer} lastUpdateTime
   */
  exports.prototype['lastUpdateTime'] = undefined;
  /**
   * The number of API keys in this group.
   * @member {Integer} apiKeyCount
   */
  exports.prototype['apiKeyCount'] = undefined;
  /**
   * Creation UTC time RFC3339.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Entity name: always 'group'
   * @member {module:model/GroupSummary.ObjectEnum} object
   */
  exports.prototype['object'] = undefined;
  /**
   * A timestamp of the group creation in the storage, in milliseconds.
   * @member {Integer} creationTime
   */
  exports.prototype['creationTime'] = undefined;
  /**
   * API resource entity version.
   * @member {String} etag
   */
  exports.prototype['etag'] = undefined;
  /**
   * @member {Integer} creationTimeMillis
   */
  exports.prototype['creationTimeMillis'] = undefined;
  /**
   * The UUID of the group.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The number of users in this group.
   * @member {Integer} userCount
   */
  exports.prototype['userCount'] = undefined;


  /**
   * Allowed values for the <code>object</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ObjectEnum = {
    /**
     * value: "user"
     * @const
     */
    "user": "user",
    /**
     * value: "apikey"
     * @const
     */
    "apikey": "apikey",
    /**
     * value: "group"
     * @const
     */
    "group": "group",
    /**
     * value: "account"
     * @const
     */
    "account": "account",
    /**
     * value: "account_template"
     * @const
     */
    "account_template": "account_template",
    /**
     * value: "ca_cert"
     * @const
     */
    "ca_cert": "ca_cert",
    /**
     * value: "list"
     * @const
     */
    "list": "list",
    /**
     * value: "error"
     * @const
     */
    "error": "error"  };


  return exports;
}));


