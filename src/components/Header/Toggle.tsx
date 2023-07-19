"use client"
import {sidebarStore} from "@/store/sidebarStore";


const Toggle = () => {
    const toggleSidebar = sidebarStore(state => state.toggleSidebar)

    return (
        <div className={"group cursor-pointer hover:text-primary"} onClick={()=>toggleSidebar()}>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
            <span className="group-hover:bg-primary transition-colors block my-[5px] bg-gray w-[30px] h-[3px]"></span>
        </div>
    );
};

export default Toggle;