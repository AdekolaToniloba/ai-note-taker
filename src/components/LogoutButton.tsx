"use client"

import React, { use } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/useToast'
import { useRouter } from 'next/navigation'


function LogoutButton() {
    const router = useRouter()
    const { toast } = useToast()
    const handleLogOut = async () => {
    setLoading(true)    

    console.log("Logging out...")
    await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate logout delay
    console.log("Logged out successfully")

    const errorMessage = "errorrrrrr" // Simulate an error condition
    if (!errorMessage) {
        toast(
            <div>
                <strong>Logged out successfully</strong>
                <p>You have been logged out.</p>
            </div>,
            "success",
            { duration: 3000 }
        )
        // If no error, redirect to home page
        router.push('/')
    } else {
        toast(
            <div>
                <strong>Error</strong>
                <p>{errorMessage}</p>
            </div>,
            "error",
            { duration: 3000 }
        )   
    }
    setLoading(false)
    }

    const [loading, setLoading] = React.useState(false)
  return <Button variant="outline" onClick={handleLogOut} disabled={loading} className='w-24'> {loading ? <Loader2 className="animate-spin" /> : "Log Out"} </Button>
}

export default LogoutButton