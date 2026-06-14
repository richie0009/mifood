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
    <main id="main" tabIndex={-1} className="focus:outline-none" style={{ position: 'relative' }}>
      
      {/* 1. Hero Section */}
      <header className="relative w-full overflow-hidden bg-black">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <Image 
              src={heroFoodImg} 
              alt="Hero Background" 
              className="absolute top-0 left-0 w-full h-full object-cover object-center" 
              priority 
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(#0000_35%,#00000073_60%,#00000080)]"></div>
        </div>
        <div className="max-w-[1312px] mx-auto mt-4 mb-4 max-h-[752px] flex flex-col items-center pt-0 md:min-h-[640px] min-h-[500px] md:h-[calc(100vh-168px)]">
          <div className="relative w-full flex-1 flex flex-col">
            <div className="max-w-full flex-1 flex flex-col justify-end gap-6 px-4 md:px-8 py-6">
              <div className="max-w-[1312px]">
                <div className="flex flex-col gap-2 text-balance lg:gap-3">
                  <h1 className="text-[clamp(0.875rem,3.5vw,1.75rem)] font-semibold text-white leading-[1.2] tracking-[-0.5px] overflow-hidden text-ellipsis whitespace-nowrap inline-block max-w-full m-0 font-sans">
                    Best Pizza, Burgers, and Sushi in Miami, FL
                  </h1>
                  <span className="text-[clamp(2rem,5.2vw,3.5rem)] font-semibold text-white leading-[1.2] normal-case font-oswald">
                    MiFood
                  </span>
                </div>
                <div className="hidden md:flex mt-6">
                  <Link 
                    className="group relative flex items-center justify-center rounded-[0.625rem] text-[1rem] transition-all ease-in-out min-h-12 py-3 px-4 no-underline bg-[#004D3D] hover:bg-[#004D3D]/90 text-white font-medium shadow-[0px_1px_3px_0px_#00000026,0px_0px_0px_1px_#0000001a] font-sans"
                    href="#"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-black/4 rounded-[0.625rem]"></span>
                    <span className="flex flex-1 items-center justify-center gap-x-1">
                      <span className="flex flex-row items-center gap-x-[4px] whitespace-nowrap">Order online</span>
                      <span className="h-fit w-fit opacity-50 transition-opacity group-hover:opacity-100">
                        <svg aria-hidden="true" className="h-4 w-4 scale-[1.15] transition-transform group-hover:translate-x-0 translate-x-[-3px]" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <rect width="256" height="256" fill="none"></rect>
                          <line className="origin-[216px_128px] scale-x-0 transition-transform group-hover:scale-x-100" x1="70" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                          <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
                        </svg>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. Our Location Map Section */}
      <div className="w-full">
        <div className="py-[32px] md:py-[48px] mx-auto w-full items-center gap-6 px-4 md:gap-20 md:px-8 xl:gap-[140px] flex max-w-[1312px] flex-col justify-start md:flex-row-reverse md:justify-end">
          <div className="relative flex w-full overflow-hidden aspect-square h-auto max-w-screen-md rounded-[1.5rem]">
            <Image src={ingredientsBgImg} alt="123 Miami Beach, Miami FL 33139" className="h-full w-full object-cover" />
          </div>
          <div className="w-full flex flex-col gap-4">
            <div className="w-full px-6 md:px-0">
              <h2 className="font-semibold text-balance text-[1.75rem] leading-[1.3] m-0 text-[#0D0D0D] font-oswald">
                123 Miami Beach, Miami FL 33139
              </h2>
            </div>
            <div className="w-full flex flex-col gap-8 px-6 md:px-0">
              <div className="text-[1rem] flex flex-col gap-1 whitespace-pre-wrap text-[#4D4D4D] font-sans">
                {`Hours:

Monday: 11am – 10pm
Tuesday: 11am – 10pm
Wednesday: 11am – 10pm
Thursday: 11am – 11pm
Friday: 11am – 12am
Saturday: 11am – 12am
Sunday: 11am – 10pm`}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Gallery / Our Menu Section */}
      <section className="max-w-[1312px] py-[32px] md:py-[48px] mx-auto px-4 md:px-8">
        <div className="mx-auto flex flex-col gap-6">
          <div className="mx-auto w-full px-0">
            <div className="flex flex-col self-stretch text-balance md:self-center md:max-w-2xl gap-4">
              <h2 className="text-[1.75rem] font-semibold text-[#0D0D0D] m-0 font-oswald">OUR MENU</h2>
              <p className="text-[1rem] text-[#4D4D4D] m-0 font-sans">FRESH - DELICIOUS - MIAMI FLAMINGO</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
            {[pizzaMenuImg, burgerMenuImg, sushiMenuImg, pizzaMenuImg, burgerMenuImg, sushiMenuImg].map((img, i) => (
              <button key={i} type="button" className="relative flex aspect-square overflow-visible cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D3D]">
                <div className="rounded-[1.5rem] absolute inset-0 overflow-hidden bg-[#EBEBEC] transition-transform duration-300 hover:scale-[1.01] md:hover:scale-[1.02]">
                  <Image src={img} alt={`Menu item ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reviews / Testimonial Section */}
      <div className="py-[32px] md:py-[48px] max-w-[1536px] mx-auto flex p-2">
        <div className="bg-[#EBEBEC] rounded-[2rem] w-full">
          <div className="max-w-[1312px] mx-auto flex flex-col justify-center gap-8 pt-8 pb-3 md:py-[48px]">
            <div className="flex flex-col self-stretch text-balance text-center md:self-center md:max-w-2xl px-4 md:px-8">
              <h2 className="text-[1.75rem] font-semibold text-[#0D0D0D] m-0 font-oswald">What our guests are saying</h2>
            </div>
            <div className="max-w-[1312px] px-4 md:px-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-col gap-4">
                  <div className="flex p-6 bg-white rounded-[1.5rem] shadow-[0px_1px_3px_0px_#00000026,0px_0px_0px_1px_#0000001a]">
                    <div className="grow flex flex-col justify-between gap-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex gap-1 text-xl text-[#0D0D0D]">
                          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <div className="relative">
                          <p className="text-[1rem] text-[#0D0D0D] line-clamp-4 m-0 transition-all duration-200 font-sans">
                            The fastest food delivery in Miami! Their pizza and sushi are always incredibly fresh, and the burgers are simply unbeatable. I nearly cried afterwards it was that good.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Image src={customerFImg} alt="Reviewer Avatar" className="h-8 w-8 rounded-full object-cover" />
                        <p className="text-[0.875rem] font-medium text-[#4D4D4D] m-0 font-sans">Jane Miller.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Featuring Section */}
      <div className="max-w-[1312px] py-[32px] md:py-[48px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col self-stretch text-balance text-center md:self-center md:max-w-2xl">
            <h2 className="text-[1.75rem] font-semibold text-[#0D0D0D] m-0 font-oswald">Featuring</h2>
          </div>
          <div className="grid justify-items-center gap-6 self-center md:flex md:flex-wrap md:justify-center md:gap-x-4 md:gap-y-10 grid-cols-2">
            <div className="shrink-0 grow-0 flex flex-col items-center gap-2 text-center w-[150px] md:w-[220px]">
              <div className="md:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shopping-cart text-[#4D4D4D]"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              </div>
              <div>
                <p className="text-[0.875rem] font-medium text-[#0D0D0D] whitespace-nowrap m-0 font-sans">Takeout / Delivery</p>
              </div>
            </div>
            <div className="shrink-0 grow-0 flex flex-col items-center gap-2 text-center w-[150px] md:w-[220px]">
              <div className="md:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-utensils text-[#4D4D4D]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
              </div>
              <div>
                <p className="text-[0.875rem] font-medium text-[#0D0D0D] whitespace-nowrap m-0 font-sans">Catering Events</p>
              </div>
            </div>
            <div className="shrink-0 grow-0 flex flex-col items-center gap-2 text-center w-[150px] md:w-[220px]">
              <div className="md:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-check text-[#4D4D4D]"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
              </div>
              <div>
                <p className="text-[0.875rem] font-medium text-[#0D0D0D] whitespace-nowrap m-0 font-sans">Private Dining</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. Rewards / Action Banner */}
      <div className="py-[32px] md:py-[48px] max-w-[1536px] relative max-h-screen md:max-h-full xl:mx-auto p-2">
        <div className="relative flex md:min-h-[800px] md:items-center overflow-hidden rounded-[2rem]">
          <Image src={ingredientsBgImg} alt="Rewards Background" className="absolute top-0 left-0 w-full h-full object-cover object-center" />
          <div className="max-w-[1312px] mx-auto w-full px-2 pt-[200px] pb-2 md:p-8 relative z-10">
            <div className="rounded-[1.5rem] bg-white/80 flex w-full items-center p-6 shadow-lg backdrop-blur-2xl md:max-w-[632px] md:p-14 ml-auto">
              <div className="w-full flex flex-col gap-6 ">
                <div className="w-full">
                  <h2 className="font-semibold text-balance text-[1.75rem] text-[#0D0D0D] leading-[1.3] m-0 font-oswald">HUNGRY YET?</h2>
                </div>
                <div className="w-full flex flex-col gap-8">
                  <div className="text-[1rem] text-[#4D4D4D] flex flex-col gap-1 whitespace-pre-wrap font-sans">
                    Explore our diverse menu, from artisanal pizza to fresh sushi, and experience the best food delivery in Miami. Join our rewards program to earn points!
                  </div>
                  <div className="w-full md:w-fit ">
                    <Link 
                      className="group relative flex items-center justify-center rounded-[0.625rem] text-[1rem] transition-all ease-in-out min-h-12 py-3 px-4 no-underline w-full md:w-auto bg-[#004D3D] hover:bg-[#004D3D]/90 text-white font-medium font-sans" 
                      href="#" 
                    >
                      <span className="pointer-events-none absolute inset-0 bg-black/4 rounded-[0.625rem]"></span>
                      <span className="flex flex-1 items-center justify-center gap-x-1">
                        <span className="flex flex-row items-center gap-x-[4px] ">Order Food Online</span>
                        <span className="h-fit w-fit opacity-50 transition-opacity group-hover:opacity-100">
                          <svg aria-hidden="true" className="h-4 w-4 scale-[1.15] transition-transform group-hover:translate-x-0 translate-x-[-3px]" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                            <rect width="256" height="256" fill="none"></rect>
                            <line className="origin-[216px_128px] scale-x-0 transition-transform group-hover:scale-x-100" x1="70" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
                            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></polyline>
                          </svg>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
