export function AIShield() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Shield
			</h3>
			<div className="relative group w-32 h-32 flex items-center justify-center">
				{/* Rotating outer ring */}
				<div className="absolute inset-0 rounded-full border-2 border-[#1cade4]/30 border-t-[#1cade4] animate-spin" />

				{/* Rotating middle ring - reverse */}
				<div
					className="absolute inset-2 rounded-full border-2 border-[#4cc9f0]/20 border-b-[#4cc9f0]"
					style={{ animation: "spin 3s linear infinite reverse" }}
				/>

				{/* Pulsing glow rings */}
				{/*<div className="absolute inset-0 rounded-full bg-[#1cade4]/20 animate-ping" />*/}
				{/*<div*/}
				{/*	className="absolute inset-0 rounded-full bg-[#4cc9f0]/20 animate-ping"*/}
				{/*	style={{ animationDelay: "0.5s" }}*/}
				{/*/>*/}

				{/* Shield SVG */}
				<div className="relative z-10 w-20 h-20 group-hover:scale-110 transition-transform duration-300">
					<svg
						viewBox="0 0 100 120"
						className="w-full h-full drop-shadow-[0_0_15px_rgba(28,173,228,0.8)]"
					>
						<title>Sqior Shield</title>
						{/* Shield outer glow */}
						<defs>
							<linearGradient
								id="shieldGradient"
								x1="0%"
								y1="0%"
								x2="0%"
								y2="100%"
							>
								<stop offset="0%" stopColor="#1cade4" stopOpacity="1" />
								<stop offset="50%" stopColor="#4cc9f0" stopOpacity="0.8" />
								<stop offset="100%" stopColor="#0d8bb8" stopOpacity="1" />
							</linearGradient>

							<filter id="glow">
								<feGaussianBlur stdDeviation="3" result="coloredBlur" />
								<feMerge>
									<feMergeNode in="coloredBlur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>

							<radialGradient id="shieldShine">
								<stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
								<stop offset="100%" stopColor="#1cade4" stopOpacity="0" />
							</radialGradient>

							{/* Animation for shine effect */}
							<animate
								xlinkHref="#shineCircle"
								attributeName="opacity"
								values="0.3;0.8;0.3"
								dur="2s"
								repeatCount="indefinite"
							/>
						</defs>

						{/* Shield shape */}
						<path
							d="M 50 10 L 85 25 L 85 55 Q 85 90 50 110 Q 15 90 15 55 L 15 25 Z"
							fill="url(#shieldGradient)"
							stroke="#1cade4"
							strokeWidth="2"
							filter="url(#glow)"
							className="group-hover:drop-shadow-[0_0_20px_rgba(28,173,228,1)] transition-all"
						/>

						{/* Inner shield detail */}
						<path
							d="M 50 20 L 75 32 L 75 55 Q 75 80 50 95 Q 25 80 25 55 L 25 32 Z"
							fill="none"
							stroke="#4cc9f0"
							strokeWidth="1.5"
							opacity="0.6"
						>
							<animate
								attributeName="opacity"
								values="0.4;0.8;0.4"
								dur="2s"
								repeatCount="indefinite"
							/>
						</path>

						{/* Center emblem - AI symbol */}
						{/*<circle cx="50" cy="50" r="12" fill="#0A0F23" opacity="0.8" />*/}

						{/* AI letters */}
						<text
							x="50"
							y="57"
							fontFamily="Arial, sans-serif"
							fontSize="16"
							fontWeight="bold"
							fill="#1cade4"
							textAnchor="middle"
						>
							AI
						</text>

						{/* Shine effect */}
						<ellipse
							id="shineCircle"
							cx="40"
							cy="35"
							rx="15"
							ry="20"
							fill="url(#shieldShine)"
							opacity="0.4"
						>
							<animate
								attributeName="opacity"
								values="0.2;0.6;0.2"
								dur="3s"
								repeatCount="indefinite"
							/>
						</ellipse>

						{/* Animated scan lines */}
						<line
							x1="30"
							y1="40"
							x2="70"
							y2="40"
							stroke="#1cade4"
							strokeWidth="1"
							opacity="0"
						>
							<animate
								attributeName="y1"
								values="30;80;30"
								dur="2s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="y2"
								values="30;80;30"
								dur="2s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="opacity"
								values="0;0.8;0"
								dur="2s"
								repeatCount="indefinite"
							/>
						</line>

						{/* Corner accent marks */}
						<path
							d="M 30 35 L 25 35 L 25 30"
							stroke="#1cade4"
							strokeWidth="2"
							fill="none"
							opacity="0.6"
						/>
						<path
							d="M 70 35 L 75 35 L 75 30"
							stroke="#1cade4"
							strokeWidth="2"
							fill="none"
							opacity="0.6"
						/>
					</svg>
				</div>

				{/* Floating particles */}
				<div className="absolute inset-0 pointer-events-none">
					{[...Array(8)].map((_, i) => (
						<div
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							key={i}
							className="absolute w-1 h-1 bg-[#1cade4] rounded-full opacity-60"
							style={{
								left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
								top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
								animation: `float ${2 + i * 0.2}s ease-in-out infinite`,
								animationDelay: `${i * 0.1}s`,
							}}
						/>
					))}
				</div>

				{/* Orbiting energy dots */}
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: "4s" }}
				>
					<div className="absolute top-0 left-1/2 w-2 h-2 bg-[#1cade4] rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(28,173,228,1)]" />
				</div>
				<div
					className="absolute inset-0 animate-spin"
					style={{ animationDuration: "3s", animationDirection: "reverse" }}
				>
					<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#4cc9f0] rounded-full -translate-x-1/2 shadow-[0_0_10px_rgba(76,201,240,1)]" />
				</div>

				{/* Glow effect */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4] opacity-0 group-hover:opacity-30 blur-2xl transition-opacity pointer-events-none" />
			</div>

			{/* Add custom keyframes for floating animation */}
			<style>{`
				@keyframes float {
					0%, 100% {
						transform: translateY(0px) scale(1);
						opacity: 0.6;
					}
					50% {
						transform: translateY(-10px) scale(1.2);
						opacity: 1;
					}
				}
			`}</style>
		</div>
	);
}
