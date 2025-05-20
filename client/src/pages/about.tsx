import { Link } from "wouter";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">About Our School</h1>
              <p className="text-xl md:text-2xl font-light">
                Learn about our history, mission, and what makes us exceptional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-poppins text-primary mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                Excellence Academy is committed to providing a comprehensive, high-quality education
                that prepares students for success in a rapidly changing world. We nurture young
                minds to become critical thinkers, innovators, and responsible global citizens.
              </p>
              <p className="text-gray-700 mb-6">
                We believe that every student has unique talents and potential. Our mission is to
                create an environment where these qualities can flourish, supported by dedicated
                educators and a challenging curriculum.
              </p>

              <h2 className="text-3xl font-bold font-poppins text-primary mb-6 mt-12">Our Vision</h2>
              <p className="text-gray-700">
                To be a center of academic excellence that empowers students to excel in their
                chosen fields, while instilling values of integrity, compassion, and cultural
                awareness. We envision graduates who are well-prepared for higher education and
                capable of making positive contributions to society.
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                  alt="Students in laboratory"
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="Collaborative learning"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                    alt="School library"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Our History</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-[14px] top-0 h-full w-1 bg-primary"></div>

              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-secondary border-4 border-white"></div>
                <h3 className="font-poppins font-semibold text-xl text-primary">1998</h3>
                <p className="mt-2 text-gray-700">
                  Excellence Academy was founded by a group of dedicated educators with a vision to
                  provide quality education to students in a nurturing environment. The school
                  started with just 120 students and 8 teachers.
                </p>
              </div>

              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-secondary border-4 border-white"></div>
                <h3 className="font-poppins font-semibold text-xl text-primary">2005</h3>
                <p className="mt-2 text-gray-700">
                  The campus expanded with new science laboratories, a well-stocked library, and
                  sports facilities. Student enrollment grew to 450 with a reputation for academic
                  excellence.
                </p>
              </div>

              <div className="relative pl-10 pb-10">
                <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-secondary border-4 border-white"></div>
                <h3 className="font-poppins font-semibold text-xl text-primary">2012</h3>
                <p className="mt-2 text-gray-700">
                  Introduction of advanced programs in sciences and technology. The school received
                  national recognition for its innovative teaching methods and student achievements.
                </p>
              </div>

              <div className="relative pl-10">
                <div className="absolute left-0 top-3 h-7 w-7 rounded-full bg-secondary border-4 border-white"></div>
                <h3 className="font-poppins font-semibold text-xl text-primary">Present Day</h3>
                <p className="mt-2 text-gray-700">
                  Today, Excellence Academy stands as a premier educational institution with over
                  1,000 students and 75 faculty members. Our alumni have gone on to prestigious
                  universities worldwide and successful careers in various fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Our Facilities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide state-of-the-art facilities to ensure our students have the best learning
              environment possible.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-flask text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Science Laboratories</h3>
              <p className="text-gray-700">
                Fully equipped physics, chemistry, and biology labs with modern apparatus for
                hands-on learning experiences.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-book text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Modern Library</h3>
              <p className="text-gray-700">
                Extensive collection of books, journals, and digital resources with comfortable
                study spaces for individual and group work.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-laptop-code text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Computer Labs</h3>
              <p className="text-gray-700">
                State-of-the-art computer facilities with high-speed internet access and the latest
                software for technology education.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-futbol text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Sports Facilities</h3>
              <p className="text-gray-700">
                Well-maintained playing fields, indoor sports hall, and facilities for various
                athletic activities to promote physical fitness.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-music text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Arts & Music Center</h3>
              <p className="text-gray-700">
                Dedicated spaces for visual arts, music practice rooms with instruments, and a
                performance hall for cultural activities.
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center">
              <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">Boarding Facilities</h3>
              <p className="text-gray-700">
                Comfortable dormitories with 24-hour supervision, nutritious meals, and study areas
                for boarding students.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Our Staff</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of educators and support staff are committed to providing the best
              education and care for our students.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-4">
                  Teaching Staff
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Highly Qualified Educators</p>
                      <p className="text-gray-600 text-sm">
                        All our teachers hold advanced degrees in their subject areas and have
                        extensive teaching experience.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Continuous Professional Development</p>
                      <p className="text-gray-600 text-sm">
                        Regular training ensures our educators stay current with the latest teaching
                        methodologies and educational research.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Low Student-Teacher Ratio</p>
                      <p className="text-gray-600 text-sm">
                        Our 15:1 student-teacher ratio ensures personalized attention and support
                        for each student.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Specialist Subject Teachers</p>
                      <p className="text-gray-600 text-sm">
                        Dedicated teachers for specialized subjects including languages, arts, and
                        advanced sciences.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="font-poppins font-semibold text-xl text-primary mb-4">
                  Support Staff
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Student Counselors</p>
                      <p className="text-gray-600 text-sm">
                        Professional counselors provide academic guidance, career advice, and
                        emotional support.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Healthcare Professionals</p>
                      <p className="text-gray-600 text-sm">
                        On-site nurse and regular health check-ups ensure the well-being of all
                        students.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Administrative Team</p>
                      <p className="text-gray-600 text-sm">
                        Efficient administrative staff handle admissions, record-keeping, and
                        day-to-day school operations.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-3"></i>
                    <div>
                      <p className="font-medium">Maintenance & Security</p>
                      <p className="text-gray-600 text-sm">
                        Dedicated team ensuring campus safety, cleanliness, and optimal functioning
                        of facilities.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <a className="inline-block bg-primary hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-300">
                Contact Our Team
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
