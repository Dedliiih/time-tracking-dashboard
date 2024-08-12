import './Topics.css'
import topicData from '../mocks/data.json'
import { asideColors } from '../constants/dashboardColors'

export function Topics({ timeframe, lastTime }) {
	return (
		<main className="topics">
			{topicData.map((topic) => (
				<article className="topic-box" key={topicData.indexOf(topic)}>
					<aside
						className="topic-image"
						style={{
							backgroundColor: `var(${
								asideColors[topicData.indexOf(topic)]
							})`,
						}}
					>
						<img src={topic.icon} alt="work-img" />
					</aside>
					<article className="topic-content">
						<div className="topic-name">
							<strong>{topic.title}</strong>
							<img
								src="src\assets\images\icon-ellipsis.svg"
								alt="elipsis-img"
							/>
						</div>
						<div className="topic-hours">
							{topic.timeframes[timeframe].current}hrs
						</div>
						<footer className="topic-last">
							Last {lastTime} -{' '}
							{topic.timeframes[timeframe].previous}
							hrs
						</footer>
					</article>
				</article>
			))}
		</main>
	)
}
