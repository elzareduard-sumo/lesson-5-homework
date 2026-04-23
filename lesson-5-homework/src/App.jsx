import React from "react";
import Counter from "./components/Counter/Counter";
import FilteredList from "./components/FilteredList/FilteredList";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import PostsApp from "./components/PostsApp/PostsApp";
import Shop from "./components/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div className="main-layout">
      <div className="layout-section">
        <div className="card">
          <Counter />
          <hr className="inner-divider" />
          <FilteredList />
        </div>
      </div>

      <div className="layout-section">
        <RegistrationForm />
      </div>

      <div className="layout-section">
        <PostsApp />
      </div>

      <div className="layout-section">
        <Shop />
      </div>
    </div>
  );
}

export default App;
