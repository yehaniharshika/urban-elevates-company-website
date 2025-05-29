const Contact = () => {
  const onSubmit = () => {
   
    alert("Message submitted!");
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <div className="bg-white text-black px-6 md:px-20 py-16 max-w-4xl mx-auto">
        <div
          className=" dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          id="contact"
        >
          <div className="p-8">
            <h3
              className="text-2xl font-semibold text-gray-900 dark:text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              For inquiries, please submit your requirements, and we will get in touch with you shortly.
            </h3>

            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name & Email - Responsive Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Your Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  placeholder="Enter your message"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  style={{ fontFamily: "Montserrat, sans-serif", fontSize: "13px" }}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#10B981] text-white font-medium rounded-md hover:bg-[#10B981] transition-colors"
                  style={{ fontFamily: "Montserrat, sans-serif", maxWidth: "200px", cursor: "pointer" }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
