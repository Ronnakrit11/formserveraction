"'use client'"

import { useState } from "'react'"
import Link from "'next/link'"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Plus } from "'lucide-react'"

// Mock data for companies
const companies = [
  { id: 1, name: "บริษัท เอบีซี จำกัด", type: "เทคโนโลยีสารสนเทศ", location: "กรุงเทพมหานคร", contactPerson: "คุณสมศักดิ์ ใจดี" },
  { id: 2, name: "บริษัท เอ็กซ์วายแซด จำกัด", type: "ซอฟต์แวร์", location: "เชียงใหม่", contactPerson: "คุณสมหญิง รักงาน" },
  { id: 3, name: "บริษัท 123 คอมพิวเตอร์ จำกัด", type: "ฮาร์ดแวร์", location: "ขอนแก่น", contactPerson: "คุณมานะ ตั้งใจ" },
  { id: 4, name: "บริษัท ไทยเทค จำกัด", type: "เทคโนโลยีสารสนเทศ", location: "ภูเก็ต", contactPerson: "คุณรักษ์ ไทยแลนด์" },
  { id: 5, name: "บริษัท ซอฟต์สยาม จำกัด", type: "ซอฟต์แวร์", location: "กรุงเทพมหานคร", contactPerson: "คุณเก่ง กาจ" },
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("''")

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
    company.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">รายชื่อสถานประกอบการ</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="ค้นหาสถานประกอบการ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button asChild>
          <Link href="/dashboard/company">
            <Plus className="mr-2 h-4 w-4" /> เพิ่มสถานประกอบการ
          </Link>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อบริษัท</TableHead>
              <TableHead>ประเภท</TableHead>
              <TableHead>ที่ตั้ง</TableHead>
              <TableHead>ผู้ติดต่อ</TableHead>
              <TableHead className="text-right">การดำเนินการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCompanies.map((company) => (
              <TableRow key={company.id}>
                <TableCell className="font-medium">{company.name}</TableCell>
                <TableCell>{company.type}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.contactPerson}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">เปิดเมนู</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>การดำเนินการ</DropdownMenuLabel>
                      <DropdownMenuItem>ดูข้อมูล</DropdownMenuItem>
                      <DropdownMenuItem>แก้ไขข้อมูล</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">ลบข้อมูล</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

