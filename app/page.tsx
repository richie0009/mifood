import Image from 'next/image';
import Link from 'next/link';

import heroFoodImg from '@/src/assets/images/hero_food_1781371031716.jpg';
import pizzaMenuImg from '@/src/assets/images/pizza_menu_1781370989994.jpg';
import burgerMenuImg from '@/src/assets/images/burger_menu_1781371004291.jpg';
import sushiMenuImg from '@/src/assets/images/sushi_menu_1781371016367.jpg';
import customerFImg from '@/src/assets/images/customer_female_1781371089514.jpg';
import chefImg from '@/src/assets/images/chef_kitchen_1781371045778.jpg';
import ingredientsBgImg from '@/src/assets/images/ingredients_bg_1781371075146.jpg';

export default function Home() {
  return (
    <>
      <section className="relative min-h-[655px] md:min-h-[800px] flex items-center justify-center pt-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroFoodImg}
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h2 className="text-white text-[50px] leading-tight tracking-[-3px] mb-[-20px] font-sans font-normal">order the best</h2>
          <h1 className="text-white text-[117px] leading-tight tracking-[-3px] font-sans font-normal mb-8">food</h1>
          
          <p className="text-white text-lg max-w-lg mx-auto mb-10">
            Fresh pizza, juicy burgers, and delicate sushi, delivered fast to your door in Miami, FL.
          </p>
          
          <Link 
            href="#" 
            className="inline-block bg-brand-yellow hover:bg-brand-yellow-hover text-brand-green font-medium px-10 py-[17px] rounded text-[14px] transition-colors"
          >
            Order Online
          </Link>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-[80px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 flex flex-col items-center">
            <h2 className="text-[40px] tracking-[-2px] mb-5 font-normal">Our Menu</h2>
            <div className="w-[8%] border-t-[3px] border-brand-yellow"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="flex flex-col text-left">
              <div className="mb-6 overflow-hidden">
                <Image 
                  src={pizzaMenuImg}
                  alt="Artisan Pizza"
                  width={373}
                  height={464}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3 font-sans font-normal">Artisan Pizza</h3>
              <p className="text-brand-green-body">
                Hand-tossed dough with fresh, locally sourced toppings, baked to perfection for the ultimate slice.
              </p>
            </div>
            {/* Service 2 */}
            <div className="flex flex-col text-left">
              <div className="mb-6 overflow-hidden">
                <Image 
                  src={burgerMenuImg}
                  alt="Gourmet Burgers"
                  width={373}
                  height={464}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3 font-sans font-normal">Gourmet Burgers</h3>
              <p className="text-brand-green-body">
                100% grass-fed beef stacked with premium ingredients, served with a side of crispy golden fries.
              </p>
            </div>
            {/* Service 3 */}
            <div className="flex flex-col text-left">
              <div className="mb-6 overflow-hidden">
                <Image 
                  src={sushiMenuImg}
                  alt="Fresh Sushi"
                  width={373}
                  height={464}
                  className="w-full h-auto object-cover"
                />
              </div>
              <h3 className="text-[20px] mb-3 font-sans font-normal">Fresh Sushi</h3>
              <p className="text-brand-green-body">
                Expertly rolled sushi and sashimi made with the freshest catches of the day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-brand-light py-[70px]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="mb-8 relative w-[37px] h-[38px]">
             <Image 
              src="https://websitedemos.net/love-nature-08/wp-content/uploads/sites/1037/2021/11/quotes.svg"
              alt="Quotes"
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
             />
          </div>
          
          <h4 className="font-display font-normal text-[35px] leading-[43px] tracking-[-2px] text-brand-green mb-10 max-w-3xl">
            “The fastest food delivery in Miami! Their pizza and sushi are always incredibly fresh, and the burgers are simply unbeatable.”
          </h4>
          
          <div className="flex flex-col items-center">
            <Image 
              src={customerFImg}
              alt="Jane Miller, Miami Local"
              width={50}
              height={50}
              className="rounded-full mb-3 object-cover"
            />
            <p className="text-[14px] text-brand-green">Jane Miller, Miami Local</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-[50px]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="pr-0 md:pr-16">
            <span className="block uppercase text-[12px] text-brand-green-body tracking-wider mb-3">About MiFood</span>
            <h4 className="font-display font-normal text-[40px] leading-[44px] tracking-[-2px] text-brand-green mb-8">
              Bringing Miami's favorite flavors straight to your table.
            </h4>
            <p className="text-brand-green-body mb-10 text-[17px] leading-relaxed">
              Because when hunger strikes, you shouldn't have to compromise on quality. We started MiFood to connect our community with the best pizza, burgers, and sushi in the city, using fresh ingredients and ensuring lightning-fast delivery.
            </p>
            <Link 
              href="#" 
              className="inline-block border border-brand-green text-brand-green hover:border-brand-green-body hover:text-brand-green-body px-10 py-[17px] rounded text-[14px] transition-colors font-medium"
            >
              Read Our Story
            </Link>
          </div>
          
          <div className="text-right flex justify-end">
            <Image 
              src={chefImg}
              alt="MiFood Chef"
              width={647}
              height={785}
              className="inline-block w-full max-w-[500px] xl:max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Action Banner Section */}
      <section className="relative min-h-[500px] bg-[#f6f8f5] flex items-center justify-center py-[70px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={ingredientsBgImg}
            alt="Ingredients Background"
            fill
            className="object-cover object-[52%_27%]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center mt-6">
          <h1 className="text-brand-green text-[58px] tracking-[-2px] mb-4 font-sans font-normal">HUNGRY YET?</h1>
          
          <p className="text-brand-green text-[17px] leading-[32px] mb-10">
            Explore our diverse menu, from artisanal pizza to fresh sushi, and experience the best food delivery in Miami.
          </p>
          
          <Link 
            href="#" 
            className="inline-block bg-brand-yellow hover:bg-brand-yellow-hover text-brand-green font-medium px-10 py-[17px] rounded text-[14px] transition-colors"
          >
            Order Food Online
          </Link>
        </div>
      </section>
    </>
  );
}
