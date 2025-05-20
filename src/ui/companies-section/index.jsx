import React from 'react';
import comp1 from "../../assets/Images/comp1.png"
import comp2 from "../../assets/Images/comp2.png"
import comp3 from "../../assets/Images/comp3.png"
import comp4 from "../../assets/Images/comp4.png"
import comp5 from "../../assets/Images/comp5.png"
import comp6 from "../../assets/Images/comp6.png"
import comp7 from "../../assets/Images/comp7.png"
import comp8 from "../../assets/Images/comp8.png"
import comp9 from "../../assets/Images/comp9.png"
import comp10 from "../../assets/Images/comp10.png"
import comp11 from "../../assets/Images/comp11.png"
import comp12 from "../../assets/Images/comp12.png"
import comp13 from "../../assets/Images/comp13.png"

const CompaniesSection = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-4xl font-medium  mb-14 font-heading">
        4000+ companies rely on Nephara every day
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 px-10 max-w-[1100px] mx-auto mt-2">
        <img src={comp1} alt="Canny" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp2} alt="Italic" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp3} alt="Tally" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp4} alt="Forma" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp5} alt="Maple" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp6} alt="Lionize" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp7} alt="Buffer" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp8} alt="Everlane" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp9} alt="Things" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp10} alt="Crew" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp11} alt="Reflect" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp12} alt="Prodige" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp13} alt="Nebula" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
        <img src={comp13} alt="Pinecone" className="h-8 opacity-70 hover:opacity-100 transition-opacity" />
      </div>
    </section>
  );
};

export default CompaniesSection;