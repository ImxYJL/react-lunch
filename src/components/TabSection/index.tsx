import * as S from "./styles";

export interface TabSectionProps {
  isFavoriteTab: boolean;
  handleTabClick: () => void;
}

const TabSection = ({ isFavoriteTab, handleTabClick }: TabSectionProps) => {
  return (
    <S.TabSection onClick={handleTabClick}>
      <S.TabList>
        <S.TabItem $isSelected={isFavoriteTab ? false : true}>
          모든 음식점
        </S.TabItem>
        <S.TabItem $isSelected={isFavoriteTab ? true : false}>
          자주 가는 음식점
        </S.TabItem>
      </S.TabList>
    </S.TabSection>
  );
};

export default TabSection;
