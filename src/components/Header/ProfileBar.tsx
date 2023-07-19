"use client"
import Link from "next/link";
import SelectLanguage from "@/components/SelectLanguage/SelectLanguage";
import {useState} from "react";

const ProfileBar = () => {
    const logged = true;
    const [dropdown, setDropdown] = useState(false)
    return logged ?(
        <div className={"flex items-center relative"}>
            <p className={"max-lg:hidden"}>{"iscope_idikteriov"}</p>
            <span onClick={()=>setDropdown(!dropdown)} className={"rounded-full cursor-pointer bg-gray w-6 h-6 lg:hidden"}></span>
            {dropdown && <div className={"gap-3 absolute w-fit h-fit bg-white flex top-6 p-3 drop-shadow-lg right-16 flex-col"}>
                <Link className={""} href={"/profile"}>Profile</Link>
                <Link href={"/profile"}>Messages</Link>
                <Link href={"/profile"}>Backend</Link>
                <Link href={"/profile"}>Logout</Link>
            </div>}
            <span className="h-6 mx-2.5 w-0.5 bg-primary"></span>
            <div className={"flex max-lg:hidden"}>
                <span className={"w-5 h-5 bg-gray"}></span>
                <span className={"w-5 h-5 bg-gray mx-5"}></span>
                <span className={"w-5 h-5 bg-gray"}></span>
            </div>
            <SelectLanguage minimized={true}/>
        </div>
    ): (
        <div className={"flex items-center"}>
            <Link href={"/login"}>Login</Link>
            <span className="h-6 mx-2.5 w-0.5 bg-primary"></span>
            <Link href={"/signup"}>Register</Link>
        </div>
    );
};

export default ProfileBar;