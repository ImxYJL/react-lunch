import { DropdownItem } from "../components/common/Dropdown";
import {
  KoreanRestaurantCategory,
  KoreanRestaurantCategoryFilter,
} from "../components/types/restaurant";

export const RESTAURANT_CATEGORY_FILTER = {
  전체: "all",
  한식: "korean",
  중식: "chinese",
  양식: "western",
  일식: "japanese",
  아시안: "asian",
  기타: "etc",
} as const;

export const RESTAURANT_CATEGORY_FILTER_DROPDOWN_ITEMS: DropdownItem<KoreanRestaurantCategoryFilter>[] =
  Object.entries(RESTAURANT_CATEGORY_FILTER).map(([key, value]) => ({
    id: value,
    value: key as KoreanRestaurantCategoryFilter,
  }));

//
export const RESTAURANT_CATEGORY_DROPDOWN_ITEMS: DropdownItem<KoreanRestaurantCategory>[] =
  Object.entries(RESTAURANT_CATEGORY_FILTER)
    .filter(([key]) => key !== "전체")
    .map(([key, value]) => ({
      id: value,
      value: key as KoreanRestaurantCategory, // 타입 단언
    }));
console.log(RESTAURANT_CATEGORY_DROPDOWN_ITEMS);

export const SORT_TYPE = ["이름순", "거리순"] as const;
