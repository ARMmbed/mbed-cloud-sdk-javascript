import { ListOptions } from "../../../legacy/common/interfaces";
export type CertificateEnrollmentEnrollResultEnum = "success" | "failure" | "not_found" | "forbidden";
export type CertificateEnrollmentEnrollStatusEnum = "new" | "completed";
/**
 *CertificateEnrollmentDeviceIdFilter
 */
export interface CertificateEnrollmentDeviceIdFilter {
    /**
     *eq
     */
    eq?: string;
}
/**
 *CertificateEnrollmentCertificateNameFilter
 */
export interface CertificateEnrollmentCertificateNameFilter {
    /**
     *eq
     */
    eq?: string;
}
/**
 *CertificateEnrollmentEnrollStatusFilter
 */
export interface CertificateEnrollmentEnrollStatusFilter {
    /**
     *neq
     */
    neq?: CertificateEnrollmentEnrollStatusEnum;

    /**
     *eq
     */
    eq?: CertificateEnrollmentEnrollStatusEnum;
}
/**
 *CertificateEnrollmentEnrollResultFilter
 */
export interface CertificateEnrollmentEnrollResultFilter {
    /**
     *neq
     */
    neq?: CertificateEnrollmentEnrollResultEnum;

    /**
     *eq
     */
    eq?: CertificateEnrollmentEnrollResultEnum;
}
/**
 *CertificateEnrollmentCreatedAtFilter
 */
export interface CertificateEnrollmentCreatedAtFilter {
    /**
     *lte
     */
    lte?: Date;

    /**
     *gte
     */
    gte?: Date;
}
/**
 *CertificateEnrollmentUpdatedAtFilter
 */
export interface CertificateEnrollmentUpdatedAtFilter {
    /**
     *lte
     */
    lte?: Date;

    /**
     *gte
     */
    gte?: Date;
}
/**
 *CertificateEnrollmentFilter
 */
export interface CertificateEnrollmentFilter {
    /**
     *deviceId
     */
    deviceId?: string | CertificateEnrollmentDeviceIdFilter;

    /**
     *certificateName
     */
    certificateName?: string | CertificateEnrollmentCertificateNameFilter;

    /**
     *enrollStatus
     */
    enrollStatus?: CertificateEnrollmentEnrollStatusEnum | CertificateEnrollmentEnrollStatusFilter;

    /**
     *enrollResult
     */
    enrollResult?: CertificateEnrollmentEnrollResultEnum | CertificateEnrollmentEnrollResultFilter;

    /**
     *createdAt
     */
    createdAt?: CertificateEnrollmentCreatedAtFilter;

    /**
     *updatedAt
     */
    updatedAt?: CertificateEnrollmentUpdatedAtFilter;
}
/**
 *CertificateEnrollmentListOptions
 */
export interface CertificateEnrollmentListOptions extends ListOptions {
    /**
     *filter
     */
    filter?: CertificateEnrollmentFilter;
}
