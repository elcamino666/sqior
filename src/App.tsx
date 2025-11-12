import {
	ElevatedButton,
	GlassmorphismButton,
	GradientFlowButton,
	HolographicButton,
	MinimalPulseButton,
	NeonGlowButton,
} from "./components/AIButtons";

function App() {
	return (
		<div className="min-h-screen bg-[#0A0F23] text-white p-8 flex flex-col items-center justify-center">
			{/* Header */}
			<div className="text-center mb-16 max-w-3xl">
				<h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#1cade4] to-[#4cc9f0] bg-clip-text text-transparent">
					AI Button Collection
				</h1>
				<p className="text-gray-400 text-lg">
					5 unique button designs to indicate AI-generated content
				</p>
			</div>

			{/* Button Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
				<GlassmorphismButton />
				<NeonGlowButton />
				<GradientFlowButton />
				<ElevatedButton />
				<MinimalPulseButton />
				<HolographicButton />
			</div>

			{/* Footer */}
			<div className="mt-16 text-center text-gray-500 text-sm">
				<p>Hover over each button to see the interactive effects</p>
			</div>
		</div>
	);
}

export default App;
