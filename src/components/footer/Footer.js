"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Footer() {



  return (
    <footer className={`bg-gray-900 w-full mt-14 absolute right-0`} >
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto flex justify-center">
        <p className="text-lg">ZaHa script - Made By Love ©</p>
      </div>
    </footer>
  )
}
