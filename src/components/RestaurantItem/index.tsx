import * as S from "./styles";

import emptyStarImg from "../../assets/star-empty.png";
import filledStarImg from "../../assets/star-filled.png";

import { RESTAURANT_CATEGORY_FILTER } from "../../constants/restaurant";
import { RESTAURANT_CATEGORY_IMAGES } from "../../constants/img";
import {
  RestaurantItemType,
  KoreanRestaurantCategory,
} from "../types/restaurant";
import usePatchIsFavorite from "../../hooks/usePatchIsFavorite";

type RestaurantItemProps = RestaurantItemType & { isFavorite: boolean };

const RestaurantItem = ({
  id,
  name,
  distance,
  category,
  isFavorite,
  description,
}: RestaurantItemProps) => {
  const getLogoImg = (category: KoreanRestaurantCategory) => {
    const engCategory = RESTAURANT_CATEGORY_FILTER[category];

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
    <S.RestaurantItem id={id} data-id={id}>
      <S.RestaurantLogoSection>
        <img
          src={getLogoImg(category as KoreanRestaurantCategory)} // TODO: as 제거
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
