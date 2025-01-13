import * as S from "./styles";
import Dropdown from "../common/Dropdown";
import { FOOD_CATEGORY_SELECT_DROPDOWN_ITEM } from "../../constants/restaurant";
import { KoreanRestaurantCategorySelector } from "../types/restaurant";
import usePostRestaurant from "../../hooks/usePostRestaurant";
import useAddRestaurantForm from "../../hooks/useAddRestaurantForm";
import Portal from "../common/Portal";
import ModalBackground from "../common/ModalBackground";

interface AddRestaurantModalProps {
  closeModal: () => void;
}

const DISTANCE_LIST = [
  { id: "5-minute", value: "5분" },
  { id: "10-minute", value: "10분" },
  { id: "15-minute", value: "15분" },
  { id: "20-minute", value: "20분" },
];

const AddRestaurantModal = ({ closeModal }: AddRestaurantModalProps) => {
  const { formInput, handleFieldChange, createValidRestaurantItem } =
    useAddRestaurantForm();

  const { mutate } = usePostRestaurant();

  const handleSubmit = () => {
    const newRestaurant = createValidRestaurantItem();

    if (newRestaurant) {
      mutate(newRestaurant, {
        onSuccess: () => closeModal(),
      });
    }
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
                handleFieldChange("foodCategory", value)
              }
              guideText="선택해주세요"
              ariaLabel="음식 종류 선택"
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label $isRequired={true}>이름</S.Label>
            <S.Input
              value={formInput.name}
              onChange={(e) => handleFieldChange("name", e.target.value)}
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label $isRequired={true}>거리(도보 이동 시간)</S.Label>
            <Dropdown
              name="distance"
              id="distance-select"
              dropdownItemList={DISTANCE_LIST}
              handleItemClick={(value: string) =>
                handleFieldChange("distance", value)
              }
              guideText="선택해주세요"
              ariaLabel="거리 선택"
            />
          </S.FormSection>
          <S.FormSection>
            <S.Label>설명</S.Label>
            <S.Textarea
              value={formInput.description || ""}
              onChange={(e) => handleFieldChange("description", e.target.value)}
            />
            <S.Info>메뉴 등 추가 정보를 입력해 주세요.</S.Info>
          </S.FormSection>
          <S.FormSection>
            <S.Label>참고 링크</S.Label>
            <S.Input
              value={formInput.url || ""}
              onChange={(e) => handleFieldChange("url", e.target.value)}
            />
            <S.Info>매장 정보를 확인할 수 있는 링크를 입력해 주세요.</S.Info>
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
