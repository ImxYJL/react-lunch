import * as S from "./styles";

import emptyStarImg from "../../assets/star-empty.png";
import filledStarImg from "../../assets/star-filled.png";

import { KIND_OF_FOOD } from "../../constants/restaurant";
import { RESTAURANT_CATEGORY_IMAGES } from "../../constants/img";
import {
  RestaurantItemType,
  KoreanRestaurantCategorySelector,
} from "../types/restaurant";
import usePatchIsFavorite from "../../hooks/usePatchIsFavorite";

const RestaurantItem = ({
  id,
  name,
  distance,
  category,
  isFavorite,
  description,
}: RestaurantItemType) => {
  const getLogoImg = (category: KoreanRestaurantCategorySelector) => {
    const engCategory = KIND_OF_FOOD[category];

    return RESTAURANT_CATEGORY_IMAGES[engCategory];
  };

  const { mutate } = usePatchIsFavorite();

  const handleFavoriteButtonToggle = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.stopPropagation();

    const newIsFavorite = !isFavorite;
    mutate({ id, isFavorite: newIsFavorite });
  };

  return (
    <S.RestaurantItem id={id}>
      <S.RestaurantLogoSection>
        <img
          src={getLogoImg(category as KoreanRestaurantCategorySelector)} // TODO: as 제거
          alt={category}
        />
      </S.RestaurantLogoSection>
      <S.RestaurantInfoSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <S.RestaurantName>{name}</S.RestaurantName>
            <S.RestaurantDistance>{distance}</S.RestaurantDistance>
          </div>
          <S.FavoriteButton
            type="button"
            aria-label="즐겨찾기 버튼"
            onClick={(e) => handleFavoriteButtonToggle(e)}
          >
            <img src={isFavorite ? filledStarImg : emptyStarImg} alt="" />
          </S.FavoriteButton>
        </div>

        <S.RestaurantDescription>{description}</S.RestaurantDescription>
      </S.RestaurantInfoSection>
    </S.RestaurantItem>
  );
};

export default RestaurantItem;
