import { useState } from "react";
import logo from "../assets/Uteri Flow logo.svg";
import { type WaitlistForm } from "../types/waitlist";
import { Forminit } from "forminit";
import { CheckCircle, AlertCircle } from "lucide-react";

const Waitlist = () => {
  const forminit = new Forminit();
  const formId = import.meta.env.VITE_FORM_ID;
  const [formData, setFormData] = useState<WaitlistForm>({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<WaitlistForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<WaitlistForm> = {};

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[id as keyof WaitlistForm]) {
      setErrors((prev) => ({
        ...prev,
        [id]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitStatus("idle");

    try {
      const data = new FormData();
      data.append("first_name", formData.first_name);
      data.append("last_name", formData.last_name);
      data.append("email", formData.email);

      await forminit.submit(formId, data);

      setFormData({
        first_name: "",
        last_name: "",
        email: "",
      });
      setSubmitStatus("success");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#330030] to-[#990090] gap-4 flex flex-col justify-center items-center p-8 md:p-40 text-white min-h-screen">
      <img
        src={logo}
        alt="UteriFlow logo"
        className="h-16 w-16 md:h-20 md:w-20"
      />
      <h1 className="font-bold text-3xl md:text-4xl">UteriFlow</h1>
      <h2 className="text-xl md:text-2xl font-semibold">
        Our app is coming soon!
      </h2>
      <h1 className="text-2xl md:text-3xl font-bold">Be Among the First.</h1>
      <p className="text-center max-w-md text-gray-100">
        Get early access to UteriFlow and be part of a community that
        prioritizes your wellness and privacy.
      </p>

      <div className="flex flex-col justify-center items-center mt-10 bg-white rounded-lg p-8 w-full max-w-md shadow-2xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          {/* First Name */}
          <div>
            <input
              type="text"
              id="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className={`w-full text-black p-3 rounded-lg border-2 transition focus:outline-none ${
                errors.first_name
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-primary-color"
              }`}
              required
            />
            {errors.first_name && (
              <p className="text-red-600 text-sm mt-1">{errors.first_name}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              id="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className={`w-full text-black p-3 rounded-lg border-2 transition focus:outline-none ${
                errors.last_name
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-primary-color"
              }`}
              required
            />
            {errors.last_name && (
              <p className="text-red-600 text-sm mt-1">{errors.last_name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full text-black p-3 rounded-lg border-2 transition focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:border-red-600"
                  : "border-gray-300 focus:border-primary-color"
              }`}
              required
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#330030] to-[#990090] p-3 px-8 rounded-lg text-white font-semibold hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>

          {/* Success Message */}
          {submitStatus === "success" && (
            <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-lg p-4 text-green-700">
              <CheckCircle size={20} />
              <span className="font-medium">
                You're on the waitlist! Check your email.
              </span>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === "error" && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
              <AlertCircle size={20} />
              <span className="font-medium">
                Something went wrong. Please try again.
              </span>
            </div>
          )}
        </form>
      </div>

      <p className="text-center text-sm text-gray-200 mt-6 max-w-md">
        We respect your privacy. Your information will only be used to notify
        you when UteriFlow launches.
      </p>
    </div>
  );
};

export default Waitlist;
