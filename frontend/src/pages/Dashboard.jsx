import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import api from "@/config/axios"
import { useEffect, useState } from "react"
import { Medal, Trophy } from "lucide-react"

function Dashboard() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true)
        const res = await api.get("/top-students")
        if (res?.code == 200) {
          console.log(res.topStudents)
          setStudents(res.topStudents)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchStudents()
  }, [])

  const getRankIcon = (position) => {
    switch (position) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 2:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return null
    }
  }

  const getScoreColor = (score) => {
    if (score >= 9) return "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
    if (score >= 8) return "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
    if (score >= 7) return "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400"
    return ""
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="shadow-lg border-t-4 border-t-primary">
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-2xl font-bold flex items-center justify-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Top 10 Students of Group A
          </CardTitle>
          <p className="text-center text-muted-foreground">Ranking based on Math, Physics, and Chemistry scores</p>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-pulse space-y-4">
                <div className="h-4 w-48 bg-muted rounded"></div>
                <div className="h-4 w-64 bg-muted rounded"></div>
                <div className="h-4 w-56 bg-muted rounded"></div>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="text-center font-bold w-20">Rank</TableHead>
                    <TableHead className="text-center font-bold">ID</TableHead>
                    <TableHead className="text-center font-bold">Math</TableHead>
                    <TableHead className="text-center font-bold">Physics</TableHead>
                    <TableHead className="text-center font-bold">Chemistry</TableHead>
                    <TableHead className="text-center font-bold">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students?.map((student, index) => (
                    <TableRow
                      key={index}
                      className={index < 3 ? "bg-primary/5 hover:bg-primary/10" : "hover:bg-muted/50"}
                    >
                      <TableCell className="text-center font-medium">
                        <div className="flex items-center justify-center gap-1">
                          {getRankIcon(index)}
                          <span className={index < 3 ? "font-bold" : ""}>{index + 1}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-center font-medium">{student.number}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={`${getScoreColor(student.math)} font-medium`}>
                          {student.math}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={`${getScoreColor(student.physics)} font-medium`}>
                          {student.physics}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={`${getScoreColor(student.chemistry)} font-medium`}>
                          {student.chemistry}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center font-bold">
                        <Badge className={index < 3 ? "bg-primary text-primary-foreground" : ""}>
                          {student.total_score}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                  {students.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No student data available
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard

