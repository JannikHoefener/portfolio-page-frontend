/* export type componentHeadlineType = {
  headlineText: string
  variant: string
} */

export type DynComponentsHeadlineType = {
  __typename?: "ComponentComponentsHeadline";
  headlineText: string;
  variant: string;
};

export type DynComponentsTextSectionType = {
  __typename?: "ComponentComponentsTextSection";
  sectionTitle: {
    headlineText: string;
    variant: string;
  };
  text: string;
};

export type DynComponentsCreateLinkType = {
  __typename?: "ComponentComponentsCreateLink";
  website: string;
  title: string;
  url: string;
  description: string;
  type: string;
};


export type DynComponentsAlbumType = {
  __typename: "ComponentComponentsAlbum";
  sectionAlbumTitle: {
    headlineText: string;
    variant: string;
  };
  Media: {
    data: {
      attributes: {
        url: string;
      };
    }[];
  };
};

export type DynComponentContent =
  | DynComponentsHeadlineType
  | DynComponentsTextSectionType
  | DynComponentsCreateLinkType
  | DynComponentsAlbumType;
