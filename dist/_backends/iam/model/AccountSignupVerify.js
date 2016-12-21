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
    root.IamIdentitiesRestApi.AccountSignupVerify = factory(root.IamIdentitiesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountSignupVerify model module.
   * @module model/AccountSignupVerify
   * @version v3
   */

  /**
   * Constructs a new <code>AccountSignupVerify</code>.
   * This object represents a verify request during service sign-up process.
   * @alias module:model/AccountSignupVerify
   * @class
   * @param code {String} Verification code, also required while checking account aliases.
   */
  var exports = function(code) {
    var _this = this;

    _this['code'] = code;

  };

  /**
   * Constructs a <code>AccountSignupVerify</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountSignupVerify} obj Optional instance to populate.
   * @return {module:model/AccountSignupVerify} The populated <code>AccountSignupVerify</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('aliases')) {
        obj['aliases'] = ApiClient.convertToType(data['aliases'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Verification code, also required while checking account aliases.
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * Account alias array to be checked for being unique.
   * @member {Array.<String>} aliases
   */
  exports.prototype['aliases'] = undefined;



  return exports;
}));


