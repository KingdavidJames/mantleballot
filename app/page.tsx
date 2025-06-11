import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#000907] to-[#042d18] text-white overflow-hidden relative">
      {/* Background watermark */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] opacity-10 pointer-events-none">
        <div className="text-[30rem] font-bold leading-none">Ballot</div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-white text-3xl font-bold flex items-center">
            <span className="mr-1">◼</span>Ballot
          </div>
        </div>
        <button className="bg-[#000b09]/50 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-[#000b09]/70 transition">
          Connect wallet
        </button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
            Empowering Communities
            <br />
            with Transparent,
            <br />
            Decentralized Voting
          </h1>
          <p className="text-[#d1fff6] mb-10 max-w-lg">
            Create and participate in secure, blockchain-powered polls for better governance and collective decisions.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#155749] hover:bg-[#175447] text-white px-6 py-3 rounded-full flex items-center transition">
              Launch App <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="bg-transparent border border-[#7befdb]/30 text-white px-6 py-3 rounded-full flex items-center hover:bg-[#7befdb]/10 transition">
              Create a Proposal <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          <div className="mt-16 flex items-center">
            <span className="text-sm text-[#d1fff6]/70 mr-2">Powered By</span>
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-[#000b09] border-t-transparent animate-spin"></div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-full h-full max-w-md">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="3D Ballot Sphere"
              width={500}
              height={500}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-16">Why Use Our Voting Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="border border-[#7befdb]/20 rounded-lg p-6 hover:bg-[#000b09]/30 transition">
              <div className="w-10 h-10 flex items-center justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-sm text-[#d1fff6]/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-[#e4fffa]/10 backdrop-blur-sm rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-light mb-12">How It Works</h2>

              <div className="mb-6">
                <div className="text-[#7befdb] mb-2">01</div>
                <h3 className="text-2xl md:text-3xl font-medium text-[#155749] mb-3">Connect Wallet</h3>
                <p className="text-[#155749]">Use MetaMask or WalletConnect to log in.</p>
              </div>

              <div className="flex gap-2 mt-12">
                <div className="w-24 h-1 bg-[#155749] rounded-full"></div>
                <div className="w-12 h-1 bg-[#d9d9d9] rounded-full"></div>
                <div className="w-12 h-1 bg-[#d9d9d9] rounded-full"></div>
                <div className="w-12 h-1 bg-[#d9d9d9] rounded-full"></div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image src="/placeholder.svg?height=400&width=400" alt="Digital Wallet" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className="text-white text-xl font-bold flex items-center">
            <span className="mr-1">◼</span>Ballot
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "On-Chain Transparency",
    description: "Every vote is recorded on the blockchain with verifiable, immutable trustless.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Proposal Creation",
    description: "Community members and leaders can easily propose initiatives.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    title: "Token-weighted Voting",
    description: "Vote with calculated based on user token holdings.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Gas-Efficient",
    description: "Built on low-cost, efficient and optimized for performance.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: "DAO Friendly",
    description: "Perfect for decentralized organizations and community governance.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-[#7befdb]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Snapshot Integration",
    description: "Integrate off-chain voting snapshots with on-chain finality.",
  },
]
