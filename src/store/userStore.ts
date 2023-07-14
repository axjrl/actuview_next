import { create } from 'zustand'
import {Languages, User} from "@/types/User";
import {createJSONStorage, persist} from "zustand/middleware";
import Cookies from "universal-cookie";
import sidebar from "@/components/Sidebar/Sidebar";

interface userState extends User {
    setLang:(langs: Array<Languages>) => void
    sidebar: boolean
    toggleSidebar: () => void
}
const cookies = new Cookies();

// export const userStore = create<userState>((set) => ({
//     lang_preferences: ["cz", "en", "fr", "de", "lt"],
//     setLang: (langs) => set({lang_preferences: langs}),
// }))
export const userStore = create<userState>()(
    persist(
        (set, get) => ({
            lang_preferences: cookies.get('lang_preferences') || ["cz", "en", "fr", "de", "lt"],
            setLang: (langs) => {
                set({ lang_preferences: langs });
                cookies.set('lang_preferences', langs);
            },
            sidebar: false,
            toggleSidebar: () => set((state) => ({ sidebar: !state.sidebar})),
        }),
        {
            name: 'user', // unique name
        }
    )
)