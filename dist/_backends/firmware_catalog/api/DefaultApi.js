/**
 * Firmware Catalog API
 * This is the API Documentation for the mbed firmware catalog service which is part of the update service.
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
    define(['ApiClient', 'model/FirmwareImageSerializer', 'model/ManifestSerializerData', 'model/ManifestSerializer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FirmwareImageSerializer'), require('../model/ManifestSerializerData'), require('../model/ManifestSerializer'));
  } else {
    // Browser globals (root is window)
    if (!root.FirmwareCatalogApi) {
      root.FirmwareCatalogApi = {};
    }
    root.FirmwareCatalogApi.DefaultApi = factory(root.FirmwareCatalogApi.ApiClient, root.FirmwareCatalogApi.FirmwareImageSerializer, root.FirmwareCatalogApi.ManifestSerializerData, root.FirmwareCatalogApi.ManifestSerializer);
  }
}(this, function(ApiClient, FirmwareImageSerializer, ManifestSerializerData, ManifestSerializer) {
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
     * Callback function to receive the result of the deployInfoGET operation.
     * @callback module:api/DefaultApi~deployInfoGETCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;Reads the deploy_info.json file and returns the Build and Git ID to the caller.&lt;/p&gt; &lt;p&gt;Will return a 500 error if the file is missing, cannot be parsed or the keys are missing.&lt;/p&gt;
     * @param {module:api/DefaultApi~deployInfoGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.deployInfoGET = function(callback) {
      var postBody = null;


      var pathParams = {
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/v3/fc_deploy_info', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareImageCreate operation.
     * @callback module:api/DefaultApi~firmwareImageCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirmwareImageSerializer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Create firmware image&lt;/p&gt;&lt;pre&gt;YAMLError:  while scanning a simple key   in \&quot;&lt;unicode string&gt;\&quot;, line 16, column 9:             Cannot validate the data used to ...              ^ could not find expected &#39;:&#39;   in \&quot;&lt;unicode string&gt;\&quot;, line 17, column 5:         - code: 401         ^&lt;/pre&gt;
     * @param {String} datafile The binary file of firmware image
     * @param {String} name The name of the object
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The description of the object
     * @param {String} opts.updatingRequestId 
     * @param {String} opts.updatingIpAddress 
     * @param {String} opts.name2 
     * @param {String} opts.description2 
     * @param {String} opts.createdAt 
     * @param {String} opts.updatedAt 
     * @param {String} opts.datafileChecksum 
     * @param {String} opts.etag 
     * @param {String} opts.imageId 
     * @param {String} opts._object 
     * @param {module:api/DefaultApi~firmwareImageCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirmwareImageSerializer}
     */
    this.firmwareImageCreate = function(datafile, name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'datafile' is set
      if (datafile == undefined || datafile == null) {
        throw "Missing the required parameter 'datafile' when calling firmwareImageCreate";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling firmwareImageCreate";
      }


      var pathParams = {
      };
      var queryParams = {
        'updating_request_id': opts['updatingRequestId'],
        'updating_ip_address': opts['updatingIpAddress'],
        'name': opts['name2'],
        'description': opts['description2'],
        'created_at': opts['createdAt'],
        'updated_at': opts['updatedAt'],
        'datafile_checksum': opts['datafileChecksum'],
        'etag': opts['etag'],
        'image_id': opts['imageId'],
        'object': opts['_object']
      };
      var headerParams = {
      };
      var formParams = {
        'datafile': datafile,
        'description': opts['description'],
        'name': name
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = FirmwareImageSerializer;

      return this.apiClient.callApi(
        '/v3/firmware/images/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareImageDestroy operation.
     * @callback module:api/DefaultApi~firmwareImageDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirmwareImageSerializer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Delete firmware image&lt;/p&gt;
     * @param {Integer} imageId The ID of the firmware image
     * @param {Object} opts Optional parameters
     * @param {String} opts.updatingRequestId 
     * @param {String} opts.updatingIpAddress 
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.createdAt 
     * @param {String} opts.updatedAt 
     * @param {String} opts.datafileChecksum 
     * @param {String} opts.etag 
     * @param {String} opts._object 
     * @param {module:api/DefaultApi~firmwareImageDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirmwareImageSerializer}
     */
    this.firmwareImageDestroy = function(imageId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling firmwareImageDestroy";
      }


      var pathParams = {
        'image_id': imageId
      };
      var queryParams = {
        'updating_request_id': opts['updatingRequestId'],
        'updating_ip_address': opts['updatingIpAddress'],
        'name': opts['name'],
        'description': opts['description'],
        'created_at': opts['createdAt'],
        'updated_at': opts['updatedAt'],
        'datafile_checksum': opts['datafileChecksum'],
        'etag': opts['etag'],
        'object': opts['_object']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = FirmwareImageSerializer;

      return this.apiClient.callApi(
        '/v3/firmware/images/{image_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareImageList operation.
     * @callback module:api/DefaultApi~firmwareImageListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirmwareImageSerializer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;List all firmware images. The result will be paged into pages of 100.&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.after 
     * @param {String} opts.include 
     * @param {module:api/DefaultApi~firmwareImageListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirmwareImageSerializer}
     */
    this.firmwareImageList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'order': opts['order'],
        'after': opts['after'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = FirmwareImageSerializer;

      return this.apiClient.callApi(
        '/v3/firmware/images/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareImageRetrieve operation.
     * @callback module:api/DefaultApi~firmwareImageRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FirmwareImageSerializer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Retrieve firmware image&lt;/p&gt;
     * @param {Integer} imageId The ID of the firmware image
     * @param {Object} opts Optional parameters
     * @param {String} opts.updatingRequestId 
     * @param {String} opts.updatingIpAddress 
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.createdAt 
     * @param {String} opts.updatedAt 
     * @param {String} opts.datafileChecksum 
     * @param {String} opts.etag 
     * @param {String} opts._object 
     * @param {module:api/DefaultApi~firmwareImageRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FirmwareImageSerializer}
     */
    this.firmwareImageRetrieve = function(imageId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'imageId' is set
      if (imageId == undefined || imageId == null) {
        throw "Missing the required parameter 'imageId' when calling firmwareImageRetrieve";
      }


      var pathParams = {
        'image_id': imageId
      };
      var queryParams = {
        'updating_request_id': opts['updatingRequestId'],
        'updating_ip_address': opts['updatingIpAddress'],
        'name': opts['name'],
        'description': opts['description'],
        'created_at': opts['createdAt'],
        'updated_at': opts['updatedAt'],
        'datafile_checksum': opts['datafileChecksum'],
        'etag': opts['etag'],
        'object': opts['_object']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = FirmwareImageSerializer;

      return this.apiClient.callApi(
        '/v3/firmware/images/{image_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareManifestCreate operation.
     * @callback module:api/DefaultApi~firmwareManifestCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManifestSerializerData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Create firmware manifest&lt;/p&gt;
     * @param {File} datafile The manifest file to create
     * @param {String} name The name of the object
     * @param {Object} opts Optional parameters
     * @param {String} opts.description The description of the object
     * @param {module:api/DefaultApi~firmwareManifestCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManifestSerializerData}
     */
    this.firmwareManifestCreate = function(datafile, name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'datafile' is set
      if (datafile == undefined || datafile == null) {
        throw "Missing the required parameter 'datafile' when calling firmwareManifestCreate";
      }

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling firmwareManifestCreate";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'datafile': datafile,
        'description': opts['description'],
        'name': name
      };

      var authNames = ['Bearer'];
      var contentTypes = ['multipart/form-data'];
      var accepts = [];
      var returnType = ManifestSerializerData;

      return this.apiClient.callApi(
        '/v3/firmware/manifests/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareManifestDestroy operation.
     * @callback module:api/DefaultApi~firmwareManifestDestroyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManifestSerializerData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Delete firmware manifest&lt;/p&gt;
     * @param {Integer} manifestId The ID of the firmware manifest
     * @param {module:api/DefaultApi~firmwareManifestDestroyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManifestSerializerData}
     */
    this.firmwareManifestDestroy = function(manifestId, callback) {
      var postBody = null;

      // verify the required parameter 'manifestId' is set
      if (manifestId == undefined || manifestId == null) {
        throw "Missing the required parameter 'manifestId' when calling firmwareManifestDestroy";
      }


      var pathParams = {
        'manifest_id': manifestId
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
      var returnType = ManifestSerializerData;

      return this.apiClient.callApi(
        '/v3/firmware/manifests/{manifest_id}/', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareManifestList operation.
     * @callback module:api/DefaultApi~firmwareManifestListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManifestSerializer} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;List all firmware manifests&lt;/p&gt;
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit 
     * @param {String} opts.order 
     * @param {String} opts.after 
     * @param {String} opts.include 
     * @param {module:api/DefaultApi~firmwareManifestListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManifestSerializer}
     */
    this.firmwareManifestList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'order': opts['order'],
        'after': opts['after'],
        'include': opts['include']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ManifestSerializer;

      return this.apiClient.callApi(
        '/v3/firmware/manifests/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the firmwareManifestRetrieve operation.
     * @callback module:api/DefaultApi~firmwareManifestRetrieveCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ManifestSerializerData} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Retrieve firmware manifest&lt;/p&gt;
     * @param {Integer} manifestId The ID of the firmware manifest
     * @param {Object} opts Optional parameters
     * @param {String} opts.updatingRequestId 
     * @param {String} opts.updatingIpAddress 
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {String} opts.createdAt 
     * @param {String} opts.updatedAt 
     * @param {String} opts.datafileChecksum 
     * @param {String} opts.deviceClass 
     * @param {String} opts.etag 
     * @param {String} opts._object 
     * @param {String} opts.timestamp 
     * @param {module:api/DefaultApi~firmwareManifestRetrieveCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ManifestSerializerData}
     */
    this.firmwareManifestRetrieve = function(manifestId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'manifestId' is set
      if (manifestId == undefined || manifestId == null) {
        throw "Missing the required parameter 'manifestId' when calling firmwareManifestRetrieve";
      }


      var pathParams = {
      };
      var queryParams = {
        'updating_request_id': opts['updatingRequestId'],
        'updating_ip_address': opts['updatingIpAddress'],
        'name': opts['name'],
        'description': opts['description'],
        'created_at': opts['createdAt'],
        'updated_at': opts['updatedAt'],
        'datafile_checksum': opts['datafileChecksum'],
        'device_class': opts['deviceClass'],
        'etag': opts['etag'],
        'object': opts['_object'],
        'timestamp': opts['timestamp']
      };
      var headerParams = {
      };
      var formParams = {
        'manifest_id': manifestId
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = [];
      var returnType = ManifestSerializerData;

      return this.apiClient.callApi(
        '/v3/firmware/manifests/{manifest_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
