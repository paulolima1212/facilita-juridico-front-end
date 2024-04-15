import { Card } from '@/components/card'
import { Header } from '@/components/header'
import { getAllShirts } from '@/service/getAllShirts'
import Link from 'next/link'

export default async function Home() {
  const { shirts } = await getAllShirts()

  return (
    <main className='w-full items-center justify-center min-h-full'>
      <Header />
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
    </main>
  )
}
