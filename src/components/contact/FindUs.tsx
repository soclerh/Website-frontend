import { MapPin, Phone } from "lucide-react";

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
            src="https://maps.google.com/maps?q=22+Rte+d'Eaunes,+31600+Muret,+France&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
          />

          {/* ADDRESS OVERLAY CARD */}
        </div>
      </div>
    </section>
  );
}
