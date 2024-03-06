

import { gql } from "@apollo/client";
import { DynComponentsCreateLinkType } from "./typesDynComponents";
import { ComponentSingleImageResponse } from "./typesImages";

// mit repeatable Components
export type componentLinktreeType = {
  title: string;
  description: string;
  createLinks: DynComponentsCreateLinkType[];
  profileImage: ComponentSingleImageResponse;
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
