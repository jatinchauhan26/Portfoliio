import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false); // NEW

  const [loading, setLoading] = useState(false);
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [form, setForm] = useState({
  from_name: "",
  from_email: "",
  message: "",
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      // setForm({ name: "", email: "", message: "" });
      setForm({
  from_name: "",
  from_email: "",
  message: "",
});
// Show success popup
    setSuccess(true);

    // Hide popup automatically after 3 seconds
    setTimeout(() => setSuccess(false), 3000);

    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
         {/* Success popup
      {success && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Message sent successfully!
        </div>
      )} */}
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <input type="hidden" name="to_name" value="Jatin" />
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="What’s your good name?"
                    required
                    />

                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                   <input
                  type="email"
                   id="email"
                   name="from_email"
                   value={form.from_email}
                   onChange={handleChange}
                   placeholder="What’s your email address?"
                  required
                  />

                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
                {/* Success popup under button */}
  {success && (
    <div className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg text-center">
      ✅ Message sent successfully!
    </div>
  )}
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
