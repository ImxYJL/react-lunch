import koreanImage from "../assets/category-korean.png";
import chineseImage from "../assets/category-chinese.png";
import westernImage from "../assets/category-western.png";
import japaneseImage from "../assets/category-japanese.png";
import asianImage from "../assets/category-asian.png";
import etcImage from "../assets/category-etc.png";
import { RESTAURANT_CATEGORY_FILTER } from "./restaurant";

export const RESTAURANT_CATEGORY_IMAGES: Record<
  Exclude<
    (typeof RESTAURANT_CATEGORY_FILTER)[keyof typeof RESTAURANT_CATEGORY_FILTER],
    "all"
  >,
  string
> = {
  korean: koreanImage,
  chinese: chineseImage,
  western: westernImage,
  japanese: japaneseImage,
  asian: asianImage,
  etc: etcImage,
};
