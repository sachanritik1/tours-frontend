import React, { useState, useEffect } from "react"
import Loading from "./Loading"
import Tours from "./Tours"

const url = process.env.REACT_APP_API_URL

function App() {
	const [isLoading, setIsLoading] = useState(true)
	const [tours, setTours] = useState([])

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id)
		setTours(newTours)
	}

	const fetchTours = async () => {
		setIsLoading(true)
		try {
			const res = await fetch(url)
			const tours = await res.json()
			setIsLoading(false)
			setTours(tours)
		} catch (err) {
			setIsLoading(false)
			console.log(err)
		}
	}

	useEffect(() => {
		fetchTours()
	}, [])

	if (isLoading) {
		return (
			<main>
				<Loading />
			</main>
		)
	}
	return (
		<main>
			<Tours tours={tours} removeTour={removeTour} />
			<button className="btn" onClick={() => setTours([])}>
				Clear All
			</button>
		</main>
	)
}

export default App
