import { Adapter } from "../../../common/adapter";
import { OidcRequestAdapter } from "../..";
/**
 *SubtenantIdentityProvider adapter
 */
export class SubtenantIdentityProviderAdapter extends Adapter {
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    static fromApi(data, instance) {
        if (!data) {
            return null;
        }
        const mappedEntity = SubtenantIdentityProviderAdapter.assignDefined(instance || {}, {
            _discriminator: "SUBTENANT_IDENTITY_PROVIDER",
            accountId: data.account_id,
            createdAt: data.created_at,
            description: data.description,
            id: data.id,
            isDefault: data.is_default,
            name: data.name,
            oidcAttributes: OidcRequestAdapter.fromApi(data.oidc_attributes),
            saml2Attributes: data.saml2_attributes,
            status: data.status,
            updatedAt: data.updated_at,
        });
        return mappedEntity;
    }
}
//# sourceMappingURL=subtenantIdentityProviderAdapter.js.map