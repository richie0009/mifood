import Image from 'next/image';
import Link from 'next/link';

import ingredientsBgImg from '@/src/assets/images/ingredients_bg_1781371075146.jpg';
import pizzaMenuImg from '@/src/assets/images/pizza_menu_1781370989994.jpg';
import burgerMenuImg from '@/src/assets/images/burger_menu_1781371004291.jpg';
import sushiMenuImg from '@/src/assets/images/sushi_menu_1781371016367.jpg';

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[330px] md:min-h-[420px] flex items-center justify-center pt-16">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={ingredientsBgImg}
            alt="Services Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-white text-[54px] md:text-[76px] leading-[1.2] md:leading-[1] tracking-[-3px] font-sans font-normal mb-[30px]">
            our menu
          </h1>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-white py-[60px] md:py-[100px]">
        <div className="max-w-[1024px] mx-auto px-6 flex flex-col gap-[80px]">
          
          {/* Service 1 - Web Design -> Wood-Fired Pizza */}
          <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[45px]">
            <div className="w-full md:w-[44%] flex justify-center md:justify-end">
              <Image 
                src={pizzaMenuImg} 
                alt="Wood-Fired Pizza" 
                width={370} 
                height={500} 
                className="w-full max-w-[370px] h-auto object-cover" 
              />
            </div>
            <div className="w-full md:w-[56%] flex flex-col text-left pl-0 md:pl-[45px]">
              <h4 className="text-brand-green font-display text-[26px] md:text-[30px] mb-[10px] md:mb-[20px] font-normal leading-tight">
                Wood-Fired Pizza
              </h4>
              <p className="text-brand-green-body mb-[20px] text-[15px] leading-[26px]">
                Enjoy authentic, handcrafted pizzas baked in a traditional wood-fired oven. We use only the finest mozzarella, San Marzano tomatoes, and organic basil.
              </p>
              <p className="text-brand-green-body mb-[30px] text-[15px] leading-[26px]">
                Whether you're hosting a party or craving a classic Margherita, our pizzas are guaranteed to satisfy.
              </p>
              <h3 className="text-brand-green font-sans font-normal text-[19px] mb-[30px]">
                From $16
              </h3>
              <div>
                <Link 
                  href="#" 
                  className="inline-block border border-brand-green text-brand-green hover:border-brand-green-body hover:text-brand-green-body px-10 py-[17px] rounded text-[14px] transition-colors font-medium"
                >
                  Order Pizza
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2 - Graphic Design -> Craft Burgers */}
          <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[45px]">
            <div className="w-full md:w-[44%] flex justify-center md:justify-end">
              <Image 
                src={burgerMenuImg} 
                alt="Craft Burgers" 
                width={370} 
                height={500} 
                className="w-full max-w-[370px] h-auto object-cover" 
              />
            </div>
            <div className="w-full md:w-[56%] flex flex-col text-left pl-0 md:pl-[45px]">
              <h4 className="text-brand-green font-display text-[26px] md:text-[30px] mb-[10px] md:mb-[20px] font-normal leading-tight">
                Craft Burgers
              </h4>
              <p className="text-brand-green-body mb-[20px] text-[15px] leading-[26px]">
                Sink your teeth into our signature grass-fed beef burgers, grilled to juicy perfection and topped with artisan cheeses.
              </p>
              <p className="text-brand-green-body mb-[30px] text-[15px] leading-[26px]">
                Each burger is served on a freshly baked brioche bun and paired with our house-cut rustic and seasoned fries.
              </p>
              <h3 className="text-brand-green font-sans font-normal text-[19px] mb-[30px]">
                From $14
              </h3>
              <div>
                <Link 
                  href="#" 
                  className="inline-block border border-brand-green text-brand-green hover:border-brand-green-body hover:text-brand-green-body px-10 py-[17px] rounded text-[14px] transition-colors font-medium"
                >
                  Order Burgers
                </Link>
              </div>
            </div>
          </div>

          {/* Service 3 - Content Creation -> Sushi & Sashimi */}
          <div className="flex flex-col md:flex-row items-center gap-[40px] md:gap-[45px]">
            <div className="w-full md:w-[44%] flex justify-center md:justify-end">
              <Image 
                src={sushiMenuImg} 
                alt="Sushi & Sashimi" 
                width={370} 
                height={500} 
                className="w-full max-w-[370px] h-auto object-cover" 
              />
            </div>
            <div className="w-full md:w-[56%] flex flex-col text-left pl-0 md:pl-[45px]">
              <h4 className="text-brand-green font-display text-[26px] md:text-[30px] mb-[10px] md:mb-[20px] font-normal leading-tight">
                Sushi & Sashimi
              </h4>
              <p className="text-brand-green-body mb-[20px] text-[15px] leading-[26px]">
                Experience Miami's finest sushi, meticulously prepared by our master chefs using daily fresh seafood arrivals.
              </p>
              <p className="text-brand-green-body mb-[30px] text-[15px] leading-[26px]">
                From classic California rolls to premium nigiri platters, our sushi menu offers delicate and vibrant flavors.
              </p>
              <h3 className="text-brand-green font-sans font-normal text-[19px] mb-[30px]">
                From $18
              </h3>
              <div>
                <Link 
                  href="#" 
                  className="inline-block border border-brand-green text-brand-green hover:border-brand-green-body hover:text-brand-green-body px-10 py-[17px] rounded text-[14px] transition-colors font-medium"
                >
                  Order Sushi
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Why Love Nature Section -> Why Choose MiFood */}
      <section className="bg-brand-light py-[50px] md:py-[80px]">
        <div className="max-w-[1024px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[50px] md:gap-[60px] items-center">
          {/* Left Column - Text */}
          <div className="flex flex-col text-left pr-0 md:pr-8 lg:pr-12">
            <h4 className="font-display font-normal text-[32px] md:text-[40px] text-brand-green mb-[20px] md:mb-[40px]">
              Why Choose MiFood
            </h4>
            <p className="text-[16px] md:text-[18px] text-brand-green-body mb-6 leading-relaxed">
              We know you have plenty of dining options in Miami. That's why we focus on culinary excellence, sourcing fresh ingredients, and ensuring every order arrives exactly as intended.
            </p>
            <p className="text-[16px] md:text-[18px] text-brand-green-body m-0 leading-relaxed">
              We pride ourselves on lightning-fast food delivery, dedicated customer support, and a growing community of five-star reviews from satisfied food lovers across the city.
            </p>
          </div>

          {/* Right Column - Icons Grid */}
          <div className="grid grid-cols-2 gap-y-[40px] gap-x-[20px] md:gap-y-[60px] md:gap-x-0">
            {/* Icon 1 - 8 Years Experience -> Local Ingredients */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-5">
                <svg className="fill-brand-green w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M288 358.3c13.98-8.088 17.53-30.04 28.88-41.39c11.35-11.35 33.3-14.88 41.39-28.87c7.98-13.79 .1658-34.54 4.373-50.29C366.7 222.5 383.1 208.5 383.1 192c0-16.5-17.27-30.52-21.34-45.73c-4.207-15.75 3.612-36.5-4.365-50.29c-8.086-13.98-30.03-17.52-41.38-28.87c-11.35-11.35-14.89-33.3-28.87-41.39c-13.79-7.979-34.54-.1637-50.29-4.375C222.5 17.27 208.5 0 192 0C175.5 0 161.5 17.27 146.3 21.34C130.5 25.54 109.8 17.73 95.98 25.7C82 33.79 78.46 55.74 67.11 67.08C55.77 78.43 33.81 81.97 25.72 95.95C17.74 109.7 25.56 130.5 21.35 146.2C17.27 161.5 .0008 175.5 .0008 192c0 16.5 17.27 30.52 21.34 45.73c4.207 15.75-3.615 36.5 4.361 50.29C33.8 302 55.74 305.5 67.08 316.9c11.35 11.35 14.89 33.3 28.88 41.4c13.79 7.979 34.53 .1582 50.28 4.369C161.5 366.7 175.5 384 192 384c16.5 0 30.52-17.27 45.74-21.34C253.5 358.5 274.2 366.3 288 358.3zM112 192c0-44.27 35.81-80 80-80s80 35.73 80 80c0 44.17-35.81 80-80 80S112 236.2 112 192zM1.719 433.2c-3.25 8.188-1.781 17.48 3.875 24.25c5.656 6.75 14.53 9.898 23.12 8.148l45.19-9.035l21.43 42.27C99.46 507 107.6 512 116.7 512c.3438 0 .6641-.0117 1.008-.0273c9.5-.375 17.65-6.082 21.24-14.88l33.58-82.08c-53.71-4.639-102-28.12-138.2-63.95L1.719 433.2zM349.6 351.1c-36.15 35.83-84.45 59.31-138.2 63.95l33.58 82.08c3.594 8.797 11.74 14.5 21.24 14.88C266.6 511.1 266.1 512 267.3 512c9.094 0 17.23-4.973 21.35-13.14l21.43-42.28l45.19 9.035c8.594 1.75 17.47-1.398 23.12-8.148c5.656-6.766 7.125-16.06 3.875-24.25L349.6 351.1z"></path>
                </svg>
              </div>
              <p className="text-[13px] text-brand-green-body m-0 leading-[10px]">Local Ingredients</p>
            </div>

            {/* Icon 2 - 5 Star Rating -> 5 Star Taste */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-5">
                 <svg className="fill-brand-green w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                   <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path>
                 </svg>
              </div>
              <p className="text-[13px] text-brand-green-body m-0 leading-[10px]">5 Star Taste</p>
            </div>

            {/* Icon 3 - 11Quick Turnaround -> Fast Delivery */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-5">
                <svg className="fill-brand-green w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z"></path>
                </svg>
              </div>
              <p className="text-[13px] text-brand-green-body m-0 leading-[10px]">Fast Delivery</p>
            </div>

            {/* Icon 4 - Dedicated Support -> Fresh & Hot */}
            <div className="flex flex-col items-center text-center">
              <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center mb-5">
                 <svg className="fill-brand-green w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                   <path d="M470.6 425.4C483.1 437.9 483.1 458.1 470.6 470.6C458.1 483.1 437.9 483.1 425.4 470.6L412.1 458.2C369.6 491.9 315.2 512 255.1 512C196.8 512 142.4 491.9 99.02 458.2L86.63 470.6C74.13 483.1 53.87 483.1 41.37 470.6C28.88 458.1 28.88 437.9 41.37 425.4L53.76 412.1C20.07 369.6 0 315.2 0 255.1C0 196.8 20.07 142.4 53.76 99.02L41.37 86.63C28.88 74.13 28.88 53.87 41.37 41.37C53.87 28.88 74.13 28.88 86.63 41.37L99.02 53.76C142.4 20.07 196.8 0 255.1 0C315.2 0 369.6 20.07 412.1 53.76L425.4 41.37C437.9 28.88 458.1 28.88 470.6 41.37C483.1 53.87 483.1 74.13 470.6 86.63L458.2 99.02C491.9 142.4 512 196.8 512 255.1C512 315.2 491.9 369.6 458.2 412.1L470.6 425.4zM309.3 354.5C293.4 363.1 275.3 368 255.1 368C236.7 368 218.6 363.1 202.7 354.5L144.8 412.5C176.1 434.9 214.5 448 255.1 448C297.5 448 335.9 434.9 367.2 412.5L309.3 354.5zM448 255.1C448 214.5 434.9 176.1 412.5 144.8L354.5 202.7C363.1 218.6 368 236.7 368 256C368 275.3 363.1 293.4 354.5 309.3L412.5 367.2C434.9 335.9 448 297.5 448 256V255.1zM255.1 63.1C214.5 63.1 176.1 77.14 144.8 99.5L202.7 157.5C218.6 148.9 236.7 143.1 255.1 143.1C275.3 143.1 293.4 148.9 309.3 157.5L367.2 99.5C335.9 77.14 297.5 63.1 256 63.1H255.1zM157.5 309.3C148.9 293.4 143.1 275.3 143.1 255.1C143.1 236.7 148.9 218.6 157.5 202.7L99.5 144.8C77.14 176.1 63.1 214.5 63.1 255.1C63.1 297.5 77.14 335.9 99.5 367.2L157.5 309.3zM255.1 207.1C229.5 207.1 207.1 229.5 207.1 255.1C207.1 282.5 229.5 303.1 255.1 303.1C282.5 303.1 304 282.5 304 255.1C304 229.5 282.5 207.1 255.1 207.1z"></path>
                 </svg>
              </div>
              <p className="text-[13px] text-brand-green-body m-0 leading-[10px]">Fresh & Hot</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
