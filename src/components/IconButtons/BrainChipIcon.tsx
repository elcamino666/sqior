export function BrainChipIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Brain Chip
			</h3>
			<div className="group relative w-24 h-24 flex items-center justify-center">
				{/* Simple circular background */}
				<div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1cade4]/20 to-transparent border border-[#1cade4]/40 group-hover:border-[#1cade4] transition-all" />

				{/* Clean chip icon */}
				<svg viewBox="0 0 60 60" className="w-16 h-16 relative z-10">
					<title>AI Brain Chip</title>
					<defs>
						<linearGradient id="chip-simple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
							<stop offset="0%" stopColor="#4cc9f0" />
							<stop offset="100%" stopColor="#1cade4" />
						</linearGradient>
					</defs>

					{/* Main chip body */}
					<rect
						x="20"
						y="20"
						width="20"
						height="20"
						rx="2"
						fill="url(#chip-simple-gradient)"
						stroke="#ffffff"
						strokeWidth="1.5"
						opacity="0.9"
					/>

					{/* Simple brain pattern inside */}
					<path
						d="M 28 25 Q 30 23 32 25 M 28 30 Q 30 28 32 30 M 28 35 Q 30 33 32 35"
						stroke="#ffffff"
						strokeWidth="1"
						fill="none"
						opacity="0.7"
					/>

					{/* Simple pins */}
					<rect x="12" y="24" width="6" height="2" fill="#1cade4" opacity="0.7" />
					<rect x="12" y="29" width="6" height="2" fill="#1cade4" opacity="0.7" />
					<rect x="12" y="34" width="6" height="2" fill="#1cade4" opacity="0.7" />

					<rect x="42" y="24" width="6" height="2" fill="#1cade4" opacity="0.7" />
					<rect x="42" y="29" width="6" height="2" fill="#1cade4" opacity="0.7" />
					<rect x="42" y="34" width="6" height="2" fill="#1cade4" opacity="0.7" />

					<rect x="24" y="12" width="2" height="6" fill="#1cade4" opacity="0.7" />
					<rect x="29" y="12" width="2" height="6" fill="#1cade4" opacity="0.7" />
					<rect x="34" y="12" width="2" height="6" fill="#1cade4" opacity="0.7" />

					<rect x="24" y="42" width="2" height="6" fill="#1cade4" opacity="0.7" />
					<rect x="29" y="42" width="2" height="6" fill="#1cade4" opacity="0.7" />
					<rect x="34" y="42" width="2" height="6" fill="#1cade4" opacity="0.7" />
				</svg>

				{/* Subtle hover glow */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
			</div>
			<span className="text-xs text-gray-500 group-hover:text-[#1cade4] transition-colors">
				AI Processor
			</span>
		</div>
	);
}
