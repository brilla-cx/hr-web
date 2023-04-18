import './globals.css'

export const metadata = {
  title: 'HR Web App',
  description: 'The new home of Hey Rebekah powered by Sanity.io, Next.js, and Tailwind CSS. Made with ❤️ in partnership with W3CTemplates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
