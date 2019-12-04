/**
 * billing REST API documentation
 * This document contains the public REST API definitions of the mbed-billing service.
 *
 * OpenAPI spec version: 1.4.4
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import * as superagent from "superagent";
import { ApiBase } from "../common/apiBase";
/**
 * An active service package.
 */
export interface ActiveServicePackage {
    /**
     * Service package creation time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    created: Date;
    /**
     * Service package expiration time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    expires: Date;
    /**
     * Size of firmware update quota of this service package.
     */
    firmware_update_count: number;
    /**
     * Is this service package on grace period or not?
     */
    grace_period: boolean;
    /**
     * ID of this service package.
     */
    id: string;
    /**
     * Service package latest modified time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    modified: Date;
    /**
     * Next service package ID if this service package has a pending renewal or null.
     */
    next_id?: string;
    /**
     * Previous service package ID or null.
     */
    previous_id?: string;
    /**
     * Service package start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    start_time: Date;
}
/**
 * Aggregated quota usage entry.
 */
export declare namespace AggregatedQuotaUsageReport {
    type TypeEnum = "reservation" | "reservation_release" | "reservation_termination" | "package_renewal" | "package_creation" | "package_termination";
}
export interface AggregatedQuotaUsageReport {
    account_id: string;
    /**
     * Amount of quota usage entry. Negative if it is quota consumption.
     */
    amount: number;
    /**
     * Campaign name of quota usage entry. Null if quota usage entry type is not reservation or reservation release.
     */
    campaign_name?: string;
    /**
     * Added time of quota usage entry in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    time: Date;
    /**
     * Type of quota usage entry.
     */
    type: AggregatedQuotaUsageReport.TypeEnum;
}
/**
 * 400 Bad Request response.
 */
export declare namespace BadRequestErrorResponse {
    type ObjectEnum = "error";
    type TypeEnum = "validation_error";
}
export interface BadRequestErrorResponse {
    /**
     * Response code. Always set to 400.
     */
    code: number;
    fields: Array<BadRequestErrorResponseField>;
    /**
     * A human readable message with detailed info.
     */
    message: string;
    /**
     * Always set to 'error'.
     */
    object: BadRequestErrorResponse.ObjectEnum;
    /**
     * Request ID
     */
    request_id: string;
    /**
     * Error type. Always set to 'validation_error'.
     */
    type: BadRequestErrorResponse.TypeEnum;
}
/**
 * Single field that failed validation
 */
export interface BadRequestErrorResponseField {
    /**
     * A human readable message with detailed validation error.
     */
    message: string;
    /**
     * Name of the field that failed the validation. If name is set to \"body\" then the validation failed on request body.
     */
    name: string;
}
/**
 * The response includes the URL to download the raw billing data.
 */
export interface BillingReportRawDataResponse {
    /**
     * The filename of the raw billing data file to be downloaded. It contains the file extensions.
     */
    filename: string;
    /**
     * API Resource name.
     */
    object: string;
    /**
     * The URL to download the raw billing data.
     */
    url: string;
}
/**
 * 403 Forbidden.
 */
export declare namespace ForbiddenErrorResponse {
    type ObjectEnum = "error";
    type TypeEnum = "forbidden";
}
export interface ForbiddenErrorResponse {
    /**
     * Response code. Always set to 403.
     */
    code: number;
    /**
     * A human readable message with detailed info.
     */
    message: string;
    /**
     * Always set to 'error'.
     */
    object: ForbiddenErrorResponse.ObjectEnum;
    /**
     * Request ID
     */
    request_id: string;
    /**
     * Error type. Always set to 'forbidden'.
     */
    type: ForbiddenErrorResponse.TypeEnum;
}
/**
 * 500 Internal Server Error response.
 */
export declare namespace InternalServerErrorResponse {
    type ObjectEnum = "error";
    type TypeEnum = "internal_error";
}
export interface InternalServerErrorResponse {
    /**
     * Response code. Always set to 500.
     */
    code: number;
    /**
     * A human readable message with detailed info.
     */
    message: string;
    /**
     * Always set to 'error'.
     */
    object: InternalServerErrorResponse.ObjectEnum;
    /**
     * Request ID
     */
    request_id: string;
    /**
     * Error type. Always set to 'internal_error'.
     */
    type: InternalServerErrorResponse.TypeEnum;
}
/**
 * A pending service package.
 */
export interface PendingServicePackage {
    /**
     * Service package creation time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    created: Date;
    /**
     * Service package expiration time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    expires: Date;
    /**
     * Size of firmware update quota of this service package.
     */
    firmware_update_count: number;
    /**
     * ID of this service package.
     */
    id: string;
    /**
     * Service package latest modified time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    modified: Date;
    /**
     * Previous service package ID.
     */
    previous_id: string;
    /**
     * Service package start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    start_time: Date;
}
/**
 * Previously active service package.
 */
export declare namespace PreviousServicePackage {
    type ReasonEnum = "renewed" | "terminated";
}
export interface PreviousServicePackage {
    /**
     * Service package creation time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    created: Date;
    /**
     * Service package end time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    end_time: Date;
    /**
     * Service package expiration time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    expires: Date;
    /**
     * Size of firmware update quota of this service package.
     */
    firmware_update_count: number;
    /**
     * ID of this service package.
     */
    id: string;
    /**
     * Service package latest modified time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    modified: Date;
    /**
     * Next service package ID if this service package has a pending renewal or null.
     */
    next_id?: string;
    /**
     * Previous service package ID.
     */
    previous_id?: string;
    /**
     * Reason why this service package was ended
     */
    reason: PreviousServicePackage.ReasonEnum;
    /**
     * Service package start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    start_time: Date;
}
/**
 * Account's quota usage entry for queried month.
 */
export declare namespace QuotaUsageReport {
    type TypeEnum = "reservation" | "reservation_release" | "reservation_termination" | "package_renewal" | "package_creation" | "package_termination";
}
export interface QuotaUsageReport {
    /**
     * Amount of quota usage entry. Negative if it is quota consumption.
     */
    amount: number;
    /**
     * Campaign name of quota usage entry. Null if quota usage entry type is not reservation or reservation release.
     */
    campaign_name?: string;
    /**
     * Added time of quota usage entry in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    time: Date;
    /**
     * Type of quota usage entry.
     */
    type: QuotaUsageReport.TypeEnum;
}
/**
 * Account contact information.
 */
export interface ReportAccountContactInfo {
    address_line1?: string;
    address_line2?: string;
    city?: string;
    company: string;
    contact?: string;
    country?: string;
    email?: string;
    /**
     * Account id.
     */
    id: string;
    phone_number?: string;
    postal_code?: string;
    state?: string;
}
export interface ReportBillingData {
    active_devices: number;
    firmware_updates: number;
    /**
     * Billing report generated time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    generated: Date;
    /**
     * Billing report end time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    period_end: Date;
    /**
     * Billing report start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    period_start: Date;
}
/**
 * 404 Not Found response.
 */
export declare namespace ReportNotFoundErrorResponse {
    type ObjectEnum = "error";
    type TypeEnum = "report_not_found";
}
export interface ReportNotFoundErrorResponse {
    /**
     * Response code. Always set to 404.
     */
    code: number;
    /**
     * A human readable message with detailed info.
     */
    message: string;
    /**
     * Always set to 'error'.
     */
    object: ReportNotFoundErrorResponse.ObjectEnum;
    /**
     * Request ID
     */
    request_id: string;
    /**
     * Error type. Always set to 'report_not_found'.
     */
    type: ReportNotFoundErrorResponse.TypeEnum;
}
/**
 * Billing report response.
 */
export declare namespace ReportResponse {
    type ObjectEnum = "billing-report";
}
export interface ReportResponse {
    /**
     * Account contact information.
     */
    account: ReportAccountContactInfo;
    /**
     * Aggregated report billing data including all subtenant accounts if any.
     */
    aggregated: ReportBillingData;
    /**
     * Report billing data.
     */
    billing_data: ReportBillingData;
    /**
     * Billing report id.
     */
    id: string;
    /**
     * Month of requested billing report
     */
    month: string;
    /**
     * Billing report response object. Always set to 'billing-report'.
     */
    object: ReportResponse.ObjectEnum;
    /**
     * Report service package.
     */
    service_package?: ServicePackageReport;
    /**
     * List of billing reports for subtenant accounts. Empty list if account does not have any subtenant account.
     */
    subtenants: Array<SubtenantAccountReport>;
}
/**
 * Account's service package metadata.
 */
export interface ServicePackageMetadata {
    /**
     * Service package end time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    end_time: Date;
    /**
     * Current available service package quota.
     */
    remaining_quota: number;
    /**
     * Sum of all open reservations for this account.
     */
    reserved_quota: number;
    /**
     * Service package start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    start_time: Date;
}
/**
 * Quota of the service package.
 */
export declare namespace ServicePackageQuota {
    type ObjectEnum = "service-package-quota";
}
export interface ServicePackageQuota {
    /**
     * Always set to 'service-package-quota'.
     */
    object: ServicePackageQuota.ObjectEnum;
    /**
     * Available quota for the service package
     */
    quota: number;
}
/**
 * Quota history item.
 */
export declare namespace ServicePackageQuotaHistoryItem {
    type ReasonEnum = "reservation" | "reservation_release" | "reservation_termination" | "package_creation" | "package_renewal" | "package_termination";
}
export interface ServicePackageQuotaHistoryItem {
    /**
     * Added time of quota history entry in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    added: Date;
    /**
     * the amount of quota usage, negative or positive
     */
    amount: number;
    /**
     * Service package quota history id.
     */
    id: string;
    /**
     * Type of quota usage entry.
     */
    reason: ServicePackageQuotaHistoryItem.ReasonEnum;
    /**
     * Reservation details if reason is reservation, reservation_release or reservation_termination.
     */
    reservation?: ServicePackageQuotaHistoryReservation;
    /**
     * Service package details if reason is package_creation, package_renewal or package_termination
     */
    service_package?: ServicePackageQuotaHistoryServicePackage;
}
/**
 * Service package quota history reservation object.
 */
export interface ServicePackageQuotaHistoryReservation {
    /**
     * Account ID.
     */
    account_id: string;
    /**
     * Textual campaign name for this reservation.
     */
    campaign_name: string;
    /**
     * Reservation id.
     */
    id: string;
}
/**
 * Quota history of the service package.
 */
export declare namespace ServicePackageQuotaHistoryResponse {
    type ObjectEnum = "service-package-quota-history";
}
export interface ServicePackageQuotaHistoryResponse {
    /**
     * After which quota history id this paged response is fetched.
     */
    after?: string;
    /**
     * List of history items, empty list if no entries are available.
     */
    data: Array<ServicePackageQuotaHistoryItem>;
    /**
     * If there is next available quota history paged response to be fetched.
     */
    has_more: boolean;
    /**
     * Maximum amount of quota history entries contained in one paged response.
     */
    limit: number;
    /**
     * Always set to 'service-package-quota-history'.
     */
    object: ServicePackageQuotaHistoryResponse.ObjectEnum;
    /**
     * Sum of all quota history entries that should be returned
     */
    total_count: number;
}
/**
 * Service package quota history service package object.
 */
export interface ServicePackageQuotaHistoryServicePackage {
    /**
     * Service package expiration time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    expires: Date;
    /**
     * Size of firmware update quota of this service package.
     */
    firmware_update_count: number;
    /**
     * ID of this service package.
     */
    id: string;
    /**
     * Previous service package ID or null.
     */
    previous_id?: string;
    /**
     * Service package start time in RFC3339 date-time with millisecond accuracy and UTC time zone.
     */
    start_time: Date;
}
/**
 * Account's current service package data included in reporting.
 */
export interface ServicePackageReport {
    aggregated_quota_usage: Array<AggregatedQuotaUsageReport>;
    metadata: ServicePackageMetadata;
    quota_usage: Array<QuotaUsageReport>;
}
/**
 * Contains service package information for currently active service package, currently pending service package and all previous service packages this account has had.
 */
export declare namespace ServicePackagesResponse {
    type ObjectEnum = "service-packages";
}
export interface ServicePackagesResponse {
    /**
     * Currently active service package. Can be null.
     */
    active?: ActiveServicePackage;
    /**
     * Always set to 'service-packages'.
     */
    object: ServicePackagesResponse.ObjectEnum;
    /**
     * Current pending service package. Can be null.
     */
    pending?: PendingServicePackage;
    /**
     * List of previous service packages.
     */
    previous: Array<PreviousServicePackage>;
}
/**
 * Billing report for subtenant account.
 */
export interface SubtenantAccountReport {
    /**
     * Subtenant account contact information.
     */
    account: SubtenantReportAccountContactInfo;
    /**
     * Report billing data.
     */
    billing_data: ReportBillingData;
    /**
     * Report service package for subtenant account.
     */
    service_package?: SubtenantServicePackageReport;
}
/**
 * Subtenant account contact information.
 */
export interface SubtenantReportAccountContactInfo {
    address_line1?: string;
    address_line2?: string;
    city?: string;
    company: string;
    contact?: string;
    country?: string;
    /**
     * Account subtenant id if it is a subtenant.
     */
    customer_subtenant_id: string;
    email?: string;
    /**
     * Account id.
     */
    id: string;
    phone_number?: string;
    postal_code?: string;
    state?: string;
}
export interface SubtenantServicePackageReport {
    quota_usage: Array<QuotaUsageReport>;
}
/**
 * 401 Unauthorized response.
 */
export declare namespace UnauthorizedErrorResponse {
    type ObjectEnum = "error";
    type TypeEnum = "unauthorized";
}
export interface UnauthorizedErrorResponse {
    /**
     * Response code. Always set to 401.
     */
    code: number;
    /**
     * A human readable message with detailed info.
     */
    message: string;
    /**
     * Always set to 'error'.
     */
    object: UnauthorizedErrorResponse.ObjectEnum;
    /**
     * Request ID
     */
    request_id: string;
    /**
     * Error type. Always set to 'unauthorized'.
     */
    type: UnauthorizedErrorResponse.TypeEnum;
}
/**
 * DefaultApi
 */
export declare class DefaultApi extends ApiBase {
    /**
     * Get billing report.
     * Fetch generated billing report for the currently authenticated commercial non-subtenant account. Billing reports for subtenant accounts are included in their aggregator&#39;s billing report response.
     * @param month Queried year and month of billing report
     */
    getBillingReport(month: string, callback?: (error: any, data?: ReportResponse, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
    /**
     * Get raw active devices billing data for the month.
     * Fetch raw active devices billing data for the currently authenticated commercial non-subtenant account. They are supplementary data for billing report. The raw active devices billing data for subtenant accounts are included in their aggregator&#39;s raw active devices billing data. Endpoint returns the URL to download the gzipped csv file. First line of the file is the header which describes information of active devices included, e.g. active device id.
     * @param month Queried year and month of billing report
     */
    getBillingReportActiveDevices(month: string, callback?: (error: any, data?: BillingReportRawDataResponse, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
    /**
     * Get raw firmware updates billing data for the month.
     * Fetch raw firmware updates billing data for the currently authenticated commercial non-subtenant account. They are supplementary data for billing report. The raw firmware updates billing data for subtenant accounts are included in their aggregator&#39;s raw firmware updates billing data. Endpoint returns the URL to download the gzipped csv file. First line of the file is the header which describes information of firmware updates included, e.g. firmware update device id.
     * @param month Queried year and month of billing report
     */
    getBillingReportFirmwareUpdates(month: string, callback?: (error: any, data?: BillingReportRawDataResponse, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
    /**
     * Service package quota
     * Get the available firmware update quota for the currently authenticated commercial acount.
     */
    getServicePackageQuota(callback?: (error: any, data?: ServicePackageQuota, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
    /**
     * Service package quota history
     * Get your quota usage history. This API is available for commercial accounts. Aggregator accounts can see own and subtenant quota usage data. History data is ordered in ascending order based on the added timestamp.
     * @param limit Maximum amount of quota history entries contained in one paged response.
     * @param after To fetch after which quota history id. The results will contain entries after specified entry.
     */
    getServicePackageQuotaHistory(limit?: number, after?: string, callback?: (error: any, data?: ServicePackageQuotaHistoryResponse, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
    /**
     * Get all service packages.
     * Get information of all service packages for currently authenticated commercial account. The response is returned with descending order by service package created timestamp, listing first pending service package, then active service package, and previous service packages at last.
     */
    getServicePackages(callback?: (error: any, data?: ServicePackagesResponse, response?: superagent.Response) => any, requestOptions?: {
        [key: string]: any;
    }): superagent.SuperAgentRequest;
}
