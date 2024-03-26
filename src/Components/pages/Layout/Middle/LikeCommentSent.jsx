import { AiOutlineLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const LikeCommentSent = () => {
    return (
        <div className="flex justify-around border border-y-2 border-x-0 py-2">
            <div className="flex gap-2 items-center text-xl">
            <AiOutlineLike />
                <h1>like</h1>
            </div>
            <div className="flex gap-2 items-center text-xl">
            <FaRegComment />
                <h1>Comment</h1>
            </div>
            <div className="flex gap-2 items-center text-xl">
            <FiSend />
                <h1>Send</h1>
            </div>
        </div>
    );
};

export default LikeCommentSent;