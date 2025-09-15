"use client"

import HeroStage from "../../components/HeroStage"

export default function HistoryPage() {
  return (
    <HeroStage currentPage="/history">
      {/* Вывеска в том же положении что и на главной */}
      <img src="/art/вывеска.png" className="layer hero-element"
           style={{ left: 306, top: -11, width: 1002.85, height: 362 }}
           alt="Вывеска" />
      
      {/* Контент истории */}
      <div className="absolute" style={{ left: 0, top: 0, width: 1920, height: 1080 }}>
        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start" 
             style={{ position: 'absolute', left: '100px', top: '200px', width: '1720px', height: '800px' }}>
          {/* Left side - Samovar image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/samovar.png"
              alt="Самовар"
              className="history-samovar w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] h-auto max-h-[85vh] object-contain"
            />
          </div>

          {/* Right side - History text */}
          <div className="history-text flex flex-col justify-start lg:pl-4 pt-4">
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
        <div className="md:hidden" style={{ position: 'absolute', left: '50px', top: '200px', width: '1820px', height: '800px' }}>
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
    </HeroStage>
  )
}
