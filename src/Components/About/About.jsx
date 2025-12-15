import React from 'react';
import navgurukulImage from '../../assets/building.jpg'; 
import learnerImage from '../../assets/Untitled.jpeg';
import kitchen from '../../assets/kitchen.jpeg';
import council from '../../assets/council.jpeg';

const About = () => {
  return (
    <div className="font-[Segoe_UI,Tahoma,Geneva,Verdana,sans-serif]">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img 
          src={navgurukulImage} 
          alt="NavGurukul Campus" 
          className="w-full h-full object-cover blur-[3px]" 
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          text-white text-3xl font-bold bg-black/60 px-6 py-4 rounded-lg text-center max-w-[90%]"
        >
          NavGurukul: Empowering Youth Through Free Tech Education
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-[1800px] mx-auto my-16 p-10 
        bg-gradient-to-br from-white to-[#f4f6f9] rounded-2xl 
        shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out 
        hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)]"
      >
        <h2 className="text-4xl text-blue-900 mb-6 tracking-wide font-bold uppercase text-center">
          About NavGurukul
        </h2>
        <p className="text-lg leading-relaxed text-[#2e2e2e] text-justify word-spacing-[1.2px] tracking-wide">
          NavGurukul is a non-profit organization that offers a one-year residential course to youth from
          underserved communities, helping them build careers in software engineering. It focuses primarily
          on underprivileged girls and students from rural or economically weaker backgrounds who have limited
          access to quality education. NavGurukul believes that every individual has the potential to succeed
          when provided the right environment and opportunities.
          <br /><br />
          The curriculum not only focuses on technical skills like coding, web development, and data structures
          but also emphasizes personal growth, English communication, critical thinking, and leadership skills.
          The program is entirely free, including food, accommodation, internet, and mentorship. Many graduates
          secure jobs in reputed tech companies or contribute back to their communities.
          <br /><br />
          NavGurukul promotes peer learning, transparency, and equality—ensuring students take ownership of their
          education and life. It is transforming lives by bridging the gap between talent and opportunity.
        </p>
      </section>

      {/* Monthly Schedule Section */}
      <section className="max-w-[1600px] mx-auto my-16 p-10 
        bg-gradient-to-br from-white to-[#f9f9f9] rounded-2xl 
        shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out 
        border border-[#e2e2e2]"
      >
        <h2 className="text-4xl text-[#1a1a1a] text-center mb-12 font-[Poppins,sans-serif] tracking-wide relative">
          Monthly Schedule
        </h2>

        {/* Kitchen Duty */}
        <div className="flex flex-col md:flex-row items-center mb-12 gap-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <img 
            src={kitchen} 
            alt="Kitchen Duty" 
            className="flex-1 max-w-[400px] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
          />
          <div className="flex-[2] p-6 md:p-10 bg-[#f5f5f5] rounded-lg shadow-inner">
            <h3 className="text-3xl mb-4 text-[#2c3e50] font-[Poppins,sans-serif] font-semibold">
              Kitchen Duty
            </h3>
            <p className="text-base leading-relaxed text-[#444] tracking-wide">
              At NavGurukul, every learner group is assigned <strong>3 kitchen turns per month</strong>. These kitchen responsibilities are carefully scheduled via a <strong>dedicated kitchen duty sheet</strong>, ensuring equal participation from all groups. This system promotes <strong>responsibility, collaboration, and time management</strong> among learners.
              <br /><br />
              During kitchen turns, learners take charge of meal preparation, cleanliness, and coordination—from chopping vegetables to serving food on time. This experience nurtures <strong>leadership, planning, and communication</strong> skills, fostering ownership and unity within the community.
            </p>
          </div>
        </div>

        {/* Peer Learning */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <img 
            src={learnerImage} 
            alt="Peer Learning" 
            className="flex-1 max-w-[450px] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
          />
          <div className="flex-[2] p-6 md:p-10 bg-[#f5f5f5] rounded-lg shadow-inner">
            <h3 className="text-3xl mb-4 text-[#2c3e50] font-[Poppins,sans-serif] font-semibold">
              Peer Learning
            </h3>
            <p className="text-base leading-relaxed text-[#444] tracking-wide">
              At NavGurukul, we follow a <strong>peer learning model</strong> where learners teach and support each other. This not only enhances understanding but also builds <strong>confidence, communication, and leadership</strong> skills.
              <br /><br />
              Learners take turns leading sessions and solving doubts. Teaching others reinforces learning deeply, while a supportive environment encourages asking questions.
              <br /><br />
              Peer learning cultivates a <strong>self-driven, collaborative community</strong> where everyone grows together.
            </p>
          </div>
        </div>

        {/* Council Meetings */}
        <div className="flex flex-col md:flex-row items-center gap-10 transition-transform duration-300 ease-in-out hover:-translate-y-1">
          <img 
            src={council} 
            alt="Council Meeting" 
            className="flex-1 max-w-[450px] w-full rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105" 
          />
          <div className="flex-[2] p-6 md:p-10 bg-[#f5f5f5] rounded-lg shadow-inner">
            <h3 className="text-3xl mb-4 text-[#2c3e50] font-[Poppins,sans-serif] font-semibold">
              Council Meetings
            </h3>
            <p className="text-base leading-relaxed text-[#444] tracking-wide">
              Weekly and monthly <strong>council meetings</strong> are essential to NavGurukul’s democratic campus life. Learners gather to discuss challenges, propose improvements, and make decisions shaping the campus environment.
              <br /><br />
              These meetings promote <strong>transparency, shared leadership, and accountability</strong>, fostering a culture of trust and responsibility where every voice is valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
