export function AIClaude() {
	return (
		<div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#1cade4]/50 transition-all">
			<h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
				AI UltraThink
			</h3>
			<div className="relative group w-32 h-32 flex items-center justify-center">
				{/* Outer glass container */}
				{/*<div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">*/}
				{/*	/!* Animated gradient background *!/*/}
				{/*	<div className="absolute inset-0 bg-gradient-to-br from-[#1cade4]/20 via-[#4cc9f0]/10 to-[#7209b7]/20 animate-gradient-shift" />*/}

				{/*	/!* Grid pattern overlay *!/*/}
				{/*	<div*/}
				{/*		className="absolute inset-0 opacity-20"*/}
				{/*		style={{*/}
				{/*			backgroundImage:*/}
				{/*				"linear-gradient(rgba(28, 173, 228, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 173, 228, 0.3) 1px, transparent 1px)",*/}
				{/*			backgroundSize: "20px 20px",*/}
				{/*		}}*/}
				{/*	/>*/}
				{/*</div>*/}

				{/* Central Neural Core */}
				<div className="relative z-10">
					<svg viewBox="0 0 120 120" className="w-28 h-28">
						<title>AI UltraThink Neural Network</title>
						<defs>
							{/* Glow filter */}
							<filter id="ultra-glow">
								<feGaussianBlur stdDeviation="4" result="coloredBlur" />
								<feMerge>
									<feMergeNode in="coloredBlur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>

							{/* Gradient for core */}
							<radialGradient id="core-gradient">
								<stop offset="0%" stopColor="#1cade4" stopOpacity="1" />
								<stop offset="50%" stopColor="#4cc9f0" stopOpacity="0.8" />
								<stop offset="100%" stopColor="#1cade4" stopOpacity="0.4" />
							</radialGradient>

							{/* Gradient for connections */}
							<linearGradient
								id="connection-gradient"
								x1="0%"
								y1="0%"
								x2="100%"
								y2="0%"
							>
								<stop offset="0%" stopColor="#1cade4" stopOpacity="0" />
								<stop offset="50%" stopColor="#1cade4" stopOpacity="1" />
								<stop offset="100%" stopColor="#1cade4" stopOpacity="0" />
							</linearGradient>
						</defs>

						{/* Central core with pulsing animation */}
						<circle
							cx="60"
							cy="60"
							r="12"
							fill="url(#core-gradient)"
							filter="url(#ultra-glow)"
							className="origin-center"
						>
							<animate
								attributeName="r"
								values="12;15;12"
								dur="3s"
								repeatCount="indefinite"
							/>
							<animate
								attributeName="opacity"
								values="0.8;1;0.8"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>

						{/* Inner core detail */}
						<circle cx="60" cy="60" r="6" fill="#ffffff" opacity="0.9">
							<animate
								attributeName="r"
								values="6;8;6"
								dur="3s"
								repeatCount="indefinite"
							/>
						</circle>

						{/* Neural nodes - Layer 1 (inner ring) */}
						{[0, 60, 120, 180, 240, 300].map((angle, i) => {
							const rad = (angle * Math.PI) / 180;
							const x = 60 + Math.cos(rad) * 30;
							const y = 60 + Math.sin(rad) * 30;
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								<g key={`node1-${i}`}>
									{/* Connection line to center */}
									<line
										x1="60"
										y1="60"
										x2={x}
										y2={y}
										stroke="url(#connection-gradient)"
										strokeWidth="1.5"
										opacity="0.4"
									>
										<animate
											attributeName="opacity"
											values="0.2;0.8;0.2"
											dur="4s"
											begin={`${i * 0.3}s`}
											repeatCount="indefinite"
										/>
									</line>

									{/* Node */}
									<circle
										cx={x}
										cy={y}
										r="4"
										fill="#1cade4"
										filter="url(#ultra-glow)"
										opacity="0.9"
									>
										<animate
											attributeName="r"
											values="4;5.5;4"
											dur="3s"
											begin={`${i * 0.5}s`}
											repeatCount="indefinite"
										/>
									</circle>
								</g>
							);
						})}

						{/* Neural nodes - Layer 2 (outer ring) */}
						{[30, 90, 150, 210, 270, 330].map((angle, i) => {
							const rad = (angle * Math.PI) / 180;
							const x = 60 + Math.cos(rad) * 50;
							const y = 60 + Math.sin(rad) * 50;
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								<g key={`node2-${i}`}>
									{/* Connection to inner nodes */}
									<line
										x1={60 + Math.cos(((angle - 30) * Math.PI) / 180) * 30}
										y1={60 + Math.sin(((angle - 30) * Math.PI) / 180) * 30}
										x2={x}
										y2={y}
										stroke="#1cade4"
										strokeWidth="1"
										opacity="0.3"
									>
										<animate
											attributeName="opacity"
											values="0.1;0.5;0.1"
											dur="5s"
											begin={`${i * 0.4}s`}
											repeatCount="indefinite"
										/>
									</line>

									{/* Node */}
									<circle cx={x} cy={y} r="3" fill="#4cc9f0" opacity="0.8">
										<animate
											attributeName="r"
											values="3;4.5;3"
											dur="4s"
											begin={`${i * 0.6}s`}
											repeatCount="indefinite"
										/>
									</circle>
								</g>
							);
						})}

						{/* Data flow particles along connections */}
						{[0, 60, 120, 180, 240, 300].map((angle, i) => {
							const rad = (angle * Math.PI) / 180;
							const x = 60 + Math.cos(rad) * 30;
							const y = 60 + Math.sin(rad) * 30;
							return (
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								<circle
									key={`particle-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										i
									}`}
									r="1.5"
									fill="#ffffff"
									opacity="0.9"
								>
									<animateMotion
										dur="2s"
										begin={`${i * 0.3}s`}
										repeatCount="indefinite"
										path={`M 60 60 L ${x} ${y}`}
									/>
									<animate
										attributeName="opacity"
										values="0;1;0"
										dur="2s"
										begin={`${i * 0.3}s`}
										repeatCount="indefinite"
									/>
								</circle>
							);
						})}
					</svg>
				</div>

				{/* Rotating outer ring */}
				<div className="absolute inset-4 rounded-full border border-[#1cade4]/30 animate-spin-slow" />
				<div
					className="absolute inset-2 rounded-full border border-[#4cc9f0]/20"
					style={{ animation: "spin 20s linear infinite reverse" }}
				/>

				{/* Ambient particles */}
				<div className="absolute inset-0 pointer-events-none">
					{[...Array(16)].map((_, i) => {
						const angle = (i * 22.5 * Math.PI) / 180;
						const radius = 65;
						return (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: Static array with stable indices
								key={`ambient-${i}`}
								className="absolute w-0.5 h-0.5 bg-[#1cade4] rounded-full"
								style={{
									left: `${50 + Math.cos(angle) * radius}%`,
									top: `${50 + Math.sin(angle) * radius}%`,
									animation: `sparkle ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
									animationDelay: `${i * 0.1}s`,
								}}
							/>
						);
					})}
				</div>

				{/* Hover glow effect */}
				<div className="absolute inset-0 rounded-3xl bg-[#1cade4] opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700 pointer-events-none" />

				{/* Scan line effect */}
				{/*<div*/}
				{/*	className="absolute inset-x-4 h-px bg-gradient-to-r from-transparent via-[#1cade4]/60 to-transparent"*/}
				{/*	style={{*/}
				{/*		animation: "scan-vertical 4s ease-in-out infinite",*/}
				{/*	}}*/}
				{/*/>*/}
			</div>

			{/* Custom animations */}
			<style>{`
				@keyframes gradient-shift {
					0%, 100% {
						transform: translate(0, 0) scale(1);
						opacity: 0.5;
					}
					50% {
						transform: translate(10px, 10px) scale(1.1);
						opacity: 0.8;
					}
				}

				@keyframes spin-slow {
					from {
						transform: rotate(0deg);
					}
					to {
						transform: rotate(360deg);
					}
				}

				@keyframes sparkle {
					0%, 100% {
						opacity: 0.2;
						transform: scale(1);
					}
					50% {
						opacity: 1;
						transform: scale(2);
					}
				}

				@keyframes scan-vertical {
					0%, 100% {
						top: 100%;
						opacity: 0;
					}
					10% {
						opacity: 0.6;
					}
					50% {
						top: 0%;
						opacity: 1;
					}
					90% {
						opacity: 0.6;
					}
				}

				.animate-spin-slow {
					animation: spin-slow 30s linear infinite;
				}
			`}</style>
		</div>
	);
}
