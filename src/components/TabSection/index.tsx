import * as S from "./styles";

interface TabProps {
  $isSelected: boolean;
  label: string;
  handleClick: () => void;
}

const Tab = ({ label, $isSelected, handleClick }: TabProps) => {
  return (
    <S.TabItem $isSelected={$isSelected} onClick={handleClick}>
      {label}
    </S.TabItem>
  );
};

export interface TabSectionProps {
  tabIndex: number;
  handleTabClick: (index: number) => void;
}

const TAB_LIST = ["모든 음식점", "자주 가는 음식점"] as const;

const TabSection = ({ tabIndex, handleTabClick }: TabSectionProps) => {
  return (
    <S.TabSection>
      <S.TabList>
        {TAB_LIST.map((tabText, index) => (
          <Tab
            key={tabText}
            $isSelected={index === tabIndex ? true : false}
            label={tabText}
            handleClick={() => handleTabClick(index)}
          />
        ))}
      </S.TabList>
    </S.TabSection>
  );
};

export default TabSection;
