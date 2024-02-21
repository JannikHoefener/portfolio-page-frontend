import { gql } from "@apollo/client";
import { ComponentSingleImageResponse } from "./typesImages";
import { TagsResponse } from "./typeTags";

/* Blog Cards */
export const GET_BLOGS_INFO = gql`
query getBlogInfo {
    blogs {
      data {
        id
        attributes {
          title
          description
          publishedAt
          cardCover {
            data {
              attributes {
                url
              }
            }
          }
          tags {
            data {
              attributes {
                key
                type
              }
            }
          }
        }
      }
    }
  }
  
`;
export type BlogInfoType = {
  id: string; /* or string?! */
  attributes: {
    title: string;
    description: string;
    publishedAt: string;
    cardCover: ComponentSingleImageResponse;
    tags: TagsResponse;
  };
};

export type BlogsInfoResponse = {
    blogs: {
      data: BlogInfoType[];
    };
  };
