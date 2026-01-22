import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Columns2 } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    variant?: "default" | "ghost";
  }[];
}

export function Sidebar({ className, items, ...props }: SidebarProps) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const SidebarContent = () => (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Menu</h2>
        <div className="space-y-1">
          {items.map((item) => (
            <Button
              key={item.href}
              variant={location.pathname === item.href ? "secondary" : "ghost"}
              className="w-full justify-start"
              asChild
              onClick={() => setIsOpen(false)}
            >
              <Link to={item.href}>
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Trigger */}
      <div className="md:hidden fixed top-0.5 left-0 z-50 relative">
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          <Columns2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden min-h-screen"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-background min-h-screen border-r transition-transform transform md:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex justify-end ">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "pb-12 w-64 border-r min-h-screen absolute left-0 top-0  hidden md:block bg-background",
          className,
        )}
        {...props}
      >
        <SidebarContent />
      </div>
    </>
  );
}
