export function HexagonTechIcon() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				Hexagon Tech
			</h3>
			<div className="relative w-32 h-32 flex items-center justify-center group">
				{/* Outer hexagon layer - slow rotation */}
				<div className="absolute inset-0 flex items-center justify-center animate-spin-hex-slow">
					<svg viewBox="0 0 100 100" className="w-full h-full">
						<title>Outer Hexagon Layer</title>
						<polygon
							points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
							fill="none"
							stroke="url(#hex-gradient-1)"
							strokeWidth="1.5"
							opacity="0.4"
						/>
						<defs>
							<linearGradient id="hex-gradient-1" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#1cade4" stopOpacity="0.8" />
								<stop offset="50%" stopColor="#4cc9f0" stopOpacity="0.6" />
								<stop offset="100%" stopColor="#1cade4" stopOpacity="0.8" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				{/* Middle hexagon layer - medium rotation (reverse) */}
				<div
					className="absolute inset-4 flex items-center justify-center"
					style={{ animation: "spin 15s linear infinite reverse" }}
				>
					<svg viewBox="0 0 100 100" className="w-full h-full">
						<title>Middle Hexagon Layer</title>
						<polygon
							points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
							fill="none"
							stroke="#1cade4"
							strokeWidth="2"
							opacity="0.6"
							strokeDasharray="5,5"
						>
							<animate
								attributeName="stroke-dashoffset"
								from="0"
								to="10"
								dur="1s"
								repeatCount="indefinite"
							/>
						</polygon>
					</svg>
				</div>

				{/* Inner hexagon with glassmorphism */}
				<div className="absolute inset-8 flex items-center justify-center">
					<svg viewBox="0 0 100 100" className="w-full h-full">
						<title>Inner Hexagon Core</title>
						<defs>
							<linearGradient id="hex-core-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#1cade4" stopOpacity="0.3" />
								<stop offset="50%" stopColor="#4cc9f0" stopOpacity="0.2" />
								<stop offset="100%" stopColor="#7209b7" stopOpacity="0.3" />
							</linearGradient>
							<filter id="hex-glow">
								<feGaussianBlur stdDeviation="3" result="coloredBlur"/>
								<feMerge>
									<feMergeNode in="coloredBlur"/>
									<feMergeNode in="SourceGraphic"/>
								</feMerge>
							</filter>
						</defs>
						<polygon
							points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
							fill="url(#hex-core-gradient)"
							stroke="#1cade4"
							strokeWidth="2"
							filter="url(#hex-glow)"
							className="group-hover:drop-shadow-[0_0_20px_rgba(28,173,228,0.8)] transition-all"
						>
							<animate
								attributeName="opacity"
								values="0.6;1;0.6"
								dur="3s"
								repeatCount="indefinite"
							/>
						</polygon>
					</svg>
				</div>

				{/* Central microchip design */}
				<div className="relative z-10">
					<svg viewBox="0 0 80 80" className="w-16 h-16">
						<title>AI Microchip</title>
						<defs>
							<linearGradient id="chip-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#4cc9f0" />
								<stop offset="100%" stopColor="#1cade4" />
							</linearGradient>
							<filter id="chip-glow">
								<feGaussianBlur stdDeviation="2" result="coloredBlur"/>
								<feMerge>
									<feMergeNode in="coloredBlur"/>
									<feMergeNode in="SourceGraphic"/>
								</feMerge>
							</filter>
						</defs>

						{/* Chip body */}
						<rect
							x="25"
							y="25"
							width="30"
							height="30"
							rx="3"
							fill="url(#chip-gradient)"
							stroke="#ffffff"
							strokeWidth="1.5"
							filter="url(#chip-glow)"
							opacity="0.9"
						/>

						{/* Corner accents */}
						<rect x="27" y="27" width="4" height="4" fill="#ffffff" opacity="0.6" />
						<rect x="49" y="27" width="4" height="4" fill="#ffffff" opacity="0.6" />
						<rect x="27" y="49" width="4" height="4" fill="#ffffff" opacity="0.6" />
						<rect x="49" y="49" width="4" height="4" fill="#ffffff" opacity="0.6" />

						{/* Inner circuit pattern */}
						<path
							d="M 40 30 L 40 35 M 40 45 L 40 50 M 30 40 L 35 40 M 45 40 L 50 40"
							stroke="#ffffff"
							strokeWidth="2"
							opacity="0.8"
						>
							<animate
								attributeName="opacity"
								values="0.5;1;0.5"
								dur="2s"
								repeatCount="indefinite"
							/>
						</path>

						{/* Central processing dot */}
						<circle cx="40" cy="40" r="3" fill="#ffffff">
							<animate
								attributeName="r"
								values="3;4;3"
								dur="2s"
								repeatCount="indefinite"
							/>
						</circle>

						{/* Chip pins - Left side */}
						{[15, 25, 35, 45, 55, 65].map((y) => (
							<rect
								key={`pin-left-${y}`}
								x="10"
								y={y - 2}
								width="12"
								height="4"
								fill="#1cade4"
								opacity="0.7"
							>
								<animate
									attributeName="opacity"
									values="0.5;0.9;0.5"
									dur="3s"
									begin={`${y * 0.03}s`}
									repeatCount="indefinite"
								/>
							</rect>
						))}

						{/* Chip pins - Right side */}
						{[15, 25, 35, 45, 55, 65].map((y) => (
							<rect
								key={`pin-right-${y}`}
								x="58"
								y={y - 2}
								width="12"
								height="4"
								fill="#1cade4"
								opacity="0.7"
							>
								<animate
									attributeName="opacity"
									values="0.5;0.9;0.5"
									dur="3s"
									begin={`${y * 0.03}s`}
									repeatCount="indefinite"
								/>
							</rect>
						))}

						{/* Chip pins - Top */}
						{[15, 30, 45, 60].map((x) => (
							<rect
								key={`pin-top-${x}`}
								x={x - 2}
								y="10"
								width="4"
								height="12"
								fill="#1cade4"
								opacity="0.7"
							>
								<animate
									attributeName="opacity"
									values="0.5;0.9;0.5"
									dur="3s"
									begin={`${x * 0.03}s`}
									repeatCount="indefinite"
								/>
							</rect>
						))}

						{/* Chip pins - Bottom */}
						{[15, 30, 45, 60].map((x) => (
							<rect
								key={`pin-bottom-${x}`}
								x={x - 2}
								y="58"
								width="4"
								height="12"
								fill="#1cade4"
								opacity="0.7"
							>
								<animate
									attributeName="opacity"
									values="0.5;0.9;0.5"
									dur="3s"
									begin={`${x * 0.03}s`}
									repeatCount="indefinite"
								/>
							</rect>
						))}
					</svg>
				</div>

				{/* Data flow particles around hexagon */}
				<div className="absolute inset-0 pointer-events-none">
					{[0, 60, 120, 180, 240, 300].map((angle, i) => {
						const rad = (angle * Math.PI) / 180;
						const radius = 50;
						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								key={`particle-${i}`}
								className="absolute w-1.5 h-1.5 bg-[#1cade4] rounded-full"
								style={{
									left: `${50 + Math.cos(rad) * radius}%`,
									top: `${50 + Math.sin(rad) * radius}%`,
									animation: `orbit-pulse ${3 + i * 0.2}s ease-in-out infinite`,
									animationDelay: `${i * 0.4}s`,
									boxShadow: "0 0 8px rgba(28, 173, 228, 0.8)",
								}}
							/>
						);
					})}
				</div>

				{/* Connection lines between particles */}
				<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
					<title>Connection Network</title>
					{[0, 60, 120, 180, 240, 300].map((angle, i) => {
						const nextAngle = (angle + 60) % 360;
						const rad1 = (angle * Math.PI) / 180;
						const rad2 = (nextAngle * Math.PI) / 180;
						const radius = 50;
						return (
							<line
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								key={`connection-${i}`}
								x1={50 + Math.cos(rad1) * radius}
								y1={50 + Math.sin(rad1) * radius}
								x2={50 + Math.cos(rad2) * radius}
								y2={50 + Math.sin(rad2) * radius}
								stroke="#1cade4"
								strokeWidth="0.5"
								opacity="0.3"
							>
								<animate
									attributeName="opacity"
									values="0.1;0.5;0.1"
									dur="4s"
									begin={`${i * 0.3}s`}
									repeatCount="indefinite"
								/>
							</line>
						);
					})}
				</svg>

				{/* Ambient glow effect */}
				<div className="absolute inset-0 rounded-full bg-[#1cade4] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700 pointer-events-none" />
			</div>

			<span className="text-xs text-gray-500 group-hover:text-[#1cade4] transition-colors">
				AI Powered
			</span>

			{/* Custom animations */}
			<style>{`
				@keyframes spin-hex-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes orbit-pulse {
					0%, 100% {
						transform: scale(1);
						opacity: 0.6;
					}
					50% {
						transform: scale(1.5);
						opacity: 1;
					}
				}

				.animate-spin-hex-slow {
					animation: spin-hex-slow 25s linear infinite;
				}
			`}</style>
		</div>
	);
}
