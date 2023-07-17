"use client"
import {userStore} from "@/store/userStore";

const Toggle = () => {
    const [toggleSidebar] = userStore((state) => [state.toggleSidebar, state.sidebar])
    return (
        <div className={"group cursor-pointer hover:text-primary"} onClick={()=>toggleSidebar()}>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
        </div>
    );
};

export default Toggle;