//todo: evtl anpassen wenn carousell oder showcase

export type ComponentSingleImageResponse = {
  data: {
    attributes: {
      url: string;
    };
  } | null;
};

export type ComponentMultiImagesResponse = {
  data: {
    attributes: {
      url: string;
    };
  }[] | null;
};