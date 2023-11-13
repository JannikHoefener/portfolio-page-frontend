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

import { gql } from "@apollo/client"

  
// mit repeatable Components
export type linktreeResponse = {
	linktree: {
		data:{
			attributes: linktreeType
		}
	}
}

type linktreeType = {
	title: string;
	description: string;
	createLinks: linkComponentType[];
    profileImage: singleImageType;
}

type linkComponentType = {
    website: string
    title: string
    url: string
    description: string
    type:string
}

type singleImageType = {
    data: {
      attributes: {
        url: string
      }
    }
}

export const GET_LINKTREE = gql`
query getLinktree($linktreeID: ID!){
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