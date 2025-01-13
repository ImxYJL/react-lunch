import { useState } from "react";

import RestaurantItem from "../RestaurantItem";
import { SortType } from "../SortTypeDropdown";
import {
  KoreanRestaurantCategoryFilter,
  RestaurantItemType,
} from "../types/restaurant";
import useGetRestaurantList from "../../hooks/useGetRestaurantList";
import RestaurantDetailModal from "../RestaurantDetailModal";

interface RestaurantListProps {
  isFavoriteTab: boolean;
  selectedCategory: KoreanRestaurantCategoryFilter;
  selectedSortType: SortType;
}

const RestaurantList = ({
  isFavoriteTab,
  selectedCategory,
  selectedSortType,
}: RestaurantListProps) => {
  const { data: restaurantList } = useGetRestaurantList();

  const [selectedRestaurant, setSelectedRestaurant] =
    useState<RestaurantItemType | null>(null);

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  const handleItemClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const listItem = (event.target as HTMLElement).closest("li");
    if (!listItem) return;

    // dataset에서 id를 추출하여 클릭된 아이템을 식별
    const id = listItem.dataset.id;
    const selectedItem = restaurantList?.find((item) => item.id === id);

    // 모달 열기
    if (selectedItem) {
      setSelectedRestaurant(selectedItem);
    }
  };

  const filteredList = restaurantList
    ?.filter((item) => (isFavoriteTab ? item.isFavorite : true)) // 즐겨찾기
    .filter(
      (item) =>
        selectedCategory === "전체" || item.category === selectedCategory
    ) // 카테고리 필터
    .sort((a, b) => {
      if (selectedSortType === "거리순") {
        // TODO: distance 데이터는 숫자/혹은 숫자 문자열만 받도록 수정하기
        const aDistance = Number(a.distance.replace(/\D/g, ""));
        const bDistance = Number(b.distance.replace(/\D/g, ""));

        return aDistance - bDistance;
      }
      if (selectedSortType === "이름순") {
        return a.name.localeCompare(b.name);
      }

      return 0;
    });

  return (
    <ul onClick={handleItemClick}>
      {filteredList?.map((item) => (
        <RestaurantItem
          key={item.id}
          id={item.id}
          name={item.name}
          distance={item.distance}
          category={item.category}
          description={item.description}
          isFavorite={item.isFavorite}
        />
      ))}
      {selectedRestaurant && (
        <RestaurantDetailModal
          restaurant={selectedRestaurant}
          closeModal={closeModal}
        />
      )}
    </ul>
  );
};

export default RestaurantList;
