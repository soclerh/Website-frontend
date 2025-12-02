export default function ContactHero({ dict }: { dict: any }) {
  return (
    <section className="bg-[#FDFBF9] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 text-center">
        {/* Tag */}
        <span className="block text-[#A38732] font-bold text-xl mb-4 tracking-wide">
          {dict.heroTag}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-8xl font-bold text-[#333C88] mb-6">
          {dict.heroTitle}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg md:text-xl mx-auto leading-relaxed">
          {dict.heroDescription}
        </p>
      </div>
    </section>
  );
}
