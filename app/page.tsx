export default function Home() {
  return (
    <main>
      {/* Hero Section 
        We use a full-height screen (h-screen) and place it at the top.
        The negative margin `relative -z-10 -mt-28` pulls it *behind* the transparent 
        header and ensures the image starts at the very top of the viewport.
      */}
      <section className="relative -z-10 -mt-[112px] h-screen w-full">
        {/* Background Image
          This is where you'd put your high-quality image.
          I'm using a placeholder gradient, but you'd replace this
          with a component or a div with `background-image`.
          
          Example with your image (if it's in /public/hero-image.jpg):
          <Image
            src="/hero-image.jpg"
            alt="AZ Refrigeration cold storage facility"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority // Makes it load first (Good for LCP/SEO)
          />
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-700">
          {/* This is a placeholder. Use your real image! */}
        </div>

        {/* Dark Overlay for Readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center text-white">
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold max-w-3xl"
            data-aos="fade-up"
          >
            Expert Cold Storage & Refrigeration Solutions
          </h1>
          <p
            className="mt-6 text-lg lg:text-xl max-w-2xl opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            From Banana Ripening Chambers to Blast Freezers, AZ Refrigeration
            delivers industry-leading quality and service.
          </p>
          <div
            className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="/products/cold-storage"
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors text-center"
            >
              Explore Our Products
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-white bg-opacity-20 text-white font-semibold rounded-lg backdrop-blur-sm hover:bg-opacity-30 transition-colors text-center"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* The rest of your page content (About, Services, etc.) 
        would go in other <section> blocks below.
      */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center" data-aos="fade-up">
            Your Page Content Starts Here
          </h2>
          <p className="mt-4 text-center text-gray-600" data-aos="fade-up" data-aos-delay="100">
            Add sections for About Us, key services, testimonials, etc.
          </p>
        </div>
      </section>
    </main>
  );
}