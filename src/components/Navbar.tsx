"use client"

import Link from 'next/link'
import React from 'react'
import { UserButton, useUser } from '@clerk/nextjs'

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav>
      <Link href={"/"}>home</Link>

      <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        alignItems: "center",
      }}>
        <Link href={"/dashboard"}>dashboard</Link>
        {user ? (
          <UserButton afterSignOutUrl='/' />
        ) : (
          <></>
        )}
      </div>
    </nav>
  )
}
