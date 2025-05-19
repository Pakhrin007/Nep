import logo from "../../assets/Images/logo.png";

const CTASection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center text-center px-4 py-20 space-y-6">
      {/* Logo icon */}
      <div className="bg-white rounded-xl p-4">
        <img src={logo} alt="Icon" className="h-8 w-8" />
      </div>

      {/* Heading */}
      <h1 className="sm:text-5xl font-semibold max-w-2xl font-body">
        We live in our inboxes. <br />
        Let’s make email enjoyable.
      </h1>

      {/* Subheading */}
      <p className="text-gray-300 text-lg max-w-xl font-body">
        Try us out for free, invite a few people to get a feel, and upgrade when you’re ready.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold font-body">
          Try for free
        </button>
        <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold font-body">
          Book a demo
        </button>
      </div>

      {/* Footer */}
      <footer className="w-full mt-20 pt-12 px-6 text-left text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Left Section */}
          <div className="col-span-2">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Footer logo" className="w-10 h-10" />
              <div>
                <p className="text-gray-400 font-semibold">Latest post</p>
                <p className="text-white">Outlook vs Gmail for Business:</p>
                <p className="text-gray-300">Which is better?</p>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-2">Product</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Book a demo</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Download</li>
              <li>Help center</li>
              <li>Changelog</li>
              <li>Developer</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-white mb-2">Solutions</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Accounting</li>
              <li><strong>Law</strong></li>
              <li>Logistics</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-2">Company</h4>
            <ul className="space-y-1 text-gray-400">
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li>Status</li>
              <li>Customer stories</li>
              <li>Referral program</li>
            </ul>
          </div>

      
        </div>

        <div className="text-center text-gray-500 text-sm mt-12">
          © 2025 Missive · Privacy Policy · Security · Terms
        </div>
      </footer>
    </section>
  );
};

export default CTASection;
