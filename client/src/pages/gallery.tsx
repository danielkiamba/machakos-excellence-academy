import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import GalleryItem from "@/components/ui/gallery-item";
import { staticGallery } from "@/data/gallery";
import { type Gallery } from "@shared/schema";

const GalleryPage = () => {
  const { data: galleryItems, isLoading, error } = useQuery<Gallery[]>({
    queryKey: ["/api/gallery"],
    initialData: staticGallery,
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592188657297-c6473609e988?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-primary bg-opacity-70"></div>
          <div className="container mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">School Gallery</h1>
              <p className="text-xl md:text-2xl font-light">
                Take a visual tour of our campus facilities and student activities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">School Gallery</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our campus facilities and student activities.
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
              <p className="mt-4 text-gray-600">Loading gallery...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Error loading gallery. Please try again later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 image-gallery">
              {galleryItems?.map((item) => (
                <GalleryItem key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-poppins text-primary mb-2">Gallery Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our school life through these different categories
            </p>
            <div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1596496181871-9681eacf9764?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Science and Technology"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-poppins font-semibold text-xl mb-1">Science & Technology</h3>
                  <p className="text-gray-100 text-sm mb-3">Students exploring through experiments and innovation</p>
                  <Link href="/gallery#science">
                    <a className="inline-block text-white bg-secondary hover:bg-yellow-500 px-4 py-2 rounded-md text-sm transition-colors duration-300">
                      View Photos
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Academic Excellence"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-poppins font-semibold text-xl mb-1">Academic Excellence</h3>
                  <p className="text-gray-100 text-sm mb-3">Learning environments that foster knowledge and growth</p>
                  <Link href="/gallery#academic">
                    <a className="inline-block text-white bg-secondary hover:bg-yellow-500 px-4 py-2 rounded-md text-sm transition-colors duration-300">
                      View Photos
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src="https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
                alt="Campus Life"
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end">
                <div className="p-4 w-full">
                  <h3 className="text-white font-poppins font-semibold text-xl mb-1">Campus Life</h3>
                  <p className="text-gray-100 text-sm mb-3">Explore our beautiful campus and facilities</p>
                  <Link href="/gallery#campus">
                    <a className="inline-block text-white bg-secondary hover:bg-yellow-500 px-4 py-2 rounded-md text-sm transition-colors duration-300">
                      View Photos
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-4">Experience Excellence Academy In Person</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Schedule a campus tour to see our facilities, meet our teachers, and experience our dynamic learning environment firsthand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <a className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-md transition duration-300">
                Schedule a Tour
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

export default GalleryPage;
