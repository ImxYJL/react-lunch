import FilterSection from "./components/FilterSection/index.tsx";
import { useState } from "react";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList.tsx";
import TabSection from "./components/TabSection/index.tsx";

import { SortType } from "./components/SortTypeDropdown/index.tsx";
import { KoreanRestaurantCategoryFilter } from "./components/types/restaurant.ts";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const [selectedCategory, setSelectedCategory] =
    useState<KoreanRestaurantCategoryFilter>("전체");
  const [selectedSortType, setSelectedSortType] = useState<SortType>("이름순");

  const handleTabClick = (idx: number) => {
    setTabIndex(idx);
  };

  const isFavoriteTab = tabIndex !== 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Header />
      <main>
        <TabSection tabIndex={tabIndex} handleTabClick={handleTabClick} />
        <FilterSection
          setSelectedCategory={setSelectedCategory}
          setSelectedSortType={setSelectedSortType}
        />
        <RestaurantList
          isFavoriteTab={isFavoriteTab}
          selectedCategory={selectedCategory}
          selectedSortType={selectedSortType}
        />
      </main>
    </div>
  );
}

export default App;
