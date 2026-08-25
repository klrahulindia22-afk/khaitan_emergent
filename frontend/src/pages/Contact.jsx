import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm, DemoForm, ContactBlock } from "../components/Forms";
import { Footer } from "../components/Footer";

export default function Contact() {
  return (
    <main className="relative" data-testid="contact-page">
      <section className="relative pt-40 md:pt-44 lg:pt-48 px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] font-mono uppercase tracking-[0.24em] text-slate-brand mb-6"
        >
          Contact — The first review is on us
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.2, 1] }}
          className="font-editorial text-[12vw] md:text-[8.6vw] lg:text-[6.8vw] leading-[0.88] tracking-[-0.035em] max-w-6xl"
        >
          Talk to an{" "}
          <span className="italic font-editorial-soft text-orange-brand">
            operator,
          </span>
          <br />
          not a salesperson.
        </motion.h1>

        <div className="mt-14 grid md:grid-cols-12 gap-10">
          <p className="md:col-span-6 text-[16px] md:text-[17px] leading-[1.65] text-ink/75">
            Send us the messiest problem in your school this month. We will
            write back with a first-cut diagnostic — the same one we run on day
            one of a Transformation engagement. Zero decks. Zero commitments.
          </p>
          <div className="md:col-span-4 md:col-start-8 space-y-6">
            <ContactChip icon={Mail} label="Email" value="cofounder@khaitaneduops.com" href="mailto:cofounder@khaitaneduops.com" />
            <ContactChip icon={Phone} label="Contact" value="+91 99100 55242" href="tel:+919910055242" />
            <ContactChip icon={MapPin} label="Located" value="A9, 3rd Floor, The Grent, Sector 136, Noida, Uttar Pradesh 201304" href="https://www.google.com/maps/dir//Khaitan+Eduserve,+A9,3rd+floor,+The+Grent,+Sector+136,+Noida,+Uttar+Pradesh+201304/@28.5134549,77.3898596,3023m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x390ce900705471e7:0x111e909054ff4eb0!2m2!1d77.4013201!2d28.5073556" external />
          </div>
        </div>
      </section>

      {/* Forms */}
      <section
        id="enquiry"
        className="relative bg-paper-warm py-20 md:py-28 px-6 md:px-10 lg:px-14 border-t border-line"
      >
        <div className="grid lg:grid-cols-2 gap-8">
          <ContactBlock num="01" kicker="Write to us" title="Contact form">
            <ContactForm />
          </ContactBlock>
          <ContactBlock id="demo" num="02" kicker="Schedule a walkthrough" title="Book a demo">
            <DemoForm />
          </ContactBlock>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const ContactChip = ({ icon: Icon, label, value, href, external }) => {
  const Inner = (
    <div className="group flex items-start gap-4 py-4 border-b border-ink/15">
      <div className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center shrink-0 group-hover:bg-ink group-hover:text-paper transition-colors">
        <Icon className="w-4 h-4" strokeWidth={1.4} />
      </div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.22em] text-slate-brand">
          {label}
        </div>
        <div className="text-[15px] mt-1 font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {Inner}
    </a>
  ) : (
    Inner
  );
};
