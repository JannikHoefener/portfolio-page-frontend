import { gql } from "@apollo/client";


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