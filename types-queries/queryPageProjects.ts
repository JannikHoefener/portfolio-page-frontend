import { gql } from "@apollo/client";
import { ComponentSingleImageResponse } from "./componentSingleImage";
import { ComponentTagsResponse } from "@/components/basicComponents/tagRenderer";

// Projects Card
export const GET_PROJECTS_INFO = gql`
  query getProjectsInfo {
    projects {
      data {
        id
        attributes {
          title
          state
          createDate
          endDate
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
    createDate: string;
    endDate: string;
    cardCover: ComponentSingleImageResponse;
    tags: ComponentTagsResponse;
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
          createDate
          endDate
          description
          cardCover {
            data {
              attributes {
                url
              }
            }
          }
          tags {
            data {
              id
              attributes {
                key
              }
            }
          }
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

type Project = {
  /* id: string;
  attributes: {
    title: string;
    state: string;
    cardCover: {
      data: null;
    };
    tags: {
      data: [
        {
          attributes: {
            key: string;
          };
        }
      ];
    };
    description: string;
    linktree: {
      data: null;
    };
    content: [];
  }; */
};

interface Data {
  project: Project;
}

interface Response {
  data: Data;
}
