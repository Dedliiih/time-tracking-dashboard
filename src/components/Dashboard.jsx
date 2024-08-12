import { Profile } from './Profile'
import { Topics } from './Topics'
import { useTimeframe } from '../hooks/useTimeframe'
import './Dashboard.css'

export function Dashboard() {
	const { timeframe, setTimeframe, setLastTime } = useTimeframe()

	const handleClick = (event) => {
		setTimeframe(event)
	}

	return (
		<main className="dashboard">
			<Profile onClick={handleClick}></Profile>
			<Topics timeframe={timeframe} lastTime={setLastTime}></Topics>
		</main>
	)
}
