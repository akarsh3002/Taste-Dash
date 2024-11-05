import { imageBaseUrl } from "../utils/NetworkUrls";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="resLogo"
        alt="res-logo"
        src={imageBaseUrl + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
