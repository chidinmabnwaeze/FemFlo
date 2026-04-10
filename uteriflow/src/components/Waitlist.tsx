import logo from "../assets/Uteri Flow logo.svg";

interface WaitlistForm {
  name: () => void;
}

const Waitlist = () => {
  return (
    <div className="bg-gradient-to-br from-[#330030] to-[#990090] gap-4 flex flex-col justify-center items-center p-40 text-white">
      <img src={logo} alt="logo" />
      <h1 className="font-bold text-2xl">UteriFlow</h1>
      <h2>Our app is coming soon !</h2>
      <h1>Be Among the First.</h1>
      <p>
        Get early access to My FemFlo and be part of a community that
        prioritizes your wellness and privacy.
      </p>

      <div className="flex flex-col justify-center items-center mt-10 bg-white rounded" >
        <form action="">
          <input type="text" className="text-black border-0 p-3 mr-3 rounded-lg focus:ring-0"/>
          <button className="bg-primary-color p-4 px-8 rounded">Join Waitlist </button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;
