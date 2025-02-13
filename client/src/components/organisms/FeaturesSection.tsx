export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white text-black text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose Quizo?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {[
          {
            title: "Fun & Interactive",
            description: "Engage in exciting quizzes across various topics.",
          },
          {
            title: "Track Your Progress",
            description: "Monitor your scores and improve over time.",
          },
          {
            title: "Compete with Friends",
            description: "Challenge your friends and climb the leaderboard.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="p-6 border border-black rounded-xl shadow-md"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
