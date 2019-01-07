import { Adapter } from "../../../common/adapter";
import { Device } from "./device";
/**
 *Device adapter
 */
export class DeviceAdapter extends Adapter {
    public static fromApi(data: any, instance?: Device): Device {
        return DeviceAdapter.assignDefined<Device>(instance || {}, {
            _discriminator: "DEVICE",
            accountId: data.account_id,
            autoUpdate: data.auto_update,
            bootstrapExpirationDate: data.bootstrap_expiration_date,
            bootstrappedTimestamp: data.bootstrapped_timestamp,
            caId: data.ca_id,
            connectorExpirationDate: data.connector_expiration_date,
            createdAt: data.created_at,
            customAttributes: data.custom_attributes,
            deployedState: data.deployed_state,
            deployment: data.deployment,
            description: data.description,
            deviceClass: data.device_class,
            deviceExecutionMode: data.device_execution_mode,
            deviceKey: data.device_key,
            endpointName: data.endpoint_name,
            endpointType: data.endpoint_type,
            enrolmentListTimestamp: data.enrolment_list_timestamp,
            firmwareChecksum: data.firmware_checksum,
            hostGateway: data.host_gateway,
            id: data.id,
            manifest: data.manifest,
            manifestTimestamp: data.manifest_timestamp,
            mechanism: data.mechanism,
            mechanismUrl: data.mechanism_url,
            name: data.name,
            serialNumber: data.serial_number,
            state: data.state,
            updatedAt: data.updated_at,
            vendorId: data.vendor_id,
        });
    }
}