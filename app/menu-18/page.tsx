"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Menu18Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/newspaper-bg.jpg)",
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/blue-paint-bg.jpeg)",
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Mobile menu button */}
        <div className="md:hidden absolute top-4 right-4 z-50">
          <button onClick={toggleMenu} className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
            <div className="absolute top-16 right-4 bg-white rounded-lg shadow-xl p-6 min-w-[200px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-bold text-black hover:text-blue-600 transition-colors">
                  Главная
                </Link>
                <Link href="/history" className="text-lg font-bold text-black hover:text-blue-600 transition-colors">
                  История
                </Link>
                <Link
                  href="/honor-board"
                  className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
                >
                  Доска почёта
                </Link>
                <Link href="/menu" className="text-lg font-bold text-black hover:text-blue-600 transition-colors">
                  Меню
                </Link>
                <Link href="/menu-18" className="text-lg font-bold text-blue-600">
                  18+
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* Header with logo */}
        <header className="flex justify-center pt-6 md:pt-8 px-4">
          <div className="w-[320px] h-[116px] md:w-[550px] md:h-[199px] lg:w-[750px] lg:h-[271px] xl:w-[850px] xl:h-[307px] 2xl:w-[1003px] 2xl:h-[362px]">
            <img src="/images/logo-sign.png" alt="БЛИНЫ на Воронцовской" className="w-full h-full object-contain" />
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 flex items-start justify-center px-4 py-4">
          <div className="w-full max-w-7xl mx-auto">
            {/* Desktop layout */}
            <div className="hidden md:block">
              <div className="flex items-start gap-8 lg:gap-12">
                {/* Left side - Drinks Menu with better scaling */}
                <div className="flex-1 pt-4">
                  <h2 className="text-5xl lg:text-6xl xl:text-7xl font-black text-black mb-12 leading-tight">
                    Прейскурант
                    <br />
                    напитков
                  </h2>
                  <div className="space-y-3 lg:space-y-4 text-black font-mono text-base lg:text-lg xl:text-xl leading-relaxed">
                    <div className="flex justify-between">
                      <span>Водка Деревенька 50 мл.</span>
                      <span>120 р.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Водка Чавыча 50мл.</span>
                      <span>175 р.</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Водка Чистые росы 50 мл.</span>
                      <span>450 р.</span>
                    </div>

                    <div className="pt-4 space-y-3 lg:space-y-4">
                      <div className="flex justify-between">
                        <span>Коньяк Старейшина 50 мл.</span>
                        <span>220 р.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Виски Thompson 50 мл.</span>
                        <span>230 р.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Джеймесон 40 мл.</span>
                        <span>450 р.</span>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex justify-between">
                        <span>
                          Пиво разливное Блинное
                          <br />
                          Светлый лагер 0,5л.
                        </span>
                        <span>235 р.</span>
                      </div>
                    </div>

                    <div className="pt-4 space-y-3 lg:space-y-4">
                      <div className="flex justify-between">
                        <span>
                          Настойки в ассортименте
                          <br />
                          На водке 50мл
                        </span>
                        <span>160 р.</span>
                      </div>
                      <div className="flex justify-between">
                        <span>На коньяке, виски и тп.</span>
                        <span>220 р.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-start pt-8">
                  <img
                    src="/images/waiter.png"
                    alt="Официант с напитками"
                    className="w-[28rem] lg:w-[36rem] xl:w-[42rem] 2xl:w-[48rem] h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Mobile layout */}
            <div className="md:hidden">
              <h2 className="text-3xl font-black text-black mb-6 text-center">
                Прейскурант
                <br />
                напитков
              </h2>
              <div className="space-y-3 text-black font-mono text-sm leading-tight mb-6">
                <div className="flex justify-between">
                  <span>Водка Деревенька 50 мл.</span>
                  <span>120 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Водка Чавыча 50мл.</span>
                  <span>175 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Коньяк Старейшина 50 мл.</span>
                  <span>220 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Виски Thompson 50 мл.</span>
                  <span>230 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Пиво разливное 0,5л.</span>
                  <span>235 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Настойки 50мл</span>
                  <span>160 р.</span>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/images/waiter.png" alt="Официант с напитками" className="w-72 sm:w-80 h-auto" />
              </div>
            </div>
          </div>
        </main>

        {/* Desktop navigation */}
        <footer className="hidden md:block pb-6">
          <nav className="flex justify-center space-x-8 lg:space-x-12 xl:space-x-16">
            <Link
              href="/"
              className="block hover:opacity-80 transition-opacity
                         w-[70px] h-[14px] md:w-[160px] md:h-[32px] 
                         lg:w-[150px] lg:h-[29px] xl:w-[170px] xl:h-[33px] 2xl:w-[181px] 2xl:h-[35px]"
            >
              <img src="/images/nav-home.png" alt="Главная" className="w-full h-full object-contain" />
            </Link>

            <Link
              href="/history"
              className="block hover:opacity-80 transition-opacity
                         w-[70px] h-[14px] md:w-[160px] md:h-[32px] 
                         lg:w-[150px] lg:h-[29px] xl:w-[170px] xl:h-[33px] 2xl:w-[182px] 2xl:h-[36px]"
            >
              <img src="/images/nav-history.png" alt="История" className="w-full h-full object-contain" />
            </Link>

            <Link
              href="/honor-board"
              className="block hover:opacity-80 transition-opacity
                         w-[70px] h-[14px] md:w-[160px] md:h-[32px]
                         lg:w-[150px] lg:h-[29px] xl:w-[170px] xl:h-[33px] 2xl:w-[182px] 2xl:h-[36px]"
            >
              <img src="/images/nav-gallery.png" alt="Галерея" className="w-full h-full object-contain" />
            </Link>

            <Link
              href="/menu"
              className="block hover:opacity-80 transition-opacity
                         w-[50px] h-[12px] md:w-[160px] md:h-[32px]
                         lg:w-[150px] lg:h-[29px] xl:w-[170px] xl:h-[33px] 2xl:w-[181px] 2xl:h-[35px]"
            >
              <img src="/images/nav-menu.png" alt="Меню" className="w-full h-full object-contain" />
            </Link>

            <Link
              href="/menu-18"
              className="block hover:opacity-80 transition-opacity
                         w-[35px] h-[12px] md:w-[160px] md:h-[32px]
                         lg:w-[150px] lg:h-[29px] xl:w-[170px] xl:h-[33px] 2xl:w-[182px] 2xl:h-[36px]
                         -ml-[10px]"
            >
              <img src="/images/nav-18-plus.png" alt="18+" className="w-full h-full object-contain" />
            </Link>
          </nav>
        </footer>

        {/* Mobile navigation */}
        <footer className="md:hidden pb-4">
          <nav className="flex flex-row justify-center items-center gap-3 px-2">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <img src="/images/nav-home.png" alt="Главная" className="w-[70px] h-[14px] object-contain" />
            </Link>
            <Link href="/history" className="block hover:opacity-80 transition-opacity">
              <img src="/images/nav-history.png" alt="История" className="w-[70px] h-[14px] object-contain" />
            </Link>
            <Link href="/honor-board" className="block hover:opacity-80 transition-opacity">
              <img src="/images/nav-gallery.png" alt="Галерея" className="w-[70px] h-[14px] object-contain" />
            </Link>
            <Link href="/menu" className="block hover:opacity-80 transition-opacity">
              <img src="/images/nav-menu.png" alt="Меню" className="w-[50px] h-[12px] object-contain" />
            </Link>
            <Link href="/menu-18" className="block hover:opacity-80 transition-opacity">
              <img src="/images/nav-18-plus.png" alt="18+" className="w-[35px] h-[12px] object-contain" />
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}
