"use client"
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const SidebarLink = ({href, text, minimized}: {href: string, text: string, minimized: boolean}) => {
    console.log(minimized, href)
    return (
        <ActiveLink
            className={minimized ? "sidebar_link_mini" : `sidebar_link`}
            href={href}
            activeClassName={`${minimized ? "sidebar_link_mini" : "sidebar_link"} text-primary`}
        >
            {text}
        </ActiveLink>
    );
};

export default SidebarLink;