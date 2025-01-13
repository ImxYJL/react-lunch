import { DropdownItem } from "../components/common/Dropdown";
import {
  KoreanRestaurantCategorySelector,
  KoreanRestaurantCategoryFilter,
} from "../components/types/restaurant";

// key value 반대로 바꿔야하나...ㅋㅋ 왜이렇게만들었지
export const KIND_OF_FOOD = {
  한식: "korean",
  중식: "chinese",
  양식: "western",
  일식: "japanese",
  아시안: "asian",
  기타: "etc",
} as const;

export const FOOD_CATEGORY_FILTER_DROPDOWN_ADDITIONAL = {
  전체: "all",
} as const;

// "전체" 값을 따로 분리해서 새 값을 만드는 건 조금 낭비일지도
export const FOOD_CATEGORY_FILTER = {
  ...FOOD_CATEGORY_FILTER_DROPDOWN_ADDITIONAL,
  ...KIND_OF_FOOD,
};

export const FOOD_CATEGORY_FILTER_DROPDOWN_ITEM: DropdownItem<KoreanRestaurantCategoryFilter>[] =
  Object.entries(FOOD_CATEGORY_FILTER).map(([key, value]) => ({
    id: value,
    value: key as keyof typeof FOOD_CATEGORY_FILTER,
  }));

export const FOOD_CATEGORY_SELECT_DROPDOWN_ITEM: DropdownItem<KoreanRestaurantCategorySelector>[] =
  Object.entries(KIND_OF_FOOD).map(([key, value]) => ({
    id: value,
    value: key as KoreanRestaurantCategorySelector,
  }));

// TODO: 단순배열 말고 객체로 만들기
export const SORT_TYPE = ["이름순", "거리순"] as const;
