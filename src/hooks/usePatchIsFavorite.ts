import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchIsFavorite, PatchIsFavoriteParams } from "../apis/restaurant";
import {
  RestaurantItemType,
  RestaurantListResponse,
} from "../components/types/restaurant";

const usePatchIsFavorite = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ id, isFavorite }: PatchIsFavoriteParams) =>
      patchIsFavorite({ id, isFavorite }),

    onMutate: async (newData: PatchIsFavoriteParams) => {
      await queryClient.cancelQueries({ queryKey: ["restaurantList"] });

      const previousData = queryClient.getQueryData(["restaurantList"]);
      queryClient.setQueryData(
        ["restaurantList"],
        (oldData: RestaurantListResponse) => {
          if (!oldData) return [];

          return oldData.map((item: RestaurantItemType) =>
            item.id === newData.id
              ? { ...item, isFavorite: newData.isFavorite }
              : item
          );
        }
      );

      return { previousData };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantList"] });
    },
    onError: () => alert("오류가 발생했습니다"),
  });

  return { mutate, isPending };
};

export default usePatchIsFavorite;
