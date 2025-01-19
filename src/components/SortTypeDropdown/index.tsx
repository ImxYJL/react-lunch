import Dropdown, { DropdownItem } from "../common/Dropdown";
import { SORT_TYPE } from "../../constants/restaurant";

export type SortType = (typeof SORT_TYPE)[number];

interface SortTypeDropdownProps {
  setSelectedSortType: React.Dispatch<React.SetStateAction<SortType>>;
}

const SortTypeDropdown = ({ setSelectedSortType }: SortTypeDropdownProps) => {
  const dropdownItems: DropdownItem<SortType>[] = SORT_TYPE.map((type) => ({
    id: `sort-${type}`,
    value: type,
  }));

  const handleSortTypeChange = (value: SortType) => {
    setSelectedSortType(value);
  };

  return (
    <Dropdown
      name="sort-type"
      id="sort-type-dropdown"
      dropdownItemList={dropdownItems}
      handleItemClick={handleSortTypeChange}
      ariaLabel="정렬 타입 선택"
    />
  );
};

export default SortTypeDropdown;
