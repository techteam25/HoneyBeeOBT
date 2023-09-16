import React from "react";
import BottomNav from "../../components/menus/bottomNav";
import styles from "./layout.module.css";

export default function WorkflowLayout({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return (
    <div className={styles.workflowContainer} style={{ paddingBottom: "20vh" }}>
      {children}
      <BottomNav router={route} />
    </div>
  );
}
