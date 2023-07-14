"use client"
import {usePathname} from "next/navigation";
import Link, {LinkProps} from "next/link";

type ActiveLinkProps = LinkProps & {
    className?: string
    activeClassName: string
    children: React.ReactNode
    href: string
}

const ActiveLink = ({href, activeClassName, className, children, ...props}: ActiveLinkProps) => {
    // Splits are here for two and more levels of menu (not sure that this is the best approach)
    const path= usePathname().split("/")[1];
    const active = path === href.split("/")[1];
    return (
        <Link className={active ? activeClassName : className} href={href} {...props}>
            {children}
        </Link>
    )
};

export default ActiveLink;