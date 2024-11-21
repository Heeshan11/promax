import { IconType } from "react-icons";

export interface IService {
  id: number;
  image: string;
  title: string;
  desc: string;
  category?: string
}
export interface IAboutDetail {
  title: string,
  description: string,
  icon: IconType,
  color: string
}
export interface Iproject {
  title: string,
  description: string,
  cate?: string,
  id: number,
  images: []
}


export interface IProduct {
  id: number,
  image: string,
  category?:string
}