export function AIRobotLottie() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				AI Sphere
			</h3>
			<div className="relative group w-32 h-32 flex items-center justify-center">
				{/* Outer breathing ring */}
				<div className="absolute inset-0 rounded-full border border-[#1cade4]/20">
					<div className="absolute inset-0 rounded-full border border-[#1cade4]/40 animate-breathe" />
				</div>

				{/* Middle glass layer */}
				<div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 shadow-inner" />

				{/* Main sphere with glassmorphism */}
				<div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1cade4]/20 via-[#4cc9f0]/10 to-transparent backdrop-blur-md border border-white/30 shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700 ease-out">
					{/* Inner glow */}
					<div className="absolute inset-0 rounded-full bg-gradient-radial from-[#1cade4]/30 to-transparent animate-pulse-slow" />

					{/* Shine effect - like Apple products */}
					<div className="absolute -top-8 -left-8 w-16 h-16 bg-white/40 rounded-full blur-2xl animate-shine" />

					{/* Floating light particles */}
					<div className="absolute inset-0">
						{[...Array(6)].map((_, i) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								className="absolute w-1 h-1 bg-white/60 rounded-full"
								style={{
									left: `${20 + i * 15}%`,
									top: `${30 + Math.sin(i) * 20}%`,
									animation: `floatUp ${3 + i * 0.5}s ease-in-out infinite`,
									animationDelay: `${i * 0.3}s`,
								}}
							/>
						))}
					</div>

					{/* Center AI symbol */}
					<div className="absolute inset-0 flex items-center justify-center">
						<svg
							viewBox="0 0 24 24"
							className="w-10 h-10 text-[#1cade4] drop-shadow-[0_0_8px_rgba(28,173,228,0.8)]"
							style={{
								animation: "breathe 4s ease-in-out infinite",
							}}
						>
							<title>AI Core</title>
							{/* Minimalist AI icon */}
							<circle
								cx="12"
								cy="12"
								r="8"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								opacity="0.6"
							/>
							<circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.8">
								<animate
									attributeName="r"
									values="3;3.5;3"
									dur="4s"
									repeatCount="indefinite"
								/>
								<animate
									attributeName="opacity"
									values="0.6;1;0.6"
									dur="4s"
									repeatCount="indefinite"
								/>
							</circle>

							{/* Orbiting dots */}
							<circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.8">
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 12 12"
									to="360 12 12"
									dur="8s"
									repeatCount="indefinite"
								/>
							</circle>
							<circle cx="4" cy="12" r="1.5" fill="currentColor" opacity="0.8">
								<animateTransform
									attributeName="transform"
									type="rotate"
									from="0 12 12"
									to="360 12 12"
									dur="8s"
									repeatCount="indefinite"
								/>
							</circle>
						</svg>
					</div>

					{/* Subtle scan line */}
					<div
						className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
						style={{
							animation: "scan 3s ease-in-out infinite",
						}}
					/>
				</div>

				{/* Outer ambient glow */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

				{/* Floating ambient particles around sphere */}
				<div className="absolute inset-0 pointer-events-none">
					{[...Array(12)].map((_, i) => {
						const angle = (i * 30 * Math.PI) / 180;
						const radius = 70;
						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={i}
								className="absolute w-0.5 h-0.5 bg-[#1cade4]/40 rounded-full"
								style={{
									left: `${50 + Math.cos(angle) * radius}%`,
									top: `${50 + Math.sin(angle) * radius}%`,
									animation: `twinkle ${2 + (i % 3)}s ease-in-out infinite`,
									animationDelay: `${i * 0.2}s`,
								}}
							/>
						);
					})}
				</div>
			</div>

			{/* Custom animations */}
			<style>{`
				@keyframes breathe {
					0%, 100% {
						transform: scale(1);
						opacity: 0.8;
					}
					50% {
						transform: scale(1.05);
						opacity: 1;
					}
				}

				@keyframes pulse-slow {
					0%, 100% {
						opacity: 0.3;
					}
					50% {
						opacity: 0.6;
					}
				}

				@keyframes shine {
					0%, 100% {
						transform: translate(0, 0);
						opacity: 0.4;
					}
					50% {
						transform: translate(40px, 40px);
						opacity: 0.6;
					}
				}

				@keyframes floatUp {
					0% {
						transform: translateY(0) scale(1);
						opacity: 0;
					}
					50% {
						opacity: 0.6;
					}
					100% {
						transform: translateY(-30px) scale(0.8);
						opacity: 0;
					}
				}

				@keyframes scan {
					0%, 100% {
						top: 100%;
						opacity: 0;
					}
					10% {
						opacity: 0.5;
					}
					50% {
						top: 0%;
						opacity: 0.8;
					}
					90% {
						opacity: 0.5;
					}
				}

				@keyframes twinkle {
					0%, 100% {
						opacity: 0.2;
						transform: scale(1);
					}
					50% {
						opacity: 0.8;
						transform: scale(1.5);
					}
				}

				.animate-breathe {
					animation: breathe 4s ease-in-out infinite;
				}

				.animate-pulse-slow {
					animation: pulse-slow 4s ease-in-out infinite;
				}

				.animate-shine {
					animation: shine 6s ease-in-out infinite;
				}
			`}</style>
		</div>
	);
}
