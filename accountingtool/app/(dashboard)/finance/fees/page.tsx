import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function RecordFeePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Record Fee Payment</h1>
        <Link href="/finance">
          <Button variant="outline">Cancel</Button>
        </Link>
      </div>

      <div className="grid gap-6 max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
            <CardDescription>Record a new fee payment from a student.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="student-id">Student Admission No. / Name</Label>
              <Input id="student-id" placeholder="Search for student..." />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Amount</Label>
                <div className="relative">
                   <span className="absolute left-3 top-2.5 text-gray-500">$</span>
                   <Input id="amount" type="number" className="pl-6" placeholder="0.00" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Payment Type</Label>
              <Input id="type" placeholder="Tuition, Books, Uniform, etc." />
            </div>

            <div className="space-y-2">
              <Label htmlFor="method">Payment Method</Label>
              <Input id="method" placeholder="Cash, Bank Transfer, Check" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes (Optional)</Label>
              <Input id="notes" placeholder="Additional details..." />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Record Payment</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
