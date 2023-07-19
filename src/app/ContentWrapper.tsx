"use client"
import React, {useEffect, useState} from "react";
import {sidebarStore} from "@/store/sidebarStore";

const ContentWrapper = ({children}: {children: React.ReactNode}) => {
    const sidebar = sidebarStore(state => state.sidebar);

    return (
        <div className={`${sidebar ? "pl-60" : "pl-20"} max-lg:pl-0 max-xl:pl-20 relative`}>
            {children}
        </div>
    );
};

export default ContentWrapper;