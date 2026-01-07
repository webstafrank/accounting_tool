import Link from "next/link"
import { Users, CreditCard, Home, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <aside className="w-full border-b bg-gray-100/40 md:w-64 md:border-r md:border-b-0">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4 font-semibold">
            Accounting Tool
          </div>
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="grid gap-1 px-2">
              <li>
                <Link
                  href="/dashboard"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Home className="h-4 w-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/pupils"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <Users className="h-4 w-4" />
                  Pupils
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  <CreditCard className="h-4 w-4" />
                  Finance
                </Link>
              </li>
            </ul>
          </nav>
          <div className="border-t p-4">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  )
}
