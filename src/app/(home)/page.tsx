import { Card } from '@/components/card'
import { Input } from '@/components/ui/input'
import { getAllShirts } from '@/service/getAllShirts'
import Link from 'next/link'

export default async function Home() {
  const { shirts } = await getAllShirts()

  return (
    <main className='w-full items-center justify-center min-h-full'>
      <div className='flex flex-col'>
        <div className='mb-6'>
          <Input placeholder='Faça uma busca...' />
        </div>
        <div className='flex flex-wrap gap-6 w-full'>
          {shirts.map((shirt) => (
            <Link href={`/details/${shirt.id}`} key={shirt.id}>
              <Card
                image={shirt.image}
                price={shirt.price}
                size={shirt.size}
                title={shirt.title}
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
