import { useState } from "react";
import CategoryItem from "./CategoryItem";

const RestaurantCategory = (props) => {
  const { data } = props;
  console.log("data",data)
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-6/12 px-4">
      {/* header for accordion */}
      <div
        className="bg-gray-200 rounded-lg w-full flex items-center p-2 my-2 justify-between cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-semibold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>{isOpen ? "⬆️" : "⬇️"}</span>
      </div>

      {/* body for accordion */}
      {isOpen &&
        data?.itemCards.map((item) => <CategoryItem data={item?.card?.info} />)}
    </div>
  );
};

export default RestaurantCategory;
