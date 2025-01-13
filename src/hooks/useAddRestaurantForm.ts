import { useState } from "react";
import {
  KoreanRestaurantCategorySelector,
  RestaurantItemType,
} from "../components/types/restaurant";

interface RequiredField {
  foodCategory: KoreanRestaurantCategorySelector | "";
  name: string;
  distance: string;
}

interface OptionalField {
  description?: string;
  url?: string;
}

type RestaurantForm = Required<RequiredField> & Partial<OptionalField>;

const useAddRestaurantForm = () => {
  const [formInput, setFormInput] = useState<RestaurantForm>({
    foodCategory: "기타",
    name: "",
    description: "",
    distance: "",
    url: "",
  });

  const handleFieldChange = (field: keyof RestaurantForm, value: string) => {
    setFormInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const checkIsEssentialInputExist = (): boolean => {
    const { foodCategory, name, distance } = formInput;
    return !!(foodCategory && name && distance);
  };

  const createValidRestaurantItem = () => {
    if (!checkIsEssentialInputExist()) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    const formattedDistance = `캠퍼스로부터 ${formInput.distance} 내`;

    const newRestaurant: RestaurantItemType = {
      id: Date.now().toString(),
      name: formInput.name,
      distance: formattedDistance,
      description: formInput.description || "",
      url: formInput.url || "",
      category: formInput.foodCategory,
      isFavorite: false,
    };

    return newRestaurant;
  };

  return {
    formInput: { ...formInput },
    handleFieldChange,
    createValidRestaurantItem,
  };
};

export default useAddRestaurantForm;
