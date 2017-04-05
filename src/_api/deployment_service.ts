// ===============================================
// This file is autogenerated - Please do not edit
// Tracks base typescript-fetch mustache 01/02/17
// ===============================================
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
 */

/* tslint:disable:no-unused-variable */
/* tslint:disable:no-implicit-any */

import superagent = require('superagent');
import { ApiBase } from "../common/apiBase";

export type UpdateCampaignStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface UpdateCampaign {
    /**
     * An optional description of the campaign
     */
    "description": string;
    /**
     * The state of the campaign
     */
    "state": UpdateCampaignStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    /**
     * The API resource entity
     */
    "object": string;
    "root_manifest_id": string;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id": string;
    /**
     * The updating account ID
     */
    "updating_account_id": string;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The timestamp at which update campaign scheduled to start
     */
    "when": Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished": Date;
    /**
     * The entity instance signature
     */
    "etag": Date;
    "root_manifest_url": string;
    /**
     * The gateway client API key
     */
    "updating_api_key": string;
    /**
     * The ID of the campaign
     */
    "id": string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter": string;
    /**
     * A name for this campaign
     */
    "name": string;
}

export interface UpdateCampaignPage {
    "object": string;
    "has_more": boolean;
    "total_count": number;
    "after": string;
    "limit": number;
    "data": Array<UpdateCampaign>;
    "order": string;
}

export type WriteUpdateCampaignStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface WriteUpdateCampaign {
    /**
     * A name for this campaign
     */
    "name": string;
    /**
     * The state of the campaign
     */
    "state"?: WriteUpdateCampaignStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id"?: string;
    /**
     * The API resource entity
     */
    "object"?: string;
    "root_manifest_id"?: string;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id"?: string;
    /**
     * The gateway client API key
     */
    "updating_api_key"?: string;
    /**
     * The timestamp at which update campaign scheduled to start
     */
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
    /**
     * The updating account ID
     */
    "updating_account_id"?: string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter": string;
    /**
     * An optional description of the campaign
     */
    "description"?: string;
}

export interface WriteUpdateCampaignPage {
    "limit"?: number;
    "after"?: string;
    "data"?: Array<UpdateCampaign>;
    "order"?: string;
}

/**
 * DefaultApi
 */
export class DefaultApi extends ApiBase {

    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Create update campaign&lt;/p&gt;
     * @param deviceFilter The filter for the devices the campaign will target
     * @param name A name for this campaign
     * @param campaignId DEPRECATED: The ID of the campaign
     * @param description An optional description of the campaign
     * @param finished The timestamp when the update campaign finished
     * @param object The API resource entity
     * @param rootManifestId 
     * @param state The state of the campaign
     * @param when The timestamp at which update campaign scheduled to start
     */
    updateCampaignCreate (deviceFilter: string, name: string, campaignId?: string, description?: string, finished?: Date, object?: string, rootManifestId?: string, state?: string, when?: Date, callback?: (error:any, data?:UpdateCampaign, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "deviceFilter" is set
        if (deviceFilter === null || deviceFilter === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceFilter' missing when calling 'updateCampaignCreate'."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'name' missing when calling 'updateCampaignCreate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (campaignId !== undefined) {
            formParams['campaign_id'] = campaignId;
        }

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (deviceFilter !== undefined) {
            formParams['device_filter'] = deviceFilter;
        }

        if (finished !== undefined) {
            formParams['finished'] = finished;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (object !== undefined) {
            formParams['object'] = object;
        }

        if (rootManifestId !== undefined) {
            formParams['root_manifest_id'] = rootManifestId;
        }

        if (state !== undefined) {
            formParams['state'] = state;
        }

        if (when !== undefined) {
            formParams['when'] = when;
        }


        return this.request({
            url: '/v3/update-campaigns/',
            method: 'POST',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Delete update campaign&lt;/p&gt;
     * @param campaignId The ID of the update campaign
     * @param rootManifestId 
     * @param updatingRequestId 
     * @param finished 
     * @param finishedGte 
     * @param finishedLte 
     * @param createdAt 
     * @param createdAtGte 
     * @param createdAtLte 
     * @param when 
     * @param whenGte 
     * @param whenLte 
     * @param updatingIpAddress 
     * @param etag 
     * @param etagGte 
     * @param etagLte 
     * @param object 
     * @param state 
     * @param name 
     * @param updatedAt 
     * @param updatedAtGte 
     * @param updatedAtLte 
     * @param deviceFilter 
     * @param campaigndevicemetadata 
     * @param description 
     * @param attempts 
     */
    updateCampaignDestroy (campaignId: string, rootManifestId?: string, updatingRequestId?: string, finished?: string, finishedGte?: string, finishedLte?: string, createdAt?: string, createdAtGte?: string, createdAtLte?: string, when?: string, whenGte?: string, whenLte?: string, updatingIpAddress?: string, etag?: string, etagGte?: string, etagLte?: string, object?: string, state?: string, name?: string, updatedAt?: string, updatedAtGte?: string, updatedAtLte?: string, deviceFilter?: string, campaigndevicemetadata?: string, description?: string, attempts?: string, callback?: (error:any, data?:UpdateCampaign, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignDestroy'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};
        if (rootManifestId !== undefined) {
            queryParameters['root_manifest_id'] = rootManifestId;
        }
        if (updatingRequestId !== undefined) {
            queryParameters['updating_request_id'] = updatingRequestId;
        }
        if (finished !== undefined) {
            queryParameters['finished'] = finished;
        }
        if (finishedGte !== undefined) {
            queryParameters['finished__gte'] = finishedGte;
        }
        if (finishedLte !== undefined) {
            queryParameters['finished__lte'] = finishedLte;
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
        if (when !== undefined) {
            queryParameters['when'] = when;
        }
        if (whenGte !== undefined) {
            queryParameters['when__gte'] = whenGte;
        }
        if (whenLte !== undefined) {
            queryParameters['when__lte'] = whenLte;
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
        if (object !== undefined) {
            queryParameters['object'] = object;
        }
        if (state !== undefined) {
            queryParameters['state'] = state;
        }
        if (name !== undefined) {
            queryParameters['name'] = name;
        }
        if (updatedAt !== undefined) {
            queryParameters['updated_at'] = updatedAt;
        }
        if (updatedAtGte !== undefined) {
            queryParameters['updated_at__gte'] = updatedAtGte;
        }
        if (updatedAtLte !== undefined) {
            queryParameters['updated_at__lte'] = updatedAtLte;
        }
        if (deviceFilter !== undefined) {
            queryParameters['device_filter'] = deviceFilter;
        }
        if (campaigndevicemetadata !== undefined) {
            queryParameters['campaigndevicemetadata'] = campaigndevicemetadata;
        }
        if (description !== undefined) {
            queryParameters['description'] = description;
        }
        if (attempts !== undefined) {
            queryParameters['attempts'] = attempts;
        }

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'DELETE',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;List all update campaigns.&lt;/p&gt; &lt;h4 id&#x3D;\&quot;filtering\&quot;&gt;Filtering:&lt;/h4&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;{URL encoded query string}&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The query string is made up of key/value pairs separated by ampersands. So for a query of &lt;code&gt;key1&#x3D;value1&amp;amp;key2&#x3D;value2&amp;amp;key3&#x3D;value3&lt;/code&gt; this would be encoded as follows:&lt;/p&gt; &lt;p&gt;&lt;code&gt;?filter&#x3D;key1%3Dvalue1%26key2%3Dvalue2%26key3%3Dvalue3&lt;/code&gt;&lt;/p&gt; &lt;p&gt;The examples below show the queries in &lt;em&gt;unencoded&lt;/em&gt; form.&lt;/p&gt; &lt;h5 id&#x3D;\&quot;by-campaign-properties-all-properties-are-filterable\&quot;&gt;By campaign properties (all properties are filterable):&lt;/h5&gt; &lt;p&gt;For example: &lt;code&gt;state&#x3D;[draft|scheduled|devicefectch|devicecopy|devicecopycomplete|publishing|deploying|deployed|manifestremoved|expired]&lt;/code&gt;&lt;/p&gt; &lt;p&gt;&lt;code&gt;root_manifest_id&#x3D;43217771234242e594ddb433816c498a&lt;/code&gt;&lt;/p&gt; &lt;h5 id&#x3D;\&quot;on-date-time-fields\&quot;&gt;On date-time fields:&lt;/h5&gt; &lt;p&gt;Date-time fields should be specified in UTC RFC3339 format &lt;code&gt;YYYY-MM-DDThh:mm:ss.msZ&lt;/code&gt;. There are three permitted variations:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;UTC RFC3339 with milliseconds e.g. 2016-11-30T16:25:12.1234Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 without milliseconds e.g. 2016-11-30T16:25:12Z&lt;/li&gt; &lt;li&gt;UTC RFC3339 shortened - without milliseconds and punctuation e.g. 20161130T162512Z&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Date-time filtering supports three operators:&lt;/p&gt; &lt;ul&gt; &lt;li&gt;equality&lt;/li&gt; &lt;li&gt;greater than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__gte&lt;/code&gt;&lt;/li&gt; &lt;li&gt;less than or equal to &amp;ndash; field name suffixed with &lt;code&gt;__lte&lt;/code&gt;&lt;/li&gt; &lt;/ul&gt; &lt;p&gt;Lower and upper limits to a date-time range may be specified by including both the &lt;code&gt;__gte&lt;/code&gt; and &lt;code&gt;__lte&lt;/code&gt; forms in the filter.&lt;/p&gt; &lt;p&gt;&lt;code&gt;{field name}[|__lte|__gte]&#x3D;{UTC RFC3339 date-time}&lt;/code&gt;&lt;/p&gt; &lt;h4 id&#x3D;\&quot;multi-field-example\&quot;&gt;Multi-field example&lt;/h4&gt; &lt;p&gt;&lt;code&gt;state&#x3D;deployed&amp;amp;created_at__gte&#x3D;2016-11-30T16:25:12.1234Z&amp;amp;created_at__lte&#x3D;2016-12-30T00:00:00Z&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Encoded: &lt;code&gt;?filter&#x3D;state%3Ddeployed%26created_at__gte%3D2016-11-30T16%3A25%3A12.1234Z%26created_at__lte%3D2016-11-30T00%3A00%3A00Z&lt;/code&gt;&lt;/p&gt;
     * @param limit how many objects to retrieve in the page
     * @param order ASC or DESC
     * @param after the ID of the the item after which to retrieve the next page
     * @param filter URL encoded query string parameter to filter returned data
     */
    updateCampaignList (limit?: number, order?: string, after?: string, filter?: string, callback?: (error:any, data?:UpdateCampaignPage, response?: superagent.Response) => any): superagent.SuperAgentRequest {

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
            url: '/v3/update-campaigns/',
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign fields&lt;/p&gt;
     * @param campaignId 
     * @param campaignId2 DEPRECATED: The ID of the campaign
     * @param description An optional description of the campaign
     * @param deviceFilter The filter for the devices the campaign will target
     * @param finished The timestamp when the update campaign finished
     * @param name A name for this campaign
     * @param object The API resource entity
     * @param rootManifestId 
     * @param state The state of the campaign
     * @param when The timestamp at which update campaign scheduled to start
     */
    updateCampaignPartialUpdate (campaignId: string, campaignId2?: string, description?: string, deviceFilter?: string, finished?: Date, name?: string, object?: string, rootManifestId?: string, state?: string, when?: Date, callback?: (error:any, data?:UpdateCampaign, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignPartialUpdate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (campaignId2 !== undefined) {
            formParams['campaign_id'] = campaignId2;
        }

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (deviceFilter !== undefined) {
            formParams['device_filter'] = deviceFilter;
        }

        if (finished !== undefined) {
            formParams['finished'] = finished;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (object !== undefined) {
            formParams['object'] = object;
        }

        if (rootManifestId !== undefined) {
            formParams['root_manifest_id'] = rootManifestId;
        }

        if (state !== undefined) {
            formParams['state'] = state;
        }

        if (when !== undefined) {
            formParams['when'] = when;
        }


        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'PATCH',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Retrieve campaign&lt;/p&gt;
     * @param campaignId The ID of the campaign
     */
    updateCampaignRetrieve (campaignId: string, callback?: (error:any, data?:UpdateCampaign, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignRetrieve'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};

        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'GET',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
    /** 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign&lt;/p&gt;
     * @param campaignId 
     * @param deviceFilter The filter for the devices the campaign will target
     * @param name A name for this campaign
     * @param campaignId2 DEPRECATED: The ID of the campaign
     * @param description An optional description of the campaign
     * @param finished The timestamp when the update campaign finished
     * @param object The API resource entity
     * @param rootManifestId 
     * @param state The state of the campaign
     * @param when The timestamp at which update campaign scheduled to start
     */
    updateCampaignUpdate (campaignId: string, deviceFilter: string, name: string, campaignId2?: string, description?: string, finished?: Date, object?: string, rootManifestId?: string, state?: string, when?: Date, callback?: (error:any, data?:UpdateCampaign, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        // verify required parameter "campaignId" is set
        if (campaignId === null || campaignId === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'campaignId' missing when calling 'updateCampaignUpdate'."));
            }
            return;
        }
        // verify required parameter "deviceFilter" is set
        if (deviceFilter === null || deviceFilter === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'deviceFilter' missing when calling 'updateCampaignUpdate'."));
            }
            return;
        }
        // verify required parameter "name" is set
        if (name === null || name === undefined) {
            if (callback) {
                callback(new Error("Required parameter 'name' missing when calling 'updateCampaignUpdate'."));
            }
            return;
        }

        let headerParams: any = {};

        let queryParameters: any = {};

        let useFormData = false;
        let formParams: any = {};
        if (campaignId2 !== undefined) {
            formParams['campaign_id'] = campaignId2;
        }

        if (description !== undefined) {
            formParams['description'] = description;
        }

        if (deviceFilter !== undefined) {
            formParams['device_filter'] = deviceFilter;
        }

        if (finished !== undefined) {
            formParams['finished'] = finished;
        }

        if (name !== undefined) {
            formParams['name'] = name;
        }

        if (object !== undefined) {
            formParams['object'] = object;
        }

        if (rootManifestId !== undefined) {
            formParams['root_manifest_id'] = rootManifestId;
        }

        if (state !== undefined) {
            formParams['state'] = state;
        }

        if (when !== undefined) {
            formParams['when'] = when;
        }


        return this.request({
            url: '/v3/update-campaigns/{campaign_id}/'.replace('{' + 'campaign_id' + '}', String(campaignId)),
            method: 'PUT',
            headers: headerParams,
            query: queryParameters,
            useFormData: useFormData,
            formParams: formParams,
            json: true,
        }, callback);
    }
}

