import { CallbackFn } from "../../common/interfaces";
import { FirmwareManifestObject, ManifestContents } from "../types";
import { UpdateApi } from "../updateApi";
/**
 * Firmware Manifest
 */
export declare class FirmwareManifest {
    private _api;
    /**
     * The ID of the firmware manifest
     */
    readonly id: string;
    /**
     * The URL of the firmware manifest
     */
    readonly url: string;
    /**
     * The class of device
     */
    readonly deviceClass?: string;
    /**
     * The contents of the manifest
     */
    readonly contents: ManifestContents;
    /**
     * The time the object was created
     */
    readonly createdAt: Date;
    /**
     * The time the object was updated
     */
    readonly updatedAt: Date;
    /**
     * The version of the firmware manifest (as a timestamp)
     */
    readonly timestamp: Date;
    constructor(init?: Partial<FirmwareManifest>, _api?: UpdateApi);
    /**
     * Delete the firmware manifest
     * @returns Promise containing any error
     */
    delete(): Promise<void>;
    /**
     * Delete the firmware manifest
     * @param callback A function that is passed any error
     */
    delete(callback: CallbackFn<void>): void;
}
export interface FirmwareManifest extends FirmwareManifestObject {
}