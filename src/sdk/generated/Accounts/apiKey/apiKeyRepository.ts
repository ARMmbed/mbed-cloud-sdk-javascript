import { Repository } from "../../../common/repository";
import { apiWrapper } from "../../../../common/functions";
import { ApiKey } from "./apiKey";
import { ApiKeyAdapter } from "../../index";
import { ApiKeyCreateRequest } from "./types";
import { ApiKeyUpdateRequest } from "./types";
import { Paginator } from "../../../../common/pagination";
import { ListResponse } from "../../../../common/listResponse";
import { ListOptions } from "../../../../common/interfaces";
/**
 *ApiKey repository
 */
export class ApiKeyRepository extends Repository {
    public create(request: ApiKeyCreateRequest): Promise<ApiKey> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/api-keys",
                        method: "POST",
                        body: {
                            name: request.name,
                            owner: request.owner,
                            status: request.status,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, ApiKeyAdapter.fromApi(data, request));
            }
        );
    }
    public delete(apikeyId: string): Promise<void> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/api-keys/{apikey_id}",
                        method: "DELETE",
                        pathParams: {
                            apikey_id: apikeyId,
                        },
                    },
                    resultsFn
                );
            },
            (_data, done) => {
                done(null, null);
            }
        );
    }
    public get(apikeyId: string): Promise<ApiKey> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/api-keys/{apikey_id}",
                        method: "GET",
                        pathParams: {
                            apikey_id: apikeyId,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, ApiKeyAdapter.fromApi(data));
            }
        );
    }
    public list(options?: ListOptions): Paginator<ApiKey, ListOptions> {
        const pageFunc = (pageOptions: ListOptions): Promise<ListResponse<ApiKey>> => {
            pageOptions = pageOptions || {};
            return apiWrapper(
                resultsFn => {
                    this.client._CallApi(
                        {
                            url: "/v3/api-keys",
                            method: "GET",
                            query: {
                                after: pageOptions.after,
                                include: pageOptions.include,
                                limit: pageOptions.limit,
                                order: pageOptions.order,
                            },
                        },
                        resultsFn
                    );
                },
                (data: ListResponse<ApiKey>, done) => {
                    done(null, new ListResponse(data, data.data, ApiKeyAdapter.fromApi));
                },
                null,
                true
            );
        };
        return new Paginator(pageFunc, options);
    }
    public me(): Promise<ApiKey> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/api-keys/me",
                        method: "GET",
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, ApiKeyAdapter.fromApi(data));
            }
        );
    }
    public update(request: ApiKeyUpdateRequest, apikeyId: string): Promise<ApiKey> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/api-keys/{apikey_id}",
                        method: "PUT",
                        pathParams: {
                            apikey_id: apikeyId,
                        },
                        body: {
                            name: request.name,
                            owner: request.owner,
                            status: request.status,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, ApiKeyAdapter.fromApi(data, request));
            }
        );
    }
}
