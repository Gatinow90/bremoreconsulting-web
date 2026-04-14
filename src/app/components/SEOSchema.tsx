import { useEffect } from "react";

interface OrganizationSchemaProps {
  type?: "Organization" | "LocalBusiness" | "Service";
}

export function OrganizationSchema({ type = "Organization" }: OrganizationSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": type,
      "name": "Bremore Consulting Ltd",
      "description": "IT Consulting, AI Solutions, Digital Learning Transformation, and Technology Staffing Services in Ireland",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IE",
        "addressRegion": "Ireland"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@bremoreconsulting.ie",
        "contactType": "Customer Service"
      },
      "url": "https://bremoreconsulting.ie",
      "logo": "https://bremoreconsulting.ie/logo.png",
      "sameAs": [
        "https://linkedin.com/company/bremore-consulting"
      ],
      "areaServed": {
        "@type": "Country",
        "name": "Ireland"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Technology Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "IT Consulting",
              "description": "Strategic technology guidance and IT infrastructure optimization"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI & Automation Solutions",
              "description": "Artificial intelligence implementation and intelligent process automation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Digital Learning Transformation",
              "description": "Learning management systems and digital training solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technology Strategy",
              "description": "Enterprise architecture and cloud strategy consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technology Staffing",
              "description": "IT, AI, Data, Cloud, and Cybersecurity talent acquisition"
            }
          }
        ]
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [type]);

  return null;
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>;
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let script = document.querySelector('script[data-type="faq-schema"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-type", "faq-schema");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      script?.remove();
    };
  }, [faqs]);

  return null;
}
