// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
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

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";

export type DeviceDataDeployedStateEnum = "Development" | "Deployment";
export interface DeviceData {
    "bootstrap_expiration_date"?: Date;
    "bootstrapped_timestamp"?: Date;
    "connector_expiration_date"?: Date;
    "updated_at"?: Date;
    "mechanism"?: string;
    "device_class"?: string;
    "description"?: string;
    "endpoint_name"?: string;
    "auto_update"?: boolean;
    "custom_attributes"?: any;
    "state"?: string;
    "etag"?: Date;
    "serial_number"?: string;
    "firmware_checksum"?: string;
    "manifest_timestamp"?: Date;
    "vendor_id"?: string;
    "account_id"?: string;
    "deployed_state"?: DeviceDataDeployedStateEnum;
    "object"?: string;
    "trust_class"?: number;
    "deployment"?: string;
    "mechanism_url"?: string;
    "trust_level"?: number;
    "device_id"?: string;
    "name"?: string;
    "device_key"?: string;
    "created_at"?: Date;
    "manifest"?: string;
    "attestation_method"?: number;
    "ca_id"?: string;
}

export interface DeviceLogData {
    "date_time": Date;
    "state_change"?: boolean;
    "description"?: string;
    "changes"?: any;
    "event_type_description"?: string;
    "device_log_id"?: string;
    "event_type"?: string;
    "data"?: any;
    "id"?: string;
    "device_id"?: string;
}

export interface DeviceLogPage {
    "object"?: string;
    "has_more"?: boolean;
    "total_count"?: number;
    "after"?: string;
    "limit"?: number;
    "data"?: Array<DeviceLogData>;
    "order"?: string;
}

export interface DevicePage {
    "object"?: string;
    "has_more"?: boolean;
    "total_count"?: number;
    "after"?: string;
    "limit"?: number;
    "data"?: Array<DeviceData>;
    "order"?: string;
}

export type DeviceSerializerMechanismEnum = "connector" | "direct";
export type DeviceSerializerStateEnum = "unenrolled" | "cloud_enrolling" | "bootstrapped" | "registered";
export type DeviceSerializerDeployedStateEnum = "development" | "production";
export interface DeviceSerializer {
    /**
     * Timestamp of manifest creation. Used in manifest version checks.
     */
    "bootstrapped_timestamp": Date;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * Up to 5 custom JSON attributes
     */
    "custom_attributes": string;
    /**
     * The device class
     */
    "device_class": string;
    /**
     * The ID of the device
     */
    "id": string;
    /**
     * The description of the object
     */
    "description": string;
    /**
     * Mark this device for auto firmware update
     */
    "auto_update": boolean;
    /**
     * The ID of the channel used to communicate with the device
     */
    "mechanism": DeviceSerializerMechanismEnum;
    /**
     * The current state of the device
     */
    "state": DeviceSerializerStateEnum;
    /**
     * The entity instance signature
     */
    "etag": Date;
    /**
     * The key used to provision the device
     */
    "provision_key": string;
    /**
     * The serial number of the device
     */
    "serial_number": string;
    /**
     * The device vendor ID
     */
    "vendor_id": string;
    /**
     * The owning IAM account ID
     */
    "account_id": string;
    /**
     * The state of the device's deployment
     */
    "deployed_state": DeviceSerializerDeployedStateEnum;
    /**
     * The API resource entity
     */
    "object": string;
    /**
     * The device trust class
     */
    "trust_class": number;
    /**
     * The last deployment used on the device
     */
    "deployment": string;
    /**
     * The address of the connector to use
     */
    "mechanism_url": string;
    /**
     * The device trust level
     */
    "trust_level": number;
    /**
     * DEPRECATED: The ID of the device
     */
    "device_id": string;
    /**
     * The name of the object
     */
    "name": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * URL for the current device manifest
     */
    "manifest": string;
}

export type WriteDeviceSerializerDeployedStateEnum = "development" | "production";
export type WriteDeviceSerializerStateEnum = "unenrolled" | "cloud_enrolling" | "bootstrapped" | "registered";
export type WriteDeviceSerializerMechanismEnum = "connector" | "direct";
export interface WriteDeviceSerializer {
    /**
     * The device vendor ID
     */
    "vendor_id"?: string;
    /**
     * The API resource entity
     */
    "object"?: string;
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * The state of the device's deployment
     */
    "deployed_state"?: WriteDeviceSerializerDeployedStateEnum;
    /**
     * Mark this device for auto firmware update
     */
    "auto_update"?: boolean;
    /**
     * The name of the object
     */
    "name"?: string;
    /**
     * The last deployment used on the device
     */
    "deployment"?: string;
    /**
     * Up to 5 custom JSON attributes
     */
    "custom_attributes"?: string;
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
    "provision_key": string;
    /**
     * The current state of the device
     */
    "state"?: WriteDeviceSerializerStateEnum;
    /**
     * The ID of the channel used to communicate with the device
     */
    "mechanism": WriteDeviceSerializerMechanismEnum;
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
     * DEPRECATED: The ID of the device
     */
    "device_id"?: string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Create device&lt;/p&gt;
     */
    deviceCreate (callback?: (error:any, data?:DeviceData, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devices/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Delete device&lt;/p&gt;
     * @param deviceId 
     */
    deviceDestroy (deviceId: string, callback?: (error:any, data?:any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceId' missing when calling 'deviceDestroy'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devices/{device_id}/'.replace('{' + 'device_id' + '}', String(deviceId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all update devices.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;filtering\&quot;&gt;Filtering:&lt;/h4&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;{URL encoded query string}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The query string is made up of key/value pairs separated by ampersands. So for a query of &lt;code&gt;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&lt;/code&gt; this would be encoded as follows:&lt;/p&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The examples below show the queries in &lt;em&gt;unencoded&lt;/em&gt; form.&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-device-properties-all-properties-are-filterable\&quot;&gt;By device properties (all properties are filterable):&lt;/h5&gt; &lt;p&gt;&lt;code&gt;state&#x3D;[unenrolled|cloud_enrolling|bootstrapped|registered]&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;device_class&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-date-time-fields\&quot;&gt;On date-time fields:&lt;/h5&gt; &lt;p&gt;Date-time fields should be specified in UTC RFC3339 format &lt;code&gt;YYYY-MM-DDThh:mm:ss.msZ&lt;/code&gt;. There are three permitted variations:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Date-time filtering supports three operators:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;equality&lt;/li&gt; &lt;li&gt;greater than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__gte&lt;/code&gt;&lt;/li&gt; &lt;li&gt;less than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__lte&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Lower and upper limits to a date-time range may be specified by including both the &lt;code&gt;__gte&lt;/code&gt; and &lt;code&gt;__lte&lt;/code&gt; forms in the filter.&lt;/p&gt; &lt;p&gt;&lt;code&gt;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-device-custom-attributes\&quot;&gt;On device custom attributes:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;custom_attributes__{param}&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;custom_attributes__tag&#x3D;TAG1&lt;/code&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;multi-field-example\&quot;&gt;Multi-field example&lt;/h4&gt; &lt;p&gt;&lt;code&gt;state&#x3D;bootstrapped&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Encoded: &lt;code&gt;?filter&#x3D;state%3Dbootstrapped%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&lt;/code&gt;&lt;/p&gt;
     * @param limit how many objects to retrieve in the page
     * @param order ASC or DESC
     * @param after the ID of the the item after which to retrieve the next page
     * @param filter URL encoded query string parameter to filter returned data
     */
    deviceList (limit?: number, order?: string, after?: string, filter?: string, callback?: (error:any, data?:DevicePage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
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

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devices/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;List all device logs.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;filtering\&quot;&gt;Filtering:&lt;/h4&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;{URL encoded query string}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The query string is made up of key/value pairs separated by ampersands. So for a query of &lt;code&gt;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&lt;/code&gt; this would be encoded as follows:&lt;/p&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The examples below show the queries in &lt;em&gt;unencoded&lt;/em&gt; form.&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-device95id\&quot;&gt;By device_id:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;device_id&#x3D;{id}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-state-change\&quot;&gt;By state change:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;state_change&#x3D;[True|False]&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-event-type\&quot;&gt;By event type:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;event_type&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-date-time-fields\&quot;&gt;On date-time fields:&lt;/h5&gt; &lt;p&gt;Date-time fields should be specified in UTC RFC3339 format &lt;code&gt;YYYY-MM-DDThh:mm:ss.msZ&lt;/code&gt;. There are three permitted variations:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Date-time filtering supports three operators:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;equality&lt;/li&gt; &lt;li&gt;greater than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__gte&lt;/code&gt;&lt;/li&gt; &lt;li&gt;less than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__lte&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Lower and upper limits to a date-time range may be specified by including both the &lt;code&gt;__gte&lt;/code&gt; and &lt;code&gt;__lte&lt;/code&gt; forms in the filter.&lt;/p&gt; &lt;p&gt;&lt;code&gt;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-device-custom-attributes\&quot;&gt;On device custom attributes:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;device__custom_attributes__{param}&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;device__custom_attributes__tag&#x3D;TAG1&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-device-attributes\&quot;&gt;By Device attributes:&lt;/h5&gt; &lt;p&gt;&lt;code&gt;device__deployed_state&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;device__device_class&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;device__name&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;multi-field-example\&quot;&gt;Multi-field example&lt;/h4&gt; &lt;p&gt;&lt;code&gt;device_id&#x3D;0158d38771f70000000000010010038c&amp;amp;state_change&#x3D;True&amp;amp;date_time__gte&#x3D;2016-11-30T16:25:12.1234Z&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Encoded: &lt;code&gt;?filter&#x3D;device_id%3D0158d38771f70000000000010010038c%26state_change%3DTrue%26date_time__gte%3D2016-11-30T16%3A25%3A12.1234Z&lt;/code&gt;&lt;/p&gt;
     * @param limit how many objects to retrieve in the page
     * @param order ASC or DESC
     * @param after the ID of the the item after which to retrieve the next page
     * @param filter URL encoded query string parameter to filter returned data
     */
    deviceLogList (limit?: number, order?: string, after?: string, filter?: string, callback?: (error:any, data?:DeviceLogPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

        let headerParams: any = {};

        let queryParameters: any = {};
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

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devicelog/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device log.&lt;/p&gt;
     * @param deviceLogId 
     */
    deviceLogRetrieve (deviceLogId: string, callback?: (error:any, data?:DeviceLogData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceLogId" is set
        if (deviceLogId === null || deviceLogId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceLogId' missing when calling 'deviceLogRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devicelog/{device_log_id}/'.replace('{' + 'device_log_id' + '}', String(deviceLogId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device fields&lt;/p&gt;
     * @param deviceId The ID of the device
     * @param autoUpdate Mark this device for auto firmware update
     * @param customAttributes Up to 5 custom JSON attributes
     * @param deployment The last deployment used on the device
     * @param description The description of the object
     * @param deviceClass The device class
     * @param manifest URL for the current device manifest
     * @param mechanism The ID of the channel used to communicate with the device
     * @param mechanismUrl The address of the connector to use
     * @param name The name of the object
     * @param object The API resource entity
     * @param provisionKey The key used to provision the device
     * @param serialNumber The serial number of the device
     * @param state The current state of the device
     * @param vendorId The device vendor ID
     */
    devicePartialUpdate (deviceId: string, autoUpdate?: boolean, customAttributes?: string, deployment?: string, description?: string, deviceClass?: string, manifest?: string, mechanism?: string, mechanismUrl?: string, name?: string, object?: string, provisionKey?: string, serialNumber?: string, state?: string, vendorId?: string, callback?: (error:any, data?:DeviceSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceId' missing when calling 'devicePartialUpdate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (autoUpdate !== undefined) {
            formParams['auto_update'] = autoUpdate;
        }

        if (customAttributes !== undefined) {
            formParams['custom_attributes'] = customAttributes;
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

        if (vendorId !== undefined) {
            formParams['vendor_id'] = vendorId;
        }


        return this.request({
            url: '/v3/devices/{device_id}/'.replace('{' + 'device_id' + '}', String(deviceId)),
            method: 'PATCH',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Retrieve device.&lt;/p&gt;
     * @param deviceId 
     */
    deviceRetrieve (deviceId: string, callback?: (error:any, data?:DeviceData, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceId' missing when calling 'deviceRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/devices/{device_id}/'.replace('{' + 'device_id' + '}', String(deviceId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating devices.  &lt;/p&gt; &lt;p&gt;Update device.&lt;/p&gt;
     * @param deviceId The ID of the device
     * @param mechanism The ID of the channel used to communicate with the device
     * @param provisionKey The key used to provision the device
     * @param autoUpdate Mark this device for auto firmware update
     * @param customAttributes Up to 5 custom JSON attributes
     * @param deployment The last deployment used on the device
     * @param description The description of the object
     * @param deviceClass The device class
     * @param manifest URL for the current device manifest
     * @param mechanismUrl The address of the connector to use
     * @param name The name of the object
     * @param object The API resource entity
     * @param serialNumber The serial number of the device
     * @param state The current state of the device
     * @param vendorId The device vendor ID
     */
    deviceUpdate (deviceId: string, mechanism: string, provisionKey: string, autoUpdate?: boolean, customAttributes?: string, deployment?: string, description?: string, deviceClass?: string, manifest?: string, mechanismUrl?: string, name?: string, object?: string, serialNumber?: string, state?: string, vendorId?: string, callback?: (error:any, data?:DeviceSerializer, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceId" is set
        if (deviceId === null || deviceId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceId' missing when calling 'deviceUpdate'."));
            }
            return;
        }
        // verify required parameter "mechanism" is set
        if (mechanism === null || mechanism === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'mechanism' missing when calling 'deviceUpdate'."));
            }
            return;
        }
        // verify required parameter "provisionKey" is set
        if (provisionKey === null || provisionKey === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'provisionKey' missing when calling 'deviceUpdate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (autoUpdate !== undefined) {
            formParams['auto_update'] = autoUpdate;
        }

        if (customAttributes !== undefined) {
            formParams['custom_attributes'] = customAttributes;
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

        if (vendorId !== undefined) {
            formParams['vendor_id'] = vendorId;
        }


        return this.request({
            url: '/v3/devices/{device_id}/'.replace('{' + 'device_id' + '}', String(deviceId)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

