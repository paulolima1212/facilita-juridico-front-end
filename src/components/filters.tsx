'use client'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function Filters() {
  const [title, setTitle] = useState('all')
  const [color, setColor] = useState('all')
  const [size, setSize] = useState('all')
  const [url, setUrl] = useState('?')
  const router = useRouter()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function setFilter() {
    setUrl(`?color=${color}&size=${size}&title=${title}`)
    router.replace(url)
  }

  useEffect(() => {
    setFilter()
  }, [setFilter])

  return (
    <div className='flex mb-6 gap-4'>
      <Input
        placeholder='Faça uma busca...'
        onChange={(e) => setTitle(e.target.value)}
      />
      <Select onValueChange={(e) => setColor(e)}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Cor' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>Todas</SelectItem>
          <SelectItem value='white'>Branca</SelectItem>
          <SelectItem value='light-gray'>Cinza Claro</SelectItem>
          <SelectItem value='gray'>Cinza</SelectItem>
          <SelectItem value='black'>Preta</SelectItem>
          <SelectItem value='blue'>Azul</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(e) => setSize(e)}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Tamanho' />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='all'>Todos</SelectItem>
          <SelectItem value='pp'>PP</SelectItem>
          <SelectItem value='p'>P</SelectItem>
          <SelectItem value='m'>M</SelectItem>
          <SelectItem value='g'>G</SelectItem>
          <SelectItem value='gg'>GG</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
