import Image from 'next/image'
import { motion } from 'framer-motion'

interface WorkProjectCardProps {
  title: string
  company: string
  industry: string
  imageUrl: string
  logoUrl: string
  logoTextColor?: string
  delay?: number
}

export const WorkProjectCard = ({
  // title,
  company,
  industry,
  imageUrl,
  logoUrl,
  logoTextColor = "text-white",
  delay
}: WorkProjectCardProps) => {
  return (
    <motion.div
    className="group p-8 flex flex-col justify-between border-l border-[#21262d] h-80 bg-cover bg-center relative transition-all duration-300 ease-in-out hover:scale-[1.05] hover:z-10 hover:shadow-xl rounded-xl overflow-hidden"
    style={{ backgroundImage: `url(${imageUrl})` }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
  >
      <div className="flex items-center space-x-3 mb-12 z-10">
        <div className="relative w-16 h-16">
          <Image
            src={logoUrl}
            alt="Company logo"
            fill
            className="object-contain"
          />
        </div>
        <span className={`text-sm font-semibold ${logoTextColor}`}>{company}</span>
      </div>
      <div className="z-10">
        <p className="text-xs text-gray-300 mb-1">Industry</p>
        <p className="font-semibold text-white text-sm leading-snug max-w-[220px]">
          {industry}
        </p>
      </div>
      <div className="absolute inset-0 bg-black/60 rounded-lg opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
    </motion.div>
  )
}
