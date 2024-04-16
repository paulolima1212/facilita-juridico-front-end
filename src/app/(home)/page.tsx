import { Card } from '@/components/card'
import { Filters } from '@/components/filters'
import { getAllShirts } from '@/service/getAllShirts'
import Link from 'next/link'

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const { shirts } = await getAllShirts()

  const shirtsListFilteredColor = shirts.filter((shirts) => {
    if (searchParams?.color === 'all') {
      return shirts
    }

    return shirts.color.toLowerCase() === searchParams?.color
  })

  const shirtsListFilteredSizeAndColor = shirtsListFilteredColor.filter(
    (shirts) => {
      if (searchParams?.size === 'all') {
        return shirtsListFilteredColor
      }

      return shirts.size.toLowerCase() === searchParams?.size
    }
  )

  const shirtListFilteredSizeColorAndName =
    shirtsListFilteredSizeAndColor.filter((shirt) => {
      if (searchParams?.title === 'all') return shirtsListFilteredSizeAndColor
      return shirt.title.toLowerCase().includes(searchParams?.title as string)
    })

  return (
    <main className='flex flex-col w-[1280px] items-center justify-center p-4'>
      <div className='flex flex-col'>
        <Filters />
        <div className='flex flex-wrap gap-6 w-full'>
          {shirtListFilteredSizeColorAndName.map((shirt) => (
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
