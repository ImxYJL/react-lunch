import * as S from "./styles";

export type DropdownItem<T extends string> = {
  id: string;
  value: T;
};

interface DropdownProps<T extends string> {
  name?: string;
  guideText?: string;
  ariaLabel?: string;
  id: string;
  dropdownItemList: DropdownItem<T>[];
  handleItemClick: (selectedValue: T) => void;
}

const Dropdown = <T extends string>({
  name,
  id,
  ariaLabel,
  dropdownItemList,
  guideText,
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
      {guideText && (
        <option value="" disabled selected style={{ color: "gray" }}>
          {guideText}
        </option>
      )}
      {dropdownItemList.map((item) => (
        <S.DropdownItem id={item.id} key={item.id} value={item.value}>
          {item.value}
        </S.DropdownItem>
      ))}
    </S.Dropdown>
  );
};

export default Dropdown;
