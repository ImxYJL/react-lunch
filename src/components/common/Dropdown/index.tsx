import * as S from "./styles";

export type DropdownItem<T extends string> = {
  id: string;
  value: T;
};

interface DropdownProps<T extends string> {
  name?: string;
  id: string;
  ariaLabel?: string;
  dropdownItemList: DropdownItem<T>[];
  handleItemClick: (selectedValue: T) => void;
}

const Dropdown = <T extends string>({
  name,
  id,
  ariaLabel,
  dropdownItemList,
  handleItemClick,
}: DropdownProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    handleItemClick(event.target.value as T);
  };

  return (
    <S.Dropdown
      name={name}
      id={id}
      aria-label={ariaLabel}
      onChange={handleChange}
    >
      {dropdownItemList.map((item) => (
        <S.DropdownItem key={item.id} value={item.value}>
          {item.value}
        </S.DropdownItem>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
