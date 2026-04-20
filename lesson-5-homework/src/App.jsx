import React from "react";
import Counter from "./components/Counter/Counter";
import FilteredList from "./components/FilteredList/FilteredList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />

      <FilteredList />

      <RegistrationForm />
    </div>
  );
}

export default App;
