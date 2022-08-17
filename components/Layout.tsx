import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
interface Props{
   children?: ReactNode
}
export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
    </div>
  )
}