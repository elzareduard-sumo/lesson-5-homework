import React from "react";
import Counter from "./components/Counter/Counter";
import FilteredList from "./components/FilteredList/FilteredList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PostsApp from "./components/PostsApp/PostsApp";
import "./App.css";

function App() {
  return (
    <div>
      <Counter />

      <FilteredList />

      <RegistrationForm />
      <PostsApp />
    </div>
  );
}

export default App;
