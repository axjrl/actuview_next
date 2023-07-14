import ActiveLink from "@/components/ActiveLink/ActiveLink";

const SidebarLink = ({href, text, minimized}: {href: string, text: string, minimized: boolean}) => {

    return (
        <ActiveLink
            className={`${minimized && "text-xs text-center pl-0"} max-xl:text-xs max-xl:text-center max-xl:pl-0 pl-10 py-3 w-full block`}
            href={href}
            activeClassName={`${minimized && "text-xs text-center pl-0"} max-xl:text-xs max-xl:text-center max-xl:pl-0 pl-10 py-3 w-full block text-primary`}
        >
            {text}
        </ActiveLink>
    );
};

export default SidebarLink;