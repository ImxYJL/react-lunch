import * as S from "./styles";
import addButtonSrc from "../../assets/add-button.png";

const Header = () => {
  return (
    <S.Gnb>
      <S.HeaderText>점심 뭐 먹지</S.HeaderText>
      <S.RestaurantAddButton type="button" aria-label="음식점 추가">
        <img src={addButtonSrc} alt="" />
      </S.RestaurantAddButton>
    </S.Gnb>
  );
};

export default Header;
