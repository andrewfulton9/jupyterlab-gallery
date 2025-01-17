export interface IGalleryReply {
  title: string;
  apiVersion: string;
  exhibitsConfigured: boolean;
  hideGalleryWithoutExhibits: boolean;
}

export interface IExhibitReply {
  exhibits: IExhibit[];
}

export interface IExhibit {
  // from configuration file
  homepage?: string;
  title: string;
  description?: string;
  icon?: string;
  // state from server
  id: number;
  isCloned: boolean;
  localPath: string;
  revision?: string;
  lastUpdated?: string;
  updatesAvailable?: boolean;
}
