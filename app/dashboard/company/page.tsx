"'use client'"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CompanyPage() {
  const [formData, setFormData] = useState({
    companyName: "''",
    companyType: "''",
    department: "''",
    location: "''",
    companyPhone: "''",
    contactPerson: "''",
    contactPhone: "''",
    contactLine: "''",
    jobDetails: "''"
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("'Company data submitted:'", formData)
    // Here you would typically send the data to your backend API
    alert("'Company data submitted successfully!'")
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">ข้อมูลสถานประกอบการ</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="companyName">ชื่อสถานประกอบการ</Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="ชื่อสถานประกอบการ"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyType">ประเภทสถานประกอบการ</Label>
            <Select
              value={formData.companyType}
              onValueChange={(value) => setFormData(prev => ({ ...prev, companyType: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="เลือกประเภทสถานประกอบการ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="type1">ประเภท 1</SelectItem>
                <SelectItem value="type2">ประเภท 2</SelectItem>
                <SelectItem value="type3">ประเภท 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="department">หน่วยงานที่นักศึกษาออกสหกิจ</Label>
            <Input
              id="department"
              name="department"
              placeholder="หน่วยงานที่นักศึกษาออกสหกิจ"
              value={formData.department}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">ที่ตั้ง</Label>
            <Input
              id="location"
              name="location"
              placeholder="ที่ตั้ง"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyPhone">เบอร์สถานประกอบการ</Label>
            <Input
              id="companyPhone"
              name="companyPhone"
              placeholder="เบอร์สถานประกอบการ"
              value={formData.companyPhone}
              onChange={handleInputChange}
              type="tel"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPerson">ชื่อพนักงานติดต่อ</Label>
            <Input
              id="contactPerson"
              name="contactPerson"
              placeholder="ชื่อพนักงานติดต่อ"
              value={formData.contactPerson}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactPhone">หมายเลขพนักงานติดต่อ</Label>
            <Input
              id="contactPhone"
              name="contactPhone"
              placeholder="หมายเลขพนักงานติดต่อ"
              value={formData.contactPhone}
              onChange={handleInputChange}
              type="tel"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contactLine">Line ID พนักงานติดต่อ</Label>
            <Input
              id="contactLine"
              name="contactLine"
              placeholder="Line ID พนักงานติดต่อ"
              value={formData.contactLine}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="jobDetails">รายละเอียดเกี่ยวกับตำแหน่งงานนักศึกษาที่ออกสหกิจ</Label>
          <Textarea
            id="jobDetails"
            name="jobDetails"
            placeholder="รายละเอียดเกี่ยวกับตำแหน่งงานนักศึกษาที่ออกสหกิจ"
            rows={4}
            value={formData.jobDetails}
            onChange={handleInputChange}
            className="w-full"
          />
        </div>
        <Button type="submit" className="w-full sm:w-auto">บันทึกข้อมูล</Button>
      </form>
    </div>
  )
}

