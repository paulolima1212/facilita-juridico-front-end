import { Card } from '@/components/card'
import { Header } from '@/components/header'
import Link from 'next/link'

export default async function Home() {
  const response = await fetch('http://localhost:3001/shirts', {
    method: 'GET',
    next: {
      revalidate: 500,
    },
  }).then((response) => response.json())

  return (
    <main className='w-full items-center justify-center min-h-full'>
      <Header />
      <div className='flex flex-wrap gap-6 w-full'>
        {response.map((shirt: any) => (
          <Link href={`/details?${shirt.id}`} key={shirt.id}>
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
