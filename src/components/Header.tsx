import Link from "next/link"
import Image from "next/image"
import { shadow } from "@/styles/utils"
import { Button } from "./ui/button"
import { ModeToggle } from "./DarkModeToggle"
import LogoutButton from "./LogoutButton"


function Header() {
    const user = true
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8" 
    style ={{
        boxShadow: shadow,
    }}
    >
        <Link className="flex items-end gap-2" href="/">
        <Image src="/goatius.png" alt="goatius image" height={60} width={60} className="rounded-full" priority />
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">GOAT <span>Notes</span></h1>
        </Link>

        <div className="flex gap-4">
            {user ? <LogoutButton/> : (
                <>
                <Button asChild>
                    <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
                </Button>

                <Button variant="outline" asChild>
                    <Link href="/login">Log In</Link>
                </Button>

                
                </>
            )}
            <ModeToggle />
        </div>
    </header>
  )
}

export default Header