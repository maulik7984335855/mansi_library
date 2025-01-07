import React from 'react'
import img from '../../public/assets/left_pic_home.png'

const About = () => {
  return (
    <>
      <>
  <section className="bg-blue-500 text-white rounded-b-3xl pt-20 py-10">
    <div className="container mx-auto px-6 md:px-12 lg:px-20">
      {/* Heading Section */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">
          About Us
        </h1>
        <p className="text-lg ">
          Welcome to <span className="font-semibold">Mansi Library</span> — your
          ultimate destination for books that inspire, educate, and entertain.
        </p>
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Bookshelf"
            className="rounded-lg shadow-lg w-[400px]"
          />
        </div>
        {/* Text Section */}
        <div>
          <h2 className="text-2xl font-semibold  mb-4">
            Our Story
          </h2>
          <p className=" leading-relaxed mb-4">
            At Mansi Library, we believe that books hold the power to change lives.
            Our journey began with a simple dream: to create a space where book
            lovers can find stories, knowledge, and joy under one roof. From
            timeless classics to the latest bestsellers, we bring you a
            carefully curated selection of books to suit every taste.
          </p>
          <h2 className="text-2xl font-semibold  mb-4">
            Our Mission
          </h2>
          <p className=" leading-relaxed mb-4">
            Our mission is to foster a love for reading and make books
            accessible to everyone. We aim to connect readers with stories that
            resonate, educate, and inspire, creating a community of lifelong
            learners and storytellers.
          </p>
          <h2 className="text-2xl font-semibold  mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc ml-5 ">
            <li>Vast collection of genres and categories</li>
            <li>Easy-to-navigate website for seamless shopping</li>
            <li>Affordable prices and exclusive discounts</li>
            <li>Customer-centric service and fast delivery</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-white py-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Join Our Community
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        At Book Haven, you’re not just a customer — you’re part of a family that
        values the art of storytelling. Let’s embark on this journey together!
      </p>
      <a
        href="/store"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition"
      >
        Start Exploring
      </a>
    </div>
  </section>
</>

    </>
  )
}

export default About