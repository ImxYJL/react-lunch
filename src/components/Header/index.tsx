import * as S from "./styles";
import addButtonSrc from "../../assets/add-button.png";
import { useState } from "react";
import AddRestaurantModal from "../AddRestaurantModal";

const Header = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  return (
    <S.Gnb>
      <S.HeaderText>점심 뭐 먹지</S.HeaderText>
      <S.RestaurantAddButton
        type="button"
        aria-label="음식점 추가"
        onClick={openAddModal}
      >
        <img src={addButtonSrc} alt="" />
      </S.RestaurantAddButton>
      {isAddModalOpen && <AddRestaurantModal closeModal={closeAddModal} />}
    </S.Gnb>
  );
};

export default Header;
