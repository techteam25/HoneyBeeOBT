import React from "react";
import BottomNav from "../../components/menus/bottomNav";

export default function WorkflowLayout({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <div className="main-contianer" style={{ paddingTop: "5vh", paddingBottom: "20vh" }}>
      {children}
      <BottomNav router={route} />
    </div>
  );
}
