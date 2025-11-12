export function HolographicButton() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Holographic
			</h3>
			<button
				type="button"
				className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#1cade4] via-[#4cc9f0] to-[#1cade4] bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-500 shadow-[0_0_30px_rgba(28,173,228,0.4)]"
			>
				<div className="flex items-center gap-3">
					<svg
						className="w-5 h-5 animate-spin"
						style={{ animationDuration: "3s" }}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Sparkles Icon</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
						/>
					</svg>
					<span className="font-bold text-[#0A0F23]">AI Creation</span>
				</div>
			</button>
		</div>
	);
}
