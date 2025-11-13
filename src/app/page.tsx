"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { TestimonialCardTwo } from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import BlogCardOne from '@/components/sections/blog/BlogCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Sparkles, Star, Award, Fish, Eye, ChefHat, Trophy, MessageCircle, Newspaper, HelpCircle, BookOpen, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="floatingGradient"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Experience", id: "features" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sakura Sushi"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Authentic Japanese Sushi Experience"
          description="Discover the art of traditional sushi making with the freshest ingredients and time-honored techniques"
          tag="Authentic Cuisine"
          tagIcon={Sparkles}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Reserve Table", href: "contact" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032688877-qb5a8z7s.jpg"
          imageAlt="Master sushi chef preparing fresh sushi"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Our Story"
          description="At Sakura Sushi, we honor the centuries-old traditions of Japanese sushi craftsmanship. Our master chefs bring authentic techniques from Tokyo, creating each piece with precision, respect, and an unwavering commitment to quality that transforms every meal into an unforgettable culinary journey."
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardFour
          title="The Sakura Experience"
          description="Discover what makes dining with us extraordinary"
          tag="Experience"
          tagIcon={Star}
          features={[
            {
              title: "Master Craftsmanship",
              description: "Our chefs trained in Tokyo bring authentic Japanese techniques to every piece of sushi, ensuring traditional flavors and presentation",
              icon: Award
            },
            {
              title: "Daily Fresh Selection",
              description: "We source the finest fish daily from trusted suppliers, guaranteeing the freshest sashimi and sushi for our guests",
              icon: Fish
            },
            {
              title: "Intimate Atmosphere",
              description: "Experience the art of sushi making at our traditional counter seating, where you can watch master chefs at work",
              icon: Eye
            },
            {
              title: "Premium Ingredients",
              description: "From hand-selected rice to authentic Japanese seasonings, every ingredient meets our exacting standards for quality",
              icon: Sparkles
            }
          ]}
          textboxLayout="default"
          animationType="blur-reveal"
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardOne
          title="Our Signature Menu"
          description="Handcrafted sushi selections made with the finest ingredients"
          tag="Menu"
          tagIcon={ChefHat}
          products={[
            {
              id: "sushi-platter",
              name: "Chef's Special Platter",
              price: "$48",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032690047-636m0mhi.jpg",
              imageAlt: "Assorted sushi platter with fresh fish"
            },
            {
              id: "sashimi-selection",
              name: "Premium Sashimi Set",
              price: "$42",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032690730-o225zjzj.jpg",
              imageAlt: "Fresh sashimi selection"
            },
            {
              id: "maki-rolls",
              name: "Signature Maki Rolls",
              price: "$28",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032698080-23an68ei.jpg",
              imageAlt: "Colorful maki sushi rolls"
            },
            {
              id: "nigiri-set",
              name: "Traditional Nigiri Set",
              price: "$35",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032698685-b6cchzdk.jpg",
              imageAlt: "Traditional nigiri sushi set"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Our Success Story"
          description="Numbers that reflect our commitment to excellence"
          tag="Achievements"
          tagIcon={Trophy}
          metrics={[
            {
              id: "1",
              value: "15+",
              description: "Years of Authentic Experience"
            },
            {
              id: "2",
              value: "10K+",
              description: "Happy Customers Served"
            },
            {
              id: "3",
              value: "5★",
              description: "Average Customer Rating"
            },
            {
              id: "4",
              value: "3",
              description: "Master Chefs from Tokyo"
            }
          ]}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real experiences from our valued customers"
          tag="Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Emily Chen",
              role: "Food Critic",
              testimonial: "The most authentic sushi experience outside of Japan. The attention to detail and quality of ingredients is simply exceptional.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032699323-tlsptkxo.jpg",
              imageAlt: "Emily Chen"
            },
            {
              id: "2",
              name: "David Martinez",
              role: "Local Business Owner",
              testimonial: "I've been coming here for years and it never disappoints. The chefs' skill and passion for their craft shows in every bite.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032699952-cjajf5x9.jpg",
              imageAlt: "David Martinez"
            },
            {
              id: "3",
              name: "Sarah Johnson",
              role: "Sushi Enthusiast",
              testimonial: "Sakura Sushi has ruined all other sushi restaurants for me. This is the gold standard of authentic Japanese cuisine.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032700556-nlbn44sf.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "4",
              name: "Michael Kim",
              role: "Tokyo Native",
              testimonial: "As someone from Tokyo, I can say this is as close to home as you can get. Truly authentic flavors and presentation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032701270-xp22rvt6.jpg",
              imageAlt: "Michael Kim"
            },
            {
              id: "5",
              name: "Jessica Wang",
              role: "Food Blogger",
              testimonial: "The omakase experience here is unmatched. Every piece tells a story of tradition, skill, and respect for the ingredients.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032701864-m41zzew5.jpg",
              imageAlt: "Jessica Wang"
            },
            {
              id: "6",
              name: "Robert Thompson",
              role: "Regular Customer",
              testimonial: "Five years of dining here and I'm still discovering new flavors. The consistency and innovation balance is perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032702431-uzejjyf5.jpg",
              imageAlt: "Robert Thompson"
            }
          ]}
          textboxLayout="default"
          animationType="opacity"
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Featured In"
          description="Recognized by top food publications and critics"
          tag="Press"
          tagIcon={Newspaper}
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032702980-oogk9u8l.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032703537-l3e076n3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032704022-01wg0uro.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032704624-koc682u3.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032705157-9hlyax4i.jpg"
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Everything you need to know about dining with us"
          tag="Help"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "Do you take reservations?",
              content: "Yes, we highly recommend making reservations, especially for dinner service and weekends. You can book online or call us directly."
            },
            {
              id: "2",
              title: "Is the fish really fresh daily?",
              content: "Absolutely. We receive fresh fish deliveries every morning from our trusted suppliers, ensuring the highest quality for our sushi and sashimi."
            },
            {
              id: "3",
              title: "Do you offer vegetarian options?",
              content: "Yes, we have several vegetarian sushi rolls and dishes, including cucumber rolls, avocado rolls, and vegetable tempura options."
            },
            {
              id: "4",
              title: "What is omakase?",
              content: "Omakase means 'chef's choice' - you trust our master chefs to create a personalized tasting menu based on the day's finest ingredients."
            },
            {
              id: "5",
              title: "Do you provide catering services?",
              content: "Yes, we offer catering for special events and corporate functions. Please contact us at least 48 hours in advance for catering orders."
            },
            {
              id: "6",
              title: "Are there parking facilities?",
              content: "We have a small parking lot behind the restaurant, and there's additional street parking available in the surrounding area."
            }
          ]}
          textboxLayout="default"
          animationType="smooth"
        />
      </div>

      <div id="blog" data-section="blog">
        <BlogCardOne
          title="Sushi Stories"
          description="Insights from our kitchen and the world of Japanese cuisine"
          tag="Blog"
          tagIcon={BookOpen}
          blogs={[
            {
              id: "1",
              category: "Technique",
              title: "The Art of Sushi Rice",
              excerpt: "Learn about the foundation of great sushi - perfectly seasoned sushi rice and why it matters",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032707086-svktjc8e.jpg",
              imageAlt: "Sushi rice preparation",
              authorName: "Chef Takeshi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032709155-udpqeq2s.jpg",
              date: "15 Jan 2025"
            },
            {
              id: "2",
              category: "Ingredients",
              title: "Selecting the Perfect Fish",
              excerpt: "Our head chef shares secrets on choosing the finest fish for sashimi and sushi preparations",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032707686-ng0yegsr.jpg",
              imageAlt: "Fresh fish selection",
              authorName: "Chef Takeshi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032709155-udpqeq2s.jpg",
              date: "12 Jan 2025"
            },
            {
              id: "3",
              category: "Culture",
              title: "Sushi Etiquette Guide",
              excerpt: "Discover the traditional way to enjoy sushi and show respect for this ancient culinary art",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032708495-10ak4w7g.jpg",
              imageAlt: "Traditional sushi dining",
              authorName: "Chef Takeshi",
              authorAvatar: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032709155-udpqeq2s.jpg",
              date: "8 Jan 2025"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          title="Reserve Your Table Today"
          description="Experience the finest Japanese sushi in an authentic setting. Book your reservation now for an unforgettable dining experience."
          tagIcon={MapPin}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/tmp/uploaded-1763032709732-f34w9apf.jpg"
          imageAlt="Sakura Sushi restaurant interior"
          inputPlaceholder="Enter your email for updates"
          buttonText="Stay Updated"
          termsText="We'll send you updates about special events and seasonal menu changes. Unsubscribe anytime."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Sakura Sushi"
          copyrightText="© 2025 Sakura Sushi. All rights reserved."
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Sushi", href: "menu" },
                { label: "Sashimi", href: "menu" },
                { label: "Appetizers", href: "menu" },
                { label: "Beverages", href: "menu" }
              ]
            },
            {
              title: "Experience",
              items: [
                { label: "Omakase", href: "features" },
                { label: "Private Dining", href: "features" },
                { label: "Catering", href: "contact" },
                { label: "Events", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Our Chefs", href: "about" },
                { label: "Reviews", href: "testimonials" },
                { label: "Blog", href: "blog" }
              ]
            },
            {
              title: "Contact",
              items: [
                { label: "Reservations", href: "contact" },
                { label: "Location", href: "contact" },
                { label: "Hours", href: "contact" },
                { label: "Phone", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/sakurasushi",
              ariaLabel: "Follow us on Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/sakurasushi",
              ariaLabel: "Follow us on Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/sakurasushi",
              ariaLabel: "Follow us on Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}