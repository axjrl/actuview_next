"use client"
import ActiveLink from "@/components/Sidebar/ActiveLink/ActiveLink";
import {userStore} from "@/store/userStore";

const Sidebar = () => {
    const [sidebar] = userStore((state)=>[state.sidebar]);
    const activeLinkClassname= `${!sidebar ? "text-xs text-center" :"pl-10"} py-3 w-full block text-primary`
    const linkClassname= `${!sidebar ? "text-xs text-center" : "pl-10"} py-3 w-full block`;
    return (
        <div className={`max-lg:opacity-0 bg-white h-screen fixed z-40  ${sidebar ? "w-60" : "w-20"}`}>
            <nav className={"mt-7"}>
                <ActiveLink className={linkClassname} href={"/"} activeClassName={activeLinkClassname}>
                    Home
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/video"} activeClassName={activeLinkClassname}>
                    Videos
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/news"} activeClassName={activeLinkClassname}>
                    News
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/events"} activeClassName={activeLinkClassname}>
                    Events
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/join"} activeClassName={activeLinkClassname}>
                    Join
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/partners"} activeClassName={activeLinkClassname}>
                    Partners
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/career"} activeClassName={activeLinkClassname}>
                    Career
                </ActiveLink>
                <ActiveLink className={linkClassname} href={"/about"} activeClassName={activeLinkClassname}>
                    About
                </ActiveLink>
            </nav>
        </div>
    );
};

export default Sidebar;