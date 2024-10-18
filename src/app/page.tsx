import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronDown } from 'lucide-react'

export default function NarwhalCoinPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Header Section */}
      <header className="relative px-4 py-24 text-center">
        <div className="container mx-auto">
          <h1 className="mb-6 text-5xl font-bold text-blue-800">
            Narwhal Coin
          </h1>
          <div className="relative mb-8">
            <Image
              src="/narwhal.webp"
              alt="Narwhal"
              width={350}
              height={350}
              className="mx-auto rounded-full border-4 border-blue-300 shadow-lg"
            />
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-gray-600">
            Meet Narwhal, an adorable rescue puppy who was born with a
            &apos;tail&apos; on his head. Now, he&apos;s swimming into the world
            of cryptocurrency!
          </p>
          <div className="mb-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
            <p className="rounded-full bg-blue-100 px-6 py-3 font-mono text-sm text-blue-800 shadow-md">
              CA: 4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump
            </p>
            <Link
              href="https://jup.ag/swap/SOL-4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg"
              >
                Buy Narwhal Coin
              </Button>
            </Link>
          </div>
          <ChevronDown className="mx-auto mt-12 h-8 w-8 animate-bounce text-blue-500" />
        </div>
      </header>

      {/* Social Links Section */}
      <section className="bg-white py-12 shadow-md">
        <div className="container mx-auto">
          <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
            Join Our Community
          </h2>
          <div className="flex justify-center space-x-12">
            <Link
              href="https://x.com/i/communities/1847304795410870625"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <Image
                src="/twitter.avif"
                alt="Twitter"
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-300 shadow-md transition-all duration-200 group-hover:border-blue-500 group-hover:shadow-lg"
              />
            </Link>
            <Link
              href="https://dexscreener.com/solana/8wxuytmunx3e21xcrccjgru6y29esj9ycya5ubjhbkwi"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <Image
                src="/dex.webp"
                alt="Dex Screener"
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-300 shadow-md transition-all duration-200 group-hover:border-blue-500 group-hover:shadow-lg"
              />
            </Link>
            <Link
              href="https://t.me/narwhalcto"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-110"
            >
              <Image
                src="/telegram.png"
                alt="Telegram"
                width={60}
                height={60}
                className="rounded-full border-2 border-blue-300 shadow-md transition-all duration-200 group-hover:border-blue-500 group-hover:shadow-lg"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold text-blue-800">
          Tokenomics
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardContent className="flex flex-col items-center p-8">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                Total Supply
              </h3>
              <p className="text-4xl font-bold text-gray-800">999,996,901</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardContent className="flex flex-col items-center p-8">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">
                LP Burned
              </h3>
              <p className="text-4xl font-bold text-gray-800">100%</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg transition-all duration-200 hover:shadow-xl">
            <CardContent className="flex flex-col items-center p-8">
              <h3 className="mb-4 text-2xl font-semibold text-blue-600">Tax</h3>
              <p className="text-4xl font-bold text-gray-800">0%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 py-8 text-center text-sm text-white">
        <p className="mb-2">© 2024 Narwhal Coin. All rights reserved.</p>
        <p>Invest responsibly. Cryptocurrency investments carry high risk.</p>
      </footer>
    </div>
  )
}
