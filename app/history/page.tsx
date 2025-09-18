"use client";

import HeroStage from "../../components/HeroStage";
import HistoryControls from "../../components/HistoryControls";
import SamovarControls from "../../components/SamovarControls";

export default function HistoryPage() {
  return (
    <HeroStage currentPage="/history">
      {/* Вывеска — не трогаем */}
      <img
        src="/art/вывеска.png"
        className="layer hero-element"
        style={{ left: 306, top: -11, width: 1002.85, height: 362 }}
        alt="Вывеска"
      />

      <div className="absolute" style={{ left: 0, top: 0, width: 1920, height: 1080 }}>
        {/* Desktop */}
        <div
          className="hidden md:grid md:grid-cols-2 md:gap-8 lg:gap-12 items-start"
          style={{ position: 'absolute', left: '100px', top: '200px', width: '1720px', height: '800px' }}
        >
          {/* Самовар — не меняем поведение */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/samovar.png"
              alt="Самовар"
              className="history-samovar w-[50rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[80rem] h-auto max-h-[85vh] object-contain"
            />
          </div>

          {/* Right side - History text */}
          <div className="history-text flex flex-col justify-start lg:pl-4 pt-4">
            <section className="history-text-content" lang="ru">
              <h2 className="history-title">ИСТОРИЯ БЛИННОЙ</h2>

              <p className="history-body">начинается в 1962 году.</p>
              <p className="history-body">Вот уже более 63 лет мы кормим москвичей и гостей столицы вкусными блинчиками.</p>
              <p className="history-body">
                Время меняло интерьер и меню, но блинчики оставались неизменными, работала ли блинная ночью или днём.
                Таксисты, врачи, милиционеры стояли за одним столиком с маргиналами и громкими спортивными фанатами.
                Владимир Семёнович Высоцкий и Алла Пугачёва, впрочем, как и многие другие, выпивали у нас под блинчики
                и другую закуску.
              </p>
              <p className="history-body">
                Времена менялись, за окном как калейдоскоп, а блинная плыла в своём потоке, меняясь по своим правилам
                и в своём ритме.
              </p>
              <p className="history-body">
                Сейчас блинная днём полна гостей, пришедших за обедом или съесть блинчик на скорую руку, девочки с бантиками,
                мальчики с футлярами для скрипки, офисные дамы и дорожные рабочие, а вечером — наполняется гомоном молодёжи,
                пьющих настойки, и в то время как мужчины ведут неторопливые разговоры под рюмочку и закуску…
              </p>
              <p className="history-body">
                Мы не знаем, что ждёт нас завтра, но каждый наш гость становится неотъемлемой частью этой истории.
              </p>
            </section>
          </div>
        </div>

        {/* Mobile/Tablet */}
        <div
          className="md:hidden"
          style={{ position: 'absolute', left: '50px', top: '200px', width: '1820px', height: '800px' }}
        >
          <h2 className="history-title text-center">ИСТОРИЯ БЛИННОЙ</h2>
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
            <div className="flex justify-center sm:flex-shrink-0 mb-4 sm:mb-0">
              <img src="/images/samovar.png" alt="Самовар" className="w-48 sm:w-56 h-auto" />
            </div>
            <section className="history-text-content" lang="ru">
              <p className="history-body">начинается в 1962 году.</p>
              <p className="history-body">Вот уже более 63 лет мы кормим москвичей и гостей столицы вкусными блинчиками.</p>
              <p className="history-body">
                Время меняло интерьер и меню, но блинчики оставались неизменными, работала ли блинная ночью или днём.
                Таксисты, врачи, милиционеры стояли за одним столиком с маргиналами и громкими спортивными фанатами.
                Владимир Семёнович Высоцкий и Алла Пугачёва, впрочем, как и многие другие, выпивали у нас под блинчики
                и другую закуску.
              </p>
              <p className="history-body">
                Времена менялись, за окном как калейдоскоп, а блинная плыла в своём потоке, меняясь по своим правилам
                и в своём ритме.
              </p>
              <p className="history-body">
                Сейчас блинная днём полна гостей, пришедших за обедом или съесть блинчик на скорую руку, девочки с бантиками,
                мальчики с футлярами для скрипки, офисные дамы и дорожные рабочие, а вечером — наполняется гомоном молодёжи,
                пьющих настойки, и в то время как мужчины ведут неторопливые разговоры под рюмочку и закуску…
              </p>
              <p className="history-body">
                Мы не знаем, что ждёт нас завтра, но каждый наш гость становится неотъемлемой частью этой истории.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      {/* Панели управления - отключены для ручного управления через CSS */}
      {/* <HistoryControls />
      <SamovarControls /> */}
    </HeroStage>
  );
}
