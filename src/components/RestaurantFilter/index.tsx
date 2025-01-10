import Dropdown from "../common/Dropdown";
import { KoreanRestaurantCategoryFilter } from "../types/restaurant";

import { RESTAURANT_CATEGORY_FILTER_DROPDOWN_ITEMS } from "./../../constants/restaurant";

interface RestaurantFilterProps {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<KoreanRestaurantCategoryFilter>
  >;
}

const RestaurantFilter = ({ setSelectedCategory }: RestaurantFilterProps) => {
  const handleRestaurantItemClick = (value: KoreanRestaurantCategoryFilter) => {
    setSelectedCategory(value);
  };

  return (
    <Dropdown
      name="restaurant-category"
      id="restaurant-filter"
      dropdownItemList={RESTAURANT_CATEGORY_FILTER_DROPDOWN_ITEMS}
      handleItemClick={handleRestaurantItemClick}
      ariaLabel="음식 종류 필터링"
    />
  );
};

export default RestaurantFilter;
