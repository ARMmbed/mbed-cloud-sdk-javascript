import { ListOptions } from "../../../legacy/common/interfaces";
/**
 *CertificateIssuerConfigCreateRequest
 */
export interface CertificateIssuerConfigCreateRequest {
    /**
     *certificateIssuerId
     */
    readonly certificateIssuerId?: string;

    /**
     *certificateReference
     */
    readonly certificateReference: string;
}
/**
 *CertificateIssuerConfigUpdateRequest
 */
export interface CertificateIssuerConfigUpdateRequest {
    /**
     *certificateIssuerId
     */
    readonly certificateIssuerId?: string;
}
/**
 *CertificateIssuerConfigCertificateReferenceFilter
 */
export interface CertificateIssuerConfigCertificateReferenceFilter {
    /**
     *eq
     */
    eq?: string;
}
/**
 *CertificateIssuerConfigFilter
 */
export interface CertificateIssuerConfigFilter {
    /**
     *certificate_reference
     */
    certificate_reference?: CertificateIssuerConfigCertificateReferenceFilter;
}
/**
 *CertificateIssuerConfigListOptions
 */
export interface CertificateIssuerConfigListOptions extends ListOptions {
    /**
     *filter
     */
    filter?: CertificateIssuerConfigFilter;
}