import React from 'react';
import { FacebookIcon, TikTokIcon, InstagramIcon } from './SocialIcons';

// Fade-in animation utility
const fadeIn = 'animate-fadeIn';

const ContactUsSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-white">
        <h2 className="text-5xl font-serif font-extrabold mb-12 text-center tracking-wide leading-tight animate-fadeIn">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-14 mb-16">
          <div className={`bg-white bg-opacity-10 rounded-2xl p-10 shadow-2xl border border-white border-opacity-20 backdrop-blur-lg transition-all duration-500 ${fadeIn}`} style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6 border-b border-white border-opacity-20 pb-3 tracking-wide">Our Location</h3>
            <p className="mb-6 text-gray-200 text-lg">123 Main Street, City Name, Country</p>
            <div className="overflow-hidden rounded-xl border border-white border-opacity-20 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153169!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f1f1f1%3A0x5045675218ce6e0!2s123%20Main%20St%2C%20City%20Name%2C%20Country!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Shop Location"
              ></iframe>
            </div>
          </div>
          <div className={`bg-white bg-opacity-10 rounded-2xl p-10 shadow-2xl border border-white border-opacity-20 flex flex-col justify-center backdrop-blur-lg transition-all duration-500 ${fadeIn}`} style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6 border-b border-white border-opacity-20 pb-3 tracking-wide">Contact Details</h3>
            <p className="mb-4 text-gray-200 text-lg">Phone: <a href="tel:+1234567890" className="text-white hover:text-gray-400 transition duration-200 ease-in-out underline underline-offset-4">+1 234 567 890</a></p>
            <p className="mb-4 text-gray-200 text-lg">Email: <a href="mailto:info@salon.com" className="text-white hover:text-gray-400 transition duration-200 ease-in-out underline underline-offset-4">info@salon.com</a></p>
            <p className="mb-4 text-gray-200 text-lg">Address: 123 Main Street, City Name, Country</p>
          </div>
        </div>
        <div className="flex justify-center my-12">
          <div className="h-1 w-32 bg-gradient-to-r from-white via-gray-400 to-white rounded-full opacity-30"></div>
        </div>
        <div className="text-center mt-8 animate-fadeIn">
          <h3 className="text-2xl font-serif font-semibold mb-8 tracking-wide">Follow Us</h3>
          <div className="flex justify-center gap-12">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 transition-all duration-200 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:border-opacity-60">
                <FacebookIcon />
              </span>
            </a>
            <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 transition-all duration-200 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:border-opacity-60">
                <TikTokIcon />
              </span>
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="group">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-white border-opacity-30 bg-white bg-opacity-10 transition-all duration-200 group-hover:bg-opacity-20 group-hover:shadow-lg group-hover:border-opacity-60">
                <InstagramIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
