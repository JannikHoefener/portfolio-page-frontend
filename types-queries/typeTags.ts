export type TagsResponse = {
    data: {
      id?:number
      attributes: {
          /* tagData: TagType; */
          key: string;
          type: string;
      };
    }[];
  };
  
  /* type TagType = {
    key: string;
    type: string;
  }; */