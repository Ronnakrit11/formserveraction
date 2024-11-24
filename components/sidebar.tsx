"use client"

import { useState } from "react"
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { Building, User, Menu, X, Users, BuildingIcon as Buildings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/dashboard/students", icon: Users, label: "รายชื่อนักศึกษา" },
  { href: "/dashboard/student", icon: User, label: "ข้อมูลนักศึกษา'" },
  { href: "/dashboard/companies", icon: Buildings, label: "รายชื่อสถานประกอบการ" },
  { href: "/dashboard/company", icon: Building, label: "ข้อมูลสถานประกอบการ" },
]

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-gray-100">
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 transition-colors",
                  pathname === item.href && "bg-gray-100 text-blue-600 font-medium"
                )}
              >
                <item.icon className="h-5 w-5 mr-3" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

