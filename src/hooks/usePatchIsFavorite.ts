import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchIsFavorite, PatchIsFavoriteParams } from "../apis/restaurant";

const usePatchIsFavorite = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, isFavorite }: PatchIsFavoriteParams) =>
      patchIsFavorite({ id, isFavorite }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["restaurantList"] });
    },
    onError: () => alert("오류가 발생했습니다"),
  });
};

export default usePatchIsFavorite;
