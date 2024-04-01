import {Sora} from "next/font/google"

import Navigation from '@components/Navigation'
import Header from '@components/Header'
import TopLeftImage from '@components/TopLeftImage'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat font-poppins relative ${sora.variable}`}>
      <TopLeftImage />
      <Navigation />
      <Header />
      {children}
    </div>
  );
}
