import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-6 bg-gray-50">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tighter">School Records App</h1>
        <p className="text-gray-500">Manage pupils, fees, and finances efficiently.</p>
      </div>
      <div className="flex gap-4">
        <Link href="/login">
          <Button size="lg">Login</Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" size="lg">Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  )
}
