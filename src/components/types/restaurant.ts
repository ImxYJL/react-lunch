import { RESTAURANT_CATEGORY_FILTER } from "../../constants/restaurant";

export interface RestaurantItemType {
  id: string;
  name: string;
  distance: string;
  description: string;
  url?: string;
  category: string;
  isFavorite: boolean;
}

export type RestaurantListResponse = RestaurantItemType[];

// 모든 카테고리를 포함한 타입
export type KoreanRestaurantCategoryFilter =
  keyof typeof RESTAURANT_CATEGORY_FILTER;

// "전체"를 제외한 카테고리 타입
export type KoreanRestaurantCategory = Exclude<
  keyof typeof RESTAURANT_CATEGORY_FILTER,
  "전체"
>;
