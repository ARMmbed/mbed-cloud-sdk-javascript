import { Adapter } from "../../../common/adapter";
import { PreSharedKey } from "./preSharedKey";
/**
 *PreSharedKey adapter
 */
export class PreSharedKeyAdapter extends Adapter {
    /**
     * fromApi
     * @param data - data
     * @param instance - instance
     */
    public static fromApi(data: any, instance?: any): PreSharedKey {
        if (!data) {
            return null;
        }
        const mappedEntity = PreSharedKeyAdapter.assignDefined(instance || {}, {
            _discriminator: "PRE_SHARED_KEY",
            createdAt: data.created_at,
            endpointName: data.endpoint_name,
        });
        return mappedEntity;
    }
}