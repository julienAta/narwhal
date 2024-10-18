import { AvatarImage, Avatar } from '@/components/ui/avatar'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'

export function HeaderMain() {
  return (
    <div className="my-10 flex h-full w-full items-center justify-center    md:p-2 lg:p-4">
      <div className="flex flex-col items-center  space-y-14">
        <h1 className="text-6xl font-bold ">Narwhal</h1>
        <div className="mt-8">
          <Image
            alt="Cat"
            className="rounded-xl border-4 border-[#764824]"
            height="300"
            src="/narwhal.webp"
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="300"
          />
        </div>
        <div className="mt-4 rounded-xl bg-[#fdf5e7] p-5 text-center  text-xl font-bold">
          Meet Narwhal, an adorable rescue puppy who was born with a ‘tail' on
          his head.
        </div>
        <div className="mt-4 hidden max-w-fit  text-right text-xl font-bold md:block">
          CA: 4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump
        </div>
        <div className="mt-4 space-x-1  text-xl font-bold   md:space-x-10">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://jup.ag/swap/SOL-4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump"
          >
            <Button className="rounded-xl bg-[#764824]">BUY HERE</Button>
          </Link>
        </div>
        <div className="flex items-center justify-center space-x-16 pt-16">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/i/communities/1847304795410870625"
          >
            <Avatar className="">
              <AvatarImage alt="michi twitter" src="/twitter.avif" />
            </Avatar>
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://dexscreener.com/solana/8wxuytmunx3e21xcrccjgru6y29esj9ycya5ubjhbkwi"
          >
            <Avatar className="">
              <AvatarImage alt="Profile picture" src="/dex.webp" />
            </Avatar>
          </Link>
          {/* <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/michiportal"
          >
            <Avatar className="">
              <AvatarImage alt="Profile picture" src="/telegram.png" />
            </Avatar>
          </Link> */}
        </div>
      </div>
    </div>
  )
}
