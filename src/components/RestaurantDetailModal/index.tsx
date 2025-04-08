import Portal from "../common/Portal";
import ModalBackground from "../common/ModalBackground";
import * as S from "./styles.ts";
import {
  KoreanRestaurantCategorySelector,
  RestaurantListResponse,
} from "../types/restaurant.ts";
import { KIND_OF_FOOD } from "../../constants/restaurant.ts";
import { RESTAURANT_CATEGORY_IMAGES } from "../../constants/img.ts";

import emptyStarImg from "../../assets/star-empty.png";
import filledStarImg from "../../assets/star-filled.png";

import useDeleteRestaurant from "../../hooks/useDeleteRestaurant.ts";
import usePatchIsFavorite from "../../hooks/usePatchIsFavorite.ts";
import { useQueryClient } from "@tanstack/react-query";

interface RestaurantDetailModalProps {
  restaurantId: string | null;
  closeModal: () => void;
}

const RestaurantDetailModal = ({
  restaurantId,
  closeModal,
}: RestaurantDetailModalProps) => {
  const queryClient = useQueryClient();
  const restaurantList = queryClient.getQueryData<RestaurantListResponse>([
    "restaurantList",
  ]);
  const restaurant = restaurantList?.find(
    (restaurant) => restaurant.id === restaurantId
  );

  const { mutate: deleteRestaurant } = useDeleteRestaurant();
  const { mutate: patchIsFavorite, isPending } = usePatchIsFavorite();

  const getLogoImg = (category: KoreanRestaurantCategorySelector) => {
    const engCategory = KIND_OF_FOOD[category];

    return RESTAURANT_CATEGORY_IMAGES[engCategory];
  };

  const handleFavoriteButtonToggle = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();
    if (isPending) return;

    if (restaurant) {
      const newFavorite = !restaurant.isFavorite;
      patchIsFavorite({ id: restaurant.id, isFavorite: newFavorite }, {});
    }
  };

  const handleItemDelete = (id: string) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      deleteRestaurant(id, {
        onSuccess: closeModal,
      });
    }
  };

  if (!restaurant) return null;

  return (
    <Portal>
      <ModalBackground closeModal={closeModal}>
        <S.ModalContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              position: "relative",
              marginBottom: "20px",
            }}
          >
            <S.RestaurantLogoSection>
              <img src={getLogoImg(restaurant.category)} alt="" />
            </S.RestaurantLogoSection>
            <S.FavoriteButton
              type="button"
              aria-label="즐겨찾기 버튼"
              onClick={handleFavoriteButtonToggle}
            >
              <img
                src={restaurant.isFavorite ? filledStarImg : emptyStarImg}
                alt=""
              />
            </S.FavoriteButton>
          </div>
          <S.Name>{restaurant.name}</S.Name>
          <S.Distance>{restaurant.distance}</S.Distance>
          <S.Description>{restaurant.description}</S.Description>
          {restaurant.url && (
            <S.Url href={restaurant.url}>{restaurant.url}</S.Url>
          )}
          <div style={{ display: "flex", gap: "10px", marginTop: "30px" }}>
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
