import { useQuery } from "@tanstack/react-query";
import { getRestaurantList, RestaurantListResponse } from "../apis/restaurant";

const useGetRestaurantList = () => {
  const result = useQuery<RestaurantListResponse>({
    queryKey: ["restaurantList"],
    queryFn: () => getRestaurantList(),
    staleTime: 60 * 60 * 1000,
  });

  return result;
};

export default useGetRestaurantList;
