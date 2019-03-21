import { ListOptions } from "../../../legacy/common/interfaces";
import { LoginProfile } from "../loginProfile/loginProfile";
export type UserStatus = "ENROLLING" | "INVITED" | "ACTIVE" | "RESET" | "INACTIVE";
/**
 *UserCreateRequest
 */
export interface UserCreateRequest {
    /**
     *address
     */
    readonly address?: string;

    /**
     *email
     */
    readonly email?: string;

    /**
     *fullName
     */
    readonly fullName?: string;

    /**
     *loginProfiles
     */
    readonly loginProfiles?: Array<LoginProfile>;

    /**
     *marketingAccepted
     */
    readonly marketingAccepted?: boolean;

    /**
     *password
     */
    readonly password?: string;

    /**
     *phoneNumber
     */
    readonly phoneNumber?: string;

    /**
     *termsAccepted
     */
    readonly termsAccepted?: boolean;

    /**
     *username
     */
    readonly username?: string;
}
/**
 *UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     *address
     */
    readonly address?: string;

    /**
     *fullName
     */
    readonly fullName?: string;

    /**
     *loginProfiles
     */
    readonly loginProfiles?: Array<LoginProfile>;

    /**
     *marketingAccepted
     */
    readonly marketingAccepted?: boolean;

    /**
     *phoneNumber
     */
    readonly phoneNumber?: string;

    /**
     *termsAccepted
     */
    readonly termsAccepted?: boolean;

    /**
     *twoFactorAuthentication
     */
    readonly twoFactorAuthentication?: boolean;

    /**
     *username
     */
    readonly username?: string;
}
/**
 *UserEmailFilter
 */
export interface UserEmailFilter {
    /**
     *eq
     */
    eq?: string;
}
/**
 *UserStatusFilter
 */
export interface UserStatusFilter {
    /**
     *eq
     */
    eq?: UserStatus;

    /**
     *in
     */
    in?: Array<UserStatus>;

    /**
     *nin
     */
    nin?: Array<UserStatus>;
}
/**
 *UserLoginProfileFilter
 */
export interface UserLoginProfileFilter {
    /**
     *eq
     */
    eq?: string;
}
/**
 *UserFilter
 */
export interface UserFilter {
    /**
     *email
     */
    email?: string | UserEmailFilter;

    /**
     *status
     */
    status?: UserStatus | UserStatusFilter;

    /**
     *loginProfile
     */
    loginProfile?: string | UserLoginProfileFilter;
}
/**
 *UserListOptions
 */
export interface UserListOptions extends ListOptions {
    /**
     *filter
     */
    filter?: UserFilter;
}
