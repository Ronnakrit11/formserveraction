'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function StudentPage() {
  const [formData, setFormData] = useState({
    photo: '',
    fullName: '',
    studentId: '',
    program: '',
    major: '',
    academicYear: '',
    address: '',
    phone: '',
    email: '',
    lineId: '',
    status: '',
    dismissalReason: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Student data submitted:', formData)
    // Here you would typically send the data to your backend API
    alert('Student data submitted successfully!')
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">ข้อมูลนักศึกษา</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="photo">รูป</Label>
            <Input id="photo" name="photo" type="file" accept="image/*" className="w-full" onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="fullName">ชื่อสกุล</Label>
            <Input id="fullName" name="fullName" placeholder="ชื่อสกุล" value={formData.fullName} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentId">เลขประจำตัวนักศึกษา</Label>
            <Input id="studentId" name="studentId" placeholder="เลขประจำตัวนักศึกษา" value={formData.studentId} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="program">ชื่อหลักสูตร</Label>
            <Input id="program" name="program" placeholder="ชื่อหลักสูตร" value={formData.program} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="major">ชื่อสาขาวิชา</Label>
            <Input id="major" name="major" placeholder="ชื่อสาขาวิชา" value={formData.major} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="academicYear">ปีการศึกษา</Label>
            <Input id="academicYear" name="academicYear" placeholder="ปีการศึกษา" value={formData.academicYear} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2 sm:col-span-2">
            <Label htmlFor="address">ที่อยู่</Label>
            <Textarea id="address" name="address" placeholder="ที่อยู่" rows={3} value={formData.address} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">หมายเลขโทรศัพท์</Label>
            <Input id="phone" name="phone" placeholder="หมายเลขโทรศัพท์" type="tel" value={formData.phone} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" placeholder="Email" type="email" value={formData.email} onChange={handleInputChange} className="w-full" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lineId">Line ID</Label>
            <Input id="lineId" name="lineId" placeholder="Line ID" value={formData.lineId} onChange={handleInputChange} className="w-full" />
          </div>
        </div>
        <div className="space-y-2">
          <Label>สถานะ</Label>
          <RadioGroup
            value={formData.status}
            onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
            className="flex flex-col space-y-1"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="graduated" id="graduated" />
              <Label htmlFor="graduated">สำเร็จการศึกษา</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="dismissed" id="dismissed" />
              <Label htmlFor="dismissed">พ้นการศึกษา</Label>
            </div>
          </RadioGroup>
        </div>
        {formData.status === 'dismissed' && (
          <div className="space-y-2">
            <Label htmlFor="dismissalReason">เหตุผลที่พ้นการศึกษา</Label>
            <Textarea
              id="dismissalReason"
              name="dismissalReason"
              placeholder="เหตุผลที่พ้นการศึกษา"
              rows={3}
              value={formData.dismissalReason}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
        )}
        <Button type="submit" className="w-full sm:w-auto">บันทึกข้อมูล</Button>
      </form>
    </div>
  )
}

