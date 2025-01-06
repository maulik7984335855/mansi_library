import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" h-[80vh] pt-16 px-8 lg:mb-0 mb-6 flex lg:flex-row lg:gap-0 gap-6 flex-col items-center justify-center">
        {/* map */}
        <div className=" flex justify-center lg:w-1/2 w-[90%]  mt-4 mb-4 overflow-hidden rounded-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6799.175532946237!2d72.3533743162948!3d23.96014754891129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cf361b4747d63%3A0x6847c32cda8dd97c!2sSujanpur%2C%20Gujarat%20384151!5e0!3m2!1sen!2sin!4v1736139570090!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" border border-blue-500 rounded-xl"
          />
        </div>
        {/* form */}
        <div className=" lg:w-1/2 w-[90%] flex items-center justify-center gap-5 flex-col  ">
            <h2 className="font-bold text-3xl">Get in touch</h2>
            <form action="#" className="flex text-black flex-col gap-4">
              <input type="text" name="name" className="p-3 w-[330px] rounded-sm bg-white border border-blue-500 " placeholder="Your name:" />
              <input type="email" name="email" className="p-3 w-[330px] rounded-sm bg-white border border-blue-500" placeholder="Your email:" />
              <textarea name="message" cols={4} rows={6} placeholder="Your message: " className="p-3 w-[330px] resize-none rounded-sm bg-white border  border-blue-500" ></textarea>
              <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Send</button>
            </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
