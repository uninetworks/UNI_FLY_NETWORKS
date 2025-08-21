"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        // {
        //     title: "Home Animated",
        //     href: "/animated",
        //     description: "",
        // },
        {
            title: "About",
            href: "/about",
            description: "",
        },
        {
            title: "Services",
            href: "/services",
            description: "",
        },
        {
            title: "FlyNetworks",
            href: "/flynetworks",
            description: "",
        },
        {
            title: "Imports & Exports",
            href: "/imports-exports",
            description: "",
        },
        
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40 fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    <NavigationMenuLink asChild>
                                        <Link href={item.href}>
                                            <Button variant="ghost">{item.title}</Button>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold">Uninetworks</p>
                </div>
                <div className="flex justify-end w-full gap-4">
                    <Link href="/contact">
                        <Button variant="ghost" className="hidden md:inline">
                            Book a demo
                        </Button>
                    </Link>
                    {/* <div className="border-r hidden md:inline"></div>  */}
                    {/* <Link href="/contact">
                        <Button>Get started</Button>
                    </Link> */}
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center hover:text-green-600 transition-colors"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="text-lg">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export { Header1 };