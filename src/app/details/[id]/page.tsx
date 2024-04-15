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
        <Image alt='' src={'/camisa1.jpg'} width={800} height={1000} />
        <p>Camisa polo de corno</p>
        <p>{shirt.size}</p>
        <p>{shirt.price}</p>
      </div>
    </main>
  )
}
