import { Entity } from "../../../common/entity";
import { DeviceEnrollmentBulkDeleteStatus } from "./types";
/**
 *DeviceEnrollmentBulkDelete
 */
export interface DeviceEnrollmentBulkDelete extends Entity {
    /**
     *ID
     *@example 00005a4e027f0a580a01081c00000000
     */
    readonly accountId?: string;

    /**
*The time of completing the bulk creation task.
Null when creating bulk upload or delete.

*/
    readonly completedAt?: Date;

    /**
*The time of receiving the bulk creation task.

*/
    readonly createdAt?: Date;

    /**
*The number of enrollment identities with failed processing.

*/
    readonly errorsCount?: number;

    /**
*Link to error report file.
Null when creating bulk upload or delete.

*@example https://api.us-east-1.mbedcloud.com/v3/device-enrollments-bulk-uploads/2d238a89038b4ddb84699dd36a901063/errors_report.csv
*/
    readonly errorsReportFile?: string;

    /**
*Link to full report file.
Null when creating bulk upload or delete.

*@example https://api.us-east-1.mbedcloud.com/v3/device-enrollments-bulk-uploads/2d238a89038b4ddb84699dd36a901063/full_report.csv
*/
    readonly fullReportFile?: string;

    /**
*The number of enrollment identities processed until now.

*/
    readonly processedCount?: number;

    /**
*The state of the process is 'new' at the time of creation. If the creation is still in progress, the state is shown as 'processing'. When the request has been fully processed, the state changes to 'completed'.

*@example new
*/
    readonly status?: DeviceEnrollmentBulkDeleteStatus;

    /**
*Total number of enrollment identities found in the input CSV.

*@example 10
*/
    readonly totalCount?: number;
}
