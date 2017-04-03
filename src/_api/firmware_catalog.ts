// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
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
 */

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";

export interface FirmwareImage {
    /**
     * The binary file of firmware image
     */
    "datafile": string;
    /**
     * The description of the object
     */
    "description": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * The API resource entity
     */
    "object": string;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * DEPRECATED: The ID of the firmware image
     */
    "image_id": string;
    /**
     * The entity instance signature
     */
    "etag": Date;
    /**
     * Checksum generated for the datafile
     */
    "datafile_checksum": string;
    /**
     * The ID of the firmware image
     */
    "id": string;
    /**
     * The name of the object
     */
    "name": string;
}

export interface FirmwareImagePage {
    "object": string;
    "has_more": boolean;
    "total_count": number;
    "after": string;
    "limit": number;
    "data": Array<FirmwareImage>;
    "order": string;
}

export interface FirmwareManifest {
    "datafile": string;
    /**
     * DEPRECATED: The ID of the firmware manifest
     */
    "manifest_id": string;
    /**
     * The description of the object
     */
    "description": string;
    /**
     * The version of the firmware manifest (as a timestamp)
     */
    "timestamp": Date;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * The API resource entity
     */
    "object": string;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The contents of the manifest
     */
    "manifest_contents": string;
    /**
     * The entity instance signature
     */
    "etag": Date;
    /**
     * The class of device
     */
    "device_class": string;
    /**
     * The ID of the firmware manifest
     */
    "id": string;
    /**
     * The name of the object
     */
    "name": string;
}

export interface FirmwareManifestPage {
    "object": string;
    "has_more": boolean;
    "total_count": number;
    "after": string;
    "limit": number;
    "data": Array<FirmwareManifest>;
    "order": string;
}

export interface WriteFirmwareImage {
    /**
     * The binary file of firmware image
     */
    "datafile": string;
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * The name of the object
     */
    "name": string;
}

export interface WriteFirmwareImagePage {
    "limit": number;
    "after": string;
    "data": Array<FirmwareImage>;
    "order": string;
}

export interface WriteFirmwareManifest {
    "datafile": string;
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * The name of the object
     */
    "name": string;
}

export interface WriteFirmwareManifestPage {
    "limit": number;
    "after": string;
    "data": Array<FirmwareManifest>;
    "order": string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Create firmware image&lt;/p&gt;
     * @param datafile The firmware image file to upload
     * @param name The name of the object
     * @param description The description of the object
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param updatingIpAddress 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingRequestId 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param description2 
     * @param object 
     * @param imageId 
     * @param datafileChecksum 
     * @param name2 
     */
    firmwareImageCreate (datafile: any, name: string, description?: string, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, updatingIpAddress?: string, etag?: string, etagGte?: string, etagLte?: string, updatingRequestId?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, description2?: string, object?: string, imageId?: string, datafileChecksum?: string, name2?: string, callback?: (error:any, data?:FirmwareImage, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "datafile" is set
        if (datafile === null || datafile === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'datafile' missing when calling 'firmwareImageCreate'."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'name' missing when calling 'firmwareImageCreate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (description2 !== undefined) {
            queryParameters['description'] = description2;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (imageId !== undefined) {
            queryParameters['image_id'] = imageId;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name2 !== undefined) {
            queryParameters['name'] = name2;
        }

        let useFormData = false;
        let formParams: any = {};
        if (datafile !== undefined) {
            formParams['datafile'] = datafile;
        }
        useFormData = true;

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }


        return this.request({
            url: '/v3/firmware-images/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Delete firmware image&lt;/p&gt;
     * @param imageId The ID of the firmware image
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param updatingIpAddress 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingRequestId 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param description 
     * @param object 
     * @param datafileChecksum 
     * @param name 
     */
    firmwareImageDestroy (imageId: number, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, updatingIpAddress?: string, etag?: string, etagGte?: string, etagLte?: string, updatingRequestId?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, description?: string, object?: string, datafileChecksum?: string, name?: string, callback?: (error:any, data?:FirmwareImage, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "imageId" is set
        if (imageId === null || imageId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'imageId' missing when calling 'firmwareImageDestroy'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/{image_id}/'.replace('{' + 'image_id' + '}', String(imageId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;List all firmware images. The result will be paged into pages of 50.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;filtering\&quot;&gt;Filtering:&lt;/h4&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;{URL encoded query string}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The query string is made up of key/value pairs separated by ampersands. So for a query of &lt;code&gt;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&lt;/code&gt; this would be encoded as follows:&lt;/p&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The examples below show the queries in &lt;em&gt;unencoded&lt;/em&gt; form.&lt;/p&gt; &lt;p&gt;&#x60;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-firmware-image-properties-all-properties-are-filterable\&quot;&gt;By firmware image properties (all properties are filterable):&lt;/h5&gt; &lt;p&gt;For example:&lt;/p&gt; &lt;p&gt;&lt;code&gt;name&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-date-time-fields\&quot;&gt;On date-time fields:&lt;/h5&gt; &lt;p&gt;Date-time fields should be specified in UTC RFC3339 format &lt;code&gt;YYYY-MM-DDThh:mm:ss.msZ&lt;/code&gt;. There are three permitted variations:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Date-time filtering supports three operators:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;equality&lt;/li&gt; &lt;li&gt;greater than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__gte&lt;/code&gt;&lt;/li&gt; &lt;li&gt;less than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__lte&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Lower and upper limits to a date-time range may be specified by including both the &lt;code&gt;__gte&lt;/code&gt; and &lt;code&gt;__lte&lt;/code&gt; forms in the filter.&lt;/p&gt; &lt;p&gt;&lt;code&gt;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&lt;/code&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;multi-field-example\&quot;&gt;Multi-field example&lt;/h4&gt; &lt;p&gt;&lt;code&gt;name&#x3D;MyName&amp;amp;bootstrapped&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Encoded: &lt;code&gt;?filter&#x3D;name%3DMyName%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&lt;/code&gt;&lt;/p&gt;
     * @param limit how many objects to retrieve in the page
     * @param order ASC or DESC
     * @param after the ID of the the item after which to retrieve the next page
     * @param filter URL encoded query string parameter to filter returned data
     * @param include Comma separated list of data fields to return. Currently supported: total_count
     */
    firmwareImageList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:FirmwareImagePage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

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
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware images.  &lt;/p&gt; &lt;p&gt;Retrieve firmware image&lt;/p&gt;
     * @param imageId The ID of the firmware image
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param updatingIpAddress 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingRequestId 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param description 
     * @param object 
     * @param datafileChecksum 
     * @param name 
     */
    firmwareImageRetrieve (imageId: number, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, updatingIpAddress?: string, etag?: string, etagGte?: string, etagLte?: string, updatingRequestId?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, description?: string, object?: string, datafileChecksum?: string, name?: string, callback?: (error:any, data?:FirmwareImage, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "imageId" is set
        if (imageId === null || imageId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'imageId' missing when calling 'firmwareImageRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-images/{image_id}/'.replace('{' + 'image_id' + '}', String(imageId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Create firmware manifest&lt;/p&gt;
     * @param datafile The manifest file to create
     * @param name The name of the object
     * @param description The description of the object
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingIpAddress 
     * @param manifestId 
     * @param updatingRequestId 
     * @param description2 
     * @param timestamp 
     * @param timestampGte 
     * @param timestampLte 
     * @param object 
     * @param deviceClass 
     * @param datafileChecksum 
     * @param name2 
     */
    firmwareManifestCreate (datafile: any, name: string, description?: string, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, etag?: string, etagGte?: string, etagLte?: string, updatingIpAddress?: string, manifestId?: string, updatingRequestId?: string, description2?: string, timestamp?: string, timestampGte?: string, timestampLte?: string, object?: string, deviceClass?: string, datafileChecksum?: string, name2?: string, callback?: (error:any, data?:FirmwareManifest, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "datafile" is set
        if (datafile === null || datafile === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'datafile' missing when calling 'firmwareManifestCreate'."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'name' missing when calling 'firmwareManifestCreate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (manifestId !== undefined) {
            queryParameters['manifest_id'] = manifestId;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (description2 !== undefined) {
            queryParameters['description'] = description2;
        }
        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }
        if (timestampGte !== undefined) {
            queryParameters['timestamp__gte'] = timestampGte;
        }
        if (timestampLte !== undefined) {
            queryParameters['timestamp__lte'] = timestampLte;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (deviceClass !== undefined) {
            queryParameters['device_class'] = deviceClass;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name2 !== undefined) {
            queryParameters['name'] = name2;
        }

        let useFormData = false;
        let formParams: any = {};
        if (datafile !== undefined) {
            formParams['datafile'] = datafile;
        }
        useFormData = true;

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }


        return this.request({
            url: '/v3/firmware-manifests/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Delete firmware manifest&lt;/p&gt;
     * @param manifestId The ID of the firmware manifest
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingIpAddress 
     * @param updatingRequestId 
     * @param description 
     * @param timestamp 
     * @param timestampGte 
     * @param timestampLte 
     * @param object 
     * @param deviceClass 
     * @param datafileChecksum 
     * @param name 
     */
    firmwareManifestDestroy (manifestId: number, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, etag?: string, etagGte?: string, etagLte?: string, updatingIpAddress?: string, updatingRequestId?: string, description?: string, timestamp?: string, timestampGte?: string, timestampLte?: string, object?: string, deviceClass?: string, datafileChecksum?: string, name?: string, callback?: (error:any, data?:FirmwareManifest, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "manifestId" is set
        if (manifestId === null || manifestId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'manifestId' missing when calling 'firmwareManifestDestroy'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }
        if (timestampGte !== undefined) {
            queryParameters['timestamp__gte'] = timestampGte;
        }
        if (timestampLte !== undefined) {
            queryParameters['timestamp__lte'] = timestampLte;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (deviceClass !== undefined) {
            queryParameters['device_class'] = deviceClass;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/{manifest_id}/'.replace('{' + 'manifest_id' + '}', String(manifestId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;List all firmware manifests.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;filtering\&quot;&gt;Filtering:&lt;/h4&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;{URL encoded query string}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The query string is made up of key/value pairs separated by ampersands. So for a query of &lt;code&gt;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&lt;/code&gt; this would be encoded as follows:&lt;/p&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The examples below show the queries in &lt;em&gt;unencoded&lt;/em&gt; form.&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-manifest-id\&quot;&gt;By manifest ID:&lt;/h5&gt; &lt;p&gt;&#x60; manifest_id&#x3D;{id} &#39;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-firmware-manifest-properties-all-properties-are-filterable\&quot;&gt;By firmware manifest properties (all properties are filterable):&lt;/h5&gt; &lt;p&gt;&lt;code&gt;device_class&#x3D;{value}&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-date-time-fields\&quot;&gt;On date-time fields:&lt;/h5&gt; &lt;p&gt;Date-time fields should be specified in UTC RFC3339 format &lt;code&gt;YYYY-MM-DDThh:mm:ss.msZ&lt;/code&gt;. There are three permitted variations:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Date-time filtering supports three operators:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;equality&lt;/li&gt; &lt;li&gt;greater than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__gte&lt;/code&gt;&lt;/li&gt; &lt;li&gt;less than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__lte&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Lower and upper limits to a date-time range may be specified by including both the &lt;code&gt;__gte&lt;/code&gt; and &lt;code&gt;__lte&lt;/code&gt; forms in the filter.&lt;/p&gt; &lt;p&gt;&lt;code&gt;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&lt;/code&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;multi-field-example\&quot;&gt;Multi-field example&lt;/h4&gt; &lt;p&gt;&lt;code&gt;device_class&#x3D;1234&amp;amp;d&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Encoded: &lt;code&gt;?filter&#x3D;device_class%3D1234%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&lt;/code&gt;&lt;/p&gt;
     * @param limit how many objects to retrieve in the page
     * @param order ASC or DESC
     * @param after the ID of the the item after which to retrieve the next page
     * @param filter URL encoded query string parameter to filter returned data
     * @param include Comma separated list of data fields to return. Currently supported: total_count
     */
    firmwareManifestList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data?:FirmwareManifestPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

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
        if (include !== undefined) {
            queryParameters['include'] = include;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating firmware manifests.  &lt;/p&gt; &lt;p&gt;Retrieve firmware manifest&lt;/p&gt;
     * @param manifestId The ID of the firmware manifest
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param updatingIpAddress 
     * @param updatingRequestId 
     * @param description 
     * @param timestamp 
     * @param timestampGte 
     * @param timestampLte 
     * @param object 
     * @param deviceClass 
     * @param datafileChecksum 
     * @param name 
     */
    firmwareManifestRetrieve (manifestId: number, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, etag?: string, etagGte?: string, etagLte?: string, updatingIpAddress?: string, updatingRequestId?: string, description?: string, timestamp?: string, timestampGte?: string, timestampLte?: string, object?: string, deviceClass?: string, datafileChecksum?: string, name?: string, callback?: (error:any, data?:FirmwareManifest, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "manifestId" is set
        if (manifestId === null || manifestId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'manifestId' missing when calling 'firmwareManifestRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (createdAt !== undefined) {
            queryParameters['created_at'] = createdAt;
        }
        if (createdAtGte !== undefined) {
            queryParameters['created_at__gte'] = createdAtGte;
        }
        if (createdAtLte !== undefined) {
            queryParameters['created_at__lte'] = createdAtLte;
        }
        if (etag !== undefined) {
            queryParameters['etag'] = etag;
        }
        if (etagGte !== undefined) {
            queryParameters['etag__gte'] = etagGte;
        }
        if (etagLte !== undefined) {
            queryParameters['etag__lte'] = etagLte;
        }
        if (updatingIpAddress !== undefined) {
            queryParameters['updating_ip_address'] = updatingIpAddress;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (timestamp !== undefined) {
            queryParameters['timestamp'] = timestamp;
        }
        if (timestampGte !== undefined) {
            queryParameters['timestamp__gte'] = timestampGte;
        }
        if (timestampLte !== undefined) {
            queryParameters['timestamp__lte'] = timestampLte;
        }
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (deviceClass !== undefined) {
            queryParameters['device_class'] = deviceClass;
        }
        if (datafileChecksum !== undefined) {
            queryParameters['datafile_checksum'] = datafileChecksum;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/firmware-manifests/{manifest_id}/'.replace('{' + 'manifest_id' + '}', String(manifestId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

