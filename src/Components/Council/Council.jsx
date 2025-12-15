import React from 'react';
import sarika from '../../assets/sarika.webp';
import Jaya from '../../assets/jaya.webp';
import Richa from '../../assets/Richa.webp';
import Muskan from '../../assets/Muskan.webp';
import Priyanka from '../../assets/priyanka .webp';
import Bahawana from '../../assets/bahawana.webp';
import Aakansha from '../../assets/Aakansha.webp';
import Mahasharri from '../../assets/maharashvari.webp';
import Lalima from '../../assets/lalima.webp';

const Council = () => {
  const councilMembers = [
    {
      name: 'Discipline Coordinators',
      members: [
        { img: sarika, alt: 'Sarika' },
      ],
      description: `Discipline Coordinators manage all councils and ensure proper conduct. They monitor attendance, behavior, and support a positive learning environment while fostering responsibility and respect.`
    },
    {
      name: 'Academic Facilitator',
      members: [{ img: Jaya, alt: 'Jaya' }],
      description: `The Academic Facilitator conducts academic activities, tracks attendance, supports learners facing challenges, and ensures a structured and supportive learning environment.`
    },
    {
      name: 'Food Coordinators',
      members: [
        { img: Richa, alt: 'Richa' },
      ],
      description: `Food Coordinators manage meal planning, kitchen duty schedules, and grocery management. They ensure smooth daily operations and proper organization in the campus kitchen.`
    },
    {
      name: 'English Coordinators',
      members: [
        { img: Muskan, alt: 'Muskan' },
      ],
      description: `English Coordinators organize language activities, support learners to improve communication, and enforce the 'English Only' rule, fostering daily practice and confidence.`
    },
    {
      name: 'Training and Placement Specialist',
      members: [{ img: Priyanka, alt: 'Priyanka' }],
      description: `The Training and Placement Specialist guides learners in career preparation, coordinates with companies, and helps students secure employment opportunities aligned with their skills.`
    },
    {
      name: 'Facility Management',
      members: [{ img: Bahawana, alt: 'Bahawana' }],
      description: `Facility Management ensures campus cleanliness, organizes student cleaning duties, and maintains common areas to foster a safe and hygienic environment.`
    },
    {
      name: 'Onboarding Coordinator',
      members: [{ img: Aakansha, alt: 'Aakansha' }],
      description: `The Onboarding Coordinator welcomes new students, introduces them to NavGurukul’s culture, helps assign rooms, and ensures all onboarding formalities are completed.`
    },
    {
      name: 'Health Coordinator',
      members: [{ img: Mahasharri, alt: 'Mahasharri' }],
      description: `The Health Coordinator monitors student well-being, organizes health initiatives, and ensures learners have access to medical support when needed.`
    },
    {
      name: 'Outreach Coordinator',
      members: [{ img: Lalima, alt: 'Lalima' }],
      description: `The Outreach Coordinator connects NavGurukul with external communities, manages social initiatives, and supports programs that promote awareness and engagement.`
    }
  ];

  return (
    <div className="bg-gray-50 pt-32 pb-12">
      {councilMembers.map((section, idx) => (
        <section
          key={idx}
          className="px-6 py-8 mb-10 max-w-6xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Member Images */}
            <div className="md:w-1/3 flex flex-wrap gap-4 justify-center md:justify-start">
              {section.members.map((member, index) => (
                <img
                  key={index}
                  src={member.img}
                  alt={member.alt}
                  className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-100 hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>

            {/* Description */}
            <div className="md:w-2/3 mt-4 md:mt-0 text-gray-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{section.name}</h2>
              <p className="text-base md:text-lg leading-relaxed">{section.description}</p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Council;
