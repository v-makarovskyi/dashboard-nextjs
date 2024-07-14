import React from "react";
import SideNav from "../ui/dashboard/sidenav";

export const experimental_ppr = true

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full md:w-64 flex-none">
            <SideNav />
        </div>
        <div className="p-6 md:p-12 grow md:overflow-y-auto">{children}</div>
    </div>
  );
}
