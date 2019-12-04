import { ConfigOptions } from "../../common/config";
import { DefaultApi as UpdateApi } from "../_api/update_service";
import { EndpointsBase } from "../common/endpointsBase";
export declare class Endpoints extends EndpointsBase {
    update: UpdateApi;
    constructor(options?: ConfigOptions);
}
