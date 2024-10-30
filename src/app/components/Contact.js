

export default function Contact() {
    return (
      <section className="bg-gray-900 text-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-teal-400 mb-10">
            Get in Touch
          </h2>
  
          {/* Contact Form */}
          <form className="bg-gray-800 rounded-lg p-6 shadow-lg space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-left text-teal-400 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
                required
              />
            </div>
  
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-left text-teal-400 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
                required
              />
            </div>
  
            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-left text-teal-400 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full bg-gray-700 text-gray-200 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white rounded-lg py-3 font-semibold hover:bg-teal-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  }
  