import { Goal } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: Goal,
      title: "Our Mission",
      text: "We created My FemFlo to give women with PCOS the tools, knowledge, and support they deserve. This isn't just another period tracker – it's your complete PCOS wellness companion.",
    },
  ];
  return (
    <div>
      <section className="hero bg-primary-color text-white ">
        <h2>Your needs?</h2>
        <h1>We Get It.</h1>
        <p>
          Managing PCOS can feel overwhelming and lonely. Irregular cycles,
          hormonal changes, and constant uncertainty shouldn't define your life.
        </p>
      </section>
      <section className="card-container grid grid-cols-3 gap-20 mt-15">
        {cards.map((card, index) => (
          <div
            className="group border border-white/40 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#784ab7]"
            key={index}
          >
            <card.icon size={32} />     
            <h1 className="text-xl m-4 text-secondary-color font-semibold group-hover:translate-x-1 transition">
              {card.title}
            </h1>
            <p>{card.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
