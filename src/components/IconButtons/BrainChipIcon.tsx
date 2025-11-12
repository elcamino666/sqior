export function BrainChipIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Brain Chip
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 rounded-xl bg-gradient-to-br from-[#1cade4]/30 to-[#0d8bb8]/30 border-2 border-[#1cade4]/50 hover:border-[#1cade4] flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-hidden"
			>
				{/* Circuit board pattern */}
				<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
					<div className="absolute top-2 left-2 right-2 h-0.5 bg-[#1cade4]" />
					<div className="absolute bottom-2 left-2 right-2 h-0.5 bg-[#1cade4]" />
					<div className="absolute top-2 left-2 bottom-2 w-0.5 bg-[#1cade4]" />
					<div className="absolute top-2 right-2 bottom-2 w-0.5 bg-[#1cade4]" />

					{/* Corner circuits */}
					<div className="absolute top-2 left-2 w-1 h-1 bg-[#1cade4] rounded-full" />
					<div className="absolute top-2 right-2 w-1 h-1 bg-[#1cade4] rounded-full" />
					<div className="absolute bottom-2 left-2 w-1 h-1 bg-[#1cade4] rounded-full" />
					<div className="absolute bottom-2 right-2 w-1 h-1 bg-[#1cade4] rounded-full" />
				</div>

				{/* Animated scan line */}
				<div className="absolute inset-0 overflow-hidden">
					<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-[#1cade4] to-transparent opacity-60 animate-pulse" />
				</div>

				{/* Brain/Chip hybrid icon */}
				<div className="relative z-10 flex items-center justify-center">
					<svg
						className="w-10 h-10 text-[#1cade4] group-hover:text-[#4cc9f0] transition-colors"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Brain Chip</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						/>
					</svg>

					{/* Glowing core */}
					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-6 h-6 bg-[#1cade4] opacity-20 rounded-full blur-md group-hover:opacity-40 transition-opacity" />
					</div>
				</div>

				{/* Corner decorations */}
				<div className="absolute top-1 left-1 w-2 h-2 border-t-2 border-l-2 border-[#1cade4]/60" />
				<div className="absolute top-1 right-1 w-2 h-2 border-t-2 border-r-2 border-[#1cade4]/60" />
				<div className="absolute bottom-1 left-1 w-2 h-2 border-b-2 border-l-2 border-[#1cade4]/60" />
				<div className="absolute bottom-1 right-1 w-2 h-2 border-b-2 border-r-2 border-[#1cade4]/60" />
			</button>
			<span className="text-xs text-gray-500">AI Processor</span>
		</div>
	);
}
