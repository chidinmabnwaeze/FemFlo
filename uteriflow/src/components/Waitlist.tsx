import logo from "../assets/logo/image 21.png";

interface WaitlistForm {
  name: () => void;
}

const Waitlist = () => {
  return (
    <div className="bg-[#352055] gap-4 flex flex-col justify-center items-center p-40 text-white">
      <img src={logo} alt="logo" />
      <h2>Our app is coming soon !</h2>
      <h1>Be Among the First.</h1>
      <p>
        Get early access to My FemFlo and be part of a community that
        prioritizes your wellness and privacy.
      </p>

      <div className="flex flex-col justify-center items-center mt-10" >
        <form action="">
          <input type="text" className="border p-3 rounded"/>
          <button className="bg-[#784ab7] p-4 px-8 rounded">Join Waitlist </button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
