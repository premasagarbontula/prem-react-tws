import "./styles.css";
import Header from "../src/components/Header/index.js";
import MealDisplay from "../src/components/MealDisplay/index.js";

import { SearchProvider } from "./context/SearchContext.js";

export default function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <MealDisplay />
      </SearchProvider>
    </>
  );
}
