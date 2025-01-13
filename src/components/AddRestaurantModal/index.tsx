import Portal from "../common/Portal";
import ModalBackground from "../common/ModalBackground";
import * as S from "./styles";
import Dropdown from "../common/Dropdown";
import { useState } from "react";
import { FOOD_CATEGORY_SELECT_DROPDOWN_ITEM } from "../../constants/restaurant";
import {
  KoreanRestaurantCategorySelector,
  RestaurantItemType,
} from "../types/restaurant";
import usePostRestaurant from "../../hooks/usePostRestaurant";

interface AddRestaurantModalProps {
  closeModal: () => void;
}

const AddRestaurantModal = ({ closeModal }: AddRestaurantModalProps) => {
  const [foodCategory, setFoodCategory] =
    useState<KoreanRestaurantCategorySelector>();
  const [nameInput, setNameInput] = useState("");
  const [distanceInput, setDistanceInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [urlInput, setUrlInput] = useState("");

  const { mutate } = usePostRestaurant();

  const handleSubmit = () => {
    const formattedDistance = `캠퍼스로부터 ${distanceInput} 내`;

    const newRestaurant: RestaurantItemType = {
      id: Date.now().toString(),
      name: nameInput,
      distance: formattedDistance,
      description: descriptionInput,
      url: urlInput,
      category: foodCategory || "기타",
      isFavorite: false,
    };

    mutate(newRestaurant, {
      onSuccess: () => closeModal(),
    });
  };

  return (
    <Portal>
      <ModalBackground closeModal={closeModal}>
        <S.ModalContainer>
          <S.ModalTitle>새로운 음식점</S.ModalTitle>
          <S.FormSection>
            <S.Label $isRequired={true}>카테고리</S.Label>
            <Dropdown
              name="restaurant-category"
              id="restaurant-select"
              dropdownItemList={FOOD_CATEGORY_SELECT_DROPDOWN_ITEM}
              handleItemClick={(value: KoreanRestaurantCategorySelector) =>
                setFoodCategory(value)
              }
              defaultItem="선택해주세요"
              ariaLabel="음식 종류 선택"
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label $isRequired={true}>이름</S.Label>
            <S.Input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label $isRequired={true}>거리(도보 이동 시간)</S.Label>
            <Dropdown
              name="distance"
              id="distance-select"
              dropdownItemList={[
                { id: "5", value: "5분" },
                { id: "10", value: "10분" },
                { id: "15", value: "15분" },
              ]}
              handleItemClick={(value: string) => setDistanceInput(value)}
              defaultItem="선택해주세요"
              ariaLabel="거리 선택"
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label>설명</S.Label>
            <S.Textarea
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label>참고 링크</S.Label>
            <S.Input
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
          </S.FormSection>
          <S.FormSection>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
              <S.Button $isPrimary={false} onClick={closeModal} type="button">
                취소하기
              </S.Button>
              <S.Button $isPrimary={true} onClick={handleSubmit}>
                추가하기
              </S.Button>
            </div>
          </S.FormSection>
        </S.ModalContainer>
      </ModalBackground>
    </Portal>
  );
};

export default AddRestaurantModal;
