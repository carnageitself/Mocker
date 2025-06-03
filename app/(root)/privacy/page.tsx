"use client";

const PrivacyPage = () => {
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
              Privacy & Security
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Your privacy is our priority. Learn how we collect, use, and
              protect your information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last updated: December 1, 2024
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Quick Overview */}
            <div className="mb-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">
                Privacy at a Glance
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    Secure by Design
                  </h3>
                  <p className="text-gray-400 text-sm">
                    End-to-end encryption and secure data handling
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">👤</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    Your Control
                  </h3>
                  <p className="text-gray-400 text-sm">
                    You decide what data to share and can delete anytime
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🚫</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2">No Selling</h3>
                  <p className="text-gray-400 text-sm">
                    We never sell your personal data to third parties
                  </p>
                </div>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {/* Section 1 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  1. Information We Collect
                </h2>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Information You Provide
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Account information (name, email, password)</li>
                  <li>
                    Profile details (job role, experience level, industry)
                  </li>
                  <li>Interview responses and practice sessions</li>
                  <li>Custom interview templates you create</li>
                  <li>Feedback and support communications</li>
                </ul>

                <h3 className="text-xl font-semibold text-blue-400 mb-3">
                  Information We Collect Automatically
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Usage analytics and performance metrics</li>
                  <li>Device information and browser details</li>
                  <li>IP address and general location data</li>
                  <li>Session recordings and interaction patterns</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  2. How We Use Your Information
                </h2>

                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Service Delivery
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Provide personalized interview practice sessions</li>
                  <li>Generate AI-powered feedback and recommendations</li>
                  <li>Track your progress and performance analytics</li>
                  <li>Customize content based on your preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Communication
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Send account-related notifications</li>
                  <li>Provide customer support and assistance</li>
                  <li>Share product updates and new features</li>
                  <li>Respond to your inquiries and feedback</li>
                </ul>

                <h3 className="text-xl font-semibold text-purple-400 mb-3">
                  Improvement
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Analyze usage patterns to improve our services</li>
                  <li>Train and enhance our AI algorithms</li>
                  <li>Develop new features and functionality</li>
                  <li>Ensure security and prevent fraud</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  3. AI and Machine Learning
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  PrepWise uses artificial intelligence to provide personalized
                  interview coaching. Here's how we handle your data in our AI
                  systems:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Your interview responses help train our AI models to provide
                    better feedback
                  </li>
                  <li>
                    We anonymize and aggregate data before using it for model
                    improvement
                  </li>
                  <li>Individual responses are not shared with other users</li>
                  <li>
                    You can opt out of having your data used for AI training
                  </li>
                  <li>
                    Our AI systems are regularly audited for bias and fairness
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  4. Information Sharing
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We do not sell, rent, or trade your personal information. We
                  may share your information only in the following
                  circumstances:
                </p>

                <h3 className="text-xl font-semibold text-green-400 mb-3">
                  Service Providers
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We work with trusted third-party service providers who help us
                  operate our platform:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                  <li>Cloud hosting and data storage providers</li>
                  <li>Payment processing services</li>
                  <li>Analytics and monitoring tools</li>
                  <li>Customer support platforms</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-400 mb-3">
                  Legal Requirements
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We may disclose your information if required by law, court
                  order, or to protect our rights, safety, or the rights and
                  safety of others.
                </p>
              </div>

              {/* Section 5 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We implement comprehensive security measures to protect your
                  information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Technical Safeguards
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>AES-256 encryption for data at rest</li>
                      <li>TLS 1.3 for data in transit</li>
                      <li>Multi-factor authentication</li>
                      <li>Regular security audits</li>
                      <li>Intrusion detection systems</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                      Operational Security
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                      <li>Access controls and permissions</li>
                      <li>Employee security training</li>
                      <li>Incident response procedures</li>
                      <li>Regular backups and recovery testing</li>
                      <li>Compliance monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  6. Your Rights and Choices
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have several rights regarding your personal information:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-blue-400 text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Access and Portability
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Request a copy of your personal data in a portable
                        format
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-purple-400 text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Correction</h3>
                      <p className="text-gray-400 text-sm">
                        Update or correct inaccurate personal information
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-green-400 text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Deletion</h3>
                      <p className="text-gray-400 text-sm">
                        Request deletion of your personal data and account
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center mt-1">
                      <span className="text-orange-400 text-xs">✓</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        Marketing Opt-out
                      </h3>
                      <p className="text-gray-400 text-sm">
                        Unsubscribe from marketing communications at any time
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  7. Cookies and Tracking
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your
                  experience:
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Types of Cookies
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <span className="text-white font-medium">
                        Essential Cookies
                      </span>
                      <p className="text-gray-400 text-sm">
                        Required for basic functionality
                      </p>
                    </div>
                    <span className="text-green-400 text-sm">
                      Always Active
                    </span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <span className="text-white font-medium">
                        Analytics Cookies
                      </span>
                      <p className="text-gray-400 text-sm">
                        Help us understand usage patterns
                      </p>
                    </div>
                    <span className="text-blue-400 text-sm">Optional</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg">
                    <div>
                      <span className="text-white font-medium">
                        Preference Cookies
                      </span>
                      <p className="text-gray-400 text-sm">
                        Remember your settings and preferences
                      </p>
                    </div>
                    <span className="text-blue-400 text-sm">Optional</span>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  8. Data Retention
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We retain your information for as long as necessary to provide
                  our services:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Active accounts: Data retained while account is active plus
                    90 days
                  </li>
                  <li>Deleted accounts: Most data deleted within 30 days</li>
                  <li>
                    Legal requirements: Some data retained longer if required by
                    law
                  </li>
                  <li>
                    Anonymized data: May be retained indefinitely for research
                    and improvement
                  </li>
                </ul>
              </div>

              {/* Section 9 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  9. International Data Transfers
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  PrepWise operates globally and may transfer your information
                  to countries outside your residence. We ensure appropriate
                  safeguards are in place, including Standard Contractual
                  Clauses and adequacy decisions where applicable. Your data is
                  protected regardless of where it's processed.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  PrepWise is not intended for children under 13 years of age.
                  We do not knowingly collect personal information from children
                  under 13. If we become aware that we have collected personal
                  information from a child under 13, we will take steps to
                  delete such information promptly.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  11. Third-Party Links
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Our Service may contain links to third-party websites or
                  services. We are not responsible for the privacy practices of
                  these external sites. We encourage you to review the privacy
                  policies of any third-party sites you visit.
                </p>
              </div>

              {/* Section 12 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  12. California Privacy Rights
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you are a California resident, you have additional rights
                  under the California Consumer Privacy Act (CCPA):
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Right to know what personal information we collect and how
                    it's used
                  </li>
                  <li>
                    Right to delete personal information we have collected
                  </li>
                  <li>
                    Right to opt-out of the sale of personal information (we
                    don't sell data)
                  </li>
                  <li>
                    Right to non-discrimination for exercising your privacy
                    rights
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise these rights, contact us at privacy@prepwise.com
                  or use our privacy request form.
                </p>
              </div>

              {/* Section 13 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  13. GDPR Rights (EU Users)
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you are located in the European Union, you have additional
                  rights under the General Data Protection Regulation (GDPR):
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">
                      Legal Basis for Processing
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Contract performance</li>
                      <li>Legitimate interests</li>
                      <li>Your consent</li>
                      <li>Legal obligations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">
                      Your GDPR Rights
                    </h4>
                    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                      <li>Data portability</li>
                      <li>Restrict processing</li>
                      <li>Object to processing</li>
                      <li>Withdraw consent</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 14 */}
              <div className="mb-12 p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
                <h2 className="text-2xl font-bold text-white mb-4">
                  14. Changes to This Policy
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or applicable laws. When we make
                  changes, we will:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>
                    Update the "Last updated" date at the top of this policy
                  </li>
                  <li>Notify you via email for material changes</li>
                  <li>Post a notice on our website</li>
                  <li>For significant changes, we may seek your consent</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Contact Our Privacy Team
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about this Privacy Policy or how we
                  handle your personal information, please don't hesitate to
                  contact us:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-400">📧</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-gray-400 text-sm">
                          privacy@prepwise.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-400">📍</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Address</p>
                        <p className="text-gray-400 text-sm">
                          123 Tech Street
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-400">🔒</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">
                          Data Protection Officer
                        </p>
                        <p className="text-gray-400 text-sm">
                          dpo@prepwise.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-orange-400">⏱️</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">Response Time</p>
                        <p className="text-gray-400 text-sm">Within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-800/50 rounded-xl">
                  <p className="text-gray-300 text-sm">
                    <strong>EU Representatives:</strong> For EU-related privacy
                    matters, you can also contact our EU representative at
                    eu-privacy@prepwise.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Manage Your Privacy
            </h2>
            <p className="text-gray-400 mb-8">
              Take control of your personal information with these quick actions
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📥</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Download Your Data
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get a copy of all your personal information
                </p>
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                  Request Data Export
                </button>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Privacy Settings
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Manage your data sharing preferences
                </p>
                <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                  Update Settings
                </button>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-red-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🗑️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">
                  Delete Account
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Permanently remove your account and data
                </p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
