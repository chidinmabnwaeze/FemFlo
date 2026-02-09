import logo from "../assets/logo/image 21.png"

interface WaitlistForm {
    name: ()=>void

}

const Waitlist = () => {
  return (
    <div>
<img src={logo}alt="logo" />
<h2>Our app is coming soon !</h2>
<h1>Be Among the First.</h1>
<p>Get early access to My FemFlo and be part of a community that prioritizes your wellness and privacy.</p>
   
   <div>
    <form action="">
        <input type="text" />
        <button>Join Waitlist </button>
    </form>
    </div>
    </div>
  )
}

export default Waitlist