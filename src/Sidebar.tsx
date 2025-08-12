import type { ReactNode } from "react";
import "./index.css";
import clsx from "clsx";

export interface SidebarProps {
  side?: "left" | "right"; // side the sidebar appears
  open?: boolean; // whether the sidebar is in open condition or not
  width?: string; // width of the sidebar
  children?: ReactNode; // children a.k.a content of the sidebar
  className?: string; // customizable className for the component
}

export function Sidebar({ side = "left", open = false, width = "w-64", children, className }: SidebarProps) {
  return (
    <aside
      className={clsx(
        "fixed top-0 h-full bg-black shadow-lg transform transition-transform duration-300 z-50",
        side === "left" ? "left-0" : "right-0",
        width,
        open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full",
        className
      )}
    >
      {children}
    </aside>
  );
}
