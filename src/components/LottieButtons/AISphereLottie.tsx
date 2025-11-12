import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function AISphereLottie() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				AI SPHERE
			</h3>
			<div className="relative group">
				<DotLottieReact
					src="raw/sfere.lottie"
					loop
					autoplay
					className="w-35 h-35"
				/>
				{/* Glow effect */}
				<div className="absolute inset-0 rounded-2xl bg-[#1cade4] opacity-0 group-hover:opacity-20 blur-xl transition-opacity pointer-events-none" />
			</div>
		</div>
	);
}
