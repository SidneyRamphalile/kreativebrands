import React from "react";
import { Link } from "react-router-dom";
import websiteHeroImg from "../assets/website_design_mockup.png";

const pricingPlans = [
  {
    name: "Starter (2 – 5 Pages)",
    buildFee: "5,550",
    monthlyFee: "450",
    features: [
      "2-page website",
      "Mobile-optimized (responsive)",
      "HTML5/CSS3",
      "SEO",
      "Hyperlinks & Google Map",
    ],
    color: "bg-blue-600",
    delay: "100",
  },
  {
    name: "Standard (5 - 9 Page)",
    buildFee: "11,450",
    monthlyFee: "600",
    features: [
      "5-page website",
      "Mobile-optimized (responsive)",
      "HTML5/CSS3",
      "SEO",
      "Hyperlinks & Google Map",
      "Contact form & social links",
    ],
    color: "bg-red-600",
    delay: "200",
    popular: true,
  },
  {
    name: "Premium (10 Page)",
    buildFee: "16,500",
    monthlyFee: "750",
    features: [
      "10-page website",
      "Mobile-optimized (responsive)",
      "HTML5/CSS3",
      "SEO",
      "Hyperlinks & Google Map",
      "Blog/news section",
      "Contact form & social links",
    ],
    color: "bg-gray-900",
    delay: "300",
  },
];

const Websites = () => {
  return (
    <div className="pb-12 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center text-white overflow-hidden mb-12">
        <img
          src={websiteHeroImg}
          alt="Website Design Services"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="relative z-10 text-center px-4" data-random-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Professional Website Design</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Build a stunning online presence with our mobile-optimized, high-performance website solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Pricing Plans</h2>
          <p className="text-gray-600">Choose the perfect plan for your business needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-transform hover:scale-105 duration-300 ${
                plan.popular ? "ring-4 ring-red-500 ring-opacity-50" : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={plan.delay}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className={`${plan.color} p-8 text-white`}>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold">R {plan.buildFee}</span>
                  <span className="text-sm block opacity-80 uppercase mt-1">One-Time Build Fee</span>
                </div>
                <div className="mt-4 pt-4 border-t border-white border-opacity-20">
                  <span className="text-2xl font-bold">R {plan.monthlyFee}</span>
                  <span className="text-sm block opacity-80 uppercase mt-1">Monthly Hosting & Maintenance</span>
                </div>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-xl font-bold text-white transition duration-300 ${
                    plan.popular ? "bg-red-600 hover:bg-red-700 shadow-lg" : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-white rounded-3xl p-8 md:p-16 shadow-lg mb-20" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Kreativ Brands?</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-2">Mobile-First Approach</h4>
                  <p className="text-gray-600 italic font-bold">
                    In today's world, most users browse on mobile. We ensure your site looks perfect on every screen.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-2">Optimized for Performance</h4>
                  <p className="text-gray-600 italic font-bold">
                    Fast loading times are critical for both user experience and SEO rankings.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-red-600 mb-2">Continuous Support</h4>
                  <p className="text-gray-600 italic font-bold">
                    Our monthly fee covers hosting and maintenance, so you never have to worry about your site going down.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-2xl text-center shadow-inner">
                <div className="text-4xl font-bold text-blue-600 mb-2">SEO</div>
                <p className="text-sm text-gray-500 uppercase font-black">Optimized</p>
              </div>
              <div className="bg-red-50 p-6 rounded-2xl text-center shadow-inner">
                <div className="text-4xl font-bold text-red-600 mb-2">UI/UX</div>
                <p className="text-sm text-gray-500 uppercase font-black">Modern Design</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center shadow-inner">
                <div className="text-4xl font-bold text-green-600 mb-2">SSL</div>
                <p className="text-sm text-gray-500 uppercase font-black">Secure</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl text-center shadow-inner">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <p className="text-sm text-gray-500 uppercase font-black">Monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 text-white py-16 px-4 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-indigo-900 opacity-20"></div>
          <div className="relative z-10" data-aos="zoom-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to launch your project?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto italic font-bold">
              Contact us today for a free consultation and let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-gray-900 hover:bg-gray-200 font-bold py-4 px-10 rounded-full transition duration-300 text-lg shadow-xl"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Websites;
