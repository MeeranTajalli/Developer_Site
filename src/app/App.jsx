import Navbar from '@/app/layout/Navbar'
import Footer from '@/app/layout/Footer'
import AppRoutes from '@/app/routes'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 md:px-6">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}
