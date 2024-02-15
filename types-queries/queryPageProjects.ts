import { gql } from "@apollo/client";
import { ComponentSingleImageResponse } from "./typesImages";
import { linktreeIdResponse } from "./componentLinktree";
import { TagsResponse } from "./typeTags";

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
    tags: TagsResponse;
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
                type
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

export type ProjectResponse = {
  project: {
    data: ProjectType;
  };
};

export type GetProjectId = {
  projectID: number
}

type ProjectType = {
  id: string;
  attributes: {
    /* Header */
    title: string;
    description: string;
    createDate: string;
    endDate: string;
    state: string;
    cardCover: ComponentSingleImageResponse;
    /* Content */
    tags: TagsResponse;
    linktree: linktreeIdResponse;
    /* content: []; */
  };
};
