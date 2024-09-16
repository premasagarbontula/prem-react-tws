import React, { useState, useEffect } from "react";
// import { useSearch } from "./components/context/SearchContext.js";
// import { Link } from "react-router-dom";

const Products = () => {
  const [meals, setMeals] = useState([]);
  let search = "pasta";

  const getAllMeals = async () => {
    const { data } = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=pasta`
    );
    setMeals(data);
  };

  useEffect(() => {
    getAllMeals();
  }, []);

  return (
    <div className="row">
      <div className="col-md-9">
        <h1 className="text-center mt-3 mb-3">Searched Meals</h1>
        <div className="d-flex flex-wrap">
          {/* <Link to={`/meals/${p.idMeal}`} key={p.idMeal}> */}
          <div className="card-body">
            <h5 className="card-title">{}</h5>
            <p className="card-text">{}</p>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
