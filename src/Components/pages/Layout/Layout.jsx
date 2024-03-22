import LeftLayout from "./LeftLayout";
import Carousel from "./Middle/Carousel";
import UploadField from "./Middle/UploadField";
import RightShortCut from "./Right/RightShortCut";
import Sponsors from "./Right/Sponsors";

const Layout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 min-h-screen">
        {/* left */}
     <LeftLayout></LeftLayout>
      {/* middle */}
      <div className="md:col-span-2 ">
        <Carousel></Carousel>
        <UploadField></UploadField>
      </div>
      {/* right */}
      <div className="md:col-span-1  p-2">
        <Sponsors></Sponsors>
        <div className="divider w-3/4 ps-2 "></div>
        <RightShortCut></RightShortCut>
      </div>
      
    </div>
  );
};

export default Layout;
