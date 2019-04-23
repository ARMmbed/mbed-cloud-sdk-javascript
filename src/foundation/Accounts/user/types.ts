import { ListOptions } from "../../../legacy/common/interfaces";
import { LoginProfile } from "../loginProfile/loginProfile";
export type UserStatus = "ENROLLING" | "INVITED" | "ACTIVE" | "RESET" | "INACTIVE";
/**
 *UserCreateRequest
 */
export interface UserCreateRequest {
    /**
     *Address.
     *@example 110 Fulbourn Rd, Cambridge, United Kingdom
     */
    readonly address?: string;

    /**
     *The email address.
     *@example user@arm.com
     */
    readonly email?: string;

    /**
     *The full name of the user.
     *@example User Doe
     */
    readonly fullName?: string;

    /**
     *Represents a user login profile in Device Management.
     */
    readonly loginProfiles?: Array<LoginProfile>;

    /**
     *A flag indicating that the user has consented to receive marketing information.
     *@example true
     */
    readonly marketingAccepted?: boolean;

    /**
     *The password when creating a new user. It will be generated when not present in the request.
     *@example PZf9eEUH43DAPE9ULINFeuj
     */
    readonly password?: string;

    /**
     *Phone number.
     *@example +44 (1223) 400 400
     */
    readonly phoneNumber?: string;

    /**
     *A flag indicating that the user has accepted General Terms and Conditions.
     *@example true
     */
    readonly termsAccepted?: boolean;

    /**
     *A username containing alphanumerical letters and -,._@+= characters.
     *@example admin
     */
    readonly username?: string;
}
/**
 *UserUpdateRequest
 */
export interface UserUpdateRequest {
    /**
     *Address.
     *@example 110 Fulbourn Rd, Cambridge, United Kingdom
     */
    readonly address?: string;

    /**
     *The full name of the user.
     *@example User Doe
     */
    readonly fullName?: string;

    /**
     *Represents a user login profile in Device Management.
     */
    readonly loginProfiles?: Array<LoginProfile>;

    /**
     *A flag indicating that the user has consented to receive marketing information.
     *@example true
     */
    readonly marketingAccepted?: boolean;

    /**
     *Phone number.
     *@example +44 (1223) 400 400
     */
    readonly phoneNumber?: string;

    /**
     *A flag indicating that the user has accepted General Terms and Conditions.
     *@example true
     */
    readonly termsAccepted?: boolean;

    /**
     *A flag indicating whether two-factor authentication (TOTP) has been enabled.
     *@example true
     */
    readonly twoFactorAuthentication?: boolean;

    /**
     *A username containing alphanumerical letters and -,._@+= characters.
     *@example admin
     */
    readonly username?: string;
}
/**
 *UserEmailFilter
 */
export interface UserEmailFilter {
    /**
     *email equal to
     */
    eq?: string;
}
/**
 *UserStatusFilter
 */
export interface UserStatusFilter {
    /**
     *status equal to
     */
    eq?: UserStatus;

    /**
     *status in
     */
    in?: Array<UserStatus>;

    /**
     *status not in
     */
    nin?: Array<UserStatus>;
}
/**
 *UserLoginProfileFilter
 */
export interface UserLoginProfileFilter {
    /**
     *loginProfile equal to
     */
    eq?: string;
}
/**
 *UserFilter
 */
export interface UserFilter {
    /**
     *Filter by email on User
     */
    email?: string | UserEmailFilter;

    /**
     *Filter by status on User
     */
    status?: UserStatus | UserStatusFilter;

    /**
     *Filter by loginProfile on User
     */
    loginProfile?: string | UserLoginProfileFilter;
}
/**
 *UserListOptions
 */
export interface UserListOptions extends ListOptions {
    /**
     *Filter for User
     */
    filter?: UserFilter;
}
