import * as S from "./styles";

import emptyStarImg from "../../assets/star-empty.png";
import filledStarImg from "../../assets/star-filled.png";

import { RestaurantItemType } from "./../../apis/restaurant";
import { RESTAURANT_CATEGORY } from "../../constants/restaurant";
import { RESTAURANT_CATEGORY_IMAGES } from "../../constants/img";

export type KoreanRestaurantCategory = keyof typeof RESTAURANT_CATEGORY;

type RestaurantItemProps = RestaurantItemType & { isFavorite: boolean };

type RestaurantImageCategory = Exclude<KoreanRestaurantCategory, "전체">;

const RestaurantItem = ({
  id,
  name,
  distance,
  category,
  isFavorite,
  description,
}: RestaurantItemProps) => {
  const getLogoImg = (category: RestaurantImageCategory) => {
    const engCategory = RESTAURANT_CATEGORY[category];

    return RESTAURANT_CATEGORY_IMAGES[engCategory];
  };

  return (
    <S.RestaurantItem id={id}>
      <S.RestaurantLogoSection>
        <img
          src={getLogoImg(category as RestaurantImageCategory)} // TODO: as 제거
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
          <S.FavoriteButton type="button" aria-label="즐겨찾기 버튼">
            <img src={isFavorite ? filledStarImg : emptyStarImg} alt="" />
          </S.FavoriteButton>
        </div>

        <S.RestaurantDescription>{description}</S.RestaurantDescription>
      </S.RestaurantInfoSection>
    </S.RestaurantItem>
  );
};

export default RestaurantItem;
