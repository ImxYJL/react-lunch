import Dropdown, { DropdownItem } from "../common/Dropdown";

import { KoreanRestaurantCategory } from "../RestaurantItem";
import { RESTAURANT_CATEGORY } from "./../../constants/restaurant";

interface RestaurantFilterProps {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<KoreanRestaurantCategory>
  >;
}

const RestaurantFilter = ({ setSelectedCategory }: RestaurantFilterProps) => {
  const dropdownItems: DropdownItem<KoreanRestaurantCategory>[] =
    Object.entries(RESTAURANT_CATEGORY).map(([key, value]) => ({
      id: value,
      value: key as KoreanRestaurantCategory,
    }));

  const handleRestaurantItemClick = (value: KoreanRestaurantCategory) => {
    setSelectedCategory(value);
  };

  return (
    <Dropdown
      name="restaurant-category"
      id="restaurant-filter"
      dropdownItemList={dropdownItems}
      handleItemClick={handleRestaurantItemClick}
      ariaLabel="음식 종류 필터링"
    />
  );
};

export default RestaurantFilter;
