import { Repository } from "../../../common/repository";
import { apiWrapper } from "../../../legacy/common/functions";
import { CertificateIssuerConfig } from "./certificateIssuerConfig";
import { CertificateIssuerConfigAdapter } from "../../index";
import { CertificateIssuerConfigCreateRequest } from "./types";
import { extractFilter } from "../../../common/filters";
import { CertificateIssuerConfigCertificateIssuerConfigListOptions } from "./types";
import { CertificateIssuerConfigUpdateRequest } from "./types";
import { Paginator } from "../../../common/pagination";
import { ListResponse } from "../../../legacy/common/listResponse";
import { ListOptions } from "../../../legacy/common/interfaces";
/**
 *CertificateIssuerConfig repository
 */
export class CertificateIssuerConfigRepository extends Repository {
    /**
     * create
     * @param request - The entity to perform action on.
     */
    public create(request: CertificateIssuerConfigCreateRequest): Promise<CertificateIssuerConfig> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/certificate-issuer-configurations",
                        method: "POST",
                        body: {
                            certificate_issuer_id: request.certificateIssuerId,
                            reference: request.reference,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, CertificateIssuerConfigAdapter.fromApi(data, request));
            }
        );
    }
    /**
* delete
* @param id - The ID of the certificate issuer configuration.

*/
    public delete(id: string): Promise<void> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/certificate-issuer-configurations/{certificate-issuer-configuration-id}",
                        method: "DELETE",
                        pathParams: {
                            "certificate-issuer-configuration-id": id,
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
    /**
     * getDefault
     */
    public getDefault(): Promise<CertificateIssuerConfig> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/certificate-issuer-configurations/lwm2m",
                        method: "GET",
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, CertificateIssuerConfigAdapter.fromApi(data));
            }
        );
    }
    /**
     * list
     * @param options - Options to use for the List
     */
    public list(
        options?: CertificateIssuerConfigCertificateIssuerConfigListOptions
    ): Paginator<CertificateIssuerConfig, ListOptions> {
        const pageFunc = (
            pageOptions: CertificateIssuerConfigCertificateIssuerConfigListOptions
        ): Promise<ListResponse<CertificateIssuerConfig>> => {
            pageOptions = pageOptions || {};
            return apiWrapper(
                resultsFn => {
                    this.client._CallApi(
                        {
                            url: "/v3/certificate-issuer-configurations",
                            method: "GET",
                            query: {
                                reference__eq: extractFilter(pageOptions.filter, "reference", "eq"),
                                after: pageOptions.after,
                                include: pageOptions.include,
                                limit: pageOptions.limit,
                                order: pageOptions.order,
                            },
                        },
                        resultsFn
                    );
                },
                (data: ListResponse<CertificateIssuerConfig>, done) => {
                    done(null, new ListResponse(data, data.data, CertificateIssuerConfigAdapter.fromApi));
                },
                null
            );
        };
        return new Paginator(pageFunc, options);
    }
    /**
* read
* @param id - The ID of the certificate issuer configuration.

*/
    public read(id: string): Promise<CertificateIssuerConfig> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/certificate-issuer-configurations/{certificate-issuer-configuration-id}",
                        method: "GET",
                        pathParams: {
                            "certificate-issuer-configuration-id": id,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, CertificateIssuerConfigAdapter.fromApi(data));
            }
        );
    }
    /**
* update
* @param request - The entity to perform action on.
* @param id - The ID of the certificate issuer configuration.

*/
    public update(request: CertificateIssuerConfigUpdateRequest, id: string): Promise<CertificateIssuerConfig> {
        return apiWrapper(
            resultsFn => {
                this.client._CallApi(
                    {
                        url: "/v3/certificate-issuer-configurations/{certificate-issuer-configuration-id}",
                        method: "PUT",
                        pathParams: {
                            "certificate-issuer-configuration-id": id,
                        },
                        body: {
                            certificate_issuer_id: request.certificateIssuerId,
                        },
                    },
                    resultsFn
                );
            },
            (data, done) => {
                done(null, CertificateIssuerConfigAdapter.fromApi(data, request));
            }
        );
    }
}
