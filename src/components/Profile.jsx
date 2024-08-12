import './Profile.css'

export function Profile({ onClick }) {
	const handleButton = (event) => {
		return onClick(event.target.innerText.toLowerCase())
	}
	return (
		<section className="dashboard-profile">
			<article className="dashboard-profile-info">
				<img
					src="src\assets\images\image-jeremy.png"
					alt="profile-img"
				/>
				<span>Report for</span>
				<h2>Jeremy Robinson</h2>
			</article>
			<article className="dashboard-profile-buttons">
				<button
					className="dashboard-profile-button"
					onClick={handleButton}
				>
					Daily
				</button>
				<button
					className="dashboard-profile-button"
					onClick={handleButton}
				>
					Weekly
				</button>
				<button
					className="dashboard-profile-button"
					onClick={handleButton}
				>
					Monthly
				</button>
			</article>
		</section>
	)
}
