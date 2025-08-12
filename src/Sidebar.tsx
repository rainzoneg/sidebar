import type { ReactNode } from "react";
import "./index.css";
import clsx from "clsx";

export interface SidebarProps {
  side?: "left" | "right"; // side the sidebar appears
  open?: boolean; // whether the sidebar is in open condition or not
  width?: string; // width of the sidebar
  animated?: boolean; // whether to enable sidebar animation or not
  children?: ReactNode; // children a.k.a content of the sidebar
  className?: string; // customizable className for the component
}

/**
 * Sidebar component using Typescript and Tailwind CSS.
 * Note: Your app needs Tailwind CSS installed and configured for this component to work properly.
 * @param side - The side the sidebar appears on.
 * @param open - Whether the sidebar is in open condition or not.
 * @param width - The width of the sidebar.
 * @param animated - Whether to enable sidebar animation or not.
 * @param children - The children a.k.a content of the sidebar. Wrap your content with this Sidebar component.
 * @param className - Customizable className for the component.
 * @returns The Sidebar component
 * @example
 * <Sidebar side="left" open={true} width="w-64">
 *  <div> // children here
 *    <h1>Sidebar</h1>
 *  </div>
 * </Sidebar>
 */
export function Sidebar({
  side = "left",
  open = false,
  width = "w-64",
  animated = true,
  children,
  className,
}: SidebarProps) {
  return (
    <aside
      className={clsx(
        "fixed top-0 h-full bg-black shadow-lg z-50",
        side === "left" ? "left-0" : "right-0",
        width,
        open ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full",
        animated && "transform transition-transform duration-300 ease-in-out",
        !open && "aria-hidden=true",
        className
      )}
    >
      {children}
    </aside>
  );
}
