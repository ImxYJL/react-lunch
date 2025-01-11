import { RestaurantItemType } from "../components/types/restaurant";

const ENDPOINT = "http://localhost:3000/restaurants";

export type RestaurantListResponse = RestaurantItemType[];

export const getRestaurantList = async () => {
  const response = await fetch(ENDPOINT, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("서버 에러");
  }

  const data = await response.json();
  return data as RestaurantListResponse;
};

export const postRestaurant = async (restaurant: RestaurantItemType) => {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(restaurant),
  });

  if (!response.ok) {
    throw new Error("서버 에러");
  }
};

export const deleteRestaurant = async (id: string) => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("삭제 실패");
  }
};

export interface PatchIsFavoriteParams {
  id: string;
  isFavorite: boolean;
}

export const patchIsFavorite = async ({
  id,
  isFavorite,
}: PatchIsFavoriteParams) => {
  const response = await fetch(`${ENDPOINT}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ isFavorite }),
  });

  if (!response.ok) {
    throw new Error("즐겨찾기 데이터 갱신 실패");
  }
};
