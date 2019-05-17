import { Schema } from "../../../schema/schema";

export const campaignStatisticsSchema = (): Schema => {
    return Object.assign(new Schema(), {
        name: "CampaignStatistics",
        fields: [
            {
                name: "campaignId",
                apiName: "campaign_id",
                type: "string",
            },
            {
                name: "count",
                apiName: "count",
                type: "number",
            },
            {
                name: "createdAt",
                apiName: "created_at",
                type: "Date",
            },
            {
                name: "summaryStatus",
                apiName: "summary_status",
                type: "CampaignStatisticsSummaryStatus",
            },
        ],

        methods: [
            {
                name: "events",
                returnType: "Paginator<CampaignStatisticsEvents, ListOptions>",
                parameters: [
                    {
                        name: "campaignId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "campaignStatisticsId",
                        position: 1,
                        type: "string",
                    },
                    {
                        name: "options",
                        position: 2,
                        type: "Object",
                        subParams: [
                            {
                                name: "after",
                                type: "string",
                            },
                            {
                                name: "limit",
                                type: "number",
                            },
                            {
                                name: "order",
                                type: "string",
                            },
                            {
                                name: "include",
                                type: "string",
                            },
                            {
                                name: "maxResults",
                                type: "string",
                            },
                        ],
                    },
                ],
            },
            {
                name: "list",
                returnType: "Paginator<CampaignStatistics, ListOptions>",
                parameters: [
                    {
                        name: "campaignId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "options",
                        position: 1,
                        type: "Object",
                        subParams: [
                            {
                                name: "after",
                                type: "string",
                            },
                            {
                                name: "limit",
                                type: "number",
                            },
                            {
                                name: "order",
                                type: "string",
                            },
                            {
                                name: "include",
                                type: "string",
                            },
                            {
                                name: "maxResults",
                                type: "string",
                            },
                        ],
                    },
                ],
            },
            {
                name: "read",
                returnType: "Promise<CampaignStatistics>",
                parameters: [
                    {
                        name: "campaignId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "campaignStatisticsId",
                        position: 1,
                        type: "string",
                    },
                ],
            },
        ],
    });
};
