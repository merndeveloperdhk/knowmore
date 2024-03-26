import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

const ChatContacts = () => {
    return (
        <div>
            <div className="flex justify-between items-center my-3">
                <h1 className="text-xl font-semibold text-blue-600">Contacts</h1>
                <div className="flex gap-3 items-center text-2xl">
                <CiSearch />
                <HiOutlineDotsHorizontal />
                </div>
            </div>
            {/* Contacts name */}
           <div className="space-y-3">
           <div className="chat_contacts">
                <img src="https://i.ibb.co/74Ww20L/20170506-080529.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Fatiha akter</h1>
                <div className="badge bg-green-500 badge-xs absolute top-0 left-6"></div>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/QDcktS3/3.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Jack Fruit</h1>
            </div>
            <div className="flex gap-2 items-center relative hover:bg-gray-200 p-1 duration-500">
                <img src="https://i.ibb.co/Qch1yF8/274541232-668589014459743-1501714678471148242-n.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Marifa akter</h1>
                <div className="badge bg-green-500 badge-xs absolute top-0 left-6"></div>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/1bTXBXY/Whats-App-Image-2024-03-09-at-00-49-35-3eb84dda.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Misam Mehzabin </h1>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/2s7j34v/food1.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Alu vorta</h1>
            </div>
           <div className="chat_contacts">
                <img src="https://i.ibb.co/hWF2LTR/20160124-140945.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Mahfuja alam khushboo</h1>
            </div>
           <div className="flex gap-2 items-center relative hover:bg-gray-200 p-1 duration-500">
                <img src="https://i.ibb.co/B6Gs8Rw/Whats-App-Image-2022-11-06-at-11-01-48-PM-1.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Zarif Rahman</h1>
                <div className="badge bg-green-500 badge-xs absolute top-0 left-6"></div>
            </div>
           <div className="chat_contacts">
                <img src="https://i.ibb.co/YQz1gyP/Whats-App-Image-2022-11-06-at-11-01-47-PM.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Inisha Akter</h1>
            </div>
            <div className="flex gap-2 items-center relative hover:bg-gray-200 p-1 duration-500">
                <img src="https://i.ibb.co/QDcktS3/3.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Oliver singh</h1>
                <div className="badge bg-green-500 badge-xs absolute top-0 left-6"></div>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/Qch1yF8/274541232-668589014459743-1501714678471148242-n.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Marifa Akter</h1>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/NFM6dg5/274624981-1152895202205143-9011769012968024875-n.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Misam mehzabin</h1>
            </div>
            <div className="chat_contacts">
                <img src="https://i.ibb.co/2s7j34v/food1.jpg" className="w-8 h-8 rounded-full object-cover" alt="" />
                <h1 className="text-lg font-semibold">Dal vaji</h1>
            </div>
           </div>
        </div>
    );
};

export default ChatContacts;