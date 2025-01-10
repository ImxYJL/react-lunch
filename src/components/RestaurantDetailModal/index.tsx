import Portal from "../common/Portal";
import ModalBackground from "../common/ModalBackground";
import * as S from "./styles.ts";
import {
  KoreanRestaurantCategory,
  RestaurantItemType,
} from "../types/restaurant.ts";
import { RESTAURANT_CATEGORY_FILTER } from "../../constants/restaurant.ts";
import { RESTAURANT_CATEGORY_IMAGES } from "../../constants/img.ts";

import emptyStarImg from "../../assets/star-empty.png";
import filledStarImg from "../../assets/star-filled.png";

import useDeleteRestaurant from "../../hooks/useDeleteRestaurant.ts";

interface RestaurantDetailModalProps {
  restaurant: RestaurantItemType | null;
  closeModal: () => void;
}

const RestaurantDetailModal = ({
  restaurant,
  closeModal,
}: RestaurantDetailModalProps) => {
  const { mutate } = useDeleteRestaurant();

  const getLogoImg = (category: KoreanRestaurantCategory) => {
    const engCategory = RESTAURANT_CATEGORY_FILTER[category];

    return RESTAURANT_CATEGORY_IMAGES[engCategory];
  };

  const handleItemDelete = (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      mutate(id, {
        onSuccess: () => closeModal(),
      });
    }
  };

  if (!restaurant) return null;

  return (
    <Portal>
      <ModalBackground closeModal={closeModal}>
        <S.ModalContainer>
          <S.RestaurantLogoSection>
            <img
              src={getLogoImg(restaurant.category as KoreanRestaurantCategory)} // TODO: as 제거
              alt=""
            />
          </S.RestaurantLogoSection>
          <S.FavoriteButton type="button" aria-label="즐겨찾기 버튼">
            <img
              src={restaurant.isFavorite ? filledStarImg : emptyStarImg}
              alt=""
            />
          </S.FavoriteButton>
          <S.Name>{restaurant.name}</S.Name>
          <S.Distance>{restaurant.distance}</S.Distance>
          <S.Description>{restaurant.description}</S.Description>
          {restaurant.url && <S.Url>{restaurant.url}</S.Url>}
          <div style={{ display: "flex", gap: "10px" }}>
            <S.Button
              $isPrimary={false}
              onClick={() => handleItemDelete(restaurant.id)}
              type="button"
            >
              삭제하기
            </S.Button>
            <S.Button $isPrimary={true} onClick={closeModal}>
              닫기
            </S.Button>
          </div>
        </S.ModalContainer>
      </ModalBackground>
    </Portal>
  );
};

export default RestaurantDetailModal;
