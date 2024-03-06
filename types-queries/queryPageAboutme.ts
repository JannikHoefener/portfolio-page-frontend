import { sectionCvType } from "@/components/cvPart";
import { gql } from "@apollo/client";
import { linktreeIdResponse } from "./queryLinktree";
import { DynComponentsHeadlineType } from "./typesDynComponents";
import { TagsResponse } from "./typeTags";

// http://localhost:1337/graphql

type sectionAboutType = {
  sectionTitle: DynComponentsHeadlineType;
  text: string;
};

type SkillsType = {
  SkillHeadline: DynComponentsHeadlineType
  tags: TagsResponse
}

type aboutMeType = {
  caption: string;
  SectionAbout: sectionAboutType[];
  linktree: linktreeIdResponse;
  Skills: SkillsType[]
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
        Skills {
          SkillHeadline {
            variant
            headlineText
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
