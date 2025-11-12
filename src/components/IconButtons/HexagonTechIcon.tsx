export function HexagonTechIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Hexagon Tech
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300"
				style={{
					clipPath:
						"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
				}}
			>
				{/* Hexagon background */}
				<div className="absolute inset-0 bg-gradient-to-br from-[#1cade4]/80 to-[#0d8bb8]/80 border-2 border-[#1cade4]" />

				{/* Animated hexagon border */}
				<div
					className="absolute inset-0 bg-transparent border-2 border-[#1cade4] opacity-50 group-hover:opacity-100 animate-pulse"
					style={{
						clipPath:
							"polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
					}}
				/>

				{/* Circuit lines decoration */}
				<svg
					className="absolute inset-0 w-full h-full opacity-30"
					viewBox="0 0 100 100"
				>
					<title>Circuit Pattern</title>
					<path
						d="M50 20 L50 40 M50 60 L50 80 M20 50 L40 50 M60 50 L80 50"
						stroke="#1cade4"
						strokeWidth="2"
						fill="none"
					/>
					<circle cx="50" cy="40" r="3" fill="#1cade4" />
					<circle cx="50" cy="60" r="3" fill="#1cade4" />
					<circle cx="40" cy="50" r="3" fill="#1cade4" />
					<circle cx="60" cy="50" r="3" fill="#1cade4" />
				</svg>

				{/* AI Brain Icon */}
				<svg
					className="w-8 h-8 text-white relative z-10"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<title>AI Brain</title>
					<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
				</svg>
			</button>
			<span className="text-xs text-gray-500">AI Powered</span>
		</div>
	);
}
