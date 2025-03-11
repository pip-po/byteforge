"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`fixed left-0 top-0 md:top-4 z-50 w-full rounded-md ${
        isScrolled ? "backdrop-blur-lg bg-white/50 shadow-md" : " bg-white"
      }`}
    >
      <div
        id="navbar"
        className="container relative mx-auto p-4 flex items-center"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/ByteForge.png"
            alt="logo"
            width={130}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Menu navigasi di kanan */}
        <div className="ml-auto space-x-4 hidden  md:flex items-center">
          <Link
            className="hover:text-black/50 hover:underline pointer-events-auto"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-black/50 hover:underline pointer-events-auto"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-black/50 hover:underline pointer-events-auto"
            href="/service"
          >
            Services
          </Link>
          <Link
            className="hover:text-black/50 hover:underline pointer-events-auto"
            href="/team"
          >
            Team
          </Link>
          <Button className="bg-[#272727] hover:bg-[#272727]/50">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="md:hidden ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 border rounded">☰</button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/">Home</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/service">Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/team">Team</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
