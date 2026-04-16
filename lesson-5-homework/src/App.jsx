import React from "react";
import Counter from "./components/Counter/Counter";
import FilteredList from "./components/FilteredList/FilteredList";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />

      <FilteredList />
    </div>
  );
}

export default App;
