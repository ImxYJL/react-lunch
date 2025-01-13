import koreanImage from "../assets/category-korean.png";
import chineseImage from "../assets/category-chinese.png";
import westernImage from "../assets/category-western.png";
import japaneseImage from "../assets/category-japanese.png";
import asianImage from "../assets/category-asian.png";
import etcImage from "../assets/category-etc.png";
import { KIND_OF_FOOD } from "./restaurant";

export const RESTAURANT_CATEGORY_IMAGES: Record<
  (typeof KIND_OF_FOOD)[keyof typeof KIND_OF_FOOD],
  string
> = {
  korean: koreanImage,
  chinese: chineseImage,
  western: westernImage,
  japanese: japaneseImage,
  asian: asianImage,
  etc: etcImage,
};
