const ENDPOINT = "http://localhost:3000/restaurants";

// // POST 예시
// const response = await fetch("http://localhost:3000/restaurants", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(restaurant),
// });

export interface RestaurantItemType {
  id: string;
  name: string;
  distance: string;
  description: string;
  category: string;
}

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

// export const postDataForReviewRequestCodeApi = async (dataForReviewRequestCode: DataForReviewRequestCode) => {
//   const response = await fetch(endPoint.postingDataForReviewRequestCode, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(dataForReviewRequestCode),
//   });

//   if (!response.ok) {
//     throw new Error(createApiErrorMessage(response.status));
//   }

//   const data = await response.json();
//   return data;
// };
