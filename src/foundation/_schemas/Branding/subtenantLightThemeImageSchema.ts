import { Schema } from "../../../schema/schema";

export const subtenantLightThemeImageSchema = (): Schema => {
    return Object.assign(new Schema(), {
        name: "SubtenantLightThemeImage",
        fields: [
            {
                name: "reference",
                apiName: "reference",
                type: "SubtenantLightThemeImageReference",
            },
            {
                name: "staticUri",
                apiName: "static_uri",
                type: "string",
            },
            {
                name: "updatedAt",
                apiName: "updated_at",
                type: "Date",
            },
        ],

        methods: [
            {
                name: "create",
                returnType: "Promise<SubtenantLightThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "image",
                        position: 1,
                        type: "ReadStream | Buffer | File | Blob",
                    },
                    {
                        name: "reference",
                        position: 2,
                        type: "string",
                    },
                ],
            },
            {
                name: "delete",
                returnType: "Promise<SubtenantLightThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "reference",
                        position: 1,
                        type: "string",
                    },
                ],
            },
            {
                name: "list",
                returnType: "Paginator<SubtenantLightThemeImage, ListOptions>",
                parameters: [
                    {
                        name: "accountId",
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
                returnType: "Promise<SubtenantLightThemeImage>",
                parameters: [
                    {
                        name: "accountId",
                        position: 0,
                        type: "string",
                    },
                    {
                        name: "reference",
                        position: 1,
                        type: "string",
                    },
                ],
            },
        ],
    });
};
