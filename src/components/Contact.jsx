const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form Submitted!");
    };
  
    return (
      <section id="contact" className="py-24 bg-gradient-to-br from-indigo-700 via-purple-800 to-pink-700 text-white relative">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-0"></div>
  
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'd love to hear from you! Fill out the form and let’s connect.
          </p>
  
          <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-2xl shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-yellow-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 bg-black bg-opacity-30 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your full name"
                />
              </div>
  
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-yellow-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 bg-black bg-opacity-30 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your email"
                />
              </div>
  
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-yellow-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  className="w-full p-3 bg-black bg-opacity-30 text-white placeholder-gray-400 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
  
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
                >
                  🚀 Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Social Media Icons */}
<div className="mt-10 flex justify-center space-x-6">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-400 transition-transform transform hover:scale-110"
  >
    <i className="fab fa-facebook-f text-2xl"></i>
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-cyan-400 transition-transform transform hover:scale-110"
  >
    <i className="fab fa-twitter text-2xl"></i>
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-blue-300 transition-transform transform hover:scale-110"
  >
    <i className="fab fa-linkedin-in text-2xl"></i>
  </a>
  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-gray-300 transition-transform transform hover:scale-110"
  >
    <i className="fab fa-github text-2xl"></i>
  </a>
</div>

        </div>
      </section>
    );
  };
  
  export default Contact;
  