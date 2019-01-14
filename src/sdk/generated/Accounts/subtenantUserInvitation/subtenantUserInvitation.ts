import { Entity } from "../../../common/entity";
import { LoginProfile } from "../loginProfile/loginProfile";
/**
 *SubtenantUserInvitation
 */
export interface SubtenantUserInvitation extends Entity {
    /**
     *accountId
     */
    accountId?: string;

    /**
     *createdAt
     */
    createdAt?: Date;

    /**
     *email
     */
    email?: string;

    /**
     *expiration
     */
    expiration?: Date;

    /**
     *id
     */
    id?: string;

    /**
     *loginProfiles
     */
    loginProfiles?: Array<LoginProfile>;

    /**
     *updatedAt
     */
    updatedAt?: Date;

    /**
     *userId
     */
    userId?: string;
}
