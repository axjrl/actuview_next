"use client"
import {sidebarStore} from "@/store/sidebarStore";
import {useEffect, useState} from "react";
import {cookies} from "next/headers";
import Cookies from "universal-cookie";
import dynamic from "next/dynamic";
import SidebarLink from "@/components/Sidebar/SidebarLink";
import {usePersistedState} from "@/hooks/usePersistedState";
import Link from "next/link";

const Sidebar = () => {
    const sidebar = sidebarStore(state => state.sidebar);

    return (
        <div className={`max-lg:hidden max-xl:w-20 bg-white h-screen fixed z-40  ${sidebar ? "w-60" : "w-20"}`}>
            <nav className={"mt-7"}>
                <SidebarLink minimized={!sidebar} href={"/"} text={"Home"}/>
                <SidebarLink minimized={!sidebar} href={"/video"} text={"Videos"}/>
                <SidebarLink minimized={!sidebar} href={"/news"} text={"News"}/>
                <SidebarLink minimized={!sidebar} href={"/events"} text={"Events"}/>
                <SidebarLink minimized={!sidebar} href={"/join"} text={"Join"}/>
                <SidebarLink minimized={!sidebar} href={"/partners"} text={"Partners"}/>
                <SidebarLink minimized={!sidebar} href={"/career"} text={"Career"}/>
                <SidebarLink minimized={!sidebar} href={"/about"} text={"About"}/>
                <hr className={"text-primary my-5 mx-2.5"}/>
                <hr className={"text-primary my-5 mx-2.5"}/>
                <SidebarLink minimized={!sidebar} href={"/contact"} text={"Contact"}/>
                <SidebarLink minimized={!sidebar} href={"/newsletter"} text={"Newsletter"}/>
                <SidebarLink minimized={!sidebar} href={"/legal"} text={"Legal"}/>
                <SidebarLink minimized={!sidebar} href={"/protection"} text={"Data protection"}/>
                <SidebarLink minimized={!sidebar} href={"/faq"} text={"FAQs"}/>
            </nav>
        </div>
    );
};

export default Sidebar;