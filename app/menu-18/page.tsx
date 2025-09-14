"use client"

import Navigation from "../../components/Navigation"

export default function Menu18Page() {

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

        {/* Навигация */}
        <Navigation currentPage="/menu-18" variant="newspaper" />
      </div>
    </div>
  )
}
