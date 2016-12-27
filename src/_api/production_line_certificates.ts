/**
 * Provisioning endpoints - production line certificates.
 * A producton line certificate is used to associate a specific installation of the Factory Tool with an mbed Cloud account.  The production line certificate is generated by the Factory Tool, and needs to be uploaded using these APIs. 
 *
 * OpenAPI spec version: 0.8
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

import superagent = require('superagent');

let defaultBasePath = 'https://api.mbedcloud.com';

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

export function request(options:any, callback?:Function) {
    var url = options.uri;
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
            callback(error, response);
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

export class AListOfProductionLineCertificates_ {
    /**
    * \"list\"
    */
    'object': string;
    /**
    * Currently not used.
    */
    'totalCount': number;
    /**
    * Currently not used.
    */
    'after': string;
    /**
    * Currently not used.
    */
    'limit': number;
    /**
    * Production line certificates.
    */
    'data': Array<ProductionLineCertificate>;
    /**
    * Currently not used.
    */
    'order': string;
}

export class Body {
    /**
    * Comment of the production line certificate (max length is 256 characters).
    */
    'comment': string;
    /**
    * Production line certificate public key (from the Factory Tool, raw format - 65 bytes, Base64 encoded).
    */
    'production-line-certificate': string;
}

export class Body1 {
    /**
    * Updated comment for the production line certificate (max length: 256 characters).
    */
    'comment': string;
}

export class ProductionLineCertificate {
    /**
    * Comment of the production line certificate.
    */
    'comment': string;
    /**
    * UTC time of the entity creation.
    */
    'createdAt': string;
    /**
    * Entity name = \"production-line-certificate\"
    */
    'object': string;
    /**
    * Currently not used.
    */
    'etag': string;
    /**
    * SHA256 hash of the production line certificate (public signing key).
    */
    'publicSigningKeyHash': string;
    /**
    * Production line certificate active.
    */
    'active': boolean;
    /**
    * Production line certificate (public signing key).
    */
    'production-line-certificate': string;
    /**
    * Entity ID.
    */
    'id': string;
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
     * Gets the list of production line certificates associated with the account. 
     * @param authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     */
    public v3ProductionLineCertificatesGet (authorization: string, callback?: Function) {
        const localVarPath = this.basePath + '/v3/production-line-certificates';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v3ProductionLineCertificatesGet.');
        }

        headerParams['Authorization'] = authorization;

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

        request(requestOptions, (error, response) => {
            if (callback) {
                if (error) {
                    return callback(error);
                }

                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return callback(null, response);
                }

                callback(response);
            }
        });
    }
    /**
     * 
     * Deactivates the production line certificate.  There is no way to reactivate it. 
     * @param authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     * @param mUUID Certificate mUUID
     */
    public v3ProductionLineCertificatesMUUIDDelete (authorization: string, mUUID: string, callback?: Function) {
        const localVarPath = this.basePath + '/v3/production-line-certificates/{mUUID}'
            .replace('{' + 'mUUID' + '}', String(mUUID));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v3ProductionLineCertificatesMUUIDDelete.');
        }

        // verify required parameter 'mUUID' is not null or undefined
        if (mUUID === null || mUUID === undefined) {
            throw new Error('Required parameter mUUID was null or undefined when calling v3ProductionLineCertificatesMUUIDDelete.');
        }

        headerParams['Authorization'] = authorization;

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

        request(requestOptions, (error, response) => {
            if (callback) {
                if (error) {
                    return callback(error);
                }

                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return callback(null, response);
                }

                callback(response);
            }
        });
    }
    /**
     * 
     * Gets a single production line certificate by its mUUID. 
     * @param authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     * @param mUUID Certificate mUUID.
     */
    public v3ProductionLineCertificatesMUUIDGet (authorization: string, mUUID: string, callback?: Function) {
        const localVarPath = this.basePath + '/v3/production-line-certificates/{mUUID}'
            .replace('{' + 'mUUID' + '}', String(mUUID));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v3ProductionLineCertificatesMUUIDGet.');
        }

        // verify required parameter 'mUUID' is not null or undefined
        if (mUUID === null || mUUID === undefined) {
            throw new Error('Required parameter mUUID was null or undefined when calling v3ProductionLineCertificatesMUUIDGet.');
        }

        headerParams['Authorization'] = authorization;

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

        request(requestOptions, (error, response) => {
            if (callback) {
                if (error) {
                    return callback(error);
                }

                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return callback(null, response);
                }

                callback(response);
            }
        });
    }
    /**
     * 
     * Updates the comment on a production line certificate. 
     * @param authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     * @param mUUID Certificate mUUID
     * @param body 
     */
    public v3ProductionLineCertificatesMUUIDPut (authorization: string, mUUID: string, body: Body1, callback?: Function) {
        const localVarPath = this.basePath + '/v3/production-line-certificates/{mUUID}'
            .replace('{' + 'mUUID' + '}', String(mUUID));
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v3ProductionLineCertificatesMUUIDPut.');
        }

        // verify required parameter 'mUUID' is not null or undefined
        if (mUUID === null || mUUID === undefined) {
            throw new Error('Required parameter mUUID was null or undefined when calling v3ProductionLineCertificatesMUUIDPut.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v3ProductionLineCertificatesMUUIDPut.');
        }

        headerParams['Authorization'] = authorization;

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

        request(requestOptions, (error, response) => {
            if (callback) {
                if (error) {
                    return callback(error);
                }

                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return callback(null, response);
                }

                callback(response);
            }
        });
    }
    /**
     * 
     * Adds a new production line certificate to the account. 
     * @param authorization \&quot;Bearer\&quot; followed by the reference token or API key.
     * @param body 
     */
    public v3ProductionLineCertificatesPost (authorization: string, body: Body, callback?: Function) {
        const localVarPath = this.basePath + '/v3/production-line-certificates';
        let queryParameters: any = {};
        let headerParams: any = this.extendObj({}, this.defaultHeaders);
        let formParams: any = {};


        // verify required parameter 'authorization' is not null or undefined
        if (authorization === null || authorization === undefined) {
            throw new Error('Required parameter authorization was null or undefined when calling v3ProductionLineCertificatesPost.');
        }

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling v3ProductionLineCertificatesPost.');
        }

        headerParams['Authorization'] = authorization;

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

        request(requestOptions, (error, response) => {
            if (callback) {
                if (error) {
                    return callback(error);
                }

                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    return callback(null, response);
                }

                callback(response);
            }
        });
    }
}
