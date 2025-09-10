"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Blue oval background - base layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url(/images/blue-background-menu.png)",
        }}
      />

      <div className="relative w-full min-h-[1050px] mx-auto max-w-[1440px] z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-x-[70px] top-[9px] w-[593px] h-[214px]">
          <img src="/images/logo-sign.png" alt="БЛИНЫ на Воронцовской" className="w-full h-full object-contain" />
        </div>

        <div className="absolute left-[82px] top-[55px] w-[237px] h-[65px]">
          <img src="/images/menu-title.svg" alt="Меню" className="w-full h-full object-contain" />
        </div>

        <div className="absolute left-[81px] top-[148px] w-[426px] h-[721px]">
          <img src="/images/menu-left.svg" alt="Меню слева" className="w-full h-full object-contain" />
        </div>

        <div className="absolute left-[522px] top-[152px] w-[67px] h-[719px]">
          <img src="/images/price-left.svg" alt="Ценник слева" className="w-full h-full object-contain" />
        </div>

        <div className="absolute left-[693px] top-[210px] w-[304px] h-[618px]">
          <img src="/images/menu-right.svg" alt="Меню справа" className="w-full h-full object-contain" />
        </div>

        <div className="absolute left-[1132px] top-[209px] w-[70px] h-[619px]">
          <img src="/images/price-right.svg" alt="Ценник справа" className="w-full h-full object-contain" />
        </div>

        {/* Чайничек */}
        <div className="absolute left-[1213px] top-[143px] w-[207px] h-[207px]">
          <img src="/images/samovar.png" alt="Чайничек" className="w-full h-full object-contain" />
        </div>

        {/* Вареники */}
        <div className="absolute left-[1172px] top-[275px] w-[268px] h-[268px]">
          <img src="/images/dumplings.png" alt="Вареники" className="w-full h-full object-contain" />
        </div>

        {/* Вилка Ложка Нож */}
        <div className="absolute left-[1209px] top-[505px] w-[205px] h-[205px]">
          <img src="/images/fork-dumpling.png" alt="Приборы" className="w-full h-full object-contain" />
        </div>

        {/* Вилка с пельменем */}
        <div className="absolute left-[1190px] top-[671px] w-[243px] h-[243px]">
          <img src="/images/fork-dumpling.png" alt="Вилка с пельменем" className="w-full h-full object-contain" />
        </div>

        {/* Чеснок */}
        <div className="absolute left-[1088px] top-[765px] w-[268px] h-[268px]">
          <img src="/images/garlic.png" alt="Чеснок" className="w-full h-full object-contain" />
        </div>

        {/* Вилка с лапшой */}
        <div className="absolute left-[915px] top-[827px] w-[223px] h-[223px]">
          <img src="/images/fork-dumpling.png" alt="Вилка с лапшой" className="w-full h-full object-contain" />
        </div>

        {/* Огурчик */}
        <div className="absolute left-[746px] top-[818px] w-[220px] h-[220px]">
          <img src="/images/garlic.png" alt="Огурчик" className="w-full h-full object-contain" />
        </div>

        {/* Блинчики */}
        <div className="absolute left-[561px] top-[818px] w-[226px] h-[226px]">
          <img src="/images/pancakes.png" alt="Блинчики" className="w-full h-full object-contain" />
        </div>

        <div className="md:hidden absolute inset-0 bg-white/95 backdrop-blur-sm">
          <div className="p-6">
            {/* Mobile menu button */}
            <div className="absolute top-4 right-4 z-50">
              <button onClick={toggleMenu} className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile menu overlay */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
                <div className="absolute top-16 right-4 bg-white rounded-lg shadow-xl p-6 min-w-[200px]">
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="text-lg font-bold text-black hover:text-blue-600 transition-colors">
                      Главная
                    </Link>
                    <Link
                      href="/history"
                      className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
                    >
                      История
                    </Link>
                    <Link
                      href="/honor-board"
                      className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
                    >
                      Галерея
                    </Link>
                    <Link href="/menu" className="text-lg font-bold text-blue-600">
                      Меню
                    </Link>
                    <Link
                      href="/menu-18"
                      className="text-lg font-bold text-black hover:text-blue-600 transition-colors"
                    >
                      18+
                    </Link>
                  </nav>
                </div>
              </div>
            )}

            {/* Mobile logo */}
            <div className="flex justify-center pt-6 mb-8">
              <div className="w-[320px] h-[116px]">
                <img src="/images/logo-sign.png" alt="БЛИНЫ на Воронцовской" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* Mobile menu content */}
            <div className="text-center">
              <h2 className="text-2xl font-black text-black mb-6">Меню</h2>
              <p className="text-gray-600 mb-4">Для просмотра полного меню используйте десктопную версию</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b pb-1">
                  <span>Блинчики с маслом (3 шт.)</span>
                  <span>105 р.</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Пельмени (200 гр.)</span>
                  <span>220 р.</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Борщ</span>
                  <span>195 р.</span>
                </div>
                <div className="flex justify-between border-b pb-1">
                  <span>Чай</span>
                  <span>65 р.</span>
                </div>
              </div>
            </div>

            {/* Mobile navigation */}
            <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
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
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <nav className="flex justify-center space-x-8 lg:space-x-12 xl:space-x-16">
          <Link href="/" className="block hover:opacity-80 transition-opacity w-[181px] h-[35px]">
            <img src="/images/nav-home.png" alt="Главная" className="w-full h-full object-contain" />
          </Link>
          <Link href="/history" className="block hover:opacity-80 transition-opacity w-[182px] h-[36px]">
            <img src="/images/nav-history.png" alt="История" className="w-full h-full object-contain" />
          </Link>
          <Link href="/honor-board" className="block hover:opacity-80 transition-opacity w-[182px] h-[36px]">
            <img src="/images/nav-gallery.png" alt="Галерея" className="w-full h-full object-contain" />
          </Link>
          <Link href="/menu" className="block hover:opacity-80 transition-opacity w-[181px] h-[35px]">
            <img src="/images/nav-menu.png" alt="Меню" className="w-full h-full object-contain" />
          </Link>
          <Link href="/menu-18" className="block hover:opacity-80 transition-opacity w-[182px] h-[36px] -ml-[10px]">
            <img src="/images/nav-18-plus.png" alt="18+" className="w-full h-full object-contain" />
          </Link>
        </nav>
      </div>
    </div>
  )
}
