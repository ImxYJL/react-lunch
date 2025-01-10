// import FilterSection from "./components/FilterSection/index.tsx";
import Header from "./components/Header";
import RestaurantList from "./components/RestaurantList.tsx";

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <FilterSection /> */}
        <RestaurantList />
      </main>
      <aside>
        {/* <RestaurantDetailModal />
        <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;
