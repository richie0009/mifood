import Image from 'next/image';
import Link from 'next/link';
import heroFoodImg from '@/src/assets/images/hero_food_1781371031716.jpg';
import chefImg from '@/src/assets/images/chef_kitchen_1781371045778.jpg';
import customerFImg from '@/src/assets/images/customer_female_1781371089514.jpg';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[330px] md:min-h-[420px] flex items-center justify-center pt-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroFoodImg}
            alt="About Us Background"
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-[54px] md:text-[70px] lg:text-[76px] leading-[1.2] lg:leading-[1] tracking-[-3px] font-sans font-normal mb-[30px]">
            about mifood
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-[50px] md:py-[80px] px-6 text-center">
        <div className="max-w-[1140px] mx-auto">
          {/* Lead Text */}
          <div className="max-w-[1040px] mx-auto mb-[30px] mt-[40px] md:mt-0 md:mb-[45px] px-0 md:px-[5%] lg:px-[22%]">
            <h4 className="text-brand-green font-display font-normal text-[24px] md:text-[36px] leading-[38px] md:leading-[44px] tracking-[-1px] md:tracking-[-2px]">
              We’re a passionate team of local food lovers, dedicated to bringing Miami's best culinary experiences directly to you.
            </h4>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center mb-10 md:mb-12">
            <Image
              src={chefImg}
              alt="Our Chef"
              width={1040}
              height={600}
              className="w-full max-w-[1040px] h-auto object-cover rounded-md shadow-sm"
            />
          </div>

          {/* Mission & Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-0 pt-0 md:pt-[30px] max-w-[900px] mx-auto">
            {/* Mission */}
            <div className="px-5 md:px-[8%] flex flex-col items-center text-center">
              <h3 className="text-brand-green text-[20px] font-sans font-normal mb-[15px]">Our Mission</h3>
              <p className="text-brand-green-body text-[16px] leading-relaxed m-0">
                Serve the freshest, most delicious food in Miami, using sustainably sourced ingredients to craft incredible pizza, burgers, and sushi.
              </p>
            </div>
            {/* Values */}
            <div className="px-5 md:px-[8%] flex flex-col items-center text-center">
              <h3 className="text-brand-green text-[20px] font-sans font-normal mb-[15px]">Our Values</h3>
              <p className="text-brand-green-body text-[16px] leading-relaxed m-0">
                We believe in prompt delivery, exceptional taste, and a seamless online ordering experience for every single meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-brand-light py-[50px] md:py-[70px]">
        <div className="max-w-[640px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="mb-[20px] md:mb-[25px] relative w-[37px] h-[38px]">
             <Image 
              src="https://websitedemos.net/love-nature-08/wp-content/uploads/sites/1037/2021/11/quotes.svg"
              alt="Quotes"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
             />
          </div>
          
          <h4 className="font-display font-normal text-[24px] md:text-[32px] lg:text-[35px] leading-[30px] md:leading-[40px] lg:leading-[43px] tracking-[-2px] text-brand-green mb-[40px]">
            “MiFood has completely transformed weeknight dinners for us. The food arrives hot, fast, and the quality is outstanding.”
          </h4>
          
          <div className="flex flex-col items-center">
            <Image 
              src={customerFImg}
              alt="Emily Davis, Food Enthusiast"
              width={50}
              height={50}
              className="mb-[10px] rounded-full object-cover"
            />
            <p className="text-[14px] leading-none text-brand-green m-0">Emily Davis, Food Enthusiast</p>
          </div>
        </div>
      </section>
    </>
  );
}
