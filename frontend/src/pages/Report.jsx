import BarChart from "@/components/Barchart"
import { useEffect, useState } from "react";
function Report() {

	const [statictis, setStatistics] = useState({})
	const [subject, setSubject] = useState("math")

	useEffect(() => {
		const fetchStatistics = async (subject) => {
			try {
				const res = await api.get(`/statistics${subject}`)
				if (res?.code === 200) {
					setStatistics(res.statistics)
				}
			} catch (error) {
				console.log(error)
			}
		}
		fetchStatistics(subject)
	}, [subject]);

	return (
		<div>
			<BarChart />
		</div>
	);
}

export default Report;