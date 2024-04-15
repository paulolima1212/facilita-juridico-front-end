import { CardProps } from '@/@types/card-info'

interface Response {
  shirts: CardProps[]
}

export async function getAllShirts(): Promise<Response> {
  const response = await fetch('http://localhost:3001/shirts', {
    method: 'GET',
    next: {
      revalidate: 500,
    },
  }).then((response) => response.json())

  return { shirts: response }
}
