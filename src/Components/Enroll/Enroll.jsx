import React from "react";

const Enroll = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="bg-white py-12 px-4 text-center text-black shadow-md">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          Enroll at NavGurukul
        </h1>

        <p className="mt-4 text-lg leading-relaxed opacity-90 max-w-3xl mx-auto">
          Begin your transformative journey through education, empowerment,
          and community.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        
        {/* Eligibility Requirements */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Eligibility Requirements
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Minimum education level: 10th grade passed</li>
            <li>Must be able to commit full-time for the course duration</li>
            <li>Age: 17 to 28 years</li>
          </ul>
        </section>

        {/* Programs Offered */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-orange-500">
            Programs Offered
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            
            {/* SOP */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-orange-500">
                SOP (School of Programming)
              </h3>
              <p className="text-sm text-gray-500">Duration: 15–18 months</p>
              <p className="mt-2 text-gray-700">
                A comprehensive programming course focused on building modern
                websites and applications.
              </p>
              <p className="mt-2 text-gray-700">
                <strong>Course:</strong> HTML, CSS, JavaScript, Git, Node.js,
                React.js, DSA
              </p>
            </div>

            {/* SOB */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-orange-500">
                SOB (School of Business)
              </h3>
              <p className="text-sm text-gray-500">Duration: 12 months</p>
              <p className="mt-2 text-gray-700">
                Builds real-world business, communication, and entrepreneurial
                skills.
              </p>
            </div>

            {/* SOD */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition md:col-span-2">
              <h3 className="text-xl font-semibold text-orange-500">
                SOD (School of Data Analytics)
              </h3>
              <p className="text-sm text-gray-500">Duration: 12–15 months</p>
              <p className="mt-2 text-gray-700">
                Learn data analysis, visualization, and data-driven
                decision-making.
              </p>
            </div>

          </div>
        </section>

        {/* Enrollment Steps */}
        <section className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">
            Enrollment Steps
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Visit{" "}
              <a
                href="https://admissions.navgurukul.org/"
                className="text-orange-500 underline"
              >
                admissions.navgurukul.org
              </a>
            </li>
            <li>Fill out the application form</li>
            <li>Complete the aptitude test</li>
            <li>Attend the interview if shortlisted</li>
          </ol>
        </section>

      </div>
    </div>
  );
};

export default Enroll;
