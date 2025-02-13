export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 md:px-12 py-20 bg-white text-black">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Challenge Yourself with Quizo!
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Take fun and interactive quizzes, test your knowledge, and improve
          your skills.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-black text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-800 transition">
            Start Playing
          </button>
          <button className="bg-transparent border-2 border-black px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-black hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
