import {
	ElevatedButton,
	GlassmorphismButton,
	GradientFlowButton,
	HolographicButton,
	MinimalPulseButton,
	NeonGlowButton,
} from "./components/AIButtons";
import {
	BrainChipIcon,
	HexagonTechIcon,
	NeuralNetworkIcon,
	OrbitalRingIcon,
	PulsingOrbIcon,
	QuantumParticlesIcon,
} from "./components/IconButtons";
import {
	AIClaude,
	AIRobotLottie,
	AIShield,
	AISphereLottie,
	AiTechLottie,
	StarLottie,
} from "./components/LottieButtons";

function App() {
	return (
		<div className="min-h-screen bg-[#0A0F23] text-white relative overflow-hidden">
			{/* Animated Background Effects */}
			<div className="fixed inset-0 pointer-events-none">
				{/* Gradient Orbs */}
				<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1cade4]/20 rounded-full blur-[120px] animate-float-slow" />
				<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4cc9f0]/20 rounded-full blur-[120px] animate-float-slower" />
				<div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7209b7]/10 rounded-full blur-[100px] animate-float-medium" />

				{/* Grid Pattern */}
				<div
					className="absolute inset-0 opacity-[0.02]"
					style={{
						backgroundImage:
							"linear-gradient(rgba(28, 173, 228, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(28, 173, 228, 0.5) 1px, transparent 1px)",
						backgroundSize: "50px 50px",
					}}
				/>

				{/* Floating Particles */}
				{[...Array(20)].map((_, i) => (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: Static decorative particles with stable count
						key={`particle-${i}`}
						className="absolute w-1 h-1 bg-[#1cade4] rounded-full"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animation: `float-particle ${10 + i * 2}s ease-in-out infinite`,
							animationDelay: `${i * 0.5}s`,
							opacity: 0.3,
						}}
					/>
				))}
			</div>

			{/* Main Content */}
			<div className="relative z-10 flex flex-col items-center px-8 py-20">
				{/* Premium Hero Section */}
				<div className="text-center mb-24 max-w-5xl">
					{/* Decorative Top Line */}
					<div className="flex items-center justify-center gap-4 mb-8">
						<div className="h-px w-20 bg-gradient-to-r from-transparent to-[#1cade4]" />
						<div className="flex gap-1">
							<div className="w-1 h-1 rounded-full bg-[#1cade4] animate-pulse" />
							<div
								className="w-1 h-1 rounded-full bg-[#1cade4] animate-pulse"
								style={{ animationDelay: "0.2s" }}
							/>
							<div
								className="w-1 h-1 rounded-full bg-[#1cade4] animate-pulse"
								style={{ animationDelay: "0.4s" }}
							/>
						</div>
						<div className="h-px w-20 bg-gradient-to-l from-transparent to-[#1cade4]" />
					</div>

					{/* Main Title */}
					<h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
						<span className="bg-gradient-to-r from-[#1cade4] via-[#4cc9f0] to-[#7209b7] bg-clip-text text-transparent animate-gradient-shift">
							AI Design
						</span>
						<br />
						<span className="text-white/90">Collection</span>
					</h1>

					{/* Subtitle */}
					<p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
						Premium UI components and animations crafted for{" "}
						<span className="text-[#1cade4] font-semibold">
							next-generation
						</span>{" "}
						AI-powered applications
					</p>

					{/* Stats */}
					<div className="flex flex-wrap justify-center gap-8 mt-12">
						{[
							{ label: "Text Buttons", value: "6" },
							{ label: "Icon Designs", value: "6" },
							{ label: "Animations", value: "6" },
						].map((stat) => (
							<div
								key={stat.label}
								className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-[140px]"
							>
								<div className="text-4xl font-bold bg-gradient-to-r from-[#1cade4] to-[#4cc9f0] bg-clip-text text-transparent mb-2">
									{stat.value}
								</div>
								<div className="text-sm text-gray-500 uppercase tracking-wider">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>

				{/* AI Text Buttons Section */}
				<section className="w-full max-w-7xl mb-32">
					<div className="mb-12">
						<div className="flex items-center justify-center gap-3 mb-4">
							<div className="w-8 h-px bg-gradient-to-r from-transparent to-[#1cade4]" />
							<h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
								Interactive Buttons
							</h2>
							<div className="w-8 h-px bg-gradient-to-l from-transparent to-[#1cade4]" />
						</div>
						<p className="text-center text-gray-500 text-sm uppercase tracking-widest">
							Hover to experience
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<GlassmorphismButton />
						<NeonGlowButton />
						<GradientFlowButton />
						<ElevatedButton />
						<MinimalPulseButton />
						<HolographicButton />
					</div>
				</section>

				{/* Decorative Divider */}
				<div className="w-full max-w-4xl mb-32 flex items-center justify-center">
					<div className="flex items-center gap-4">
						<div className="h-px w-32 bg-gradient-to-r from-transparent via-[#1cade4] to-transparent" />
						<div className="w-2 h-2 rounded-full bg-[#1cade4] animate-pulse" />
						<div className="h-px w-32 bg-gradient-to-r from-transparent via-[#1cade4] to-transparent" />
					</div>
				</div>

				{/* Icon Buttons Section */}
				<section className="w-full max-w-7xl mb-32">
					<div className="mb-12">
						<div className="flex items-center justify-center gap-3 mb-4">
							<div className="w-8 h-px bg-gradient-to-r from-transparent to-[#4cc9f0]" />
							<h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
								Icon Systems
							</h2>
							<div className="w-8 h-px bg-gradient-to-l from-transparent to-[#4cc9f0]" />
						</div>
						<p className="text-center text-gray-500 text-sm uppercase tracking-widest">
							Dynamic visual elements
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<PulsingOrbIcon />
						<HexagonTechIcon />
						<NeuralNetworkIcon />
						<QuantumParticlesIcon />
						<BrainChipIcon />
						<OrbitalRingIcon />
					</div>
				</section>

				{/* Decorative Divider */}
				<div className="w-full max-w-4xl mb-32 flex items-center justify-center">
					<div className="flex items-center gap-4">
						<div className="h-px w-32 bg-gradient-to-r from-transparent via-[#7209b7] to-transparent" />
						<div className="w-2 h-2 rounded-full bg-[#7209b7] animate-pulse" />
						<div className="h-px w-32 bg-gradient-to-r from-transparent via-[#7209b7] to-transparent" />
					</div>
				</div>

				{/* Lottie Animations Section */}
				<section className="w-full max-w-7xl mb-20">
					<div className="mb-12">
						<div className="flex items-center justify-center gap-3 mb-4">
							<div className="w-8 h-px bg-gradient-to-r from-transparent to-[#7209b7]" />
							<h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
								Advanced Animations
							</h2>
							<div className="w-8 h-px bg-gradient-to-l from-transparent to-[#7209b7]" />
						</div>
						<p className="text-center text-gray-500 text-sm uppercase tracking-widest">
							Complex motion graphics
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<AiTechLottie />
						<StarLottie />
						<AIShield />
						<AISphereLottie />
						<AIRobotLottie />
						<AIClaude />
					</div>
				</section>

				{/* Premium Footer */}
				<footer className="mt-32 w-full max-w-7xl">
					<div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

					<div className="flex flex-col md:flex-row items-center justify-between gap-8 px-8">
						<div className="text-center md:text-left">
							<div className="text-2xl font-bold bg-gradient-to-r from-[#1cade4] to-[#4cc9f0] bg-clip-text text-transparent mb-2">
								AI Design System
							</div>
							<p className="text-gray-500 text-sm">
								Crafted with precision and passion
							</p>
						</div>

						<div className="flex gap-6 text-sm text-gray-500">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#1cade4]" />
								<span>18 Components</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#4cc9f0]" />
								<span>Premium Quality</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-[#7209b7]" />
								<span>Ready to Use</span>
							</div>
						</div>
					</div>

					<div className="text-center mt-12 text-gray-600 text-xs">
						<p>© 2025 AI Design Collection. All rights reserved.</p>
					</div>
				</footer>
			</div>

			{/* Custom Animations */}
			<style>{`
				@keyframes float-slow {
					0%, 100% {
						transform: translate(0, 0) scale(1);
					}
					50% {
						transform: translate(30px, 30px) scale(1.1);
					}
				}

				@keyframes float-slower {
					0%, 100% {
						transform: translate(0, 0) scale(1);
					}
					50% {
						transform: translate(-30px, -30px) scale(1.1);
					}
				}

				@keyframes float-medium {
					0%, 100% {
						transform: translate(0, 0) scale(1);
					}
					50% {
						transform: translate(20px, -20px) scale(1.05);
					}
				}

				@keyframes float-particle {
					0%, 100% {
						transform: translateY(0) scale(1);
						opacity: 0.2;
					}
					50% {
						transform: translateY(-30px) scale(1.5);
						opacity: 0.6;
					}
				}

				@keyframes gradient-shift {
					0%, 100% {
						background-position: 0% 50%;
					}
					50% {
						background-position: 100% 50%;
					}
				}

				.animate-float-slow {
					animation: float-slow 20s ease-in-out infinite;
				}

				.animate-float-slower {
					animation: float-slower 25s ease-in-out infinite;
				}

				.animate-float-medium {
					animation: float-medium 15s ease-in-out infinite;
				}

				.animate-gradient-shift {
					background-size: 200% 200%;
					animation: gradient-shift 8s ease infinite;
				}
			`}</style>
		</div>
	);
}

export default App;
