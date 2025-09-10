"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
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
                <Link href="/history" className="text-lg font-bold text-blue-600">
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
                <Link href="/menu-18" className="text-lg font-bold text-black hover:text-blue-600 transition-colors">
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
        <main className="flex-1 flex items-center justify-center px-4 py-4">
          <div className="w-full max-w-7xl mx-auto">
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start">
              {/* Left side - Samovar image - significantly increased samovar size */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="/images/samovar.png"
                  alt="Самовар"
                  className="w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] h-auto max-h-[85vh] object-contain"
                />
              </div>

              {/* Right side - History text */}
              <div className="flex flex-col justify-start lg:pl-4 pt-4">
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-black mb-6">ИСТОРИЯ БЛИННОЙ</h2>
                <div className="text-base lg:text-lg xl:text-xl text-black leading-relaxed space-y-4 font-mono">
                  <p>начинается в 1962 году.</p>
                  <p>Вот уже более 63 лет мы кормим москвичей и гостей столицы вкусными блинчиками.</p>
                  <p>
                    Время меняло интерьер и меню, но блинчики оставались неизменными, работала ли блинная ночью или
                    днем. Таксисты, врачи, милиционеры стояли за одним столиком с маргиналами и громкими спортивными
                    фанатами.
                  </p>
                  <p>
                    Владимир Семенович Высоцкий и Алла Пугачева, в прочем, как и многие другие, выпивали у нас под
                    блинчики и другую закуску.
                  </p>
                  <p>
                    Времена менялись, за окном как калейдоскоп, а блинная плыла в своем потоке, меняясь по своим
                    правилам и в своем ритме.
                  </p>
                  <p>
                    Сейчас блинная днем полна гостей, пришедших за обедом или съесть блинчик на скорую руку, девочки с
                    бантиками, мальчики с футлярами для скрипки, офисные дамы и дорожные рабочие, а вечером —
                    наполняется гомоном молодежи, пьющих настойки, и то время, как мужчины ведут неторопливые разговоры
                    под рюмочку и закуску.
                  </p>
                  <p>
                    Мы не знаем, что ждет нас завтра, но каждый наш гость становится неотъемлемой частью этой истории.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile/Tablet layout */}
            <div className="md:hidden">
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-6 text-center">ИСТОРИЯ БЛИННОЙ</h2>

              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                {/* Самовар для мобильных */}
                <div className="flex justify-center sm:flex-shrink-0 mb-4 sm:mb-0">
                  <img src="/images/samovar.png" alt="Самовар" className="w-48 sm:w-56 h-auto" />
                </div>

                {/* Текст истории */}
                <div className="text-sm sm:text-base text-black leading-relaxed space-y-3 font-mono px-2 sm:px-0">
                  <p className="font-bold">начинается в 1962 году.</p>
                  <p>Вот уже более 63 лет мы кормим москвичей и гостей столицы вкусными блинчиками.</p>
                  <p>
                    Время меняло интерьер и меню, но блинчики оставались неизменными, работала ли блинная ночью или
                    днем. Таксисты, врачи, милиционеры стояли за одним столиком с маргиналами и громкими спортивными
                    фанатами.
                  </p>
                  <p>
                    Владимир Семенович Высоцкий и Алла Пугачева, в прочем, как и многие другие, выпивали у нас под
                    блинчики и другую закуску.
                  </p>
                  <p>
                    Времена менялись, за окном как калейдоскоп, а блинная плыла в своем потоке, меняясь по своим
                    правилам и в своем ритме.
                  </p>
                  <p>
                    Сейчас блинная днем полна гостей, пришедших за обедом или съесть блинчик на скорую руку, девочки с
                    бантиками, мальчики с футлярами для скрипки.
                  </p>
                  <p>
                    Мы не знаем, что ждет нас завтра, но каждый наш гость становится неотъемлемой частью этой истории.
                  </p>
                </div>
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
