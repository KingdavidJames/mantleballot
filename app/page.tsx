"use client"
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import { Albert_Sans } from "next/font/google";
import { useEffect, useState } from "react";


const albertSans = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // or use "variable" for full range
  display: "swap",
});



export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="min-h-screen bg-[#000907] text-white overflow-hidden relative">
  {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle_at_top_right,_#042d18,_#00090700)] pointer-events-none z-0" /> */}
  {/* Background watermark */}
      <div className="absolute bottom-0 left-0 h-[25vh] lg:h-[45vh] opacity-50 pointer-events-none">
        {/* <p className="text-[30rem] font-bold bg-[linear-gradient(180deg,#000000_0%,#323332_100%)] bg-clip-text text-transparent">
          Ballot
        </p> */}
        <div className="pt-20">
          <Image
            src="/BallotBanner.png"
            alt="Ballot Banner"
            width={100}
            height={100}
            className="w-[100%]"
          />
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 pb-6 lg:pt-24 pt-10 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <Image
              src="/logo-main.png"
              alt="Ballot Logo"
              width={105}
              height={55}
              className="z-50"
              priority
            />
          </div>
        </div>
        <button className="bg-[#000b09]/50 backdrop-blur-sm border border-white text-white px-4 py-2 rounded-[10px] hover:bg-[#000b09]/70 transition z-50">
          Connect wallet
        </button>
      </header>

      {/* Hero Section */}
      <section className="containe mx-auto ps-4 lg:ps-14 pt-16 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-xs md:max-w-md lg:max-w-2xl z-50 font-medium leading-tight mb-3 lg:mb-6 font-sans bg-[radial-gradient(87.86%_291.72%_at_50%_50.31%,_#ffffff_0%,_#2c3332_100%)] bg-clip-text text-transparent">
            Empowering Communities with Transparent, Decentralized Voting
          </h1>
          <p className="text-white mb-10 max-w-xl font-light font-sans text-sm lg:text-lg z-50">
            Create and participate in secure, blockchain-powered polls for better governance and collective decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="hover:bg-[#17544725] border border-[#D1FFF6] font-sans text-white px-10 py-3 rounded-full flex items-center transition">
              Launch App <GoArrowUpRight className="ml-2 h-4 w-4" />
            </button>
            <button className="[background:linear-gradient(90.49deg,_#FFFFFF_53.27%,_#145548_122.07%,_#739A92_122.07%)] backdrop-blur-md text-black font-sans px-6 py-3 rounded-full flex items-center transition">
              Create a Proposal <GoArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="mt-16 flex items-center">
            <span className="text-lg text-white mr-2 font-sans">Powered By</span>
            <div className="">
              <Image
                src="/mantle-logo.png"
                alt="Mantle Logo"
                width={48}
                height={48}
                className=""
              />
            </div>
          </div>
        </div>
        <div className="absolute top-10 right-0 flex justify-end items-center">
          <div className="w-full h-full max-w-lg">
            <Image
              src="/ballotHero.png?height=500&width=500"
              alt="3D Ballot Sphere"
              width={500}
              height={500}
              className="object-fill hidden lg:block rounded-[20px] shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 lg:py-20">
        <h2 className="text-3xl md:text-4xl text-center font-medium mb-16 font-sans bg-[radial-gradient(87.86%_291.72%_at_50%_50.31%,_#ffffff_0%,_#2c3332_100%)] bg-clip-text text-transparent">
          Why Use Our Voting Platform?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border border-[#E4FFFA] rounded-[10px] p-6 hover:bg-[#000b09]/30 transition flex items-center justify-between">
              <div className="w-10 h-10 flex items-center justify-center mb-4">{feature.icon}</div>
              <div className="ms-5">
                <h3 className="text-2xl font-sans mb-2 text-white">{feature.title}</h3>
                <p className="text-sm font-light font-sans text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-[#D9D9D9] backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="relative w-full h-[500px] md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ease-in-out ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  } flex flex-col md:flex-row items-center justify-between md:ps-16`}
              >
                {/* Text Section */}
                <div className="flex-1 flex flex-col justify-between h-full py-8 lg:py-8">
                  <div>
                    <h2 className="lg:text-4xl text-2xl font-medium font-sans mb-5 px-8 lg:px-0 lg:mb-24 mt-2 lg:mt-8 bg-[radial-gradient(87.86%_291.72%_at_50%_50.31%,_#1A4F44_0%,_#2c3332_100%)] bg-clip-text text-transparent">
                      How It Works
                    </h2>

                    <p className="text-[#155749] text-sm md:text-sm px-8 lg:px-0 font-sans">{slide.number}</p>
                    <h2 className="text-2xl lg:text-5xl font-medium font-sans px-8 lg:px-0 mb-2 lg:mb-4 mt-1 bg-[radial-gradient(87.86%_291.72%_at_50%_50.31%,_#155749_0%,_#2c3332_100%)] bg-clip-text text-transparent">
                      {slide.heading}
                    </h2>
                    <p className="text-[#155749] text-sm lg:text-base px-8 lg:px-0 font-sans">{slide.text}</p>
                  </div>
                  {/* Indicators */}
                  <div className="flex gap-2 mt-6">
                    {slides.map((_, i) => (
                      <span
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`h-1 cursor-pointer rounded-full transition-all ${activeIndex === i
                          ? "w-[100px] bg-[#175447]"
                          : "w-[80px] bg-white"
                          }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image Section */}
                <div className="flex-1 h-full mt-6 md:mt-0">
                  <img
                    src={slide.image}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold flex items-center">
            <Image
              src="/logo-main.png"
              alt="Ballot Logo"
              width={105}
              height={55}
              className="z-50"
              priority
            />
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9999 34.6667C18.4066 34.6667 18.7849 34.4784 19.5433 34.1L25.6266 31.0717C28.3216 29.7334 29.6666 29.0617 29.6666 28V14.6667M17.9999 34.6667C17.5933 34.6667 17.2149 34.4784 16.4566 34.1L10.3733 31.0717C7.67825 29.7334 6.33325 29.0617 6.33325 28V14.6667M17.9999 34.6667V21.3334M29.6666 14.6667C29.6666 13.605 28.3199 12.935 25.6283 11.595L19.5433 8.56504C18.7833 8.18837 18.4066 8.00004 17.9999 8.00004M29.6666 14.6667C29.6666 15.7284 28.3199 16.3984 25.6283 17.7384L19.5433 20.7684C18.7849 21.145 18.4066 21.3334 17.9999 21.3334M6.33325 14.6667C6.33325 13.605 7.67825 12.9334 10.3733 11.595L16.4566 8.56671C17.2149 8.18837 17.5933 8.00004 17.9999 8.00004M6.33325 14.6667C6.33325 15.7284 7.67992 16.3984 10.3716 17.7384L16.4566 20.7684C17.2149 21.145 17.5933 21.3334 17.9999 21.3334M17.9999 8.00004V1.33337M34.6666 33L29.6666 28.8334M1.33325 33L6.33325 28.8334" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "On-Chain Transparency",
    description: "Every vote is recorded on the blockchain with verifiable, immutable trustless.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.925 5.59998C20.8067 5.01665 19.2917 5.00832 18.1634 5.58998C13.8417 7.82332 9.92171 10.3816 6.48671 13.22C5.95505 13.6583 5.57838 14.2966 5.58505 15.0466C5.59171 15.795 5.97505 16.4233 6.50338 16.855C9.91005 19.64 13.8334 22.2016 18.075 24.4166C19.195 25 20.7084 25.0083 21.8367 24.4266C26.1584 22.1933 30.0784 19.635 33.5134 16.7966C34.045 16.3583 34.4217 15.72 34.415 14.97C34.4084 14.2217 34.0234 13.5933 33.4967 13.1616C30.09 10.3766 26.1667 7.81498 21.925 5.59998ZM19.3084 7.81165C19.5383 7.70943 19.7873 7.65703 20.0389 7.65789C20.2905 7.65875 20.5392 7.71286 20.7684 7.81665C24.8167 9.92998 28.5467 12.3616 31.7784 14.9866C28.5284 17.655 24.8084 20.0783 20.69 22.205C20.29 22.4116 19.635 22.41 19.2317 22.2C15.1834 20.0866 11.4534 17.655 8.22005 15.03C11.4717 12.3616 15.1917 9.93832 19.31 7.81165" fill="white" />
        <path d="M35.3285 21.1633C35.5039 21.4445 35.5605 21.7837 35.4858 22.1066C35.4111 22.4294 35.2112 22.7094 34.9302 22.885L24.7519 29.24C23.3702 30.1033 21.6569 30.5016 20.0002 30.5016C18.3435 30.5016 16.6302 30.1016 15.2485 29.2416L5.18187 22.9583C4.90052 22.7828 4.7004 22.5027 4.62554 22.1797C4.55068 21.8567 4.60722 21.5171 4.7827 21.2358C4.95819 20.9544 5.23825 20.7543 5.56128 20.6795C5.88431 20.6046 6.22385 20.6611 6.5052 20.8366L16.5719 27.12C17.4785 27.6866 18.7102 28.0016 20.0002 28.0016C21.2885 28.0016 22.5202 27.685 23.4269 27.1183L33.6069 20.765C33.888 20.5896 34.2273 20.533 34.5502 20.6077C34.873 20.6824 35.153 20.8823 35.3285 21.1633Z" fill="white" />
        <path d="M35.3281 27.4216C35.5035 27.7028 35.5601 28.0421 35.4854 28.3649C35.4107 28.6878 35.2108 28.9678 34.9298 29.1433L26.1165 34.65C24.3531 35.75 22.1498 36.2683 19.9998 36.2683C17.8531 36.2683 15.6498 35.7516 13.8848 34.6516L5.18148 29.2183C4.90012 29.0426 4.7001 28.7623 4.62539 28.4391C4.55069 28.116 4.60744 27.7763 4.78314 27.495C4.95885 27.2136 5.23912 27.0136 5.56231 26.9389C5.8855 26.8642 6.22512 26.9209 6.50648 27.0966L15.2098 32.53C16.4981 33.335 18.2215 33.7683 20.0015 33.7683C21.7815 33.7683 23.5048 33.335 24.7931 32.53L33.6065 27.025C33.7458 26.9379 33.9008 26.8791 34.0629 26.852C34.2249 26.8249 34.3907 26.83 34.5507 26.8669C34.7108 26.9039 34.8619 26.9721 34.9956 27.0676C35.1293 27.1631 35.2429 27.2839 35.3298 27.4233" fill="white" />
      </svg>
    ),
    title: "Proposal Creation",
    description: "Community members and leaders can easily propose initiatives.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M31.404 20.23C29.56 19.484 26.94 19 24 19V17C27.134 17 30.016 17.512 32.152 18.374C33.218 18.806 34.148 19.342 34.826 19.992C35.506 20.642 36 21.472 36 22.444C36 23.418 35.508 24.246 34.826 24.898C34.146 25.546 33.218 26.084 32.152 26.514C30.016 27.378 27.132 27.888 24 27.888C20.866 27.888 17.984 27.378 15.848 26.514C14.782 26.084 13.852 25.546 13.174 24.898C12.494 24.246 12 23.418 12 22.444H14C14 22.698 14.124 23.038 14.556 23.452C14.988 23.866 15.672 24.286 16.596 24.66C18.442 25.406 21.058 25.888 24 25.888C26.94 25.888 29.56 25.406 31.404 24.66C32.328 24.286 33.01 23.866 33.444 23.452C33.878 23.038 34 22.698 34 22.444C34 22.19 33.876 21.85 33.444 21.438C33.01 21.022 32.328 20.602 31.404 20.23Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13 22.334C13.2652 22.334 13.5196 22.4393 13.7071 22.6269C13.8946 22.8144 14 23.0688 14 23.334V29.554C14 29.81 14.124 30.15 14.556 30.562C14.99 30.978 15.672 31.398 16.596 31.772C18.442 32.516 21.058 33 24 33C26.94 33 29.56 32.516 31.404 31.772C32.328 31.398 33.01 30.978 33.444 30.562C33.876 30.15 34 29.81 34 29.556V23.334C34 23.0688 34.1054 22.8144 34.2929 22.6269C34.4804 22.4393 34.7348 22.334 35 22.334C35.2652 22.334 35.5196 22.4393 35.7071 22.6269C35.8946 22.8144 36 23.0688 36 23.334V29.554C36 30.53 35.508 31.358 34.826 32.008C34.144 32.658 33.218 33.194 32.152 33.626C30.016 34.488 27.132 35 24 35C20.866 35 17.984 34.488 15.848 33.626C14.782 33.196 13.852 32.658 13.174 32.008C12.494 31.358 12 30.528 12 29.556V23.334C12 23.0688 12.1054 22.8144 12.2929 22.6269C12.4804 22.4393 12.7348 22.334 13 22.334Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M17.4 33.452V26H19.4V33.452H17.4ZM26.2 33V27H28.2V33H26.2ZM4.556 9.438C4.124 9.85 4 10.19 4 10.444C4 10.698 4.124 11.038 4.556 11.452C4.988 11.866 5.672 12.286 6.596 12.66C8.442 13.406 11.058 13.888 14 13.888C16.94 13.888 19.56 13.406 21.404 12.66C22.328 12.286 23.01 11.866 23.444 11.452C23.878 11.038 24 10.698 24 10.444C24 10.19 23.876 9.85 23.444 9.438C23.01 9.022 22.328 8.602 21.404 8.228C19.558 7.484 16.94 7 14 7C11.06 7 8.44 7.484 6.596 8.228C5.672 8.602 4.99 9.022 4.556 9.438ZM5.848 6.374C7.984 5.512 10.868 5 14 5C17.134 5 20.016 5.512 22.152 6.374C23.218 6.806 24.148 7.342 24.826 7.992C25.506 8.642 26 9.472 26 10.444C26 11.418 25.508 12.246 24.826 12.898C24.146 13.546 23.218 14.084 22.152 14.514C20.016 15.378 17.132 15.888 14 15.888C10.866 15.888 7.984 15.378 5.848 14.514C4.782 14.084 3.852 13.546 3.174 12.898C2.494 12.246 2 11.418 2 10.444C2 9.472 2.492 8.644 3.174 7.992C3.856 7.34 4.782 6.806 5.848 6.374Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3 10.334C3.26522 10.334 3.51957 10.4393 3.70711 10.6269C3.89464 10.8144 4 11.0688 4 11.334V17.554C4 17.81 4.124 18.15 4.556 18.562C4.99 18.978 5.672 19.398 6.596 19.772C8.442 20.516 11.058 21 14 21C16.94 21 19.56 20.516 21.404 19.772C22.328 19.398 23.01 18.978 23.444 18.562C23.876 18.15 24 17.81 24 17.556V11.334C24 11.0688 24.1054 10.8144 24.2929 10.6269C24.4804 10.4393 24.7348 10.334 25 10.334C25.2652 10.334 25.5196 10.4393 25.7071 10.6269C25.8946 10.8144 26 11.0688 26 11.334V17.554C26 18.53 25.508 19.358 24.826 20.008C24.144 20.658 23.218 21.196 22.152 21.626C20.016 22.488 17.132 23 14 23C10.866 23 7.984 22.488 5.848 21.626C4.782 21.194 3.852 20.658 3.174 20.008C2.494 19.36 2 18.528 2 17.556V11.334C2 11.0688 2.10536 10.8144 2.29289 10.6269C2.48043 10.4393 2.73478 10.334 3 10.334Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7.3999 21V14.226H9.3999V21H7.3999ZM16.1999 21V15H18.1999V21H16.1999Z" fill="white" />
      </svg>
    ),
    title: "Token-weighted Voting",
    description: "Vote with calculated based on user token holdings.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.0316 15C14.8614 12.7929 15.3714 10.5866 16.4931 8.67807C17.6147 6.76957 19.2941 5.25049 21.3051 4.32529C23.3162 3.40009 25.5625 3.11319 27.7415 3.50321C29.9206 3.89323 31.9279 4.94144 33.4932 6.50676C35.0585 8.07207 36.1067 10.0794 36.4967 12.2584C36.8867 14.4375 36.5998 16.6837 35.6746 18.6948C34.7494 20.7059 33.2304 22.3853 31.3219 23.5069C29.4134 24.6285 27.2071 25.1385 24.9999 24.9683" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M36.6666 28.3334C36.6666 29.6595 36.1398 30.9312 35.2021 31.8689C34.2644 32.8066 32.9927 33.3334 31.6666 33.3334H28.3333M28.3333 33.3334L31.6666 30M28.3333 33.3334L31.6666 36.6667M3.33325 11.6667C3.33325 10.3406 3.86004 9.06886 4.79772 8.13117C5.7354 7.19349 7.00717 6.66671 8.33325 6.66671H11.6666M11.6666 6.66671L8.33325 10M11.6666 6.66671L8.33325 3.33337M14.1666 36.6667C11.2934 36.6667 8.53791 35.5253 6.50626 33.4937C4.47462 31.4621 3.33325 28.7066 3.33325 25.8334C3.33325 22.9602 4.47462 20.2047 6.50626 18.173C8.53791 16.1414 11.2934 15 14.1666 15C17.0398 15 19.7953 16.1414 21.8269 18.173C23.8586 20.2047 24.9999 22.9602 24.9999 25.8334C24.9999 28.7066 23.8586 31.4621 21.8269 33.4937C19.7953 35.5253 17.0398 36.6667 14.1666 36.6667Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Gas-Efficient",
    description: "Built on low-cost, efficient and optimized for performance.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.0002 7.5C19.2266 7.5 18.4847 7.80729 17.9378 8.35427C17.3908 8.90125 17.0835 9.64312 17.0835 10.4167C17.0835 11.1902 17.3908 11.9321 17.9378 12.4791C18.4847 13.026 19.2266 13.3333 20.0002 13.3333C20.7737 13.3333 21.5156 13.026 22.0626 12.4791C22.6095 11.9321 22.9168 11.1902 22.9168 10.4167C22.9168 9.64312 22.6095 8.90125 22.0626 8.35427C21.5156 7.80729 20.7737 7.5 20.0002 7.5ZM14.5835 10.4167C14.5835 8.98008 15.1542 7.60233 16.17 6.5865C17.1858 5.57068 18.5636 5 20.0002 5C21.4368 5 22.8145 5.57068 23.8303 6.5865C24.8461 7.60233 25.4168 8.98008 25.4168 10.4167C25.4168 11.8533 24.8461 13.231 23.8303 14.2468C22.8145 15.2626 21.4368 15.8333 20.0002 15.8333C18.5636 15.8333 17.1858 15.2626 16.17 14.2468C15.1542 13.231 14.5835 11.8533 14.5835 10.4167ZM8.3335 10.8333C7.67045 10.8333 7.03457 11.0967 6.56573 11.5656C6.09689 12.0344 5.8335 12.6703 5.8335 13.3333C5.8335 13.9964 6.09689 14.6323 6.56573 15.1011C7.03457 15.5699 7.67045 15.8333 8.3335 15.8333C8.99654 15.8333 9.63242 15.5699 10.1013 15.1011C10.5701 14.6323 10.8335 13.9964 10.8335 13.3333C10.8335 12.6703 10.5701 12.0344 10.1013 11.5656C9.63242 11.0967 8.99654 10.8333 8.3335 10.8333ZM3.3335 13.3333C3.3335 12.0073 3.86028 10.7355 4.79796 9.7978C5.73564 8.86012 7.00741 8.33333 8.3335 8.33333C9.65958 8.33333 10.9313 8.86012 11.869 9.7978C12.8067 10.7355 13.3335 12.0073 13.3335 13.3333C13.3335 14.6594 12.8067 15.9312 11.869 16.8689C10.9313 17.8065 9.65958 18.3333 8.3335 18.3333C7.00741 18.3333 5.73564 17.8065 4.79796 16.8689C3.86028 15.9312 3.3335 14.6594 3.3335 13.3333ZM29.1668 13.3333C29.1668 12.6703 29.4302 12.0344 29.8991 11.5656C30.3679 11.0967 31.0038 10.8333 31.6668 10.8333C32.3299 10.8333 32.9658 11.0967 33.4346 11.5656C33.9034 12.0344 34.1668 12.6703 34.1668 13.3333C34.1668 13.9964 33.9034 14.6323 33.4346 15.1011C32.9658 15.5699 32.3299 15.8333 31.6668 15.8333C31.0038 15.8333 30.3679 15.5699 29.8991 15.1011C29.4302 14.6323 29.1668 13.9964 29.1668 13.3333ZM31.6668 8.33333C30.3407 8.33333 29.069 8.86012 28.1313 9.7978C27.1936 10.7355 26.6668 12.0073 26.6668 13.3333C26.6668 14.6594 27.1936 15.9312 28.1313 16.8689C29.069 17.8065 30.3407 18.3333 31.6668 18.3333C32.9929 18.3333 34.2647 17.8065 35.2024 16.8689C36.14 15.9312 36.6668 14.6594 36.6668 13.3333C36.6668 12.0073 36.14 10.7355 35.2024 9.7978C34.2647 8.86012 32.9929 8.33333 31.6668 8.33333ZM12.5002 21.25C12.5002 19.64 13.8068 18.3333 15.4168 18.3333H24.5835C26.1935 18.3333 27.5002 19.64 27.5002 21.25V27.5C27.5002 29.4891 26.71 31.3968 25.3035 32.8033C23.8969 34.2098 21.9893 35 20.0002 35C18.011 35 16.1034 34.2098 14.6969 32.8033C13.2903 31.3968 12.5002 29.4891 12.5002 27.5V21.25ZM15.4168 20.8333C15.3063 20.8333 15.2003 20.8772 15.1222 20.9554C15.0441 21.0335 15.0002 21.1395 15.0002 21.25V27.5C15.0002 28.8261 15.5269 30.0979 16.4646 31.0355C17.4023 31.9732 18.6741 32.5 20.0002 32.5C21.3262 32.5 22.598 31.9732 23.5357 31.0355C24.4734 30.0979 25.0002 28.8261 25.0002 27.5V21.25C25.0002 21.1395 24.9563 21.0335 24.8781 20.9554C24.8 20.8772 24.694 20.8333 24.5835 20.8333H15.4168ZM11.0168 19.9633C10.8957 20.3733 10.8346 20.8022 10.8335 21.25V22.6L6.1435 23.8567C6.03676 23.8852 5.94571 23.9549 5.89039 24.0506C5.83507 24.1462 5.82 24.2599 5.8485 24.3667L7.03516 28.795C7.33953 29.931 8.03456 30.9233 8.9981 31.5975C9.96164 32.2718 11.132 32.5848 12.3035 32.4817C12.8285 33.2917 13.4785 34.0133 14.2252 34.6183C13.2553 34.9399 12.2299 35.0599 11.212 34.971C10.194 34.882 9.20502 34.586 8.3056 34.1011C7.40618 33.6162 6.61533 32.9527 5.98158 32.1511C5.34783 31.3496 4.88455 30.427 4.62016 29.44L3.4335 25.0133C3.23341 24.2663 3.3382 23.4704 3.72482 22.8006C4.11143 22.1309 4.74822 21.642 5.49516 21.4417L11.0168 19.9633ZM25.7752 34.6183C25.9141 34.665 26.0546 34.7072 26.1968 34.745C28.1181 35.2596 30.1651 34.99 31.8876 33.9955C33.6101 33.0009 34.867 31.3629 35.3818 29.4417L36.5685 25.015C36.6678 24.645 36.6933 24.2591 36.6434 23.8792C36.5935 23.4994 36.4693 23.1331 36.2779 22.8013C36.0864 22.4694 35.8315 22.1786 35.5276 21.9453C35.2237 21.712 34.8769 21.5409 34.5068 21.4417L28.9835 19.9617C29.1046 20.3728 29.1657 20.8022 29.1668 21.25V22.6L33.8602 23.8567C33.9666 23.8855 34.0572 23.9555 34.1122 24.051C34.1672 24.1466 34.182 24.2601 34.1535 24.3667L32.9668 28.795C32.6624 29.9313 31.9671 30.9238 31.0032 31.5981C30.0394 32.2724 28.8686 32.5853 27.6968 32.4817C27.1726 33.2905 26.5241 34.0116 25.7752 34.6183Z" fill="white" />
      </svg>
    ),
    title: "DAO Friendly",
    description: "Perfect for decentralized organizations and community governance.",
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 37.5H5C3.625 37.5 2.5 36.375 2.5 35V20H5V35H35V5H20V2.5H35C36.375 2.5 37.5 3.625 37.5 5V35C37.5 36.375 36.375 37.5 35 37.5ZM28.125 15.125L20.625 11.375C20.25 11.25 19.875 11.25 19.5 11.375L12 15.125C11.625 15.375 11.375 15.75 11.25 16.25V25C11.25 25.5 11.5 25.875 12 26.125L19.5 29.875C19.875 30 20.25 30 20.625 29.875L28.125 26.125C28.5 25.875 28.75 25.5 28.875 25V16.25C28.875 15.75 28.625 15.375 28.25 15.125H28.125ZM20 13.875L24.75 16.25L20 18.625L15.25 16.25L20 13.875ZM13.75 18.25L18.75 20.75V26.75L13.75 24.25V18.25ZM21.25 26.75V20.75L26.25 18.25V24.25L21.25 26.75ZM0 12.5H6.25V15H0V12.5ZM15 0V6.25H12.5V0H15ZM4.25 2.5L8.625 6.875L6.875 8.625L2.5 4.25L4.25 2.5Z" fill="white" />
      </svg>
    ),
    title: "Snapshot Integration",
    description: "Integrate off-chain voting snapshots with on-chain finality.",
  },
]

const slides = [
  {
    number: "01",
    heading: "Connect Wallet",
    text: "Use MetaMask or WalletConnect to log in.",
    image:
      "/connect-wallet.png",
  },
  {
    number: "02",
    heading: "Create or Explore Proposals",
    text: "Browse active governance topics or initiate your own.",
    image:
      "/create-proposal.png",
  },
  {
    number: "03",
    heading: "Vote Securely",
    text: "Cast your vote based on your governance token balance",
    image:
      "/vote-securely.png",
  },
  {
    number: "04",
    heading: "View Results in Real Time",
    text: "Results update as votes are cast fully transparent.",
    image:
      "/view-results.png",
  },
];