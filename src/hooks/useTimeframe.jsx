import { useState } from 'react'

export function useTimeframe() {
	const [timeframe, setTimeframe] = useState('weekly')

	const listTime = {
		daily: 'Day',
		weekly: 'Week',
		monthly: 'Monthly',
	}

	const setLastTime = listTime[timeframe]

	return { timeframe, setTimeframe, setLastTime }
}
