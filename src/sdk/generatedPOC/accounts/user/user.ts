import { UserStatusEnum } from "../../enums";
import { LoginHistory } from "../loginHistory/loginHistory";
import { apiWrapper } from "../../../../common/functions";
import { ConnectionOptions, ListOptions } from "../../../../common/interfaces";
import { EntityBase } from "../../../common/entityBase";
import { Config } from "../../../client/config";
import { Client } from "../../../client/client";
import { ListResponse } from "../../../../common/listResponse";
import { PolicyGroup } from "../policyGroup/policyGroup";
import { Paginator } from "../../../../common/pagination";

export class User extends EntityBase {
    public readonly _renames: { [key: string]: string } = {
        is_totp_enabled: "twoFactorAuthentication",
        is_gtc_accepted: "termsAccepted",
        is_marketing_accepted: "marketingAccepted",
        groups: "groupIds",
    };

    public readonly _foreignKeys: { [key: string]: { [key: string]: any } } = {
        loginHistory: {
            type: LoginHistory,
            array: true,
        }
    };

    /**
     * The email address.
     */
    public email?: string;
    /**
     * The full name of the user.
     */
    public fullName?: string;
    /**
     * A username containing alphanumerical letters and -,._@+= characters.
     */
    public username?: string;
    /**
     * The password when creating a new user. It will be generated when not present in the request.
     */
    public password?: string;
    /**
     * Phone number.
     */
    public phoneNumber?: string;
    /**
     * Address.
     */
    public address?: string;
    /**
     * A flag indicating that the General Terms and Conditions has been accepted.
     */
    public termsAccepted?: boolean;
    /**
     * A flag indicating that receiving marketing information has been accepted.
     */
    public marketingAccepted?: boolean;
    /**
     * A list of group IDs this user belongs to.
     */
    public groupIds?: Array<string>;
    /**
     * The status of the user. INVITED means that the user has not accepted the invitation request. RESET means that the password must be changed immediately.
     */
    public status?: UserStatusEnum;
    /**
     * The UUID of the account.
     */
    public accountId?: string;
    /**
     * A flag indicating whether the user's email address has been verified or not.
     */
    public emailVerified?: boolean;
    /**
     * Creation time.
     */
    public createdAt?: Date;
    /**
     * A timestamp of the user creation in the storage, in milliseconds.
     */
    public creationTime?: number;
    /**
     * A timestamp of the latest change of the user password, in milliseconds.
     */
    public passwordChangedTime?: number;
    /**
     * Whether two factor authentication has been enabled for this user.
     */
    public twoFactorAuthentication?: boolean;
    /**
     * A timestamp of the latest login of the user, in milliseconds.
     */
    public lastLoginTime?: number;
    /**
     * History of logins for this user.
     */
    public loginHistory?: Array<LoginHistory>;

    constructor(config?: ConnectionOptions | Config) {
        super();
        if (config instanceof Config) {
            this.config = config;
        } else {
            this.config = new Config(config);
        }
    }

    /**
     * List users
     * @param options filter options
     */
    public list(options?: ListOptions): Paginator<User, ListOptions> {
        const pageFunc = (pageOptions: ListOptions): Promise<ListResponse<User>> => {
            return apiWrapper(resultsFn => {
                const { limit, after, order, include } = pageOptions as ListOptions;
                Client._CallApi<User>({
                    url: "/v3/users",
                    method: "GET",
                    query: { after, include, order, limit },
                    config: this.config,
                    paginated: true,
                }, this, resultsFn);
            }, (data: ListResponse<User>, done) => {
                done(null, new ListResponse(data, data.data));
            });
        };

        return new Paginator(pageFunc, options);
    }

    /**
     * List users groups
     *
     * @param options options
     * @returns Promise of listResponse
     */
    public groups(options?: ListOptions): Paginator<PolicyGroup, ListOptions> {
        const pageFunc = (pageOptions: ListOptions): Promise<ListResponse<PolicyGroup>> => {
            return apiWrapper(resultsFn => {
                const { limit, after, order, include } = pageOptions as ListOptions;
                Client._CallApi<PolicyGroup>({
                    url: "/v3/users/{user-id}/groups",
                    method: "GET",
                    query: { after, include, order, limit },
                    pathParams: { "user-id": this.id },
                    config: this.config,
                    paginated: true,
                }, new PolicyGroup(), resultsFn);
            }, (data: ListResponse<PolicyGroup>, done) => {
                done(null, new ListResponse(data, data.data));
            });
        };

        return new Paginator(pageFunc, options);
    }

    /**
     * Creates a user
     * @returns Promise containing user
     */
    public create(action?: string): Promise<User> {
        return apiWrapper(resultsFn => {
            const body = {
                address: this.address,
                email: this.email,
                full_name: this.fullName,
                groups: this.groupIds,
                is_marketing_accepted: this.marketingAccepted,
                password: this.password,
                phone_number: this.phoneNumber,
                is_gtc_accepted: this.termsAccepted,
                username: this.username,
            };

            Client._CallApi({
                url: "/v3/users",
                method: "POST",
                query: { action: action },
                body: body,
                config: this.config
            }, this, resultsFn);
        }, (data, done) => {
            done(null, data);
        });
    }

    /**
     * Gets a user
     * @returns Promise containing user
     */
    public get(): Promise<User> {
        return apiWrapper(resultsFn => {
            Client._CallApi<User>({
                url: "/v3/users/{user-id}",
                method: "GET",
                pathParams: { "user-id": this.id },
                config: this.config
            }, this, resultsFn);
        }, (data, done) => {
            done(null, data);
        });
    }

    /**
     * Updates the user
     * @returns Promise containing user
     */
    public update(): Promise<User> {
        return apiWrapper(resultsFn => {
            const body = {
                address: this.address,
                full_name: this.fullName,
                groups: this.groupIds,
                is_marketing_accepted: this.marketingAccepted,
                phone_number: this.phoneNumber,
                is_gtc_accepted: this.termsAccepted,
                is_totp_enabled: this.twoFactorAuthentication,
                username: this.username,
            };

            Client._CallApi({
                url: "/v3/users/{user-id}",
                method: "PUT",
                pathParams: { "user-id": this.id },
                body: body,
                config: this.config
            }, this, resultsFn);
        }, (data, done) => {
            done(null, data);
        });
    }

    /**
     * Delete the user
     * @returns Promise containing any error
     */
    public delete(): Promise<User> {
        return apiWrapper(resultsFn => {
            Client._CallApi<User>({
                url: "/v3/users/{user-id}",
                method: "DELETE",
                pathParams: { "user-id": this.id },
                config: this.config
            }, this, resultsFn);
        }, (data: User, done) => {
            done(null, data);
        });
    }
}