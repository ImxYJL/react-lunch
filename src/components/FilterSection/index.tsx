import * as S from "./styles";
import RestaurantFilter from "../RestaurantFilter";

import SortTypeDropdown, { SortType } from "../SortTypeDropdown";
import { KoreanRestaurantCategoryFilter } from "../types/restaurant";

interface FilterSectionProps {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<KoreanRestaurantCategoryFilter>
  >;
  setSelectedSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

const FilterSection = ({
  setSelectedCategory,
  setSelectedSortType,
}: FilterSectionProps) => {
  return (
    <S.FilterContainer>
      <RestaurantFilter setSelectedCategory={setSelectedCategory} />
      <SortTypeDropdown setSelectedSortType={setSelectedSortType} />
    </S.FilterContainer>
  );
};

export default FilterSection;
