export function QuantumParticlesIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Quantum
			</h3>
			<button
				type="button"
				className="group relative w-20 h-20 rounded-full bg-[#0A0F23] border-2 border-[#1cade4]/60 hover:border-[#1cade4] flex items-center justify-center hover:scale-110 transition-all duration-300 overflow-visible"
			>
				{/* Floating particles */}
				<div className="absolute -top-1 -right-1 w-2 h-2 bg-[#1cade4] rounded-full animate-ping" />
				<div
					className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#4cc9f0] rounded-full animate-ping"
					style={{ animationDelay: "0.5s" }}
				/>
				<div
					className="absolute top-1/2 -right-2 w-1.5 h-1.5 bg-[#1cade4] rounded-full animate-pulse"
					style={{ animationDelay: "0.3s" }}
				/>
				<div
					className="absolute top-1/2 -left-2 w-1.5 h-1.5 bg-[#4cc9f0] rounded-full animate-pulse"
					style={{ animationDelay: "0.7s" }}
				/>
				<div
					className="absolute -top-2 left-1/2 w-1.5 h-1.5 bg-[#1cade4] rounded-full animate-pulse"
					style={{ animationDelay: "0.2s" }}
				/>
				<div
					className="absolute -bottom-2 left-1/2 w-1.5 h-1.5 bg-[#4cc9f0] rounded-full animate-pulse"
					style={{ animationDelay: "0.6s" }}
				/>

				{/* Quantum wave effect */}
				<div className="absolute inset-0 rounded-full border border-[#1cade4]/30 animate-ping" />
				<div
					className="absolute inset-0 rounded-full border border-[#4cc9f0]/30 animate-ping"
					style={{ animationDelay: "0.4s" }}
				/>

				{/* Center icon */}
				<div className="relative z-10 flex items-center justify-center">
					<svg
						className="w-8 h-8 text-[#1cade4] group-hover:text-[#4cc9f0] transition-colors"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<title>AI Quantum</title>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
				</div>

				{/* Inner glow */}
				<div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#1cade4]/20 to-[#4cc9f0]/20 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
			</button>
			<span className="text-xs text-gray-500">AI Quantum</span>
		</div>
	);
}
