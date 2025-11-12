export function GlassmorphismButton() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Glassmorphism
			</h3>
			<button
				type="button"
				className="group relative px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-[#1cade4]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(28,173,228,0.3)]"
			>
				<div className="flex items-center gap-3">
					<svg
						className="w-5 h-5 text-[#1cade4] animate-pulse"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Lightning Icon</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
					<span className="font-semibold">AI Generated</span>
				</div>
			</button>
		</div>
	);
}
