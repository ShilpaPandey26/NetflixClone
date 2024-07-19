import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=" absolute   pt-[10%] text-white flex flex-col gap-4 p-12">
      <h1 className="font-bold  text-3xl">{title}</h1>
      <p className="w-1/3">{overview}</p>
      <div className="text-black flex gap-4">

        <button className="px-5 py-2 bg-white rounded-sm flex items-center gap-2">
          <FaPlay />
          <span>Play</span>
        </button>

        <button className="px-5 py-2  bg-gray-400 rounded-sm flex items-center gap-2 tex-">
          <IoMdInformationCircleOutline />
          <span>Match More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
