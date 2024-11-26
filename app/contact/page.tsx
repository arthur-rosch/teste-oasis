'use client'

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { ContactForm, MapSection, ContactCard } from "./components"


export default function ContactPage() {
  return (
    <motion.main 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background mt-8"
    >
      <section className="container px-4 pt-16 mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Contact us to publish your business and show who you are to our website users. We'll reach back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <ContactCard
            icon={() => <MapPin />}
            title="Office"
            content="Victoria Street, London, UK"
          />
          <ContactCard
            icon={() => <Mail />}
            title="Email"
            content="hello@oasis.com"
          />
          <ContactCard
            icon={() => <Phone />}
            title="Phone"
            content="(555) 123-4567"
          />
        </div>

        <div className="relative mb-72">
          <div className="h-[600px] w-full overflow-hidden rounded-lg">
            <MapSection />
          </div>
          <div className="absolute top-1/1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </motion.main>
  );
}