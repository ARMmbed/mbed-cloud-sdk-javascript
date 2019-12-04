import { ListOptions } from "../../../common";
import { Repository } from "../../../common/repository";
import { Paginator } from "../../../index";
import { CampaignStatisticsEvents } from "../../index";
import { CampaignStatistics } from "./campaignStatistics";
/**
 *CampaignStatistics repository
 */
export declare class CampaignStatisticsRepository extends Repository {
    /**
     * events
     * @param campaignId - The campaign ID.
     * @param id - The summary status. For example, fail.
     * @param options - options
     */
    events(campaignId: string, id: string, options?: ListOptions): Paginator<CampaignStatisticsEvents, ListOptions>;
    /**
     * list
     * @param campaignId - The campaign ID.
     * @param options - options
     */
    list(campaignId: string, options?: ListOptions): Paginator<CampaignStatistics, ListOptions>;
    /**
     * read
     * @param campaignId - ID of the associated campaign.
     * @param id - ID of the event type description.
     */
    read(campaignId: string, id: string): Promise<CampaignStatistics>;
}
