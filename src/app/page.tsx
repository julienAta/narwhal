import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function NarwhalCoinPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="relative bg-gray-200 px-4 py-16 text-center">
        <div className="container mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-gray-800">Narwhal</h1>
          <div className="relative mb-6">
            <Image
              src="/narwhal.webp"
              alt="Narwhal"
              width={300}
              height={300}
              className="mx-auto rounded-full border-4 border-gray-300"
            />
          </div>
          <p className="mx-auto mb-6 max-w-md text-xl">
            Meet Narwhal, an adorable rescue puppy who was born with a 'tail' on
            his head.
          </p>
          <p className="mb-6 inline-block rounded bg-gray-300 px-3 py-1 font-mono text-sm">
            CA: 4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump
          </p>
          <Link
            href="https://jup.ag/swap/SOL-4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gray-700 text-white transition-colors duration-200 hover:bg-gray-800"
            >
              BUY HERE
            </Button>
          </Link>
        </div>
      </header>

      {/* Social Links Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto flex justify-center space-x-8">
          <Link
            href="https://x.com/i/communities/1847304795410870625"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/twitter.avif"
              alt="Twitter"
              width={50}
              height={50}
              className="rounded-full border-2 border-gray-300"
            />
          </Link>
          <Link
            href="https://dexscreener.com/solana/8wxuytmunx3e21xcrccjgru6y29esj9ycya5ubjhbkwi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/dex.webp"
              alt="Dex Screener"
              width={50}
              height={50}
              className="rounded-full border-2 border-gray-300"
            />
          </Link>
          <Link
            href="https://t.me/narwhalcto"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src="/telegram.png"
              alt="Telegram"
              width={50}
              height={50}
              className="rounded-full border-2 border-gray-300"
            />
          </Link>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Tokenomics</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="bg-white shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <h3 className="mb-2 text-xl font-semibold">Total Supply</h3>
              <p className="text-3xl font-bold">999,996,901</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <h3 className="mb-2 text-xl font-semibold">LP Burned</h3>
              <p className="text-3xl font-bold">100%</p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg">
            <CardContent className="flex flex-col items-center p-6">
              <h3 className="mb-2 text-xl font-semibold">Tax</h3>
              <p className="text-3xl font-bold">0%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-200 py-4 text-center text-sm">
        <p>© 2023 Narwhal Coin. All rights reserved. Invest responsibly.</p>
      </footer>
    </div>
  )
}
