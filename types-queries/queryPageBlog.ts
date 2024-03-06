import { gql } from "@apollo/client";
import { ComponentSingleImageResponse } from "./typesImages";
import { TagsResponse } from "./typeTags";
import { linktreeIdResponse } from "./componentLinktree";
import { DynComponentContent } from "./typesDynComponents";

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
  id: string /* or string?! */;
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

export const GET_BLOG = gql`
  query getBlog($blogID: ID!) {
    blog(id: $blogID) {
      data {
        id
        attributes {
          title
          description
          cardCover {
            data {
              attributes {
                url
              }
            }
          }
          updatedAt
          tags {
            data {
              id
              attributes {
                key
              }
            }
          }
          linktrees {
            data {
              id
            }
          }
          content {
            ... on ComponentComponentsHeadline {
              __typename
              headlineText
              variant
            }
            ... on ComponentComponentsTextSection {
              __typename
              sectionTitle {
                headlineText
                variant
              }
              text
            }
            ... on ComponentComponentsCreateLink {
              __typename
              website
              title
              url
              description
              type
            }
            ... on ComponentComponentsAlbum {
              __typename
              sectionAlbumTitle {
                headlineText
                variant
              }
              Media {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export type BlogResponse = {
  blog: {
    data: BlogType;
  };
};

export type GetBlogId = {
  blogID: number
}

type BlogType = {
  id: string;
  attributes: {
    /* Header */
    title: string;
    description: string;
    cardCover: ComponentSingleImageResponse;
    updatedAt:string
    /* Content */
    tags: TagsResponse;
    linktrees: linktreeIdResponse;
    /* Dyn-Content */
    content: DynComponentContent[];
  };
};