import React from 'react'
import './RootLayout.css'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import { ClerkProvider, SignedIn, UserButton,  } from "@clerk/clerk-react";

import { Link, Outlet } from "react-router-dom";


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}


function RootLayout() {
  return (

    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img src="/logo.png" alt="" />
            <span>LAMA AI</span>
          </Link>

          <div className="user">
           
      <SignedIn>
        <UserButton />
      </SignedIn>
          </div>

        </header>
        <main>
          <Outlet />
        </main>
      </div>

    </ClerkProvider>
  )
}

export default RootLayout