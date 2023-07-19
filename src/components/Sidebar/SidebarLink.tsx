import { useEffect, useState } from 'react';
import ActiveLink from '@/components/ActiveLink/ActiveLink';

const SidebarLink = ({ href, text, minimized }: { href: string, text: string, minimized: boolean }) => {

    const linkClassName = minimized ? 'sidebar_link_mini' : 'sidebar_link'

    const activeLinkClassName = `${minimized ? 'sidebar_link_mini' : 'sidebar_link'} text-primary`

    return (
        <ActiveLink
            className={linkClassName}
            href={href}
            activeClassName={activeLinkClassName}
        >
            {text}
        </ActiveLink>
    );
};

export default SidebarLink;