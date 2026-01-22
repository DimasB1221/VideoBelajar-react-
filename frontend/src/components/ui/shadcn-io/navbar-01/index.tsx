"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { UserMenu } from "./user-menu";
import { supabase } from "@/lib/supabaseClient";

// Simple logo component for the navbar
const Logo = () => {
  return <img src="/logo-videobelajar.png" alt="Logo" className="h-8" />;
};

// Hamburger icon component
const HamburgerIcon = ({
  className,
  ...props
}: React.SVGAttributes<SVGElement>) => (
  <svg
    className={cn("pointer-events-none", className)}
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    {...(props as any)}
  >
    <path
      d="M4 12L20 12"
      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
    />
    <path
      d="M4 12H20"
      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
    />
    <path
      d="M4 12H20"
      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
    />
  </svg>
);

// Types
export interface Navbar01NavLink {
  href: string;
  label: string;
  active?: boolean;
  className?: string;
}

export interface Navbar01Props extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: Navbar01NavLink[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: Navbar01NavLink[] = [
  { href: "/homepage", label: "Home" },
  { href: "/register", label: "Register" },
  { href: "/login", label: "Login" },
  // { href: "/products", label: "Products" },
  { href: "/admin/dashboard", label: "Dashboard", className: "lg:hidden" },
];

export const Navbar01 = React.forwardRef<HTMLElement, Navbar01Props>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "#",
      navigationLinks = defaultNavigationLinks,

      onSignInClick,
      onCtaClick,
      ...props
    },
    ref,
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const [user, setUser] = useState<any>(null);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      // Debounce implementation
      let timeoutId: ReturnType<typeof setTimeout>;
      const debouncedCheckWidth = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(checkWidth, 100); // 100ms debounce
      };

      checkWidth(); // Initial check

      const resizeObserver = new ResizeObserver(debouncedCheckWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      // Supabase Auth Listener
      const checkUser = async () => {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        setUser(session?.user ?? null);
      };

      checkUser();

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => {
        resizeObserver.disconnect();
        clearTimeout(timeoutId);
        subscription.unsubscribe();
      };
    }, []);

    // Filter links based on auth state
    const filteredLinks = navigationLinks.filter((link) => {
      if (user) {
        // If logged in, hide Login and Register
        return (
          link.label !== "Login" &&
          link.label !== "Register" &&
          link.label !== "Dashboard"
        );
      } else {
        // If logged out, hide Dashboard? (Optional, user didn't explicitly ask but it makes sense.
        // But user request was specifically about profile logo and login/register links).
        // User request: "munculkan kembali ketika user sudah login [profile logo], dan ketika sudah login hilangkan pilihan login dan register"
        // It implies if not logged in, show Login/Register.
        return link.label !== "Dashboard";
      }
    });

    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref],
    );

    return (
      <header
        ref={combinedRef}
        className={cn(
          "sticky top-0 z-50 w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-background px-4 md:px-6 [&_*]:no-underline ",
          className,
        )}
        {...(props as any)}
      >
        <div className="container mx-auto flex h-16 responsive-width items-center justify-between mx-auto gap-4 relative">
          {/* Left side */}
          <div className="flex items-center gap-2">
            <Link
              to={logoHref}
              className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
            >
              <div className="text-2xl ">{logo}</div>
            </Link>
          </div>

          {/* Desktop Navigation - Absolutely Centered */}
          {!isMobile && (
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  {filteredLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                      <Link
                        to={link.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline ",
                          link.active
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground/60 hover:text-foreground",
                        )}
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          )}

          {/* Right side */}
          <div className="flex items-center gap-3">
            {user ? <UserMenu userEmail={user.email} /> : null}

            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {filteredLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <Link
                            to={link.href}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                              link.active
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80",
                            )}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
          </div>
        </div>
      </header>
    );
  },
);

Navbar01.displayName = "Navbar01";

export { Logo, HamburgerIcon };
