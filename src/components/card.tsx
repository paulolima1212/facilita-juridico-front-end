import Image from 'next/image'

interface CardProps {
  image: string
  size: string
  price: number
  title: string
}

export function Card({ image, price, title, size }: CardProps) {
  return (
    <div className='w-56 bg-slate-100 rounded-md overflow-hidden group text-gray-900 '>
      <div className='overflow-hidden'>
        <Image
          className='group-hover:scale-150 group-hover:translate-y-8 transition duration-700'
          alt=''
          width={1500}
          height={1700}
          src={image}
        />
      </div>
      <div className='p-4 flex-col gap-4 w-full'>
        <p className='text-xl'>{title}</p>
        <p>{size}</p>
        <strong className='flex text-3xl text-right w-full mr-auto mt-4'>
          R$ {price}
        </strong>
      </div>
    </div>
  )
}
