import FilterSection from "./components/FilterSection/index.tsx";
import { useState } from "react";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList.tsx";
import TabSection from "./components/TabSection/index.tsx";
import { KoreanRestaurantCategory } from "./components/RestaurantItem/index.tsx";
import { SortType } from "./components/SortTypeDropdown/index.tsx";

function App() {
  const [isFavoriteTab, setIsFavoriteTab] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<KoreanRestaurantCategory>("전체");
  const [selectedSortType, setSelectedSortType] = useState<SortType>("이름순");

  const handleTabClick = () => {
    setIsFavoriteTab(!isFavoriteTab);
  };

  return (
    <>
      <Header />
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
      <aside>
        {/* <RestaurantDetailModal />
        <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
