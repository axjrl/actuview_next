"use client"
import {ChangeEvent, FormEvent, useRef, useState} from "react";
import {userStore} from "@/store/userStore";
import {Languages, User} from "@/types/User";
import {cookies} from "next/headers";
import {useOnClickOutside} from "next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;

const SelectLanguage = () => {
    const [opened, setOpened] = useState(false)

    const selector = useRef(null)
    const [lang_preferences, setLang] = userStore((state) => [state.lang_preferences, state.setLang])

    const [checked, setChecked] = useState(lang_preferences)
    function handleSave (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLang(checked);
    }
    useOnClickOutside(selector.current, () =>setOpened(false));

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
        <div ref={selector} className={"w-44"}>
           <div onClick={()=>setOpened(!opened)} className={"px-2.5 border cursor-pointer"}><p>Language</p></div>
            {opened &&
                <form  onSubmit={(e)=>handleSave(e)} className={"drop-shadow-lg p-4 w-44 bg-white z-20 fixed"}>
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