export function NeonGlowButton() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Neon Glow
			</h3>
			<button
				type="button"
				className="relative px-8 py-4 rounded-full bg-[#0A0F23] border-2 border-[#1cade4] text-[#1cade4] font-bold hover:bg-[#1cade4] hover:text-[#0A0F23] transition-all duration-300 shadow-[0_0_20px_rgba(28,173,228,0.5)] hover:shadow-[0_0_40px_rgba(28,173,228,0.8)]"
			>
				<div className="flex items-center gap-3">
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<title>AI Layers Icon</title>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
					<span>Made by AI</span>
				</div>
			</button>
		</div>
	);
}
