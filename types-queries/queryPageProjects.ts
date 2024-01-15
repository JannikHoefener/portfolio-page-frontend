import { gql } from "@apollo/client";
import { ComponentTagsResponse } from "./componentTag";
import { ComponentSingleImageResponse } from "./componentSingleImage";


// Projects Card
export const GET_PROJECTS_INFO = gql`
query getProjectsInfo {
  projects {
    data {
      id
      attributes {
        title
        state
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
            }
          }
        }
        description
      }
    }
  }
}
`;

type ProjectInfoType = {
  id: string;
  attributes: {
    title: string;
    state: string;
    cardCover: ComponentSingleImageResponse;
    tags: ComponentTagsResponse
    description: string;
  };
};

export type ProjectInfoResponse = {
  
    projects: {
      data: ProjectInfoType[];
    };
  
};


// Project
export const PROJECT = gql`
query getProject($projectID: ID!) {
    project(id: $projectID) {
      data {
        id
        attributes {
          title
          state
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
              }
            }
          }
          description
          linktree {
            data {
              id
            }
          }
          content {
            __typename
          }
        }
      }
    }
  }
  
`;