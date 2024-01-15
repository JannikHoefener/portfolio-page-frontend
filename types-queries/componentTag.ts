
export type ComponentTagsResponse = {
    data: {
        id: string;
        attributes: {
            tag: TagType
        }
    }
}

type TagType = {
        key: string
        type: string
}