import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tranquille Real Estate",
  description:
    "Learn how Tranquille Real Estate collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2024";

  type ContentBlock = {
    subtitle?: string;
    text: string;
    list?: string[];
  };

  type Section = {
    title: string;
    content: ContentBlock[];
  };

  const sections : Section[] = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "Personal Information" ,
          text: "When you use our services, we may collect the following personal information:",
          list: [
            "Full name, email address, and phone number",
            "Mailing address and residential address",
            "Financial information for mortgage pre-qualification",
            "Property preferences and search history",
            "Government-issued identification (when required for transactions)",
          ],
        },
        {
          subtitle: "Automatically Collected Information",
          text: "When you visit our website, we automatically collect:",
          list: [
            "IP address and browser type",
            "Device information and operating system",
            "Pages visited, time spent, and navigation patterns",
            "Cookies and similar tracking technologies",
            "Referral source and search terms used",
          ],
        },
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        {
          subtitle: "Purpose of Information Usage",
          text: "We use the information we collect for the following purposes:",
          list: [
            "To provide and improve our real estate services",
            "To match you with suitable properties based on your preferences",
            "To communicate with you about listings, market updates, and appointments",
            "To process real estate transactions and related documentation",
            "To send newsletters and marketing communications (with your consent)",
            "To comply with legal obligations and regulatory requirements",
            "To analyze website usage and improve user experience",
            "To prevent fraud and ensure the security of our platform",
          ],
        },
      ],
    },
    {
      title: "3. Information Sharing & Disclosure",
      content: [
        {
          subtitle: "Information Sharing",
          text: "We do not sell your personal information. We may share your information with:",
          list: [
            "Real estate agents and brokers involved in your transaction",
            "Mortgage lenders and financial institutions (with your consent)",
            "Title companies, inspectors, and appraisers as needed",
            "Legal and compliance teams when required by law",
            "Service providers who assist in operating our website and services",
            "Government authorities when required by legal process",
          ],
        },
      ],
    },
    {
      title: "4. Cookies & Tracking Technologies",
      content: [
        {
          subtitle: "Cookie Information",
          text: "Our website uses cookies and similar technologies to enhance your experience:",
          list: [
            "Essential cookies — Required for website functionality",
            "Analytics cookies — Help us understand how visitors use our site",
            "Marketing cookies — Used to deliver relevant property recommendations",
            "Preference cookies — Remember your settings and search preferences",
          ],
        },
        {
          text: "You can manage cookie preferences through your browser settings. Disabling certain cookies may limit website functionality.",
        },
      ],
    },
    {
      title: "5. Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement industry-standard security measures to protect your personal information, including:",
          list: [
            "SSL/TLS encryption for all data transmissions",
            "Secure data storage with access controls",
            "Regular security audits and vulnerability assessments",
            "Employee training on data protection practices",
            "Two-factor authentication for sensitive accounts",
          ],
        },
        {
          text: "While we strive to protect your information, no method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.",
        },
      ],
    },
    {
      title: "6. Your Rights & Choices",
      content: [
        {
          subtitle: "Your Rights",
          text: "Depending on your location, you may have the following rights regarding your personal data:",
          list: [
            "Access — Request a copy of the personal data we hold about you",
            "Correction — Request correction of inaccurate or incomplete data",
            "Deletion — Request deletion of your personal data",
            "Opt-out — Unsubscribe from marketing communications at any time",
            "Portability — Request your data in a structured, machine-readable format",
            "Restriction — Request that we limit how we use your data",
          ],
        },
        {
          text: "To exercise any of these rights, please contact us at privacy@tranquille.com or use the contact form on our website.",
        },
      ],
    },
    {
      title: "7. Third-Party Links",
      content: [
        {
          text: "Our website may contain links to third-party websites, including property listing platforms, mortgage calculators, and social media sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
        },
      ],
    },
    {
      title: "8. Data Retention",
      content: [
        {
          text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Specifically:",
          list: [
            "Transaction records — Retained for 7 years as required by real estate regulations",
            "Account information — Retained until you request account deletion",
            "Marketing preferences — Retained until you unsubscribe",
            "Website analytics — Retained for 26 months",
          ],
        },
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        {
          text: "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected data from a minor, we will take steps to delete it promptly.",
        },
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        {
          text: 'We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending you an email. The "Last Updated" date at the top of this page indicates when the policy was last revised.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-stone-900 via-stone-800 to-amber-950 text-white">
        <div className="container-blog py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-white/50 text-sm mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white/80">Privacy Policy</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-stone-300 text-lg">
              Your privacy matters to us. This policy explains how Tranquille
              Real Estate collects, uses, and protects your information.
            </p>
            <p className="text-amber-400/80 text-sm mt-6">
              Last Updated: {lastUpdated}
            </p>
          </div>
        </div>

        {/* Wave */}
        <div className="relative">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full block">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="#faf8f5"
            />
          </svg>
        </div>
      </section>

      {/* Content */}
      <section className="container-blog py-12 lg:py-16">
        <div className="max-w-10xl mx-auto">
          {/* Intro */}
          <div className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 md:p-8 mb-12">
            <p className="text-amber-900/80 leading-relaxed text-lg">
              At <strong>Tranquille Real Estate</strong>, we are committed to
              protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy describes how we collect, use,
              disclose, and safeguard your data when you visit our website or
              use our real estate services.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-stone-100 p-6 md:p-8 shadow-sm"
              >
                <h2 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>

                <div className="space-y-4">
                  {section.content.map((block, blockIndex) => (
                    <div key={blockIndex}>
                      {block.subtitle && (
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-4 first:mt-0">
                          {block.subtitle}
                        </h3>
                      )}

                      {block.text && (
                        <p className="text-gray-600 leading-relaxed">
                          {block.text}
                        </p>
                      )}

                      {block.list && (
                        <ul className="mt-3 space-y-2">
                          {block.list.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 text-gray-600"
                            >
                              <svg
                                className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4"
                                />
                              </svg>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-medium transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
