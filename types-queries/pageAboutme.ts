import { gql } from "@apollo/client";
import { componentHeadlineType } from "./componentHeadline";
import { linktreeIdResponse, linktreeResponse } from "./componentLinktree";
import { componentTagResponse } from "./componentTag";
import { sectionCvType } from "@/components/cvPart";

// http://localhost:1337/graphql

type sectionAboutType = {
  sectionTitle: componentHeadlineType;
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
            title
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
