import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import Hero from "@/components/ui/hero";
import Stats from "@/components/ui/stats";
import CourseCard from "@/components/ui/course-card";
import { staticCourses } from "@/data/courses";
import { type Course } from "@shared/schema";

const Home = () => {
  const { data: courses, isLoading } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
    initialData: staticCourses,
  });

  const stats = [
    { value: "98%", label: "Graduation Rate" },
    { value: "25+", label: "Courses Offered" },
    { value: "15:1", label: "Student-Teacher Ratio" },
    { value: "92%", label: "University Placement" },
  ];

  return (
    <>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80"
        title="Machakos Excellence Academy"
        subtitle="Nurturing Tomorrow's Leaders Through Quality Education"
        primaryButtonText="Explore Courses"
        primaryButtonLink="/courses"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Welcome to Machakos Excellence Academy
            </h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                Excellence Academy is committed to providing a comprehensive, high-quality education
                that prepares students for success in a rapidly changing world. We nurture young
                minds to become critical thinkers, innovators, and responsible global citizens.
              </p>

              <h3 className="text-2xl font-poppins font-semibold mb-4">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-graduation-cap text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Experienced Educators</h4>
                    <p className="text-gray-700">
                      Our highly qualified teachers are dedicated to student success
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-flask text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Modern Facilities</h4>
                    <p className="text-gray-700">
                      State-of-the-art laboratories, library, and recreational spaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary rounded-full p-2 mr-4 mt-1">
                    <i className="fas fa-users text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Supportive Community</h4>
                    <p className="text-gray-700">
                      We foster a nurturing environment where every student matters
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://pixabay.com/get/gb52de48496e42e9f7f780ec51e4abe94d649aa93e80331e7a551acf32601a494ce3a7ea332eed56b9ff581aaa7a0157ac7b748535f67b46f18fc15e5d62b01fd_1280.jpg"
                alt="Students in science laboratory"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-transparent py-6 px-4">
                <p className="text-white font-poppins font-medium">
                  Discover our state-of-the-art facilities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats stats={stats} />

      {/* Featured Courses Section */}
      <section id="courses" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Our Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of courses designed to provide students with a
              well-rounded education and prepare them for future success.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <p>Loading courses...</p>
            ) : (
              courses?.slice(0, 3).map((course) => <CourseCard key={course.id} course={course} />)
            )}
          </div>

          <div className="text-center mt-10">
            <Link href="/courses">
              <a className="inline-block bg-primary hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-300">
                View All Courses
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4">Ready to Join Excellence Academy?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step toward a bright future. Applications for the upcoming academic year
            are now open.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300">
                Apply Now
              </a>
            </Link>
            <Link href="/contact">
              <a className="bg-secondary hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md transition duration-300">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
