import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function AIBrainLottie() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				AI Brain
			</h3>
			<div className="relative group">
				<div className="w-32 h-32 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1cade4]/10 to-[#0d8bb8]/10 border border-[#1cade4]/30 hover:border-[#1cade4] transition-all hover:scale-105">
					<DotLottieReact
						src="https://lottie.host/4db68bdc-31a6-4926-af96-d207bf25a2e1/CGSz4dp3N6.lottie"
						loop
						autoplay
						className="w-28 h-28"
					/>
				</div>
				{/* Glow effect */}
				<div className="absolute inset-0 rounded-2xl bg-[#1cade4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none" />
			</div>
			<span className="text-xs text-gray-500">AI Processing</span>
		</div>
	);
}
