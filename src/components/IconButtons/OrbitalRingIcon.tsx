export function OrbitalRingIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Orbital Ring
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 flex items-center justify-center hover:scale-110 transition-all duration-300"
			>
				{/* Rotating outer ring */}
				<div className="absolute inset-0 rounded-full border-2 border-[#1cade4]/40 border-t-[#1cade4] animate-spin" />

				{/* Rotating middle ring - opposite direction */}
				<div
					className="absolute inset-2 rounded-full border-2 border-[#4cc9f0]/30 border-b-[#4cc9f0]"
					style={{
						animation: "spin 3s linear infinite reverse",
					}}
				/>

				{/* Rotating inner ring */}
				<div
					className="absolute inset-4 rounded-full border-2 border-[#1cade4]/20 border-r-[#1cade4] animate-spin"
					style={{ animationDuration: "2s" }}
				/>

				{/* Center core */}
				<div className="relative z-10 w-10 h-10 rounded-full bg-gradient-to-br from-[#1cade4] to-[#0d8bb8] flex items-center justify-center shadow-[0_0_20px_rgba(28,173,228,0.5)] group-hover:shadow-[0_0_30px_rgba(28,173,228,0.8)] transition-all">
					<svg
						className="w-6 h-6 text-white"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Core</title>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
					</svg>
				</div>

				{/* Orbiting particles */}
				<div className="absolute inset-0 animate-spin" style={{ animationDuration: "4s" }}>
					<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#1cade4] rounded-full -translate-x-1/2 shadow-[0_0_8px_rgba(28,173,228,0.8)]" />
				</div>
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: "3s", animationDirection: "reverse" }}
				>
					<div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#4cc9f0] rounded-full -translate-x-1/2 shadow-[0_0_8px_rgba(76,201,240,0.8)]" />
				</div>

				{/* Glow effect */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
			</button>
			<span className="text-xs text-gray-500">AI System</span>
		</div>
	);
}
