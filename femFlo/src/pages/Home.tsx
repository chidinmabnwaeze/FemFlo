import Header from "../components/Header";
import homeImg from "../assets/images/image 2.png";
import img1 from "../assets/images/image 18.png";
import logo from "../assets/logo/image 21.png";
import heroBg from "../assets/images/top-view-calendar-with-tampon-pills.jpg";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

interface FeatureProps {
  title: string;
  text: string;
  img: string;
}

interface ArticlesProps {
  title: string;
  text: string;
  button: () => void;
  author: string;
  date: string;
}

interface StruggleProps {
  title: string;
  text: string;
  author: string;
  // index: number;
}

const Home = () => {
  const cards: CardProps[] = [
    {
      icon: "",
      title: "Accuracy",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
    {
      icon: "",
      title: "Accountability",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
    {
      icon: "",
      title: "Privacy",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
  ];

  const features: FeatureProps[] = [
    {
      title: "Cycle & Ovulation Tracking",
      text: "Easily track your menstrual cycle and ovulation with PCOS-specific insights to understand your body's patterns.",
      img: img1,
    },
    {
      title: "Lifestyle Tips from Health Experts",
      text: "Get simple, expert tips on diet, exercise, and stress to manage POOS and boost your well-being.",
      img: img1,
    },
    {
      title: "Community Support",
      text: "Join a safe, anonymous community to share and connect with others living with PCOS.",
      img: img1,
    },
  ];

  const tips: ArticlesProps[] = [
    {
      title: "PCOS FAQs",
      text: "Straightfoward Answers to the Questions You're (Probably) Googling",
      button: () => (onClick) => new page(),
      author: "Health Tips",
      date: "Jun 30, 2025",
    },
    {
      title: "PCOS FAQs",
      text: "Straightfoward Answers to the Questions You're (Probably) Googling",
      button: () => (onClick) => new page(),
      author: "Health Tips",
      date: "Jun 30, 2025",
    },
  ];

  const struggle: StruggleProps[] = [
    {
      title: "I'm managing alone with no support",
      text: "I have irregular periods and struggle with weight loss, but I've never had proper medical guidance. I feel like I'm managing everything on my own and need a community of women who understand what I'm going through.",
      author: "Anonymous",
      // index: "Jun 30, 2025",
    },
    {
      title: "My symptoms affect everything",
      text: "Irregular periods, excess hair, acne, weight gain, mood swings - PCOS impacts my daily life significantly. I'm somewhat informed but still struggle with managing everything. I need personalized help that addresses all my symptoms, not just periods.",
      author: "Anonymous",
      // index: "Jun 30, 2025",
    },
    {
      title: "I need more than just period tracking",
      text: "I have irregular periods, acne, and mood swings, but most apps only track periods. I need something that helps me track all my symptoms, connects me with professionals, and gives me mental health support too.",
      author: "Anonymous",
      // index: "Jun 30, 2025",
    },
  ];

  return (
    <>
      <Header title="Home" />
      <main className="">
        <section
          className="hero relative bg-[#eeeaff] min-h-screen overflow-hidden"

          // style={{
          //   backgroundImage: `linear-gradient(rgba(238,234,255,0.95), rgba(120,74,183,0.85)), url(${heroBg})`,
          // backgroundPosition: "bottom",
          //   backgroundBlendMode: "overlay",
          // }}
        >
          <div className="absolute w-[600px] h-[600px] bg-[#d8c0fc] opacity-40 blur-[150px] rounded-full top-0 -left-40"></div>
          <div className="absolute w-[500px] h-[500px] bg-[#784ab7] opacity-20 blur-[130px] rounded-full bottom-0 right-0"></div>

          <div className=" relative z-10 max-w-7xl mx-auto px-6 flex justify-between items-center pt-15">
            <div className="">
              <p className=" font-medium text-xl bg-[#d8c0fc] text-[#784ab7] inline p-3 px-6 rounded-full">
                Your Holistic PCOS Companion
              </p>
              <h1 className="text-7xl py-8 text-[#352055]">Built For You.</h1>
              <p className="text-wrap text-[#784ab7] text-lg">
                My FemFlo is a mobile platform that helps women track their
                cycles,
                <br /> manage PCOS symptoms, access health tips, and connect
                with medical experts,
                <br /> all privately and conveniently.
              </p>
              <button className="rounded p-3 mt-8 bg-[#784ab7] text-white">
                Get It On PlayStore
              </button>
            </div>
            <div>
              <img
                src={homeImg}
                alt=""
                className="animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
          <section className="mt-35 bg-[#d8c0fc] p-30 rounded-2xl max-w-7xl mx-auto border border-white">
            <h1 className="text-3xl text-[#784ab7] text-center">
              Trusted by <b>20,000</b> people in the community
            </h1>
          </section>
        </section>

        <section className="text-center my-20 max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold">
            Why Choose <span className="text-[#784ab7]">Femflo</span>
          </h1>
          <div className="card-container grid grid-cols-3 gap-20 mt-15">
            {cards.map((card, index) => (
              <div
                className="group border border-white/40 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:border-[#784ab7]"
                key={index}
              >
                <img src="" alt="" />
                <h1 className="text-xl m-4 text-[#784ab7] font-semibold group-hover:translate-x-1 transition">
                  {card.title}
                </h1>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#352055] rounded-t-4xl p-10">
          <h1 className="text-[200px] text-white font-bold"> Everything </h1>
          <h1 className="text-end text-[150px] text-[#d8c0fc] font-bold">
            You Need !
          </h1>

          <section className="features">
            {features.map((item, index) => (
              <div
                className={`container flex justify-between items-center m-8 text-white ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                key={index}
              >
                <div className="bg-[#54347e]/80 backdrop-blur-md border border-white/10 p-8 mx-6 rounded-3xl w-2/4 h-72 shadow-lg hover:shadow-[#784ab7]/40 transition duration-500">
                  <h1 className="text-2xl my-4">{item.title}</h1>
                  <p className="text-wrap whitespace-pre-wrap">{item.text}</p>
                </div>
                <div>{item.img}</div>
              </div>
            ))}
          </section>
        </section>

        <section className="tips flex flex-col justify-center items-center m-30 ">
          <h1 className="text-4xl font-bold text-[#784ab7]">Learn & Thrive</h1>
          <p className="text-xl">
            Medical Insights and practical advice for your wellness
          </p>

          <section className=" flex m-12">
            {tips.map((item, index) => (
              <div
                className="group p-8 mx-6 rounded-3xl bg-white shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
                key={index}
              >
                <img src={logo} className="rounded-full w-14" alt="logo" />
                <h1 className="text-2xl font-semibold my-4">{item.title}</h1>
                <p className="text-wrap whitespace-pre-wrap">{item.text}</p>
                <button className="rounded-full px-6 py-3 mt-8 bg-[#784ab7]  text-white shadow-md group-hover:scale-105 transition">
                  Read More
                </button>
                <div className="pt-8">
                  <h1 className="font-semibold text-[#784ab7] ">
                    {item.author}
                  </h1>
                  <p>{item.date}</p>
                </div>
              </div>
            ))}
          </section>
        </section>

        <section className="relative overflow-hidden flex flex-col items-center py-32 bg-[#eeeaff]">
          <h1 className="text-4xl font-bold text-[#784ab7]">
            We Heard Your Struggles
          </h1>
          <p className="text-xl">So we built something better.</p>

          <section className="flex flex-wrap justify-center gap-10 mt-16">
            {struggle.map((item, index) => (
              <div
                key={index}
                className="relative w-[340px] p-8 rounded-3xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Big soft quote icon */}
                <span className="absolute -top-6 left-6 text-7xl text-[#d8c0fc] opacity-40">
                  “
                </span>

                <h2 className="text-xl font-semibold text-[#352055] mb-4 relative z-10">
                  {item.title}
                </h2>

                <p className="text-gray-600 leading-relaxed relative z-10">
                  {item.text}
                </p>

                {/* User badge */}
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#784ab7] to-[#d8c0fc] flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-semibold text-[#784ab7]">
                      {item.author}
                    </p>
                    <p className="text-sm text-gray-400">Community Member</p>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
