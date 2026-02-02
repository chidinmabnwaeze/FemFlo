import Header from "../components/Header"
import homeImg from "../assets/images/image 2.png"

const Home = () => {
  return (
    <main className=" w-full">
<Header title="Home"/>
<section className="hero flex justify-between">
<div className="text-start gap-10">
    <p className="text-xl">Your Holistic PCOS Companion</p>
    <h1 className="text-6xl py-6">Built for You.</h1>
    <p>My FemFlo is a mobile platform that helps women track their cycles, manage PCOS symptoms, access health tips, and connect with medical experts, all privately and conveniently.</p>
    <button className="border p-3 mt-3">Get It On PlayStore</button>
    
</div>
<div>
    <img src={homeImg} alt="" />
</div>
</section>
    </main>
  )
}

export default Home