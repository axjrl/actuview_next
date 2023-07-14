"use client"
import {userStore} from "@/store/userStore";
import SidebarLink from "@/components/Sidebar/SidebarLink";

const Sidebar = () => {
    const [sidebar] = userStore((state)=>[state.sidebar]);

    return (
        <div className={`max-lg:opacity-0 max-xl:w-20 bg-white h-screen fixed z-40  ${sidebar ? "w-60" : "w-20"}`}>
            <nav className={"mt-7"}>
                <SidebarLink minimized={!sidebar} href={"/"} text={"Home"}/>
                <SidebarLink minimized={!sidebar} href={"/video"} text={"Videos"}/>
                <SidebarLink minimized={!sidebar} href={"/news"} text={"News"}/>
                <SidebarLink minimized={!sidebar} href={"/events"} text={"Events"}/>
                <SidebarLink minimized={!sidebar} href={"/join"} text={"Join"}/>
                <SidebarLink minimized={!sidebar} href={"/partners"} text={"Partners"}/>
                <SidebarLink minimized={!sidebar} href={"/career"} text={"Career"}/>
                <SidebarLink minimized={!sidebar} href={"/about"} text={"About"}/>
            </nav>
        </div>
    );
};

export default Sidebar;