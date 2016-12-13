/**
 * Device Query Service API
 * This is the API Documentation for the mbed device query service update service.
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
    define(['ApiClient', 'model/DeviceQueryDetail', 'model/DeviceQueryResp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeviceQueryDetail'), require('../model/DeviceQueryResp'));
  } else {
    // Browser globals (root is window)
    if (!root.DeviceQueryServiceApi) {
      root.DeviceQueryServiceApi = {};
    }
    root.DeviceQueryServiceApi.DefaultApi = factory(root.DeviceQueryServiceApi.ApiClient, root.DeviceQueryServiceApi.DeviceQueryDetail, root.DeviceQueryServiceApi.DeviceQueryResp);
  }
}(this, function(ApiClient, DeviceQueryDetail, DeviceQueryResp) {
  'use strict';

  /**
   * Default service.
   * @module api/DefaultApi
   * @version 0.1
   */

  /**
   * Constructs a new DefaultApi. 
   * @alias module:api/DefaultApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deviceQueryCreate operation.
     * @callback module:api/DefaultApi~deviceQueryCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;Create device query&lt;/p&gt;
     * @param {String} name The name of the query
     * @param {String} query The device query
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The description of the object
     * @param {String} opts._object The API resource entity
     * @param {String} opts.queryId DEPRECATED: The ID of the query
     * @param {module:api/DefaultApi~deviceQueryCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryDetail}
     */
    this.deviceQueryCreate = function(name, query, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling deviceQueryCreate";
      }

      // verify the required parameter 'query' is set
      if (query == undefined || query == null) {
        throw "Missing the required parameter 'query' when calling deviceQueryCreate";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'description': opts['description'],
        'name': name,
        'object': opts['_object'],
        'query': query,
        'query_id': opts['queryId']
      };

      var authNames = ['Bearer'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = [];
      var returnType = DeviceQueryDetail;

      return this.apiClient.callApi(
        '/v3/device-queries/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceQueryDestroy operation.
     * @callback module:api/DefaultApi~deviceQueryDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;Delete device query&lt;/p&gt;
     * @param {String} queryId 
     * @param {module:api/DefaultApi~deviceQueryDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryDetail}
     */
    this.deviceQueryDestroy = function(queryId, callback) {
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling deviceQueryDestroy";
      }


      var pathParams = {
        'query_id': queryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = DeviceQueryDetail;

      return this.apiClient.callApi(
        '/v3/device-queries/{query_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceQueryList operation.
     * @callback module:api/DefaultApi~deviceQueryListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryResp} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;List all device queries. The result will be paged into pages of 100.&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {String} opts.description 
     * @param {String} opts.createdAt 
     * @param {String} opts.updatedAt 
     * @param {String} opts.etag 
     * @param {String} opts.name 
     * @param {String} opts._object 
     * @param {String} opts.query 
     * @param {String} opts.queryId 
     * @param {module:api/DefaultApi~deviceQueryListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryResp}
     */
    this.deviceQueryList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'description': opts['description'],
        'created_at': opts['createdAt'],
        'updated_at': opts['updatedAt'],
        'etag': opts['etag'],
        'name': opts['name'],
        'object': opts['_object'],
        'query': opts['query'],
        'query_id': opts['queryId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = DeviceQueryResp;

      return this.apiClient.callApi(
        '/v3/device-queries/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceQueryPartialUpdate operation.
     * @callback module:api/DefaultApi~deviceQueryPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;Update device query fields&lt;/p&gt;
     * @param {String} queryId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The description of the object
     * @param {String} opts.name The name of the query
     * @param {String} opts._object The API resource entity
     * @param {String} opts.query The device query
     * @param {String} opts.queryId2 DEPRECATED: The ID of the query
     * @param {module:api/DefaultApi~deviceQueryPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryDetail}
     */
    this.deviceQueryPartialUpdate = function(queryId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling deviceQueryPartialUpdate";
      }


      var pathParams = {
        'query_id': queryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'description': opts['description'],
        'name': opts['name'],
        'object': opts['_object'],
        'query': opts['query'],
        'query_id': opts['queryId2']
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = DeviceQueryDetail;

      return this.apiClient.callApi(
        '/v3/device-queries/{query_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceQueryRetrieve operation.
     * @callback module:api/DefaultApi~deviceQueryRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;Retrieve device query.&lt;/p&gt;
     * @param {String} queryId 
     * @param {module:api/DefaultApi~deviceQueryRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryDetail}
     */
    this.deviceQueryRetrieve = function(queryId, callback) {
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling deviceQueryRetrieve";
      }


      var pathParams = {
        'query_id': queryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = DeviceQueryDetail;

      return this.apiClient.callApi(
        '/v3/device-queries/{query_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deviceQueryUpdate operation.
     * @callback module:api/DefaultApi~deviceQueryUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeviceQueryDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating device queries.  &lt;/p&gt; &lt;p&gt;Update device query.&lt;/p&gt;
     * @param {String} queryId 
     * @param {String} name The name of the query
     * @param {String} query The device query
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The description of the object
     * @param {String} opts._object The API resource entity
     * @param {String} opts.queryId2 DEPRECATED: The ID of the query
     * @param {module:api/DefaultApi~deviceQueryUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeviceQueryDetail}
     */
    this.deviceQueryUpdate = function(queryId, name, query, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'queryId' is set
      if (queryId == undefined || queryId == null) {
        throw "Missing the required parameter 'queryId' when calling deviceQueryUpdate";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling deviceQueryUpdate";
      }

      // verify the required parameter 'query' is set
      if (query == undefined || query == null) {
        throw "Missing the required parameter 'query' when calling deviceQueryUpdate";
      }


      var pathParams = {
        'query_id': queryId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'description': opts['description'],
        'name': name,
        'object': opts['_object'],
        'query': query,
        'query_id': opts['queryId2']
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = DeviceQueryDetail;

      return this.apiClient.callApi(
        '/v3/device-queries/{query_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
