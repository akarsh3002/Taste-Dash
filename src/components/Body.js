import RestaurantCard, { cardPromoted } from "./RestaurantCard";
import React, { Component, useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Skeleton";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  // Call Function Card Promoted to make a reusable Component
  const RestaurantCardPromoted = cardPromoted(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const parsedData = await data.json();
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
      (restaurant) => restaurant?.info?.avgRating > 4
    );
    setfilteredRestaurant(filteredList);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        <h1>You are offline!</h1>
        <h2>Please check your internet connection</h2>
      </div>
    );

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body font-sans">
      <div className="filter">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-blue-100 m-4 cursor-grab rounded-xl"
            onClick={() => {
              const filteredList = listOfRestaurants?.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-amber-100 cursor-grab rounded-xl items-center"
            onClick={topRatedSelected}
          >
            Top-rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
