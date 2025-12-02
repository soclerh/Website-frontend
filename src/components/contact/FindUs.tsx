export default function FindUs({ dict }: { dict: any }) {
  return (
    <section className="bg-[#FDFBF9] py-16 md:py-24 pt-0">
      <div className="container mx-auto px-4 md:px-6">
        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#171717] mb-8 md:mb-12">
          {dict.findUs}
        </h2>

        {/* MAP CONTAINER */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200 group">
          {/* Interactive Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.349014!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1635780000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}
