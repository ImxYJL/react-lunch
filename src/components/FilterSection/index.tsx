import * as S from "./styles";
import RestaurantFilter from "../RestaurantFilter";
import { KoreanRestaurantCategory } from "../RestaurantItem";
import SortTypeDropdown, { SortType } from "../SortTypeDropdown";

interface FilterSectionProps {
  setSelectedCategory: React.Dispatch<
    React.SetStateAction<KoreanRestaurantCategory>
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
