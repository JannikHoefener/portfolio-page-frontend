// mit dynamic zone
//https://github.com/strapi/strapi/issues/4849
/* query getLinktree($linktreeID: ID!) {
    linktree(id: $linktreeID) {
      data {
        attributes {
          title
          profileImage {
            data {
              attributes {
                url
              }
            }
          }
          description
          createLink {... on LinktreeCreateLinkDynamicZone {
              title
              url
              type
              description
            }}
      }
    }
  } */

import { gql } from "@apollo/client";
import { componentLinkType } from "./componentLink";

// mit repeatable Components
export type componentLinktreeType = {
  title: string;
  description: string;
  createLinks: componentLinkType[];
  profileImage: componentSingleImage;
};

export type linktreeIdResponse = {
  data: {
    id: number;
  };
};

export type linktreeResponse = {
  linktree: {
    data: {
      attributes: componentLinktreeType;
    };
  };
};
export const GET_LINKTREE = gql`
  query getLinktree($linktreeID: ID!) {
    linktree(id: $linktreeID) {
      data {
        attributes {
          title
          description
          createLinks {
            website
            title
            url
            description
            type
          }
          profileImage {
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
`;
