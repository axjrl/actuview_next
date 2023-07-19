import { create } from 'zustand'
import {User} from "@/types/User";
import Cookies from "universal-cookie";

interface userState extends User {
    sidebar: boolean
    toggleSidebar: () => void
}
const cookies = new Cookies();
// export const userStore = create<userState>()(
//     persist(
//         (set, get) => ({
//             sidebar: true,
//             toggleSidebar: () => {
//                 set((state) => ({ sidebar: !state.sidebar}));
//             },
//         }),
//         {
//             name: 'user', // unique name
//         }
//     )
// )
export const sidebarStore = create<userState>((set) => ({
    sidebar: true,
    toggleSidebar: () => {
        set((state) => ({ sidebar: !state.sidebar}));
    },
}))