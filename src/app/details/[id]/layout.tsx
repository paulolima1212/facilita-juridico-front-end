export const metadata = {
  title: 'T-Shirt Details',
  description: 'The best T-Shirt in the world',
}

import '../../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
