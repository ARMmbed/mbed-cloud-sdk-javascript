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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FirmwareImageSerializer', 'model/FirmwareImageSerializerData', 'model/ManifestSerializer', 'model/ManifestSerializerData', 'api/DefaultApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/FirmwareImageSerializer'), require('./model/FirmwareImageSerializerData'), require('./model/ManifestSerializer'), require('./model/ManifestSerializerData'), require('./api/DefaultApi'));
  }
}(function(ApiClient, FirmwareImageSerializer, FirmwareImageSerializerData, ManifestSerializer, ManifestSerializerData, DefaultApi) {
  'use strict';

  /**
   * This_is_the_API_Documentation_for_the_mbed_firmware_catalog_service_which_is_part_of_the_update_service_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var FirmwareCatalogApi = require('index'); // See note below*.
   * var xxxSvc = new FirmwareCatalogApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new FirmwareCatalogApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new FirmwareCatalogApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new FirmwareCatalogApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The FirmwareImageSerializer model constructor.
     * @property {module:model/FirmwareImageSerializer}
     */
    FirmwareImageSerializer: FirmwareImageSerializer,
    /**
     * The FirmwareImageSerializerData model constructor.
     * @property {module:model/FirmwareImageSerializerData}
     */
    FirmwareImageSerializerData: FirmwareImageSerializerData,
    /**
     * The ManifestSerializer model constructor.
     * @property {module:model/ManifestSerializer}
     */
    ManifestSerializer: ManifestSerializer,
    /**
     * The ManifestSerializerData model constructor.
     * @property {module:model/ManifestSerializerData}
     */
    ManifestSerializerData: ManifestSerializerData,
    /**
     * The DefaultApi service constructor.
     * @property {module:api/DefaultApi}
     */
    DefaultApi: DefaultApi
  };

  return exports;
}));
