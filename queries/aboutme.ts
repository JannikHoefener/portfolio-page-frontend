import { gql } from "@apollo/client"

// http://localhost:1337/graphql
export type aboutMeResponse = {
	aboutMe: {
		data:{
			attributes: aboutMeType
		}
	}
}

type aboutMeType = {
	caption: string
	aboutMe: string
	curriculumVitae: JSON /* todo! */
}

export const GET_ABOUTME = gql`
query {
	aboutMe {
	  data {
		attributes {
		  caption
		  aboutMe
		  curriculumVitae
		}
	  }
	}
  }
`;