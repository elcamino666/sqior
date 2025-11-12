export function ElevatedButton() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				3D Elevated
			</h3>
			<button
				type="button"
				className="px-8 py-4 rounded-lg bg-gradient-to-br from-[#1cade4] to-[#0d8bb8] font-bold shadow-[0_8px_0_#0a6b8f,0_12px_24px_rgba(28,173,228,0.3)] hover:shadow-[0_4px_0_#0a6b8f,0_8px_24px_rgba(28,173,228,0.4)] hover:translate-y-[4px] transition-all duration-150 active:translate-y-[8px] active:shadow-[0_0px_0_#0a6b8f,0_0px_24px_rgba(28,173,228,0.5)]"
			>
				<div className="flex items-center gap-3">
					<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
						<title>AI Info Icon</title>
						<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
					</svg>
					<span>AI Powered</span>
				</div>
			</button>
		</div>
	);
}
