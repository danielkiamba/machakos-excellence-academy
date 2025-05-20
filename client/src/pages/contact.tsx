import { Link } from "wouter";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">Contact Us</h1>
              <p className="text-xl md:text-2xl font-light">
                Have questions? We're here to help. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help. Contact our admissions office or send us a message
              using the form below.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-6">Get In Touch</h3>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-2xl font-poppins font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Our Location</h4>
                    <p className="text-gray-700">
                      54 Uhuru Highway
                      <br />
                      Machakos Town
                      <br />
                      Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <i className="fas fa-phone-alt text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Phone Numbers</h4>
                    <p className="text-gray-700">
                      Main Office: +254 123 456 789
                      <br />
                      Admissions: +254 987 654 321
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Email Addresses</h4>
                    <p className="text-gray-700">
                      General Inquiries: info@machakosexcellenceacademy.edu
                      <br />
                      Admissions: admissions@machakosexcellenceacademy.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 mr-4">
                    <i className="fas fa-clock text-white"></i>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-lg">Office Hours</h4>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 1:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-poppins font-medium text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-primary hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-primary hover:bg-blue-800 text-white h-10 w-10 rounded-full flex items-center justify-center transition duration-300"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-poppins font-semibold text-primary mb-4 text-center">
              Find Us on the Map
            </h3>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <i className="fas fa-map-marked-alt text-5xl text-primary mb-4"></i>
                <p className="text-gray-600">Interactive map would be displayed here</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary hover:text-secondary"
                >
                  Open in Google Maps <i className="fas fa-external-link-alt ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Admissions Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Interested in joining Excellence Academy? Follow these simple steps to apply.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-neutral-100 rounded-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <i className="fas fa-file-alt text-4xl text-primary"></i>
              </div>
              <h3 className="font-poppins font-medium text-lg mb-2">Application</h3>
              <p className="text-gray-600 text-sm">
                Complete and submit the online application form with required documents
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <i className="fas fa-clipboard-check text-4xl text-primary"></i>
              </div>
              <h3 className="font-poppins font-medium text-lg mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Students take an entrance assessment to determine academic placement
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <i className="fas fa-comments text-4xl text-primary"></i>
              </div>
              <h3 className="font-poppins font-medium text-lg mb-2">Interview</h3>
              <p className="text-gray-600 text-sm">
                Family interview with the admissions team to discuss expectations
              </p>
            </div>

            <div className="bg-neutral-100 rounded-lg p-6 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="h-16 flex items-center justify-center mb-4">
                <i className="fas fa-user-check text-4xl text-primary"></i>
              </div>
              <h3 className="font-poppins font-medium text-lg mb-2">Acceptance</h3>
              <p className="text-gray-600 text-sm">
                Successful applicants receive an acceptance letter with enrollment details
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact">
              <a className="inline-block bg-primary hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition duration-300">
                Start Your Application
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about Excellence Academy
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  <span>What are the school hours?</span>
                  <span className="transition group-open:rotate-180">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <p>
                    Regular school hours are from 7:30 AM to 3:15 PM, Monday through Friday.
                    Optional extracurricular activities run until 5:00 PM, and boarding students
                    have supervised study time from 5:00 PM to 6:30 PM.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  <span>How can I apply for financial aid or scholarships?</span>
                  <span className="transition group-open:rotate-180">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <p>
                    Excellence Academy offers merit-based scholarships and need-based financial aid.
                    The application process begins after acceptance. Contact our admissions office
                    for detailed information on eligibility criteria and application deadlines.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  <span>What extracurricular activities are available?</span>
                  <span className="transition group-open:rotate-180">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <p>
                    We offer a wide range of extracurricular activities including sports (soccer,
                    basketball, volleyball, athletics), arts (music, drama, visual arts), clubs
                    (debate, science, entrepreneurship, environmental), and community service
                    opportunities.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  <span>What is the student-teacher ratio?</span>
                  <span className="transition group-open:rotate-180">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <p>
                    Excellence Academy maintains a 15:1 student-teacher ratio to ensure personalized
                    attention and support for each student. This allows our teachers to address
                    individual learning needs and provide quality instruction.
                  </p>
                </div>
              </details>
            </div>

            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <details className="group">
                <summary className="flex justify-between items-center p-4 cursor-pointer font-medium">
                  <span>Are there transportation services available?</span>
                  <span className="transition group-open:rotate-180">
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-700">
                  <p>
                    Yes, we provide optional school bus service at an additional cost of $450 per
                    year. The fee may vary depending on the distance from the school. Our buses
                    cover major residential areas with designated pickup and drop-off points.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
