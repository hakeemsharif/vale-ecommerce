"use client";

import { useState } from "react";

//rafce
const useMobileNav = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const showSidebar = () => {
      setIsSidebarOpen(true);
    };
  
    const hideSidebar = () => {
      setIsSidebarOpen(false);
    };
      
    return {isSidebarOpen, showSidebar, hideSidebar} 
}

export default useMobileNav