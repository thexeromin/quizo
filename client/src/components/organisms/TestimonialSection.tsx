export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white text-black text-center px-6 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-8">
        What Our Players Say
      </h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {[
          {
            name: "Emma Johnson",
            feedback: "Quizo makes learning fun and engaging! I love the challenges."
          },
          {
            name: "Michael Brown",
            feedback: "Best quiz app ever! Competing with friends is so much fun."
          }
        ].map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border border-black rounded-xl shadow-md"
          >
            <p className="text-lg italic">&quot;{testimonial.feedback}&quot;</p>
            <p className="font-semibold mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
