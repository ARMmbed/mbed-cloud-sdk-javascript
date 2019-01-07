import { Entity } from "../../../common/entity";
import { DeviceDeployedStateEnum, DeviceMechanismEnum, DeviceStateEnum } from "./types";
/**
 *Device
 */
export interface Device extends Entity {
    /**
     *accountId
     */
    accountId?: string;

    /**
     *autoUpdate
     */
    autoUpdate?: boolean;

    /**
     *bootstrapExpirationDate
     */
    bootstrapExpirationDate?: Date;

    /**
     *bootstrappedTimestamp
     */
    bootstrappedTimestamp?: Date;

    /**
     *caId
     */
    caId?: string;

    /**
     *connectorExpirationDate
     */
    connectorExpirationDate?: Date;

    /**
     *createdAt
     */
    createdAt?: Date;

    /**
     *customAttributes
     */
    customAttributes?: { [key: string]: string };

    /**
     *deployedState
     */
    deployedState?: DeviceDeployedStateEnum;

    /**
     *deployment
     */
    deployment?: string;

    /**
     *description
     */
    description?: string;

    /**
     *deviceClass
     */
    deviceClass?: string;

    /**
     *deviceExecutionMode
     */
    deviceExecutionMode?: number;

    /**
     *deviceKey
     */
    deviceKey?: string;

    /**
     *endpointName
     */
    endpointName?: string;

    /**
     *endpointType
     */
    endpointType?: string;

    /**
     *enrolmentListTimestamp
     */
    enrolmentListTimestamp?: Date;

    /**
     *firmwareChecksum
     */
    firmwareChecksum?: string;

    /**
     *hostGateway
     */
    hostGateway?: string;

    /**
     *id
     */
    id?: string;

    /**
     *manifest
     */
    manifest?: string;

    /**
     *manifestTimestamp
     */
    manifestTimestamp?: Date;

    /**
     *mechanism
     */
    mechanism?: DeviceMechanismEnum;

    /**
     *mechanismUrl
     */
    mechanismUrl?: string;

    /**
     *name
     */
    name?: string;

    /**
     *serialNumber
     */
    serialNumber?: string;

    /**
     *state
     */
    state?: DeviceStateEnum;

    /**
     *updatedAt
     */
    updatedAt?: Date;

    /**
     *vendorId
     */
    vendorId?: string;
}