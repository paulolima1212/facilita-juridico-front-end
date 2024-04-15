import { CardProps } from '@/@types/card-info'

interface Response {
  shirt: CardProps
}

export async function getAShirt(id: string): Promise<Response> {
  const response = await fetch(`http://localhost:3001/shirts?id=${id}`, {
    method: 'GET',
    next: {
      revalidate: 500,
    },
  }).then((response) => response.json())

  return { shirt: response[0] }
}
