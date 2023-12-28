export interface IImageLink {
  image: React.ElementType;
  href: string;
  alt: string;
}

export interface IContact {
  size: number;
}

export interface INavigation {
  href: string;
  title: string;
}

export interface IPost {
  id: string;
  title: string;
  image: string;
  description: string;
  created: string;
  location: google.maps.LatLngLiteral;
  tags: string[];
  preview: string;
}

export interface IEvent extends IPost {
  date: string;
}
