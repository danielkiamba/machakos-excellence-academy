import { useQuery } from "@tanstack/react-query";
import FeeCard from "@/components/ui/fee-card";
import { staticFees, paymentOptions, additionalCosts } from "@/data/fees";
import { type Fee } from "@shared/schema";

const Fees = () => {
  const { data: fees, isLoading, error } = useQuery<Fee[]>({
    queryKey: ["/api/fees"],
    initialData: staticFees,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">School Fees</h1>
              <p className="text-xl md:text-2xl font-light">
                Competitive rates and flexible payment options for quality education
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">School Fees</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to provide quality education at competitive rates with various payment
              options to accommodate different family needs.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading fee information...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading fee information. Please try again later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {fees?.map((fee) => (
                <FeeCard key={fee.id} fee={fee} />
              ))}
            </div>
          )}

          <div className="bg-neutral-100 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-poppins font-semibold text-primary mb-4">
              Additional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-poppins font-medium text-lg mb-3">Payment Options</h4>
                <ul className="space-y-2 text-gray-700">
                  {paymentOptions.map((option, index) => (
                    <li className="flex items-start" key={index}>
                      <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-poppins font-medium text-lg mb-3">Additional Costs</h4>
                <ul className="space-y-2 text-gray-700">
                  {additionalCosts.map((cost, index) => (
                    <li className="flex items-start" key={index}>
                      <i className="fas fa-circle text-secondary text-xs mt-1.5 mr-2"></i>
                      <span>{cost}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-300">
              <p className="text-gray-700">
                <span className="font-medium">Note:</span> Fees are subject to annual review. A
                non-refundable application fee of KSh 5,000 is required for all new student applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Details Sections */}
      <section id="junior-secondary-details" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Fee Structure Details
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Detailed breakdown of what is included in each fee category
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="space-y-10">
            {/* Junior Secondary Details */}
            <div id="junior-secondary-details" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="font-poppins font-bold text-xl">Junior Secondary School Fees</h3>
                <p className="text-sm text-gray-200">Grades 7-9 | KSh 250,000 per year</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      Tuition Breakdown
                    </h4>
                    <table className="min-w-full bg-neutral-50 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 text-left">Item</th>
                          <th className="py-2 px-4 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-2 px-4">Core Academic Subjects</td>
                          <td className="py-2 px-4 text-right">KSh 150,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Technology & Computer Lab Access</td>
                          <td className="py-2 px-4 text-right">KSh 30,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Learning Materials & Textbooks</td>
                          <td className="py-2 px-4 text-right">KSh 40,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Library Access</td>
                          <td className="py-2 px-4 text-right">KSh 15,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Extracurricular Activities (Basic)</td>
                          <td className="py-2 px-4 text-right">KSh 15,000</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-gray-100">
                        <tr>
                          <td className="py-2 px-4 font-medium">Total</td>
                          <td className="py-2 px-4 text-right font-medium">KSh 250,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">All Core Academic Subjects:</span> Mathematics,
                          English, Sciences, Social Studies, and basic electives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Textbooks and Learning Materials:</span> All
                          required textbooks, workbooks, and basic stationery
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Library and Computer Lab Access:</span> Regular
                          scheduled access to research facilities and technology resources
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Basic Extracurricular Activities:</span> Standard
                          sports, clubs, and cultural activities offered during school hours
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">School Uniform:</span> One initial set of the
                          school uniform
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Secondary Details */}
            <div id="senior-secondary-details" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="font-poppins font-bold text-xl">Senior Secondary School Fees</h3>
                <p className="text-sm text-gray-200">Grades 10-12 | KSh 320,000 per year</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      Tuition Breakdown
                    </h4>
                    <table className="min-w-full bg-neutral-50 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 text-left">Item</th>
                          <th className="py-2 px-4 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-2 px-4">Advanced Academic Subjects</td>
                          <td className="py-2 px-4 text-right">KSh 180,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Science Laboratory Sessions</td>
                          <td className="py-2 px-4 text-right">KSh 45,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Learning Materials & Advanced Textbooks</td>
                          <td className="py-2 px-4 text-right">KSh 50,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Extended Library & Computer Access</td>
                          <td className="py-2 px-4 text-right">KSh 20,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Career Counseling & University Preparation</td>
                          <td className="py-2 px-4 text-right">KSh 15,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Educational Field Trips</td>
                          <td className="py-2 px-4 text-right">KSh 10,000</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-gray-100">
                        <tr>
                          <td className="py-2 px-4 font-medium">Total</td>
                          <td className="py-2 px-4 text-right font-medium">KSh 320,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Advanced Academic Subjects:</span> Higher-level
                          mathematics, sciences, languages, and electives
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Advanced Science Lab Sessions:</span> Extended
                          practical sessions in physics, chemistry, and biology laboratories
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Career Counseling:</span> Individual guidance for
                          university applications and career planning
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Extended Resources Access:</span> Increased
                          access to library, research materials, and computer facilities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">School Uniform:</span> One initial set of the
                          school uniform
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Educational Field Trips:</span> Curriculum-related
                          excursions to enhance learning experience
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Boarding Option Details */}
            <div id="boarding-fees-details" className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary text-white py-4 px-6">
                <h3 className="font-poppins font-bold text-xl">Boarding Facilities</h3>
                <p className="text-sm text-gray-200">Additional Fee | KSh 180,000 per year</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      Boarding Fee Breakdown
                    </h4>
                    <table className="min-w-full bg-neutral-50 rounded-lg overflow-hidden">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="py-2 px-4 text-left">Item</th>
                          <th className="py-2 px-4 text-right">Amount</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="py-2 px-4">Accommodation</td>
                          <td className="py-2 px-4 text-right">KSh 80,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Meals (Three meals daily)</td>
                          <td className="py-2 px-4 text-right">KSh 70,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Supervision & Security</td>
                          <td className="py-2 px-4 text-right">KSh 20,000</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Weekend Activities</td>
                          <td className="py-2 px-4 text-right">KSh 10,000</td>
                        </tr>
                      </tbody>
                      <tfoot className="bg-gray-100">
                        <tr>
                          <td className="py-2 px-4 font-medium">Total</td>
                          <td className="py-2 px-4 text-right font-medium">KSh 180,000</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div>
                    <h4 className="font-poppins font-medium text-lg text-primary mb-3">
                      What's Included
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Accommodation:</span> Shared dormitory rooms 
                          with basic furnishings (bed, desk, storage space)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Meals:</span> Three nutritionally balanced 
                          meals per day, including weekends
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Evening Study Sessions:</span> Supervised 
                          homework and study periods on weekdays
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">Weekend Activities:</span> Organized 
                          recreational and cultural activities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mt-1 mr-2"></i>
                        <span>
                          <span className="font-medium">24-hour Supervision:</span> Resident 
                          staff and security personnel on campus at all times
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fees;
