import { useEffect, useState } from "react";

import RestaurantItem from "../RestaurantItem";
import { SortType } from "../SortTypeDropdown";
import {
  KoreanRestaurantCategoryFilter,
  RestaurantItemType,
} from "../types/restaurant";
import useGetRestaurantList from "../../hooks/useGetRestaurantList";
import RestaurantDetailModal from "../RestaurantDetailModal";

interface RestaurantListProps {
  selectedCategory: KoreanRestaurantCategoryFilter;
  selectedSortType: SortType;
}

const RestaurantList = ({
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
    console.log("hi");

    // dataset에서 id를 추출하여 클릭된 아이템을 식별
    const id = listItem.dataset.id;
    const selectedItem = restaurantList?.find((item) => item.id === id);

    // 모달 열기
    if (selectedItem) {
      setSelectedRestaurant(selectedItem);
    }
  };

  // useEffect(() => {
  //   console.log(selectedCategory);
  //   console.log(selectedSortType);
  // }, [selectedCategory, selectedSortType]);

  return (
    <ul onClick={handleItemClick}>
      {restaurantList?.map((item) => (
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
