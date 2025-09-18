"use client"

import HeroStage from "../../components/HeroStage"
import BannerControls from "../../components/BannerControls"

export default function HonorBoardPage() {
  return (
    <HeroStage currentPage="/honor-board">
      {/* Вывеска в том же положении что и на главной */}
      <img src="/art/вывеска.png" className="layer hero-element banner-controls"
           style={{ left: 306, top: -11, width: 1002.85, height: 362 }}
           alt="Вывеска" />
      
      {/* Контент доски почёта */}
      <div className="absolute" style={{ left: 0, top: 0, width: 1920, height: 1080 }}>
        {/* Центрируем доску почёта точно в рабочем пространстве 1280×920 */}
        <div 
          className="flex items-center justify-center"
          style={{ 
            position: 'absolute', 
            left: '320px',  /* (1920-1280)/2 = 320px - отступ слева */
            top: '80px',    /* (1080-920)/2 = 80px - отступ сверху */
            width: '1280px', /* ширина рабочего пространства */
            height: '920px'  /* высота рабочего пространства */
          }}
        >
          <img
            src="/images/honor-board.png"
            alt="Доска почёта"
            className="honor-board max-w-full max-h-full object-contain"
            style={{ 
              maxWidth: '800px',  /* ограничиваем максимальный размер */
              maxHeight: '600px'  /* чтобы доска не была слишком большой */
            }}
          />
        </div>
      </div>
      
      {/* Панель управления вывеской - отключена для ручного управления через CSS */}
      {/* <BannerControls /> */}
    </HeroStage>
  )
}
