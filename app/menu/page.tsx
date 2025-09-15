"use client"

import Navigation from "../../components/Navigation"

export default function MenuPage() {

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
          <div className="space-y-1 text-black text-sm lg:text-base xl:text-lg leading-tight" style={{ fontFamily: 'TrixieCyr, sans-serif' }}>
            <div className="flex justify-between">
              <span>Порция блинчиков с маслом (3 шт.)</span>
              <span>105 р.</span>
            </div>
            <div className="ml-4 space-y-1">
              <div>Добавка сои</div>
              <div className="flex justify-between">
                <span>— Сметаной</span>
                <span>30 р.</span>
              </div>
              <div className="flex justify-between">
                <span>— Сгущенкой</span>
                <span>25 р.</span>
              </div>
              <div className="flex justify-between">
                <span>— Вареньем</span>
                <span>25 р.</span>
              </div>
              <div className="flex justify-between">
                <span>— Медом</span>
                <span>25 р.</span>
              </div>
              <div className="text-xs">(Указана стоимость добавки)</div>
            </div>
            <div className="pt-2">
              <div className="flex justify-between">
                <span>
                  Блинчики со смородиной
                  <br />и сахарной пудрой
                </span>
                <span>160 р.</span>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <div className="flex justify-between">
                <span>Блинчики с килькой пряного посола</span>
                <span>160 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Блинчики с имитированной икрой</span>
                <span>160 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Блинчики с красной икрой</span>
                <span>480 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Блинчик с лососем</span>
                <span>440 р.</span>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <div className="flex justify-between">
                <span>Блинчик завернутый с:</span>
                <span></span>
              </div>
              <div className="ml-4 space-y-1">
                <div className="flex justify-between">
                  <span>— Говяжьим фаршем</span>
                  <span>100 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>— Жульеном из лесных грибов и курицы</span>
                  <span>100 р.</span>
                </div>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <div className="flex justify-between">
                <span>Чай</span>
                <span>65 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Кофе зерновой с молоком из ТЭНа</span>
                <span>90 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Кофе эспрессо/Американо</span>
                <span>100 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Капучино/Латте</span>
                <span>200 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Кофе в стаканчик с собой, 300 мл</span>
                <span>230 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Кофе в стаканчик с собой, 400 мл</span>
                <span>260 р.</span>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <div className="flex justify-between">
                <span>Компот</span>
                <span>75 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Морс ягодный</span>
                <span>75 р.</span>
              </div>
            </div>
          </div>
        </div>


        {/* !!! ИЗМЕНЕНИЕ №2: БЛОК ПРАВОЙ КОЛОНКИ С ТОЧНЫМИ КООРДИНАТАМИ !!! */}
        <div
          className="absolute"
          style={{ top: '309.79px', left: '693.39px' }}
        >
          <div className="space-y-1 text-black text-sm lg:text-base xl:text-lg leading-tight" style={{ fontFamily: 'TrixieCyr, sans-serif' }}>
            <div className="flex justify-between">
              <span>Пельмени (200 гр.)</span>
              <span>220 р.</span>
            </div>
            <div className="flex justify-between">
              <span>Бульон к пельменям</span>
              <span>40 р.</span>
            </div>
            <div className="flex justify-between">
              <span>Капуста тушеная с сосисками</span>
              <span>205 р.</span>
            </div>
            <div className="flex justify-between">
              <span>Котлета домашняя</span>
              <span>175 р.</span>
            </div>
            <div className="flex justify-between">
              <span>Котлета из щуки</span>
              <span>190 р.</span>
            </div>
            <div className="flex justify-between">
              <span>Бефстроганов с гарниром</span>
              <span>310 р.</span>
            </div>
            <div className="flex justify-between">
              <span>
                Рагу из 3-х видов мяса
                <br />
                утка/индейка/кура
              </span>
              <span>300 р.</span>
            </div>
            <div className="pt-2">
              <div className="flex justify-between">
                <span>
                  Гарниры
                  <br />
                  Рис/Греча/Макароны
                </span>
                <span>80 р.</span>
              </div>
            </div>
            <div className="pt-2 space-y-1">
              <div className="flex justify-between">
                <span>Супы</span>
                <span>190 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Борщ</span>
                <span>195 р.</span>
              </div>
              <div className="flex justify-between">
                <span>Рыбный</span>
                <span>195 р.</span>
              </div>
            </div>
            <div className="pt-2">
              <div>Салаты/закуски</div>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Салат витаминный</span>
                  <span>120 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Столичный</span>
                  <span>155 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Винегрет</span>
                  <span>130 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Яйцо под майонезом</span>
                  <span>65 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Глазунья (1шт.)</span>
                  <span>65 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Сосиска</span>
                  <span>95 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Сельдь</span>
                  <span>150 р.</span>
                </div>
                <div className="flex justify-between">
                  <span>Соленья</span>
                  <span>165 р.</span>
                </div>
              </div>
            </div>
          </div>
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

        {/* Mobile content */}
        <div className="md:hidden absolute inset-0 bg-white/95 backdrop-blur-sm">
          <div className="p-6">
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
          </div>
        </div>
      </div>

      {/* Навигация */}
      <Navigation currentPage="/menu" />
    </div>
  )
}
