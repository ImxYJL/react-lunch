import { useEffect, useState } from "react";
import {
  getRestaurantList,
  RestaurantListResponse,
} from "../../apis/restaurant";
import RestaurantItem from "../RestaurantItem";

const fetchRestaurantList = async () => {
  const result = await getRestaurantList();

  return result;
};

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] =
    useState<RestaurantListResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchRestaurantList();
        setRestaurantList(data); // 상태 업데이트
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul>
      {restaurantList?.map((item) => (
        <RestaurantItem
          key={item.id}
          id={item.id}
          name={item.name}
          distance={item.distance}
          category={item.category}
          description={item.description}
          isFavorite={false}
        />
      ))}
    </ul>
  );
};

export default RestaurantList;
