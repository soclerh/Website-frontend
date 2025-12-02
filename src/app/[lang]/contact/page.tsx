import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import FindUs from "@/components/contact/FindUs";
import ContactCTA from "@/components/contact/ContactCTA";
import { getDictionary } from "@/app/dictionaries";

export default async function Contact({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col">
      <ContactHero dict={dict.contact} />
      <ContactForm dict={dict.contact} />
      <FindUs dict={dict.contact} />
      {/* This is the specific "Business Hours" CTA */}
      <ContactCTA dict={dict.contact} />
    </div>
  );
}
