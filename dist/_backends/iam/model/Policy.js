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
    root.IamIdentitiesRestApi.Policy = factory(root.IamIdentitiesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Policy model module.
   * @module model/Policy
   * @version v3
   */

  /**
   * Constructs a new <code>Policy</code>.
   * This object represents a policy.
   * @alias module:model/Policy
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Policy} obj Optional instance to populate.
   * @return {module:model/Policy} The populated <code>Policy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('allow')) {
        obj['allow'] = ApiClient.convertToType(data['allow'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Comma separated list of action, empty string represents all actions.
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Resource that is protected by this policy.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * true or false controlling wether action is allowed or not.
   * @member {Boolean} allow
   * @default false
   */
  exports.prototype['allow'] = false;



  return exports;
}));


