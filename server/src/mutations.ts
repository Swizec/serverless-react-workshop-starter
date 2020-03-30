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
