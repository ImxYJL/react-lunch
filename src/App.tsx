import FilterSection from "./components/FilterSection/index.tsx";
import { useState } from "react";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList.tsx";
import TabSection from "./components/TabSection/index.tsx";

import { SortType } from "./components/SortTypeDropdown/index.tsx";
import { KoreanRestaurantCategoryFilter } from "./components/types/restaurant.ts";
import AddRestaurantModal from "./components/AddRestaurantModal/index.tsx";

function App() {
  const [isFavoriteTab, setIsFavoriteTab] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<KoreanRestaurantCategoryFilter>("전체");
  const [selectedSortType, setSelectedSortType] = useState<SortType>("이름순");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const handleTabClick = () => {
    setIsFavoriteTab(!isFavoriteTab);
  };

  return (
    <>
      <Header openAddModal={openAddModal} />
      <main>
        <TabSection
          isFavoriteTab={isFavoriteTab}
          handleTabClick={handleTabClick}
        />
        <FilterSection
          setSelectedCategory={setSelectedCategory}
          setSelectedSortType={setSelectedSortType}
        />
        <RestaurantList
          selectedCategory={selectedCategory}
          selectedSortType={selectedSortType}
        />
      </main>

      {isAddModalOpen && <AddRestaurantModal closeModal={closeAddModal} />}
    </>
  );
}

export default App;
