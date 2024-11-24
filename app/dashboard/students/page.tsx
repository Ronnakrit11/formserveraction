'use client'

import { useState } from 'react'
import Link from 'next/link'
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
import { MoreHorizontal, Plus } from 'lucide-react'

// Mock data for students
const students = [
  { id: 1, name: "นายสมชาย ใจดี", studentId: "6140123456", major: "วิศวกรรมคอมพิวเตอร์", status: "กำลังศึกษา" },
  { id: 2, name: "นางสาวสมหญิง รักเรียน", studentId: "6140789012", major: "วิทยาการคอมพิวเตอร์", status: "สำเร็จการศึกษา" },
  { id: 3, name: "นายมานะ ตั้งใจ", studentId: "6140345678", major: "วิศวกรรมซอฟต์แวร์", status: "กำลังศึกษา" },
  { id: 4, name: "นางสาวรักษ์ ไทยแลนด์", studentId: "6140901234", major: "เทคโนโลยีสารสนเทศ", status: "พ้นสภาพ" },
  { id: 5, name: "นายเก่ง กาจ", studentId: "6140567890", major: "วิศวกรรมคอมพิวเตอร์", status: "กำลังศึกษา" },
]

export default function StudentsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.studentId.includes(searchTerm) ||
    student.major.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">รายชื่อนักศึกษา</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="w-1/3">
          <Input
            placeholder="ค้นหานักศึกษา..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button asChild>
          <Link href="/dashboard/student">
            <Plus className="mr-2 h-4 w-4" /> เพิ่มนักศึกษา
          </Link>
        </Button>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อ-นามสกุล</TableHead>
              <TableHead>รหัสนักศึกษา</TableHead>
              <TableHead>สาขาวิชา</TableHead>
              <TableHead>สถานะ</TableHead>
              <TableHead className="text-right">การดำเนินการ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>{student.major}</TableCell>
                <TableCell>{student.status}</TableCell>
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

