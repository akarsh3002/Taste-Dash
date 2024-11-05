import { RestaurantCard } from "./RestaurantCard";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Skeleton";
export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
    console.log(
      parsedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setlistOfRestaurants(
      parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilteredRestaurant(
      parsedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  const topRatedSelected = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setfilteredRestaurant(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //Filter the restaurant card and update the UI
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRatedSelected}>
          Top-rated
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
