import { useState } from 'react';
import Navbar from '../../../../navbar/index';
import HeroSection from '../../../../landing-page/hero-section/index';
import Sidebar from './sidebar/index';
import InfiniteScroll from '../../../../ui/infinite-scroll';
import Testimonial from '../../../../ui/testimonials';
import CTASection from '../../../../ui/cta';
import aiAssistantTestimonials from '../../../../constants/ai-assistant-testinomial/index';
import aiAssistant from "../../../../assets/Images/ai-assistant.png";
import Ai from "../../../../assets/Images/Ai.jpg";
import Ai2 from "../../../../assets/video/Ai.mp4";
import Svg1 from "../../../../assets/Images/svg/svg1";

const AiAssistant = () => {
  return (
    <div className="flex flex-col gap-y-[24px]">
      <Navbar />

      <HeroSection
        title="AI Assistant for Smarter Collaboration"
        description="Use AI to analyze emails, extract key points, and boost team productivity."
        video={Ai2}
      />
      <InfiniteScroll />

      <div className="flex flex-col  gap-y-6 max-w-[1280px] mx-auto">
      <div className="flex flex-col gap-y-6 w-full">
          <h1 className="text-[20px] font-title font-bold tracking-wide text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[28px] text-gray-900 text-justify">
            See what’s going on and collaborate behind the scenes – without changing your workflow.
            Empower your team to share insights, communicate in real-time, and streamline decisions effortlessly.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Svg1 />
           
          </div>
          <h1 className="font-title font-medium  text-[24px]">Smarter Workflows</h1>
          <p className="sm:text-lg md:text-xl font-medium">
            AI organizes messages and meetings so your team gets straight to the point.
          </p>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
            It highlights key insights from emails, helping you act faster and smarter.
          </p>
          <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
        </div>

        <div className="flex justify-between sm:flex-row flex-col md:space-x-8">
          <div className="flex flex-col gap-y-2 mt-10">
          <div className="flex items-center gap-x-2">
            <Svg1 />
           
          </div>
            <h1 className="font-title font-medium text-[24px]">AI-Driven Team Support</h1>
            <p className="sm:text-lg md:text-xl font-medium">
              AI helps you prioritize, summarize, and stay updated without extra effort.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
              Get important updates before hitting send — AI keeps everyone in sync.
            </p>
            <div className="flex justify-center bg-gray-300 rounded-md p-3">
              <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mt-10">
          <div className="flex items-center gap-x-2">
            <Svg1 />
           
          </div>
            <h1 className="font-title font-medium text-[24px]">AI-Driven Team Support</h1>
            <p className="sm:text-lg md:text-xl font-medium">
              AI helps you prioritize, summarize, and stay updated without extra effort.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
              Get important updates before hitting send — AI keeps everyone in sync.
            </p>
            <div className="flex justify-center bg-gray-300 rounded-md p-3">
              <img src={aiAssistant} alt="ai-assistant" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col  gap-y-6 bg-gray-100 pb-10 w-full">
        <div className="flex flex-col gap-y-6 w-full max-w-[1280px] mx-auto mt-10">
          <h1 className="text-[20px]  font-medium text-blue-300">
            Designed for Collaboration
          </h1>
          <p className="text-[28px] ">
            Collaborate smoothly with AI running in the background—always ready to help.
          </p>
        </div>

        <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <Svg1 />
           
          </div>
            <h1 className="font-medium text-[24px]">AI Makes It Easier</h1>
            <p className="sm:text-lg md:text-xl  font-medium">
              AI adapts to your team’s pace and tracks feedback automatically.
            </p>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
              It helps everyone stay on the same page without the extra back-and-forth.
            </p>
            <img src={Ai} alt="ai-assistant" className="w-full h-full object-cover" />
          </div>

          <div className="flex justify-between sm:flex-row flex-col md:space-x-6">
            <div className="flex flex-col gap-y-2">
            <div className="flex items-center ">
            <Svg1 />
           
          </div>
              <h1 className="font-title font-medium text-[24px]">Real-Time Insights</h1>
              <p className="sm:text-lg md:text-xl  font-medium">
                AI finds tasks and key points from long emails and messages.
              </p>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
                Get quick summaries so you spend less time reading and more time doing.
              </p>
            </div>
            <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2">
            <Svg1 />
           
          </div>
              <h1 className="font-title font-medium text-[24px]">Smarter Email Drafting</h1>
              <p className="sm:text-lg md:text-xl  font-medium">
                Let AI draft replies, fix tone, and make emails sound just right.
              </p>
              <p className="text-gray-500 text-base sm:text-lg md:text-xl ">
                Always send clear, polished messages with help from AI suggestions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-y-[26px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-y-2">
          <h1 className="  text-blue-300 text-[20px] font-medium tracking-wide">
            Designed for Flexibility
          </h1>
          <p className="text-gray-500 text-base text-[30px]">
            Customize AI workflows to fit your team—summarize meetings or draft emails your way.
          </p>
        </div>
        <Sidebar />
      </div>

      <Testimonial testimonials={aiAssistantTestimonials} />
      <CTASection />
    </div>
  );
};

export default AiAssistant;
