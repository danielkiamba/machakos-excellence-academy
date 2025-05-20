import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import CourseCard from "@/components/ui/course-card";
import { staticCourses } from "@/data/courses";
import { type Course } from "@shared/schema";

const Courses = () => {
  const { data: courses, isLoading, error } = useQuery<Course[]>({
    queryKey: ["/api/courses"],
    initialData: staticCourses,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Our Courses</h1>
              <p className="text-xl md:text-2xl font-light">
                Comprehensive curriculum designed to nurture excellence and cultivate potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Academic Excellence
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive range of courses is designed to provide students with a well-rounded
              education and prepare them for future success in their chosen fields.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading courses...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading courses. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses?.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Our Curriculum</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Excellence Academy follows a rigorous curriculum that balances academic knowledge with
              practical skills and character development.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                Curriculum Overview
              </h3>
              <p className="text-gray-700 mb-6">
                Our curriculum is designed to be comprehensive, challenging, and flexible to meet
                the diverse needs of our students. We focus on developing critical thinking,
                problem-solving, and communication skills alongside subject knowledge.
              </p>
              <p className="text-gray-700 mb-6">
                The academic program is aligned with national educational standards while
                incorporating international best practices. This ensures our students receive a
                globally competitive education.
              </p>
              <h4 className="font-poppins font-medium text-lg mb-3">Key Features:</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                  <span>Integrated approach to learning across subjects</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                  <span>Balance between theoretical knowledge and practical application</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                  <span>Regular assessments to track student progress</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                  <span>Remedial and enrichment opportunities</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                  <span>Technology integration across all subjects</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
                Educational Approach
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">
                    <i className="fas fa-chalkboard-teacher text-secondary mr-2"></i>
                    Student-Centered Learning
                  </h4>
                  <p className="text-gray-700">
                    We recognize that each student has a unique learning style. Our teaching methods
                    are adaptable to accommodate diverse learning needs while maintaining high
                    academic standards.
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">
                    <i className="fas fa-hands-helping text-secondary mr-2"></i>
                    Collaborative Environment
                  </h4>
                  <p className="text-gray-700">
                    Students are encouraged to work together on projects, fostering teamwork,
                    leadership, and communication skills that are essential for future success.
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">
                    <i className="fas fa-globe text-secondary mr-2"></i>
                    Global Perspective
                  </h4>
                  <p className="text-gray-700">
                    Our curriculum incorporates global awareness and cultural understanding to
                    prepare students for an interconnected world.
                  </p>
                </div>

                <div>
                  <h4 className="font-poppins font-medium text-lg mb-2">
                    <i className="fas fa-brain text-secondary mr-2"></i>
                    Critical Thinking
                  </h4>
                  <p className="text-gray-700">
                    We emphasize analytical skills and independent thinking, encouraging students to
                    question, reason, and form their own opinions based on evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timetable Section */}
      <section id="timetable" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Academic Timetable
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our balanced school day is structured to optimize learning while providing adequate
              time for recreation and extracurricular activities.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="overflow-x-auto bg-neutral-100 rounded-lg p-6">
            <h3 className="text-xl font-poppins font-semibold text-primary mb-6">
              Sample Daily Schedule
            </h3>
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Time</th>
                  <th className="py-3 px-4 text-left">Activity</th>
                  <th className="py-3 px-4 text-left">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">7:30 - 8:00 AM</td>
                  <td className="py-3 px-4">Morning Assembly</td>
                  <td className="py-3 px-4">
                    Daily announcements, national anthem, and brief motivational talk
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">8:00 - 9:30 AM</td>
                  <td className="py-3 px-4">Academic Block 1</td>
                  <td className="py-3 px-4">Core subject lessons (Math/Science)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">9:30 - 9:45 AM</td>
                  <td className="py-3 px-4">Short Break</td>
                  <td className="py-3 px-4">Refreshment and movement break</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">9:45 - 11:15 AM</td>
                  <td className="py-3 px-4">Academic Block 2</td>
                  <td className="py-3 px-4">Core subject lessons (Languages/Humanities)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">11:15 - 12:00 PM</td>
                  <td className="py-3 px-4">Lunch Break</td>
                  <td className="py-3 px-4">Lunch and recreation time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">12:00 - 1:30 PM</td>
                  <td className="py-3 px-4">Academic Block 3</td>
                  <td className="py-3 px-4">Additional core subjects or electives</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">1:30 - 1:45 PM</td>
                  <td className="py-3 px-4">Short Break</td>
                  <td className="py-3 px-4">Refreshment and movement break</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">1:45 - 3:15 PM</td>
                  <td className="py-3 px-4">Academic Block 4</td>
                  <td className="py-3 px-4">
                    Practical subjects (Arts/Computer/Physical Education)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">3:15 - 5:00 PM</td>
                  <td className="py-3 px-4">Extracurricular Activities</td>
                  <td className="py-3 px-4">
                    Clubs, sports, music, drama, and other activities (optional)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">5:00 - 6:30 PM</td>
                  <td className="py-3 px-4">Study Time (Boarding Students)</td>
                  <td className="py-3 px-4">Supervised homework and revision period</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <a className="inline-block bg-secondary hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-md transition duration-300">
                Request Detailed Syllabus
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Courses;
