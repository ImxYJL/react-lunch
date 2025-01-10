import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RestaurantItemType } from "../components/types/restaurant";
import { postRestaurant } from "../apis/restaurant";

const usePostRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (restaurant: RestaurantItemType) => postRestaurant(restaurant),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantList"] });
      alert("음식점이 성공적으로 추가되었습니다.");
    },
    onError: () => {
      alert("음식점 추가 중 오류가 발생했습니다.");
    },
  });
};

export default usePostRestaurant;
