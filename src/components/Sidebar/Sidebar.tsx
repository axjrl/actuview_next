import Link from "next/link";

const Sidebar = () => {
    return (
        <div className={"w-60 bg-white h-screen fixed"}>
            <nav className={"mt-7"}>
                <Link className={"pl-10 py-3 w-full block"} href={"/"}>
                    Home
                </Link>
                <Link className={"pl-10 py-3 w-full block"} href={"/"}>
                    Videos
                </Link>
                <Link className={"pl-10 py-3 w-full block"} href={"/"}>
                    News
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;