import React, { useState } from 'react';
import riya from '../../assets/riyariys.jpg';
import anjali from '../../assets/aanjali.jpg';
import event3 from '../../assets/event3.jpeg';
import event6 from '../../assets/event6.jpeg';
import event1 from '../../assets/event1.jpeg';



const Home = () => {
  const images = [
    event3,
    event6,
     event1
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Campus Life"
          className="w-full h-full object-cover transition-all duration-500"
        />

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition"
        >
          ❮
        </button>

        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 text-white text-2xl p-4 rounded-full hover:bg-black/70 transition"
        >
          ❯
        </button>
      </div>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 text:color">The Challenge</h1>
          <p className="text-lg leading-relaxed text-gray-700">
            In India, millions of young people from underprivileged backgrounds lack access to quality education and sustainable employment opportunities.
            Gender inequality further deepens this divide, particularly affecting young women. Limited digital infrastructure, teacher shortages, and lack
            of exposure to modern skills prevent many students from entering the fast-growing technology sector.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text:color">Our Mission & Vision</h2>
            <p className="mb-4 text-lg text-gray-700">
              <strong>Mission:</strong> To empower underprivileged youth—especially women—through free, high-quality education in software engineering,
              leadership development, and life skills, enabling them to build sustainable and meaningful careers.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Vision:</strong> To create an inclusive ecosystem where talent and ambition are not limited by socio-economic barriers.
            </p>
          </div>

          <img
            src="https://gc-project-delta.vercel.app/campus.jpg"
            alt="Campus"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-white py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text:color">Get Involved</h2>
          <p className="mt-4 text-lg text-gray-700">
            Your time, skills, and support can help shape the future of countless students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Donate",
              desc: "Support free education, housing, and learning resources for our students."
            },
            {
              title: "Volunteer",
              desc: "Mentor students or contribute your expertise to strengthen our programs."
            },
            {
              title: "Partner With Us",
              desc: "Collaborate with us to scale impact and create long-term opportunities."
            }
          ].map((item, index) => (
            <div key={index} className="bg-orange-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center">
              <h3 className="text-xl font-semibold mb-4 text:color">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text:color">Success Stories</h2>
          <p className="mt-4 text-lg text-gray-700">
            Real journeys of transformation through NavGurukul.
          </p>
        </div>

        <div className="space-y-10 max-w-7xl mx-auto">
          <div className="bg-orange-50 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center">
            <img src={riya} alt="Riya" className="w-48 h-48 rounded-full object-cover border-4 border-orange-200" />
            <div>
              <h3 className="text-2xl font-semibold text:color">Riya</h3>
              <p className="text-sm mb-3 text-gray-600">Backend Developer</p>
              <p className="text-gray-700">
                From having no exposure to computers to becoming a backend developer, Riya’s journey reflects the power of the right guidance and determination.
              </p>
            </div>
          </div>

          <div className="bg-orange-50 p-8 rounded-xl shadow-lg flex flex-col md:flex-row gap-8 items-center">
            <img src={anjali} alt="Anjali" className="w-48 h-48 rounded-full object-cover border-4 border-orange-200" />
            <div>
              <h3 className="text-2xl font-semibold text:color">Anjali Singh</h3>
              <p className="text-sm mb-3 text-gray-600">Full-Stack Developer</p>
              <p className="text-gray-700">
                Anjali’s journey showcases how access to education and mentorship can unlock opportunities and build impactful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters */}
      <section className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text:color mb-8">Our Supporters</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <img src="https://gc-project-delta.vercel.app/accenture1.png" alt="Accenture" className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-12" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-12" />
          <img src="https://gc-project-delta.vercel.app/kpmg2.png" alt="KPMG" className="h-12" />
        </div>
      </section>
    </>
  );
};

export default Home;
