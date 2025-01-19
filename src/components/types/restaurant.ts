import {
  KIND_OF_FOOD,
  FOOD_CATEGORY_FILTER_DROPDOWN_ADDITIONAL,
} from "../../constants/restaurant";

export interface RestaurantItemType {
  id: string;
  name: string;
  distance: string; // TODO: number로 변경
  category: KoreanRestaurantCategorySelector;
  isFavorite: boolean;
  description?: string;
  url?: string;
}

// 꼭 필요할까 싶긴 함
export type RestaurantListResponse = RestaurantItemType[];

// "전체"가 포함된 타입
export type KoreanRestaurantCategoryFilter =
  | keyof typeof KIND_OF_FOOD
  | keyof typeof FOOD_CATEGORY_FILTER_DROPDOWN_ADDITIONAL;

export type KoreanRestaurantCategorySelector = keyof typeof KIND_OF_FOOD;
