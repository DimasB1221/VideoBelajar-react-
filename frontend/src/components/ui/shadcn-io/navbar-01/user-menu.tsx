"use client";

import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";

interface UserMenuProps {
  userEmail?: string;
  avatarUrl?: string; // Optional: if we have a user avatar URL
}

export function UserMenu({ userEmail, avatarUrl }: UserMenuProps) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  // Get first letter of email for avatar fallback
  const firstLetter = userEmail ? userEmail.charAt(0).toUpperCase() : "U";

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatarUrl || "/profile.png"} alt="Profile" />
            <AvatarFallback>{firstLetter}</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-2" align="end" forceMount>
        <div className="flex flex-col space-y-1">
          <div className="px-2 py-1.5 text-sm font-semibold truncate text-muted-foreground">
            {userEmail || "User"}
          </div>
          <div className="h-px bg-muted my-1" />
          <Link
            to="/admin/dashboard"
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            Dashboard
          </Link>
          <div
            onClick={handleLogout}
            className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-red-500 hover:text-red-500"
          >
            Logout
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
