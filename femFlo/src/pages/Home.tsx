import Header from "../components/Header";
import homeImg from "../assets/images/image 2.png";

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const Home = () => {
  const cards = [
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
  return (
    <>
      <main className="">
        <Header title="Home" />
        <section className="bg-[#eeeaff] min-h-screen m-auto">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pt-15">
            <div className="">
              <p className=" font-medium text-xl bg-[#d8c0fc] text-[#784ab7] inline p-3 px-6 rounded-full">
                Your Holistic PCOS Companion
              </p>
              <h1 className="text-7xl py-8 text-[#352055]">Built for You.</h1>
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

        <section className="text-center mt-20 max-w-6xl mx-auto">
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
      </main>
    </>
  );
};

export default Home;
