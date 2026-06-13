import Image from 'next/image';
import Link from 'next/link';

import deliveryImg from '@/src/assets/images/delivery_person_1781371060323.jpg';
import chefAvatar1Img from '@/src/assets/images/chef_avatar_1_1781371110370.jpg';
import chefAvatar2Img from '@/src/assets/images/chef_avatar_2_1781371125158.jpg';
import managerAvatarImg from '@/src/assets/images/manager_avatar_1781371138738.jpg';
import driverAvatarImg from '@/src/assets/images/customer_male_1781371152148.jpg';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[330px] md:min-h-[420px] flex items-center justify-center pt-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={deliveryImg}
            alt="Contact Us Background"
            fill
            className="object-cover object-[50%_50%]"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-[54px] md:text-[76px] leading-[1.2] md:leading-[1] tracking-[-3px] font-sans font-normal mb-[30px]">
            contact us
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-[60px] md:py-[120px] px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-[50px] lg:gap-[100px]">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col md:pl-0 lg:pl-[50px]">
            <h4 className="font-display font-normal text-[24px] md:text-[36px] tracking-[-1px] text-brand-green mb-[30px] md:mb-[40px]">
              Get in touch with MiFood
            </h4>
            
            <div className="mb-[25px]">
              <p className="text-[14px] leading-tight text-brand-green-body mb-[5px] uppercase tracking-[1px] font-medium">Email</p>
              <p className="text-[16px] leading-relaxed text-brand-green m-0">order@mifood.com</p>
            </div>
            
            <div className="mb-[25px]">
              <p className="text-[14px] leading-tight text-brand-green-body mb-[5px] uppercase tracking-[1px] font-medium">Phone Number</p>
              <p className="text-[16px] leading-relaxed text-brand-green m-0">+1-667-895-3422</p>
            </div>
            
            <div className="mb-[35px]">
              <p className="text-[14px] leading-tight text-brand-green-body mb-[5px] uppercase tracking-[1px] font-medium">Location</p>
              <p className="text-[16px] leading-relaxed text-brand-green m-0">Miami, FL (Delivery Headquarters)</p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-[15px]">
              <a href="#" className="w-[45px] h-[45px] bg-brand-green hover:bg-brand-green/80 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-[15px] h-[15px] fill-white" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z"></path></svg>
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-brand-green hover:bg-brand-green/80 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-[15px] h-[15px] fill-white" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8 .2 5.7 .2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3 .6 10.4 .8 15.8 .8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.45 65.45 0 0 1 -29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"></path></svg>
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-brand-green hover:bg-brand-green/80 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-[15px] h-[15px] fill-white" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48H154.4c9.8-16.4 22.4-40 27.4-59.3 3-11.5 15.3-58.4 15.3-58.4 8 15.3 31.4 28.2 56.3 28.2 74.1 0 127.4-68.1 127.4-152.7 0-81.1-66.2-141.8-151.4-141.8-106 0-162.2 71.1-162.2 148.6 0 36 19.2 80.8 49.8 95.1 4.7 2.2 7.1 1.2 8.2-3.3 .8-3.4 5-20.1 6.8-27.8 .6-2.5 .3-4.6-1.7-7-10.1-12.3-18.3-34.9-18.3-56 0-54.2 41-106.6 110.9-106.6 60.3 0 102.6 41.1 102.6 99.9 0 66.4-33.5 112.4-77.2 112.4-24.1 0-42.1-19.9-36.4-44.4 6.9-29.2 20.3-60.7 20.3-81.8 0-53-75.5-45.7-75.5 25 0 21.7 7.3 36.5 7.3 36.5-31.4 132.8-36.1 134.5-29.6 192.6l2.2 .8H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
              </a>
              <a href="#" className="w-[45px] h-[45px] bg-brand-green hover:bg-brand-green/80 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-[15px] h-[15px] fill-white" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="flex flex-col md:pr-0 lg:pr-[50px] mt-10 md:mt-0">
            <h4 className="font-display font-normal text-[24px] md:text-[36px] tracking-[-1px] text-brand-green mb-[30px] md:mb-[40px]">
              Let’s get in touch
            </h4>
            
            <form className="flex flex-col gap-[18px]">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full border border-[#536942]/25 rounded-[6px] bg-[#536942]/[0.02] px-[12px] py-[10px] text-brand-green placeholder-brand-green/50 focus:border-brand-yellow/65 focus:shadow-[0_0_0_3px_rgba(255,217,54,0.15)] focus:outline-none transition-all h-[44px] text-[16px] font-sans" 
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full border border-[#536942]/25 rounded-[6px] bg-[#536942]/[0.02] px-[12px] py-[10px] text-brand-green placeholder-brand-green/50 focus:border-brand-yellow/65 focus:shadow-[0_0_0_3px_rgba(255,217,54,0.15)] focus:outline-none transition-all h-[44px] text-[16px] font-sans" 
              />
              <textarea 
                placeholder="Message" 
                rows={4} 
                className="w-full border border-[#536942]/25 rounded-[6px] bg-[#536942]/[0.02] px-[12px] py-[10px] text-brand-green placeholder-brand-green/50 focus:border-brand-yellow/65 focus:shadow-[0_0_0_3px_rgba(255,217,54,0.15)] focus:outline-none transition-all text-[16px] resize-y min-h-[120px] font-sans"
              ></textarea>
              <div className="text-left mt-[6px]">
                <button 
                  type="button" 
                  className="bg-brand-yellow text-brand-green hover:bg-brand-yellow-hover transition-colors rounded-[6px] px-[20px] py-[12px] text-[16px] font-medium leading-[24px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="bg-brand-light py-[50px] md:py-[100px] px-6">
        <div className="max-w-[1140px] mx-auto flex flex-col">
          <div className="text-center mb-[45px]">
            <h2 className="font-display font-normal text-[24px] md:text-[36px] tracking-[-1px] text-brand-green m-0">
              The passionate chefs and drivers behind your meal
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[20px]">
            <div className="flex justify-center">
              <Image 
                src={chefAvatar1Img} 
                alt="Head Chef" 
                width={285} 
                height={280} 
                className="w-full h-auto object-cover max-w-[285px] md:max-w-full rounded-md shadow-sm" 
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src={chefAvatar2Img} 
                alt="Sushi Chef" 
                width={285} 
                height={280} 
                className="w-full h-auto object-cover max-w-[285px] md:max-w-full rounded-md shadow-sm" 
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src={managerAvatarImg} 
                alt="General Manager" 
                width={285} 
                height={280} 
                className="w-full h-auto object-cover max-w-[285px] md:max-w-full rounded-md shadow-sm" 
              />
            </div>
            <div className="flex justify-center">
              <Image 
                src={driverAvatarImg} 
                alt="Delivery Driver" 
                width={285} 
                height={257} 
                className="w-full h-[280px] object-cover max-w-[285px] md:max-w-full rounded-md shadow-sm" 
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
