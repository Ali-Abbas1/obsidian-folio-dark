
const Contact = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact</h1>
        <p className="text-xl text-neutral-400 mb-12 animate-fade-in">
          Let's work together. Get in touch with me.
        </p>
        <div className="grid gap-8 animate-fade-in">
          <div className="bg-neutral-900 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
