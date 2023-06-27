import React from "react";
import BottomNav from '../../components/menus/bottomNav';

export default function WorkflowLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <div className="main-contianer" style={{ paddingTop: "5vh" }}>
        {children}
        <BottomNav />
    </div>

}