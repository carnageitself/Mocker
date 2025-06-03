const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2 animate-pulse"></span>
              Legal Terms
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Please read these terms carefully before using PrepWise
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none">
              {/* Section 1 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using PrepWise ("the Service"), you agree to
                  be bound by these Terms of Service ("Terms"). If you disagree
                  with any part of these terms, then you may not access the
                  Service. These Terms constitute a legally binding agreement
                  between you and PrepWise.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. Description of Service
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  PrepWise is an AI-powered interview preparation platform that
                  provides:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Practice interview sessions with AI-generated questions
                  </li>
                  <li>Personalized feedback and performance analytics</li>
                  <li>Custom interview creation tools</li>
                  <li>Progress tracking and improvement insights</li>
                  <li>Industry-specific interview templates</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. User Accounts
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To access certain features of the Service, you must create an
                  account. You agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>
                    Accept responsibility for all activities under your account
                  </li>
                  <li>Not share your account with others</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Acceptable Use
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree not to use the Service to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon the rights of others</li>
                  <li>Transmit harmful, offensive, or inappropriate content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the Service</li>
                  <li>
                    Use the Service for commercial purposes without permission
                  </li>
                  <li>Create multiple accounts to circumvent limitations</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Intellectual Property
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Service and its original content, features, and
                  functionality are owned by PrepWise and are protected by
                  international copyright, trademark, patent, trade secret, and
                  other intellectual property laws.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  You retain ownership of any content you submit to the Service,
                  but grant us a license to use, modify, and display such
                  content in connection with providing the Service.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Privacy and Data
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Your privacy is important to us. Our collection and use of
                  personal information is governed by our Privacy Policy, which
                  is incorporated into these Terms by reference. By using the
                  Service, you consent to the collection and use of information
                  as outlined in our Privacy Policy.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. AI and Machine Learning
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  PrepWise uses artificial intelligence and machine learning
                  technologies to provide personalized feedback and
                  recommendations. You understand that:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    AI-generated content may not always be accurate or complete
                  </li>
                  <li>
                    Feedback is algorithmic and should not replace professional
                    advice
                  </li>
                  <li>Your interactions help improve our AI systems</li>
                  <li>Results may vary and are not guaranteed</li>
                </ul>
              </div>

              {/* Section 8 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Subscription and Payment
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Certain features may require a paid subscription. By
                  subscribing, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Pay all applicable fees as described on our pricing page
                  </li>
                  <li>
                    Automatic renewal unless cancelled before the renewal date
                  </li>
                  <li>
                    No refunds except as required by law or at our discretion
                  </li>
                  <li>
                    Price changes with 30 days notice for existing subscribers
                  </li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. Disclaimers
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, INCLUDING
                  BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Merchantability and fitness for a particular purpose</li>
                  <li>Accuracy, reliability, or completeness of content</li>
                  <li>Uninterrupted or error-free operation</li>
                  <li>Security or freedom from viruses</li>
                </ul>
              </div>

              {/* Section 10 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  IN NO EVENT SHALL PREPWISE BE LIABLE FOR ANY INDIRECT,
                  INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
                  INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                  GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE
                  OF THE SERVICE.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Termination
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may terminate or suspend your account and access to the
                  Service immediately, without prior notice or liability, for
                  any reason, including breach of these Terms. You may also
                  terminate your account at any time by contacting us or using
                  the account deletion feature.
                </p>
              </div>

              {/* Section 12 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  12. Changes to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We
                  will notify users of any material changes via email or through
                  the Service. Your continued use of the Service after such
                  modifications constitutes acceptance of the updated Terms.
                </p>
              </div>

              {/* Section 13 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  13. Governing Law
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms are governed by and construed in accordance with
                  the laws of the State of California, without regard to its
                  conflict of law provisions. Any disputes arising from these
                  Terms will be resolved in the courts of California.
                </p>
              </div>

              {/* Contact Information */}
              <div className="p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us:
                </p>
                <div className="space-y-2 text-gray-300">
                  <p>Email: legal@prepwise.com</p>
                  <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
                  <p>Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
