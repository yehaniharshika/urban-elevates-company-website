import { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formPayload = {
      ...formData,
      access_key: "a896f2f5-eac4-4514-907b-aac866c1756e",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formPayload),
      }).then((res) => res.json());

      if (res.success) {
        console.log("Success:", res);
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.error("Submission failed:", res);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error("Error:", err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="bg-white text-black px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <div
          className="dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          id="contact"
        >
          <div className="p-8">
            <h3
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              For inquiries, please submit your requirements, and we will get in
              touch with you shortly.
            </h3>

            {submitStatus === "success" && (
              <div
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                Message sent successfully. We'll get back to you shortly.
              </div>
            )}
            {submitStatus === "error" && (
              <div
                className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-md"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
              >
                There was an error sending your message. Please try again later.
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                     style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px",fontWeight:"600" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                     style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px",fontWeight:"600" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                   style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px",fontWeight:"600" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "14px",fontWeight:"600" }}
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  rows={8}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 font-medium rounded-md transition-colors ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#10B981] hover:bg-[#059669] cursor-pointer"
                  } text-white`}
                  style={{  fontFamily: "Montserrat, sans-serif", maxWidth: "200px", cursor: "pointer"  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p
                className="text-sm text-gray-600 dark:text-gray-400"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                You can also reach us directly at:{" "}
                <a
                  href="mailto:urbanelevatesarchitects@gmail.com"
                  className="text-[#10B981] hover:underline"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  urbanelevatesarchitects@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
