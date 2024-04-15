import { getAShirt } from '@/service/getAShirt'
import Image from 'next/image'

export default async function Details({ params }: { params: { id: string } }) {
  const { shirt } = await getAShirt(params.id)

  if (!shirt) {
    return <h1>loading...</h1>
  }

  return (
    <main className='flex w-full'>
      <div className='flex flex-row w-full text-zinc-100'>
        <Image alt='' src={shirt.image} width={400} height={600} />
        <div className='flex flex-col gap-6 ml-6'>
          <p className='text-4xl'>{shirt.title}</p>
          <p className='text-2xl'>{shirt.size}</p>
          <p className='text-4xl'>R$ {shirt.price}</p>
        </div>
      </div>
    </main>
  )
}
