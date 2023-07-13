import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className={"sticky top-0"}>
            <div className="h-10 bg-gray flex justify-end items-center border-b-2 border-primary">
                <Link className="ml-5 text-white" target={"_blank"} href={"/"}>actuview</Link>
                <Link className="ml-5 text-white" target={"_blank"} href={"https://www.actupool.com/en"}>actupool</Link>
                <Link className="ml-5 mr-5 text-white" target={"_blank"} href={"https://actuarial-media.com/"}>amc - actuarial media center</Link>
            </div>
            <div className="px-10 max-sm:pr-5 flex justify-between items-center h-[70px] bg-white">
                <div className={"flex items-center"}>
                    <div>
                        <span className="block my-[5px] bg-gray w-[30px] h-[3px]"></span>
                        <span className="block my-[5px] bg-gray w-[30px] h-[3px]"></span>
                        <span className="block my-[5px] bg-gray w-[30px] h-[3px]"></span>
                    </div>
                    <Link href={"/"}>
                        <Image className={"max-lg:w-[135px] max-lg:h-7 ml-10 max-lg:ml-7"} alt={"logo"} width={171} height={35} src={"/logo.png"}/>
                    </Link>
                </div>
                <div>
                    <form action="/search" method="post">
                        <div className="h-[38px] w-[500px] border-separate relative flex ">
                            <label id="search-label" htmlFor="search"></label>
                            <input className={"focus:outline-primary relative block float-left w-full h-[38px] border border-gray py-1.5 px-3"} type="text" id="search" name="search" autoComplete="off"/>
                            <button id="searchSubmit" className="w-16 bg-primary_text h-[38px] pb-1" type="submit" aria-label="Search">
                                <i className="fal fa-search"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className={"flex items-center h-[70px]"}>
                    <Link href={"/login"}>Login</Link>
                    <span className="h-6 mx-2.5 w-0.5 bg-primary"></span>
                    <Link href={"/signup"}>Register</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;