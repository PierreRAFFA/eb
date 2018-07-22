export interface Product {
  id: string;
  title: string;
  gender_id: string;
  composition: string;
  sleeve: string;
  photo: string;
  url: string;
  rgb?: {
    r: number;
    g: number;
    b: number;
  };
  lab?: {
    l: number;
    a: number;
    b: number;
  };
  deltaE?: number;
}

export interface Color {
  red: number;
  green: number;
  blue: number;
  alpha: number | null;
}
