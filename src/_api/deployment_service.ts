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

import superagent = require('superagent');

let defaultBasePath = 'http://api.mbedcloud.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

/* tslint:disable:no-unused-variable */

export interface RequestOptions {
    auth?:{username?:string, password?:string};
    form?:any;
    formData?:any;
    method?:string;
    qs?:any;
    headers?:any;
    uri?:string;
    useQuerystring?: boolean;
    json?: boolean;
    encoding?: string | null;
    body?:any;
}

export function request(options:any, callback?:Function): superagent.SuperAgentRequest {
    var url = options.uri;

    // Normalize slashes in url
    url = url.replace(/([:])?\/+/g, function($0, $1) {
        return $1 ? $0: "/";
    });

    var request = superagent(options.method, url);

    if (options.auth && (options.auth.username || options.auth.password)) {
        request.auth(options.auth.username || '', options.auth.password || '');
    }

    // set query parameters
    request.query(normalizeParams(options.qs));

    // set header parameters
    request.set(normalizeParams(options.headers));

    // set request timeout
    request.timeout(60000);

    if (options.json) {
        request.type("application/json");
        request.accept("application/json");
    }

    if (options.form) {
        request.type("application/x-www-form-urlencoded");
        request.send(normalizeParams(options.form));
    } else if (options.formData) {
        request.type("multipart/form-data");
        var formParams = normalizeParams(options.formData);
        for (var key in formParams) {
            if (formParams.hasOwnProperty(key)) {
                if (isFileParam(formParams[key])) {
                    // file field
                    request.attach(key, formParams[key]);
                } else {
                    request.field(key, formParams[key]);
                }
            }
        }
    } else if (options.body) {
        request.send(options.body);
    }

    request.end(function(error, response) {
        if (callback) {
            var data = null;

            if (response && !error) {
                data = response.body || response.text;
            }

            callback(error, data, response);
        }
    });

    return request;
}

/**
* Normalizes parameter values:
* <ul>
* <li>remove nils</li>
* <li>keep files and arrays</li>
* <li>format to string with `paramToString` for other cases</li>
* </ul>
* @param {Object.<String, Object>} params The parameters as object properties.
* @returns {Object.<String, Object>} normalized parameters.
*/
export function normalizeParams(params:any) {
    var newParams = {};

    for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
            var value = params[key];
            if (isFileParam(value) || Array.isArray(value)) {
                newParams[key] = value;
            } else {
                newParams[key] = paramToString(value);
            }
        }
    }

    return newParams;
}

/**
* Checks whether the given parameter value represents file-like content.
* @param param The parameter to check.
* @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
*/
export function isFileParam(param:any) {
    // fs.ReadStream in Node.js (but not in runtime like browserify)
    if (typeof window === 'undefined' &&
        typeof require === 'function' &&
        require('fs') &&
        param instanceof require('fs').ReadStream) {
        return true;
    }

    // Buffer in Node.js
    if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
    }

    // Blob in browser
    if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
    }

    // File in browser (it seems File object is also instance of Blob, but keep this for safe)
    if (typeof File === 'function' && param instanceof File) {
        return true;
    }

    return false;
}

/**
* Returns a string representation for an actual parameter.
* @param param The actual parameter.
* @returns {String} The string representation of <code>param</code>.
*/
export function paramToString(param:any) {
    if (param == undefined || param == null) {
        return '';
    }

    if (param instanceof Date) {
        return param.toJSON();
    }

    return param.toString();
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: RequestOptions): void;
}

export class HttpBasicAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(requestOptions: RequestOptions): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string;

    applyToRequest(requestOptions: RequestOptions): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string;

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: RequestOptions): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string;
    public password: string;
    applyToRequest(_: RequestOptions): void {
        // Do nothing
    }
}

export interface CampaignDeviceMetadataSerializer {
    /**
     * The description of the object
     */
    "description": string;
    /**
     * The update campaign to which this device belongs
     */
    "campaign": string;
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
     * The ID of the channel used to communicated with the device
     */
    "mechanism": string;
    /**
     * The name of the object
     */
    "name": string;
    /**
     * The entity instance signature
     */
    "etag": Date;
    /**
     * The address of the Connector to use
     */
    "mechanism_url": string;
    /**
     * The state of the deployment
     */
    "deployment_state": CampaignDeviceMetadataSerializerDeploymentStateEnum;
    /**
     * The ID of the metadata concerning this device/campaign
     */
    "id": string;
    /**
     * The ID of the device to deploy
     */
    "device_id": string;
}

export type CampaignDeviceMetadataSerializerDeploymentStateEnum = "pending" | "updated_device_catalog" | "updated_connector_channel" | "deployed" | "manifestremoved";
export interface UpdateCampaignPage {
    /**
     * API Resource name
     */
    "object"?: string;
    /**
     * Whether there are more results to display
     */
    "has_more"?: boolean;
    /**
     * Total number of records
     */
    "total_count"?: number;
    /**
     * Entity id for fetch after it
     */
    "after"?: string;
    /**
     * The number of results to return
     */
    "limit"?: number;
    "data"?: Array<UpdateCampaignSerializer>;
    /**
     * Order of returned records
     */
    "order"?: string;
}

export interface UpdateCampaignSerializer {
    /**
     * An optional description of the campaign
     */
    "description": string;
    /**
     * The state of the campaign
     */
    "state": UpdateCampaignSerializerStateEnum;
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
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
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

export type UpdateCampaignSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface UpdateCampaignStatusSerializer {
    "direct_devices": number;
    "connector_devices": number;
    /**
     * An optional description of the campaign
     */
    "description": string;
    /**
     * The state of the campaign
     */
    "state": UpdateCampaignStatusSerializerStateEnum;
    /**
     * The updating IAM user ID
     */
    "updating_user_id": string;
    /**
     * The time the object was created
     */
    "created_at": Date;
    "total_devices": number;
    "campaigndevicemetadata_set": Array<CampaignDeviceMetadataSerializer>;
    /**
     * DEPRECATED: The ID of the campaign
     */
    "campaign_id": string;
    "deployed_devices": number;
    /**
     * The time the object was updated
     */
    "updated_at": Date;
    /**
     * The timestamp at which campaign is scheduled to start
     */
    "when"?: Date;
    /**
     * The timestamp when the update campaign finished
     */
    "finished"?: Date;
    "root_manifest_url": string;
    /**
     * The gateway client API key
     */
    "updating_api_key": string;
    /**
     * The updating account ID
     */
    "updating_account_id": string;
    /**
     * The filter for the devices the campaign will target
     */
    "device_filter": string;
    /**
     * A name for this campaign
     */
    "name": string;
}

export type UpdateCampaignStatusSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";
export interface WriteCampaignDeviceMetadataSerializer {
    /**
     * The description of the object
     */
    "description"?: string;
    /**
     * The update campaign to which this device belongs
     */
    "campaign": string;
    /**
     * The API resource entity
     */
    "object"?: string;
    /**
     * The ID of the channel used to communicated with the device
     */
    "mechanism": string;
    /**
     * The name of the object
     */
    "name": string;
    /**
     * The address of the Connector to use
     */
    "mechanism_url"?: string;
    /**
     * The state of the deployment
     */
    "deployment_state"?: WriteCampaignDeviceMetadataSerializerDeploymentStateEnum;
    /**
     * The ID of the device to deploy
     */
    "device_id": string;
}

export type WriteCampaignDeviceMetadataSerializerDeploymentStateEnum = "pending" | "updated_device_catalog" | "updated_connector_channel" | "deployed" | "manifestremoved";
export interface WriteUpdateCampaignSerializer {
    /**
     * A name for this campaign
     */
    "name": string;
    /**
     * The state of the campaign
     */
    "state"?: WriteUpdateCampaignSerializerStateEnum;
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
    "device_filter"?: string;
    /**
     * An optional description of the campaign
     */
    "description"?: string;
}

export type WriteUpdateCampaignSerializerStateEnum = "draft" | "scheduled" | "devicefetch" | "devicecopy" | "devicecopycomplete" | "publishing" | "deploying" | "deployed" | "manifestremoved" | "expired";

export enum DefaultApiApiKeys {
    Bearer,
}

export class DefaultApi {
    protected basePath = defaultBasePath;
    protected defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
        'Bearer': new ApiKeyAuth('header', 'Authorization'),
    }

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    public setApiKey(key: DefaultApiApiKeys, value: string) {
        this.authentications[DefaultApiApiKeys[key]].apiKey = value;
    }
    private extendObj<T1,T2>(objA: T1, objB: T2) {
        for(let key in objB){
            if(objB.hasOwnProperty(key)){
                objA[key] = objB[key];
            }
        }
        return <T1&T2>objA;
    }
    /**
     * 
     * &lt;p&gt;Reads the deploy_info.json file and returns the Build and Git ID to the caller.&lt;/p&gt; &lt;p&gt;Will return a 500 error if the file is missing, cannot be parsed or the keys are missing.&lt;/p&gt;
     */
    public deployInfoGET (callback?: (error:any, data:any, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/ds_deploy_info';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Create update campaign&lt;/p&gt;
     * @param body Update campaign object to create
     */
    public updateCampaignCreate (body: WriteUpdateCampaignSerializer, callback?: (error:any, data:UpdateCampaignSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCampaignCreate.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'POST',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Delete update campaign&lt;/p&gt;
     * @param campaignId The ID of the update campaign
     */
    public updateCampaignDestroy (campaignId: string, callback?: (error:any, data:UpdateCampaignSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/{campaign_id}/'
            .replace('{' + 'campaign_id' + '}', String(campaignId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignDestroy.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'DELETE',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;List all update campaigns&lt;/p&gt;
     * @param limit 
     * @param order 
     * @param after 
     * @param filter 
     * @param include 
     */
    public updateCampaignList (limit?: number, order?: string, after?: string, filter?: string, include?: string, callback?: (error:any, data:UpdateCampaignPage, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


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

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign fields&lt;/p&gt;
     * @param campaignId DEPRECATED: The ID of the campaign
     * @param description An optional description of the campaign
     * @param deviceFilter The filter for the devices the campaign will target
     * @param finished The timestamp when the update campaign finished
     * @param name A name for this campaign
     * @param object The API resource entity
     * @param rootManifestId 
     * @param state The state of the campaign
     * @param when The timestamp at which update campaign scheduled to start
     */
    public updateCampaignPartialUpdate (campaignId?: string, description?: string, deviceFilter?: string, finished?: Date, name?: string, object?: string, rootManifestId?: string, state?: string, when?: Date, callback?: (error:any, data:UpdateCampaignSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/{campaign_id}/';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        let useFormData = false;

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

        let requestOptions: RequestOptions = {
            method: 'PATCH',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Retrieve campaign&lt;/p&gt;
     * @param campaignId The ID of the campaign
     */
    public updateCampaignRetrieve (campaignId: string, callback?: (error:any, data:UpdateCampaignSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/{campaign_id}/'
            .replace('{' + 'campaign_id' + '}', String(campaignId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignRetrieve.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Show the status of an update campaign&lt;/p&gt;
     * @param campaignId The ID of the update campaign
     */
    public updateCampaignStatus (campaignId: string, callback?: (error:any, data:UpdateCampaignStatusSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/{campaign_id}/status/'
            .replace('{' + 'campaign_id' + '}', String(campaignId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignStatus.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'GET',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
    /**
     * 
     * &lt;p&gt;The APIs for creating and manipulating update campaigns. Update campaigns are used to control firmware update to a list of devices specified by a filter.  &lt;/p&gt; &lt;p&gt;Update campaign&lt;/p&gt;
     * @param campaignId Campaign ID to update
     * @param body Update campaign object to create
     */
    public updateCampaignUpdate (campaignId: string, body: WriteUpdateCampaignSerializer, callback?: (error:any, data:UpdateCampaignSerializer, response: superagent.Response) => any): superagent.SuperAgentRequest {
        const localVarPath = this.basePath + '/v3/update-campaigns/{campaign_id}/'
            .replace('{' + 'campaign_id' + '}', String(campaignId));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'campaignId' is not null or undefined
        if (campaignId === null || campaignId === undefined) {
            throw new Error('Required parameter campaignId was null or undefined when calling updateCampaignUpdate.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateCampaignUpdate.');
        }

        let useFormData = false;

        let requestOptions: RequestOptions = {
            method: 'PUT',
            qs: queryParameters,
            headers: headerParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: body,
        };

        this.authentications.Bearer.applyToRequest(requestOptions);
        this.authentications.default.applyToRequest(requestOptions);

        if (Object.keys(formParams).length) {
            if (useFormData) {
                (<any>requestOptions).formData = formParams;
            } else {
                requestOptions.form = formParams;
            }
        }

        return request(requestOptions, (error, data, response) => {
            if (callback) {
                callback(error, data, response);
            }
        });
    }
}
