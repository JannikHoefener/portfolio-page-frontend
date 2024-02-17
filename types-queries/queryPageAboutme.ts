import { sectionCvType } from "@/components/cvPart";
import { gql } from "@apollo/client";
import { linktreeIdResponse } from "./componentLinktree";
import { DynComponentsHeadlineType } from "./typesDynComponents";

// http://localhost:1337/graphql

type sectionAboutType = {
  sectionTitle: DynComponentsHeadlineType;
  text: string;
};

type aboutMeType = {
  caption: string;
  SectionAbout: sectionAboutType[];
  linktree: linktreeIdResponse;
  SectionCv: sectionCvType[];
  updatedAt: string;
};

export type aboutMeResponse = {
  aboutMe: {
    data: {
      attributes: aboutMeType;
    };
  };
};

export const GET_ABOUTME = gql`
  query {
    aboutMe {
      data {
        attributes {
          caption
          SectionAbout {
            sectionTitle {
              headlineText
              variant
            }
            text
          }
          linktree {
            data {
              id
            }
          }
          SectionCv {
            title
            location
            position
            from
            until
            description
            tags {
              data {
                attributes {
                  key
                  type
                }
              }
            }
          }
          updatedAt
        }
      }
    }
  }
`;

export const GET_TAGS = gql`
  query getAllTags {
    tags {
      data {
        id
        attributes {
          key
          type
        }
      }
    }
  }
`;
