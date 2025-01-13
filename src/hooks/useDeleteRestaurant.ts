import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRestaurant } from "../apis/restaurant";

const useDeleteRestaurant = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteRestaurant(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantList"] });
    },
    onError: () => {
      alert("음식점 삭제 중 오류가 발생했습니다.");
    },
  });
};

export default useDeleteRestaurant;
