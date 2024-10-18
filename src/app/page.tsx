'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const HeaderMain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-10 flex h-full w-full flex-col items-center justify-center space-y-14 px-4 md:p-2 lg:p-4"
    >
      <motion.h1
        className="text-6xl font-bold text-[#764824]"
        whileHover={{ scale: 1.05 }}
      >
        Narwhal
      </motion.h1>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-8 overflow-hidden rounded-xl border-4 border-[#764824] shadow-lg"
      >
        <Image
          alt="Narwhal"
          src="/narwhal.webp"
          width={300}
          height={300}
          objectFit="cover"
        />
      </motion.div>
      <motion.div
        className="mt-4 max-w-md rounded-xl bg-[#fdf5e7] p-5 text-center text-xl font-bold text-[#764824] shadow-md"
        whileHover={{ scale: 1.02 }}
      >
        Meet Narwhal, an adorable rescue puppy who was born with a
        &apos;tail&apos; on his head.
      </motion.div>
      <motion.div
        className="mt-4 hidden max-w-fit text-right text-xl font-bold text-[#764824] md:block"
        whileHover={{ scale: 1.05 }}
      >
        CA: 4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump
      </motion.div>
      <motion.div
        className="mt-4 space-x-1 md:space-x-10"
        whileHover={{ scale: 1.05 }}
      >
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://jup.ag/swap/SOL-4t8cP8su2yVDb7LhYvANMJoDTTXCFTxrFTqSyBRapump"
        >
          <Button className="rounded-xl bg-[#764824] text-white transition-colors duration-300 hover:bg-[#8b582d]">
            BUY HERE
          </Button>
        </Link>
      </motion.div>
      <motion.div
        className="flex items-center justify-center space-x-16 pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {[
          {
            href: 'https://x.com/i/communities/1847304795410870625',
            src: '/twitter.avif',
            alt: 'Twitter',
          },
          {
            href: 'https://dexscreener.com/solana/8wxuytmunx3e21xcrccjgru6y29esj9ycya5ubjhbkwi',
            src: '/dex.webp',
            alt: 'Dex Screener',
          },
          {
            href: 'https://t.me/narwhalcto',
            src: '/telegram.png',
            alt: 'Telegram',
          },
        ].map((link, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link target="_blank" rel="noopener noreferrer" href={link.href}>
              <Avatar className="h-12 w-12 border-2 border-[#764824]">
                <AvatarImage alt={link.alt} src={link.src} />
              </Avatar>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

const Tokenomics = () => {
  const tokenomicsData = [
    { title: 'Total supply', value: '999,996,901', image: '/narwhal.webp' },
    { title: 'LP Burned', value: '100%', image: '/narwhal.webp' },
    { title: 'Tax', value: '0%', image: '/narwhal.webp' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl bg-gradient-to-b from-[#fdf5e7] to-white px-4 py-16 shadow-lg"
    >
      <h2 className="mb-12 text-center text-5xl font-bold text-[#764824]">
        Tokenomics
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {tokenomicsData.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl sm:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="relative mx-auto mb-6 h-32 w-32">
              <Image
                alt={item.title}
                src={item.image}
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-[#764824]"
              />
            </div>
            <h3 className="mb-2 text-2xl font-semibold text-[#764824]">
              {item.title}
            </h3>
            <p className="text-xl font-medium text-slate-700">{item.value}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center gap-20 bg-gradient-to-b from-[#fdf5e7] to-white">
      <div className="mt-6 flex w-11/12 flex-1 flex-col gap-20">
        <main className="flex flex-1 flex-col gap-6 text-[#764824]">
          <HeaderMain />
          <Tokenomics />
        </main>
      </div>
    </div>
  )
}
