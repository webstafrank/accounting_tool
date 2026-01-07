import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Plus } from "lucide-react"

export default function PupilsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pupils</h1>
        <Link href="/pupils/admit">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Admit Pupil
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Pupils</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Name</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Class</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Admission No.</th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                  <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle font-medium">Alice Johnson</td>
                  <td className="p-4 align-middle">Grade 5</td>
                  <td className="p-4 align-middle">ADM001</td>
                  <td className="p-4 align-middle text-green-600">Active</td>
                  <td className="p-4 align-middle text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle font-medium">Bob Smith</td>
                  <td className="p-4 align-middle">Grade 4</td>
                  <td className="p-4 align-middle">ADM002</td>
                  <td className="p-4 align-middle text-green-600">Active</td>
                  <td className="p-4 align-middle text-right">
                    <Button variant="ghost" size="sm">View</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
