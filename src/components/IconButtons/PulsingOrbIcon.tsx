export function PulsingOrbIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Pulsing Orb
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 rounded-full bg-gradient-to-br from-[#1cade4] to-[#0d8bb8] flex items-center justify-center hover:scale-110 transition-transform duration-300"
			>
				{/* Pulsing rings */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4] opacity-30 animate-ping" />
				<div
					className="absolute inset-0 rounded-full bg-[#1cade4] opacity-20 animate-ping"
					style={{ animationDelay: "0.5s" }}
				/>

				{/* AI Sparkle Icon */}
				<svg
					className="w-10 h-10 text-white relative z-10"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<title>AI Sparkle</title>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
					/>
				</svg>

				{/* Glow effect on hover */}
				<div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-[#1cade4] blur-xl transition-opacity duration-300" />
			</button>
			<span className="text-xs text-gray-500">AI Generated</span>
		</div>
	);
}
