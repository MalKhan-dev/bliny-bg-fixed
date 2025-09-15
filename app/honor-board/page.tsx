"use client"

import Navigation from "../../components/Navigation"

export default function HonorBoardPage() {

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
        <main className="flex-1 flex items-center justify-center px-4 py-8">
          <div className="w-full max-w-5xl mx-auto flex justify-center">
            {/* Honor board image */}
            <div className="flex justify-center">
              <img
                src="/images/honor-board.png"
                alt="Доска почёта"
                className="w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl h-auto"
              />
            </div>
          </div>
        </main>

        {/* Навигация */}
        <Navigation currentPage="/honor-board" variant="newspaper" />
      </div>
    </div>
  )
}
