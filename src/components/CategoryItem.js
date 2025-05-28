import { imageBaseUrl } from "../utils/NetworkUrls";

const CategoryItem = (props) => {
  const { data } = props;
  return (
    <div className="flex justify-between rounded-lg my-2 bg-gray-100">
      <img
        src={imageBaseUrl + data?.imageId}
        className="w-28 h-28 rounded-lg"
      />
      <button className="absolute self-auto p-1 rounded bg-black text-white">
        Add +
      </button>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-start rounded-lg font-semibold bg-gray-200 p-2">
          <span> {data?.name}</span>
          <p> Rs. {data?.price / 100}</p>
        </div>
        <p className="text-justify p-2"> {data?.description}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
