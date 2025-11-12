export function NeuralNetworkIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Neural Network
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1cade4]/20 to-[#0d8bb8]/20 border border-[#1cade4]/40 hover:border-[#1cade4] flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden"
			>
				{/* Network pattern background */}
				<svg
					className="absolute inset-0 w-full h-full opacity-40 group-hover:opacity-60 transition-opacity"
					viewBox="0 0 100 100"
				>
					<title>Neural Network Pattern</title>
					{/* Connection lines */}
					<line
						x1="20"
						y1="30"
						x2="50"
						y2="50"
						stroke="#1cade4"
						strokeWidth="1"
						className="animate-pulse"
					/>
					<line
						x1="20"
						y1="70"
						x2="50"
						y2="50"
						stroke="#1cade4"
						strokeWidth="1"
						className="animate-pulse"
						style={{ animationDelay: "0.2s" }}
					/>
					<line
						x1="50"
						y1="50"
						x2="80"
						y2="30"
						stroke="#1cade4"
						strokeWidth="1"
						className="animate-pulse"
						style={{ animationDelay: "0.4s" }}
					/>
					<line
						x1="50"
						y1="50"
						x2="80"
						y2="70"
						stroke="#1cade4"
						strokeWidth="1"
						className="animate-pulse"
						style={{ animationDelay: "0.6s" }}
					/>

					{/* Nodes */}
					<circle cx="20" cy="30" r="4" fill="#1cade4" />
					<circle cx="20" cy="70" r="4" fill="#1cade4" />
					<circle cx="50" cy="50" r="5" fill="#1cade4" />
					<circle cx="80" cy="30" r="4" fill="#1cade4" />
					<circle cx="80" cy="70" r="4" fill="#1cade4" />
				</svg>

				{/* Center AI icon */}
				<div className="relative z-10 flex items-center justify-center">
					<div className="absolute w-12 h-12 bg-[#1cade4] opacity-20 rounded-full blur-lg group-hover:opacity-40 transition-opacity" />
					<svg
						className="w-8 h-8 text-[#1cade4]"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Network</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
						/>
					</svg>
				</div>
			</button>
			<span className="text-xs text-gray-500">AI Neural</span>
		</div>
	);
}
