import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react"
import Link from "next/link"

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Finance</h1>
        <Link href="/finance/fees">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.00</div>
            <p className="text-xs text-muted-foreground">Current available funds</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Income (This Month)</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+$4,500.00</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Expenses (This Month)</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">-$1,200.00</div>
            <p className="text-xs text-muted-foreground">+4% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
               <div>
                 <p className="font-medium">Tuition Fee - Alice Johnson</p>
                 <p className="text-sm text-muted-foreground">Today, 10:23 AM</p>
               </div>
               <div className="font-bold text-green-600">+$500.00</div>
             </div>
             <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
               <div>
                 <p className="font-medium">Books Purchase</p>
                 <p className="text-sm text-muted-foreground">Yesterday, 2:15 PM</p>
               </div>
               <div className="font-bold text-red-600">-$150.00</div>
             </div>
             <div className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
               <div>
                 <p className="font-medium">Tuition Fee - Bob Smith</p>
                 <p className="text-sm text-muted-foreground">Yesterday, 11:00 AM</p>
               </div>
               <div className="font-bold text-green-600">+$500.00</div>
             </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
