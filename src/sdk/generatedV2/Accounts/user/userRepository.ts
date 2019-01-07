import { Repository } from "../../../common/repository";
import { apiWrapper } from "../../../../common/functions";
import { User } from "./user";
import { UserAdapter } from "../../index";
import { UserCreateRequest } from "./types";
import { UserUpdateRequest } from "./types";
import { Paginator } from "../../../../common/pagination";
import { ListResponse } from "../../../../common/listResponse";
import { ListOptions } from "../../../../common/interfaces";
/**
 *User repository
 */
export class UserRepository extends Repository {
    public create(request: UserCreateRequest, action?: string): Promise<User> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/users",
                        method: "POST",
                        query: {
                            action: action,
                        },
                        body: {
                            address: request.address,
                            email: request.email,
                            full_name: request.fullName,
                            login_profiles: request.loginProfiles,
                            is_marketing_accepted: request.marketingAccepted,
                            password: request.password,
                            phone_number: request.phoneNumber,
                            is_gtc_accepted: request.termsAccepted,
                            username: request.username,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, UserAdapter.fromApi(data, request));
            }
        );
    }
    public delete(id: string): Promise<void> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/users/{user_id}",
                        method: "DELETE",
                        pathParams: {
                            user_id: id,
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
    public get(id: string): Promise<User> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/users/{user_id}",
                        method: "GET",
                        pathParams: {
                            user_id: id,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, UserAdapter.fromApi(data));
            }
        );
    }
    public list(options?: ListOptions): Paginator<User, ListOptions> {
        const pageFunc = (pageOptions: ListOptions): Promise<ListResponse<User>> => {
            pageOptions = pageOptions || {};
            return apiWrapper(
                resultsFn => {
                    this.client._CallApi(
                        {
                            url: "/v3/users",
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
                (data: ListResponse<User>, done) => {
                    done(null, new ListResponse(data, data.data, UserAdapter.fromApi));
                },
                null,
                true
            );
        };
        return new Paginator(pageFunc, options);
    }
    public update(request: UserUpdateRequest, id: string): Promise<User> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/users/{user_id}",
                        method: "PUT",
                        pathParams: {
                            user_id: id,
                        },
                        body: {
                            address: request.address,
                            full_name: request.fullName,
                            login_profiles: request.loginProfiles,
                            is_marketing_accepted: request.marketingAccepted,
                            phone_number: request.phoneNumber,
                            is_gtc_accepted: request.termsAccepted,
                            is_totp_enabled: request.twoFactorAuthentication,
                            username: request.username,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, UserAdapter.fromApi(data, request));
            }
        );
    }
}
