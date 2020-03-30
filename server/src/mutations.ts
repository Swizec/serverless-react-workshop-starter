import { getItem, updateItem } from "simple-dynamodb";
import uuidv4 from "uuid/v4";
import { deploy } from "./zeitAPI";

type CreatePageParams = {
    userId: string;
    pageName: string;
};

type SavePageParams = {
    userId: string;
    pageId: string;
    content: string;
};

export const createPage = async (_: any, params: CreatePageParams) => {
    const pageId = uuidv4();

    const result = await updateItem({
        TableName: process.env.PAGE_TABLE!,
        Key: {
            userId: params.userId,
            pageId
        },
        UpdateExpression: "SET pageName = :pageName, createdAt = :createdAt",
        ExpressionAttributeValues: {
            ":pageName": params.pageName,
            ":createdAt": new Date().toISOString()
        },
        ReturnValues: "ALL_NEW"
    });

    // updates static data in production
    // await deploy();

    return result.Attributes;
};
