import { imageBaseUrl } from "../utils/NetworkUrls";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] min-h-[500px] bg-grey rounded-2xl bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-2xl object-cover h-60 w-60"
        alt="res-logo"
        src={imageBaseUrl + cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export const cardPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="m-2 p-2 absolute bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
