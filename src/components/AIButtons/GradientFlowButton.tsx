export function GradientFlowButton() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Gradient Flow
			</h3>
			<button
				type="button"
				className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#1cade4]/20 to-[#4cc9f0]/20 hover:from-[#1cade4]/30 hover:to-[#4cc9f0]/30 transition-all duration-300 overflow-hidden"
			>
				<div className="absolute inset-0 bg-gradient-to-r from-[#1cade4] to-[#4cc9f0] opacity-0 group-hover:opacity-20 transition-opacity" />
				<div className="relative flex items-center gap-3">
					<div className="relative">
						<svg
							className="w-5 h-5 text-[#1cade4]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<title>AI Lightbulb Icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
						<div className="absolute inset-0 bg-[#1cade4] blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
					</div>
					<span className="font-semibold bg-gradient-to-r from-[#1cade4] to-[#4cc9f0] bg-clip-text text-transparent">
						AI Content
					</span>
				</div>
			</button>
		</div>
	);
}
