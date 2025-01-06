import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-500 rounded-t-3xl text-white py-10 px-3">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Welcome to Book Haven, your go-to destination for books of all
              genres. From fiction to educational resources, we bring the joy of
              reading to your fingertips.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/store" className="hover:underline">
                  Store
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              
            </ul>
          </div>
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/store" className="hover:underline">
                  Python
                </a>
              </li>
              <li>
                <a href="/store" className="hover:underline">
                  Java
                </a>
              </li>
              <li>
                <a href="/store" className="hover:underline">
                  Health
                </a>
              </li>
              <li>
                <a href="/store" className="hover:underline">
                  Motivation
                </a>
              </li>
              <li>
                <a href="/store" className="hover:underline">
                  Dreams
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:maulikprajapati722004@gmail.com"
                className="hover:underline"
              >
                maulikprajapati722004@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <strong>Phone:</strong>{" "}
              <a href="tel:+91 7984335855" className="hover:underline">
                +91 7984335855
              </a>
            </p>
            <p className="text-sm">
              <strong>Address:</strong> Sujanpur, Siddhpur, Gujarat-384151
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.5 0h-21c-.828 0-1.5.672-1.5 1.5v21c0 .828.672 1.5 1.5 1.5h11.25v-9.187h-3.094v-3.594h3.094v-2.812c0-3.066 1.875-4.75 4.609-4.75 1.312 0 2.438.094 2.766.141v3.203l-1.906.001c-1.492 0-1.781.707-1.781 1.75v2.469h3.563l-.469 3.594h-3.094v9.187h6.094c.828 0 1.5-.672 1.5-1.5v-21c0-.828-.672-1.5-1.5-1.5z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.162 5.656c-.794.352-1.646.59-2.542.695a4.496 4.496 0 0 0 1.984-2.484 8.938 8.938 0 0 1-2.838 1.085 4.486 4.486 0 0 0-7.644 4.092 12.733 12.733 0 0 1-9.253-4.692 4.484 4.484 0 0 0-.606 2.258 4.488 4.488 0 0 0 1.994 3.738 4.455 4.455 0 0 1-2.034-.563v.056a4.484 4.484 0 0 0 3.598 4.394 4.508 4.508 0 0 1-2.03.078 4.488 4.488 0 0 0 4.191 3.117 8.994 8.994 0 0 1-5.576 1.918c-.362 0-.721-.021-1.079-.063a12.692 12.692 0 0 0 6.889 2.021c8.268 0 12.794-6.853 12.794-12.797 0-.195-.004-.391-.013-.585a9.114 9.114 0 0 0 2.243-2.314" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
          <p>© 2025 Mansi Library. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
