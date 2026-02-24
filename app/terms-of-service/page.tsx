// app/terms-of-service/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { Shield, FileText, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Tranquille Real Estate Pvt Ltd",
  description:
    "Terms and conditions for using Tranquille Real Estate services and website.",
};

export default function TermsOfServicePage() {
  const lastUpdated = "January 15, 2024";

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              <span className="text-white/80">Terms of Service</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-stone-300 text-lg">
              Please read these Terms of Service carefully before using our
              website and services. By accessing or using our services, you
              agree to be bound by these terms. If you do not agree with any
              part of these terms, please do not use our services.
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
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-800 md:p-12">
          {/* Introduction */}
          <div className="mb-10 rounded-xl bg-emerald-50 p-6 dark:bg-emerald-900/20">
            <div className="mb-3 flex items-center gap-2">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Welcome to Tranquille Real Estate
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              These Terms of Service govern your use of our website and
              services. By accessing or using our services, you agree to be
              bound by these terms.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  By accessing and using the services provided by Tranquille
                  Real Estate Pvt Ltd (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;), you accept and agree to be bound by the
                  terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to these Terms of Service, please do not
                  use our services or access our website.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                2. Services Provided
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Tranquille Real Estate Pvt Ltd provides:</p>
                <ul className="ml-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>Property buying, selling, and rental assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>Real estate consultation and advisory services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>Property listing and marketing services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>Home loan and legal assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600" />
                    <span>Property management services</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                3. User Responsibilities
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>As a user of our services, you agree to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Provide accurate, current, and complete information during
                    registration and transactions
                  </li>
                  <li>
                    Maintain the confidentiality of your account credentials
                  </li>
                  <li>
                    Notify us immediately of any unauthorized use of your
                    account
                  </li>
                  <li>
                    Use our services only for lawful purposes and in accordance
                    with these Terms
                  </li>
                  <li>
                    Not engage in any fraudulent, abusive, or harmful activities
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                4. Property Listings
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  All property listings on our website are provided for
                  informational purposes. We strive to ensure accuracy, but:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Property details, prices, and availability are subject to
                    change without notice
                  </li>
                  <li>
                    Images and descriptions are representative and may vary from
                    actual property
                  </li>
                  <li>
                    We are not responsible for errors or omissions in listings
                  </li>
                  <li>
                    Buyers must conduct their own due diligence before purchase
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                5. Fees and Payments
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Our fee structure includes:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Brokerage fees as per industry standards (typically 1-2% of
                    property value)
                  </li>
                  <li>Consultation fees for advisory services</li>
                  <li>Property management charges (if applicable)</li>
                  <li>
                    All fees will be clearly communicated before engagement
                  </li>
                  <li>
                    Payment terms will be specified in individual service
                    agreements
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                6. Limitation of Liability
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>Tranquille Real Estate Pvt Ltd shall not be liable for:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Any indirect, incidental, or consequential damages arising
                    from use of our services
                  </li>
                  <li>
                    Decisions made based on property information provided on our
                    website
                  </li>
                  <li>
                    Third-party actions, including sellers, buyers, banks, or
                    legal authorities
                  </li>
                  <li>
                    Market fluctuations affecting property values or rental
                    yields
                  </li>
                  <li>
                    Delays or failures due to circumstances beyond our control
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                7. Intellectual Property
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  All content on our website, including text, graphics, logos,
                  images, and software, is the property of Tranquille Real
                  Estate Pvt Ltd and is protected by copyright and trademark
                  laws.
                </p>
                <p>You may not:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Reproduce or republish content without permission</li>
                  <li>Use our brand name or logo without authorization</li>
                  <li>Scrape or extract data from our website</li>
                  <li>
                    Create derivative works based on our content or services
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                8. Privacy and Data Protection
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our Privacy Policy.
                </p>
                <p>We commit to:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Protecting your personal data with industry-standard
                    security
                  </li>
                  <li>Using information only for stated purposes</li>
                  <li>Not sharing data with third parties without consent</li>
                  <li>Complying with applicable data protection laws</li>
                </ul>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                9. Dispute Resolution
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>In the event of any dispute arising from our services:</p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    Parties agree to attempt resolution through good-faith
                    negotiation
                  </li>
                  <li>
                    If negotiation fails, disputes will be subject to mediation
                  </li>
                  <li>
                    Legal jurisdiction will be courts in [Your City], India
                  </li>
                  <li>These terms are governed by Indian law</li>
                </ul>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                10. Modifications to Terms
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  We reserve the right to modify these Terms of Service at any
                  time. Changes will be effective immediately upon posting on
                  our website.
                </p>
                <p>
                  Continued use of our services after changes constitutes
                  acceptance of the modified terms.
                </p>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                11. Termination
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  We may terminate or suspend your access to our services
                  immediately, without prior notice, for:
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Breach of these Terms of Service</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Non-payment of agreed fees</li>
                  <li>Any conduct that harms our business or reputation</li>
                </ul>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                12. Contact Information
              </h2>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  For questions or concerns regarding these Terms of Service,
                  please contact us:
                </p>
                <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-700">
                  <p className="font-semibold">
                    Tranquille Real Estate Pvt Ltd
                  </p>
                  <p className="mt-2">Email: legal@tranquillerealestate.com</p>
                  <p>Phone: +94 77-XXX-XXXX</p>
                  <p>
                    Address: No. 42, Galle Road, Sri Lanka, Colombo 03, Sri
                    Lanka
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Important Notice */}
          <div className="mt-10 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-6 dark:bg-amber-900/20">
            <div className="flex gap-3">
              <AlertCircle className="h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400" />
              <div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">
                  Important Notice
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  These Terms of Service constitute a legally binding agreement.
                  If you do not agree with any part of these terms, please
                  discontinue use of our services immediately. For specific
                  transactions, additional terms may apply as specified in
                  individual agreements.
                </p>
              </div>
            </div>
          </div>

          {/* Back to Home */}
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
      </div>
    </main>
  );
}
