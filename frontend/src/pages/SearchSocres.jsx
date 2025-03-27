
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import api from "@/config/axios"

function SearchScores() {
	const [registrationNumber, setRegistrationNumber] = useState("")
	const [studentData, setStudentData] = useState(null)
	const [error, setError] = useState("")

	const handleSubmit = async () => {
		setError("")
		const res = await api.get(`/check-score/${registrationNumber}`)
		if (res?.code === 200) {
			setStudentData(res.score)
		} else {
			setError("Student not found")
		}
	}

	const getScoreColor = (score) => {
		if (score >= 8.5) return "text-green-600 dark:text-green-400 font-bold"
		if (score >= 7.0) return "text-blue-600 dark:text-blue-400"
		if (score >= 5.0) return "text-yellow-600 dark:text-yellow-400"
		return "text-red-600 dark:text-red-400"
	}
	return (
		<div className="min-h-screen px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto space-y-8">
				<Card className="shadow-lg">
					<CardHeader className="bg-primary/5">
						<CardTitle className="text-2xl font-bold text-center text-primary">Student Score Lookup</CardTitle>
						<CardDescription className="text-center">
							Enter your registration number to view your scores
						</CardDescription>
					</CardHeader>
					<CardContent className="pt-4">
						<div className="flex flex-col sm:flex-row gap-4">
							<div className="flex-1">
								<label className="block text-sm font-bold mb-1">
									Registration Number:
								</label>
								<Input
									type="text"
									placeholder="Enter registration number"
									value={registrationNumber}
									onChange={(e) => setRegistrationNumber(e.target.value)}
									className="w-full"
									required
								/>
							</div>
							<div className="self-end">
								<Button className="w-full sm:w-auto" onClick={handleSubmit}>
									Submit
								</Button>
							</div>
						</div>

						{error && (
							<div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-md text-sm">
								{error}
							</div>
						)}
					</CardContent>
				</Card>

				{studentData && (
					<Card className="shadow-lg">
						<CardHeader className="border-b">
							<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
								<div>
									<CardTitle className="text-xl font-bold">Detailed Scores</CardTitle>
								</div>
							</div>
						</CardHeader>
						<CardContent className="pt-4 overflow-x-auto">
							<Table className="w-full table-fixed border rounded-lg">
								<TableHeader>
									<TableRow>
										<TableHead className="w-[200px] px-4">Subject</TableHead>
										<TableHead className="text-right px-4">Score</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									<TableRow>
										<TableCell className="font-bold px-4">Math</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.math)}`}>
											{studentData?.math || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Literature</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.literature)}`}>
											{studentData?.literature || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Foreign Language</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.foreignLanguage)}`}>
											{studentData?.foreignLanguage || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Physics</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.physics)}`}>
											{studentData?.physics || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Chemistry</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.chemistry)}`}>
											{studentData?.chemistry || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Biology</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.biology)}`}>
											{studentData?.biology || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">History</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.history)}`}>
											{studentData?.history || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Geography</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.geography)}`}>
											{studentData?.geography || "-"}
										</TableCell>
									</TableRow>
									<TableRow>
										<TableCell className="font-bold px-4">Civic Education</TableCell>
										<TableCell className={`text-right px-4 ${getScoreColor(studentData?.civicEducation)}`}>
											{studentData?.civicEducation || "-"}
										</TableCell>
									</TableRow>
								</TableBody>
							</Table>
						</CardContent>
					</Card>
				)}
			</div>
		</div>
	);
}

export default SearchScores;