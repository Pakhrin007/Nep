import Navbar from "../../index";
import InfiniteScroll from "../../../ui/infinite-scroll";
import PricingDetails from "./pricing-details";
import CTASection from "../../../ui/cta";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className=" flex flex-col gap-y-10">
        <h1 className="text-4xl md:text-5xl font-medium mb-4 text-gray-800 font-title text-center">
          Pay-for-what-you-use pricing
        </h1>
        <p className="text-gray-600 mb-6 font-title text-center">
          Try Missive risk-free for 30 days. No credit card required.
        </p>

        <div className="flex justify-center items-center gap-2 mb-10">
          <span className="text-gray-600 font-title font-semibold">Billed yearly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked readOnly />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-sm">
            20% off
          </span>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Starter */}
          <div className="border rounded-lg p-6 shadow-md bg-white border-gray-200 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2 font-title">Starter</h2>
            <p className="text-4xl font-bold mb-4 text-gray-800">Free</p>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 mb-6">
              Get started for free
            </button>
            <p className="text-gray-600 mb-4">Starter plan includes:</p>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="font-title text-[16px]">✓ 1 editor</li>
              <li className="font-title text-[16px]">✓ 1 connection</li>
              <li className="font-title text-[16px]">✓ 2 dashboards</li>
              <li className="font-title text-[16px]">✓ Answer questions with IndexAI</li>
            </ul>
          </div>

          {/* Premier */}
          <div className="border rounded-lg p-6 shadow-md bg-white border-gray-200 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2 font-title">Premier</h2>
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-sm">Popular</span>
            <p className="text-4xl font-bold my-4 text-gray-800">$20<span className="text-base font-normal">/editor/mo</span></p>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 mb-6">
              Get started with Premier
            </button>
            <p className="text-gray-600 mb-4">Everything on Starter plus:</p>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="font-title text-[16px]">✓ 1 editor</li>
              <li className="font-title text-[16px]">✓ Unlimited connections</li>
              <li className="font-title text-[16px]">✓ Unlimited dashboards</li>
              <li className="font-title text-[16px]">✓ 10-20x higher AI question limit</li>
            </ul>
          </div>

          {/* Platform */}
          <div className="border rounded-lg p-6 shadow-md bg-white border-gray-200 flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2 font-title">Platform</h2>
            <p className="text-4xl font-bold my-4 text-gray-800">$80<span className="text-base font-normal">/editor/mo</span></p>
            <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 mb-6">
              Get started with Platform
            </button>
            <p className="text-gray-600 mb-4">Everything on Premier plus:</p>
            <ul className="text-left space-y-2 text-gray-700">
              <li className="font-title text-[16px]">✓ 5 editor seats included</li>
              <li className="font-title text-[16px]">✓ Share dashboards with others</li>
              <li className="font-title text-[16px]">✓ 30-50x higher AI question limit</li>
            </ul>
          </div>

          {/* Enterprise */}
          <div className="border rounded-lg p-6 shadow-md bg-gray-900 text-white flex flex-col items-center text-center">
            <h2 className="text-2xl font-semibold mb-2 font-title">Enterprise</h2>
            <p className="text-4xl font-bold my-4">Custom</p>
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 mb-6">
              Get started with Enterprise
            </button>
            <p className="text-gray-300 mb-4">Everything on Platform plus:</p>
            <ul className="text-left space-y-2 text-gray-300">
              <li className="font-title text-[16px]">✓ Embedded analytics</li>
              <li className="font-title text-[16px]">✓ Custom domains</li>
              <li className="font-title text-[16px]">✓ Whitelabeling</li>
              <li className="font-title text-[16px]">✓ Dedicated support</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Try for free
          </button>
        </div>
        <InfiniteScroll />

        <div className="flex flex-col"> 
        <div className="max-w-6xl mx-auto flex gap-4 py-8 flex-col">
          <div className="flex gap-x-4">
          <a href="#" className="text-gray-600 font-title underline w-[400px]">
            Compare our plans
          </a>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Starter
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Premier
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Platform
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-[200px]">
            Enterprise
          </button>

          </div>
          <p className=" font-title underline w-full bg-black text-white px-4 py-2 rounded-lg">
            Access
          </p>
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          
         
        </div> 
        <div className="max-w-6xl mx-auto flex gap-4 py-8 flex-col">
          <div className="flex gap-x-4">
          <a href="#" className="text-gray-600 font-title underline w-[400px]">
            Compare our plans
          </a>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Starter
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Premier
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Platform
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-[200px]">
            Enterprise
          </button>

          </div>
          <p className=" font-title underline w-full bg-black text-white px-4 py-2 rounded-lg">
            Access
          </p>
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          
         
        </div> 
        <div className="max-w-6xl mx-auto flex gap-4 py-8 flex-col">
          <div className="flex gap-x-4">
          <a href="#" className="text-gray-600 font-title underline w-[400px]">
            Compare our plans
          </a>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Starter
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Premier
          </button>
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 w-[200px]">
            Platform
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 w-[200px]">
            Enterprise
          </button>

          </div>
          <p className=" font-title underline w-full bg-black text-white px-4 py-2 rounded-lg">
            Access
          </p>
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />
          <PricingDetails starter="1 editor" premier="1 " platform="1" enterprise="Unlimited" />

          
         
        </div>    

        </div>
        <CTASection />
        
      </div>
    </>
  );
};

export default Pricing;