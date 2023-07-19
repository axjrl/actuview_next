"use client"
import {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {Languages} from "@/types/User";
import {useOnClickOutside} from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside";
import Cookies from "universal-cookie";

const SelectLanguage = ({minimized}: {minimized: boolean}) => {
    const cookies = new Cookies();
    const selector = useRef(null)

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const [opened, setOpened] = useState(false)

    const [checked, setChecked] = useState<Languages[]>(cookies.get("language_preferences")|| []);

    function handleSave (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        checked && cookies.set("language_preferences", checked, {secure: true});
        setOpened(false);
    }

    useOnClickOutside(selector.current, () =>{
        setOpened(false);
        setChecked(cookies.get("language_preferences")|| [])
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        if (value == "all") {
            setChecked(["cz", "en", "fr", "de", "lt"]);
        }else {
            if (!checked.includes(value as Languages)) {
                setChecked((prevChecked) => [...prevChecked, value] as Array<Languages>);
            } else {
                setChecked((prevChecked) => prevChecked.filter((lang) => lang !== value));
            }
        }
    }
    return (
        <div ref={selector} className={`${minimized ? "" :"w-44"}`}>
               {minimized ?
                   <div onClick={()=>setOpened(!opened)} className={"relative"}>
                       <span className={"w-5 h-5 ml-5 block cursor-pointer bg-primary"}></span>
                       <span className={"cursor-pointer absolute rounded-full text-xs text-white top-[-10px] right-[-10px] bg-red-700 py-1 px-2"}>
                           { isClient ? checked.length : 0}
                       </span>
                   </div>
                   :<div onClick={()=>setOpened(!opened)}>
                       <p className={"px-2.5 border cursor-pointer"}>Language</p>
                   </div>
               }
            {opened &&
                <form  onSubmit={(e)=>handleSave(e)} className={`drop-shadow-lg ${minimized && "right-9"} absolute p-4 w-44 bg-white z-30`}>
                    <p className={"text-xs"}>Choose language(s) for displayed videos</p>
                    <input onChange={(e)=>handleChange(e)} checked={checked.length == 5} className={"h-2.5"} type="checkbox" name="vehicle1" value="all"/><label className={"text-xs pl-1"} htmlFor="all">All</label><br/>
                    <input onChange={(e)=>handleChange(e)} checked={checked.includes("cz")} className={"h-2.5"} type="checkbox" value="cz" name="cz"/><label className={"text-xs pl-1"} htmlFor="cz">Czesch</label><br/>
                    <input onChange={(e)=>handleChange(e)} checked={checked.includes("en")} className={"h-2.5"} type="checkbox" value="en" name="en"/><label className={"text-xs pl-1"} htmlFor="en">Englisch</label><br/>
                    <input onChange={(e)=>handleChange(e)} checked={checked.includes("fr")} className={"h-2.5"} type="checkbox" value="fr" name="fr"/><label className={"text-xs pl-1"} htmlFor="fr">French</label><br/>
                    <input onChange={(e)=>handleChange(e)} checked={checked.includes("de")} className={"h-2.5"} type="checkbox" value="de" name="de"/><label className={"text-xs pl-1"} htmlFor="de">German</label><br/>
                    <input onChange={(e)=>handleChange(e)} checked={checked.includes("lt")} className={"h-2.5"} type="checkbox" value="lt" name="lt"/><label className={"text-xs pl-1"} htmlFor="lt">Lithuanian</label><br/>
                    <button className={"mt-2.5 bg-primary py-1.5 px-2.5 text-sm text-white"}>Save</button>
                </form>
            }
        </div>
    );
};

export default SelectLanguage;