import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import api from "@/config/axios";
import { useEffect, useState } from "react";

function Dashboard() {

	const [students, setStudents] = useState([]);

	useEffect(() => {
		const fetchStudents = async () => {
			try {
				const res = await api.get("/top-students");
				if (res?.code == 200) {
					console.log(res.topStudents);
					setStudents(res.topStudents);
				}
			} catch (error) {
				console.error(error);
			}
		}
		fetchStudents();
	}, [])

	return (
		<div className="flex flex-col space-y-4 items-center">
			<h1 className="flex text-center text-2xl font-bold">
				Top 10 students of group A including (Math, Physics, Chemistry)
			</h1>
			<Table className="w-full table-fixed border rounded-lg">
				<TableHeader>
					<TableRow>
						<TableHead className="text-center">Rank</TableHead>
						<TableHead className="text-center">ID</TableHead>
						<TableHead className="text-center">Math</TableHead>
						<TableHead className="text-center">Physics</TableHead>
						<TableHead className="text-center">Chemistry</TableHead>
						<TableHead className="text-center">Total</TableHead>
						{/* <TableHead className="w-[10%] text-center">Literature</TableHead>
						<TableHead className="w-[10%] text-center">Foreign Language</TableHead>
						<TableHead className="w-[10%] text-center">Biology</TableHead>
						<TableHead className="w-[10%] text-center">History</TableHead>
						<TableHead className="w-[10%] text-center">Geography</TableHead>
						<TableHead className="w-[10%] text-center">Civic Education</TableHead> */}
					</TableRow>
				</TableHeader>
				<TableBody>
					{students?.map((student, index) => {
						return (
							<TableRow key={index}>
								<TableCell className="text-center">{index + 1}</TableCell>
								<TableCell className="text-center">{student.number}</TableCell>
								<TableCell className="text-center">{student.math}</TableCell>
								<TableCell className="text-center">{student.physics}</TableCell>
								<TableCell className="text-center">{student.chemistry}</TableCell>
								<TableCell className="text-center">{student.total_score}</TableCell>
								{/* <TableCell className="text-center">{student.literature}</TableCell>
								<TableCell className="text-center">{student.foreign_language}</TableCell>
								<TableCell className="text-center">{student.biology}</TableCell>
								<TableCell className="text-center">{student.history}</TableCell>
								<TableCell className="text-center">{student.geography}</TableCell>
								<TableCell className="text-center">{student.civic_education}</TableCell> */}
							</TableRow>
						)
					})}
				</TableBody>
			</Table>

		</div>
	);
}

export default Dashboard;