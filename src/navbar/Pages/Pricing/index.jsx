import { useState } from "react";
import Navbar from "../../index";
import CTASection from "../../../ui/cta";
import Companies from "../../../ui/companies-section/index"
import PricingDetails from "./pricing-details";
import PricingComparison from "./pricing-comparison";
import FAQSection from "../../../ui/faq";
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const baseMonthlyPrice = 5;
  const addons = [
    { name: "HR Suite", price: 5 },
    { name: "Team Chat", price: 5 },
    { name: "Project Management", price: 5 },
    { name: "AI Chat (500 credits)", price: 9.99 },
  ];

  const handleToggle = () => setIsAnnual(!isAnnual);

  const handleAddOnChange = (name) => {
    setSelectedAddOns((prev) =>
      prev.includes(name)
        ? prev.filter((addon) => addon !== name)
        : [...prev, name]
    );
  };

  const calculateTotal = () => {
    const monthlyTotal = selectedAddOns.reduce((acc, item) => {
      const addon = addons.find((a) => a.name === item);
      return acc + (addon ? addon.price : 0);
    }, 0);
    const discount = isAnnual ? 0.2 : 0;
    const total = monthlyTotal * (1 - discount);
    return total.toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-y-10 mt-10">
        <h1 className="text-4xl md:text-4xl font-medium text-gray-800 text-center font-heading">
          Pay-for-what-you-use pricing
        </h1>
        <p className="text-gray-600 text-center font-body">
          Try Missive risk-free for 30 days. No credit card required.
        </p>

        <div className="flex justify-center items-center gap-2">
          <span className="text-gray-600 font-title font-semibold font-heading">Billed Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={isAnnual} onChange={handleToggle} />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
          </label>
          <span className="text-gray-600 font-title font-semibold font-heading">Billed yearly</span>
          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">20% off</span>
        </div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Free Trial */}
          <div className="border rounded-2xl p-8 w-[400px] shadow-md bg-white border-gray-200 flex flex-col gap-y-2 ">
            <h2 className=" mb-2 font-heading py-2 px-4 bg-gray-100 rounded-full w-fit">Free Trial</h2>
            <p className="text-2xl font-bold mb-4 text-gray-800">$0</p>
            <p className="text-gray-600 mb-2">14 days, no credit card required</p>
            <ul className="text-left space-y-2 text-gray-700">
              <li>✓ Up to 5 users</li>
              <li>✓ All features unlocked</li>
              <li>✓ 3GB storage</li>
              <li>✓ AI Chat: 20 credits</li>
            </ul>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded-full">Start Free Trial</button>
          </div>

          {/* Standard */}
          <div className="border rounded-2xl p-8 w-[400px] shadow-md bg-white border-gray-200 flex flex-col gap-y-2 ">
            <h2 className=" mb-2 font-heading py-2 px-4 bg-gray-100 rounded-full w-fit">Standard</h2>
            <p className="text-2xl font-bold text-gray-800">${calculateTotal()}<span className="text-base font-normal"> / user / {isAnnual ? "year" : "month"}</span></p>
            <div className="w-full mt-4 space-y-[10px]">
              {addons.map((addon) => (
                <label key={addon.name} className="flex justify-between items-center px-4 py-2 bg-blue-50 rounded-2xl hover:bg-blue-100">
                  <span>{addon.name}</span>
                  <input
                    type="checkbox"
                    checked={selectedAddOns.includes(addon.name)}
                    onChange={() => handleAddOnChange(addon.name)}
                  />
                </label>
              ))}
            </div>
              <div className="mt-2">
              <p className="text-sm text-gray-500 mt-2">✓ Calendar, 30GB storage </p>
            <p className="text-sm text-gray-500 mt-2">✓ Calendar, 30GB storage & Basic AI Agent included</p>
            <p className="text-sm text-gray-500 mt-2">✓ Team Chat included</p> 

              </div>

            <button className="mt-6 bg-black text-white px-6 py-2 rounded-full">Get Started</button>
          </div>

          {/* Pro */}
          {/* ---------------most popular : to right corner --------------- */}
          <div className="border-2 border-blue-500 rounded-2xl p-8 w-[400px] shadow-md bg-white flex flex-col gap-y-2 relative">
            <div className="text-sm text-white bg-blue-500 p-2 rounded-2xl mb-2 ml-0 mt-0 absolute -top-0 -right-1">Most Popular</div>
            <h2 className=" mb-2 font-heading py-2 px-4 bg-gray-100 rounded-full w-fit">Pro</h2>
            <p className="text-2xl font-bold text-gray-800">${isAnnual ? 192 : 20}<span className="text-base font-normal"> / user / {isAnnual ? "year" : "month"}</span></p>
            <ul className="text-left space-y-2 mt-4 text-gray-700">
              <li>✓ All core features unlocked</li>
              <li>✓ 30GB storage (cheaper add-on tiers)</li>
              <li>✓ AI Chat included at no extra cost</li>
              <li>✓ Advanced admin controls & permissions</li>
              <li>✓ Priority support & onboarding</li>
              <li>✓ Early access to new AI models</li>
            </ul>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Upgrade to Pro</button>
          </div>
        </div>
        
        <Companies />
        <h1 className="text-4xl md:text-4xl font-medium text-gray-800 text-center font-heading underline underline-offset-4" >
          Pay-for-what-you-use pricing
        </h1>
        <PricingComparison/>
        <FAQSection/>

        {/* Add pricing comparison table */}
       

        <CTASection />
        
      </div>
    </>
  );
};

export default Pricing;
