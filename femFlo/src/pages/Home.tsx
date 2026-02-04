import Header from "../components/Header";
import homeImg from "../assets/images/image 2.png";
import img1 from "../assets/images/image 18.png"

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

const Home = () => {
  const cards: CardProps[] = [
    {
      icon: "",
      title: "Accuracy",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
    {
      icon: "",
      title: "Accuracy",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
    {
      icon: "",
      title: "Accuracy",
      text: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quaerat dicta odit libero itaque velit non tenetur atque sequi veniam voluptates dolor, rerum exercitationem, deserunt eligendi repudiandae cumque nam neque!",
    },
  ];

  const features: FeatureProps[] = [
    {
      title: "Cycle & Ovulation Tracking",
      text: "Easily track your menstrual cycle and ovulation with PCOS-specific insights to understand your body's patterns.",
      img: img1 ,
    },
  ];
  return (
    <>
        <Header title="Home" />
      <main className="">
        <section className="hero bg-[#eeeaff] min-h-screen m-auto">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pt-15">
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
              <img src={homeImg} alt="" />
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
                className="card border border-gray-100 p-5 bg-[#efe4ff] rounded-xl "
                key={index}
              >
                <img src="" alt="" />
                <h1 className="text-xl m-4 text-[#784ab7] font-semibold">
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
            You Need
          </h1>

          <section className="features">
            {features.map((item, index) => (
              <div className="container flex justify-center items-center text-white" key={index}>
                <div className="bg-[#d8cceb2f] p-6 rounded-2xl min-h-72 items-center">
                  <h1 className="text-2xl">{item.title}</h1>
                  <p className="text-wrap whitespace-pre-wrap">{item.text}</p>
                </div>
                <div>{item.img}</div>
              </div>
            ))}
          </section>
        </section>
      </main>
    </>
  );
};

export default Home;
