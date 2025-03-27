import BarChart from "@/components/BarChart"
import api from "@/config/axios";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card";
const subjects = [
	{ id: "math", name: "Math", color: "bg-rose-100 hover:bg-rose-200 data-[selected=true]:bg-rose-500" },
	{ id: "literature", name: "Literature", color: "bg-blue-100 hover:bg-blue-200 data-[selected=true]:bg-blue-500" },
	{
		id: "foreignLanguage",
		name: "Foreign Language",
		color: "bg-purple-100 hover:bg-purple-200 data-[selected=true]:bg-purple-500",
	},
	{ id: "physics", name: "Physics", color: "bg-amber-100 hover:bg-amber-200 data-[selected=true]:bg-amber-500" },
	{ id: "chemistry", name: "Chemistry", color: "bg-green-100 hover:bg-green-200 data-[selected=true]:bg-green-500" },
	{
		id: "biology",
		name: "Biology",
		color: "bg-emerald-100 hover:bg-emerald-200 data-[selected=true]:bg-emerald-500",
	},
	{ id: "history", name: "History", color: "bg-orange-100 hover:bg-orange-200 data-[selected=true]:bg-orange-500" },
	{ id: "geography", name: "Geography", color: "bg-cyan-100 hover:bg-cyan-200 data-[selected=true]:bg-cyan-500" },
	{
		id: "civicEducation",
		name: "Civic Education",
		color: "bg-indigo-100 hover:bg-indigo-200 data-[selected=true]:bg-indigo-500",
	},
];

function Report() {
	const [selectedSubject, setSelectedSubject] = useState(subjects[0])
	const [statictis, setStatistics] = useState({})
	useEffect(() => {
		const fetchStatistics = async (selectedSubject) => {
			try {
				const res = await api.get(`/statistics/${selectedSubject.id}`)
				if (res?.code === 200) {
					setStatistics(res.statistics)
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchStatistics(selectedSubject)
	}, [selectedSubject]);

	const selectSubject = (subject) => {
		setSelectedSubject(subject)
	}

	return (
		<div className="h-full">
			<div className="container mx-auto px-4 py-2">
				<h1 className="text-3xl font-bold text-center mb-4">Statistics</h1>

				<div className="grid grid-cols-3 gap-4">
					<Card>
						<CardContent>
							<aside
								className={`lg:w-72 shrink-0 transition-all duration-300 overflow-hidden`}
							>
								<div className="bg-white rounded-xl shadow-sm p-5 sticky top-4">
									<h2 className="text-lg font-semibold mb-4">Subject Filters</h2>
									<div className="flex flex-col gap-2 mt-2">
										{subjects.map((subject) => {
											const isSelected = selectedSubject.id === subject.id
											return (
												<Button
													key={subject.id}
													variant="ghost"
													className={`relative justify-start rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${subject.color} ${isSelected ? "text-white pl-8" : "text-gray-800"
														}`}
													data-selected={isSelected}
													onClick={() => selectSubject(subject)}
												>
													{isSelected && <Check className="w-4 h-4 absolute left-2" />}
													{subject.name}
												</Button>
											)
										})}
									</div>
								</div>
							</aside>
						</CardContent>
					</Card>
					<div className="col-span-2">
						<BarChart dataKey={"Quantity"} chartData={statictis} subject={selectedSubject.name} />
					</div>
				</div>
			</div>
		</div>

	);
}

export default Report;