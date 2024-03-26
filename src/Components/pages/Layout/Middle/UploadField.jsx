import { FaVideo } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { CgSmileMouthOpen } from "react-icons/cg";
const UploadField = () => {
  return (
    <div className="border border-gray-300 rounded-md h-40 p-2">
      <div className="flex items-center gap-2">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://i.ibb.co/Qch1yF8/274541232-668589014459743-1501714678471148242-n.jpg" />
          </div>
        </div>
        <input
          type="text"
          placeholder="What's on your mind , Your name"
          className="p-2 border border-slate-400 rounded-full w-full bg-gray-300"
        />
      </div>
      <div className="divider"></div>
      <div className="flex justify-around">
        <button className="flex items-center gap-2 hover:bg-slate-300 px-4 py-2 rounded-md">
          <FaVideo className="text-red-600 text-2xl" />
          <h1 className="font-semibold">Live Video</h1>
        </button>
        <button className="flex items-center gap-2 hover:bg-slate-300 px-4 py-2 rounded-md">
          <IoMdPhotos className="text-green-500 text-2xl" />
          <h1 className="font-semibold">Photo / Video</h1>
        </button>
        <button className="flex items-center gap-2 hover:bg-slate-300 px-4 py-2 rounded-md">
          <CgSmileMouthOpen className="text-yellow-600 text-2xl" />
          <h1 className="font-semibold">Feeling / Activity</h1>
        </button>
      </div>
    </div>
  );
};

export default UploadField;
