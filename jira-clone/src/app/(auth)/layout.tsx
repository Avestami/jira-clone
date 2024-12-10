import React from "react";
import Image from "next/image"
import {Button} from "@/components/ui/button";
interface AuthLayoutProps{
    children: React.ReactNode;
};

const AuthLayout = ({children}: AuthLayoutProps) =>{
    return(
        <main className="bg-neutral-100 min-h-screen">
            <div className="mx-auto max-w-screen-2xl p-4">
                <nav className="flex justify-between items-center">
                    <Image src="/logo.svg" alt="logo" width={152} height={56}></Image>
                    <Button variant="secondary">
                        Sign up
                    </Button>
                </nav>
                {children}
            </div>
        </main>
    )
}
export default AuthLayout;