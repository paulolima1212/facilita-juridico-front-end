'use client'

import { useSearchParams } from 'next/navigation'

export default function Details() {
  const searchParams = useSearchParams()

  const title = searchParams.get('title')
  const size = searchParams.get('size')

  return (
    <main className='flex w-full'>
      <div className='flex flex-row w-full'>
        <h1>details</h1>
      </div>
    </main>
  )
}
