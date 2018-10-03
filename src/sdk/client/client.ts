import superagent = require("superagent");
import { SdkApiBase } from "./sdkApiBase";
import { Config } from "./config";
import { EntityBase } from "../common/entityBase";
import { SDK } from "../sdk";

export class Client extends SdkApiBase {

    public static CallApi(options: { url?: string, method?: Method, pathParams?: ClientParams, headers?: ClientParams, query?: ClientParams, formParams?: ClientParams, body?: any, paginated?: boolean, config?: Config }): Promise<any> {
        options = options || {};
        options.config = SDK.config;
        return new Promise((resolve, reject) => {
            this._CallApi(options, null, (err, data) => {
                if (err) {
                    return reject(err);
                }

                return resolve(data);
            });
        });
    }

    public static _CallApi<T extends EntityBase>(options: { url?: string, method?: Method, pathParams?: ClientParams, headers?: ClientParams, query?: ClientParams, formParams?: ClientParams, body?: any, paginated?: boolean, config?: Config }, instance?: T, callback?: (error: any, data?: any, response?: superagent.Response) => any): superagent.SuperAgentRequest {
        const contentTypes: Array<string> = [
            "application/json"
        ];
        const acceptTypes: Array<string> = [
            "application/json"
        ];

        const { url, method, pathParams, headers, query, formParams, body, paginated, config } = options;

        const useFormData = !!formParams;

        return this.request({
            url: url,
            method: method,
            headers: headers,
            query: query,
            formParams: formParams,
            useFormData: useFormData,
            contentTypes: contentTypes,
            acceptTypes: acceptTypes,
            body: body,
            pathParams: pathParams,
            paginated: paginated || false,
            config: config
        }, instance, callback);
    }
}

export interface ClientParams {
    [parameter: string]: any;
}

export type Method = "GET" | "POST" | "PUT" | "DELETE";