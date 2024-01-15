export type IAllowPromotion = "wwe" | "aew" | "tna" | "njpw" | "indy";

export interface ThumbnailFormatDTO {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface ThumbnailDTO {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: ThumbnailFormatDTO;
        small: ThumbnailFormatDTO;
        medium: ThumbnailFormatDTO;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any; // You can replace 'any' with a more specific type
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface AuthorDTO {
  data: {
    id: number;
    attributes: {
      name: string;
      publisher: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}

export interface BlogPostDTO {
  id: number;
  attributes: {
    blog: string;
    detail: string;
    description: string;
    date: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    promotion: IAllowPromotion;
    Thumbnail: ThumbnailDTO;
    author: AuthorDTO;
  };
}
