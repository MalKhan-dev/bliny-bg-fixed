'use client'
import Link from 'next/link'

type NavItem = {
  key: 'glavnaya' | 'istoriya' | 'galereya' | 'menyu' | 'menyu18'
  href: string
  src: string
  alt: string
  h: number         // целевая высота контейнера в px (подгони под макет)
  y?: number        // тонкая подстройка по Y в px (может быть отрицательной)
}

const NAV: NavItem[] = [
  { key: 'glavnaya', href: '/',           src: '/nav/glavnaya-new.png', alt: 'Главная',  h: 36, y: 0 },
  { key: 'istoriya', href: '/history',    src: '/nav/istoriya.png', alt: 'История',  h: 36, y: 0 },
  // Поднимаем «Галерея» на 1px (если была ниже — уйдет ступенька)
  { key: 'galereya', href: '/gallery',    src: '/nav/galereya.png', alt: 'Галерея',  h: 36, y: -1 },
  { key: 'menyu',    href: '/menu',       src: '/nav/menu.png',    alt: 'Меню',     h: 36, y: 0 },
  { key: 'menyu18',  href: '/menu-18',    src: '/nav/18plus.png',  alt: 'Меню 18+', h: 36, y: 0 },
]

export default function Navigation() {
  return (
    <nav className="nav select-none">
      <ul className="flex items-center gap-8">
        {NAV.map(item => (
          <li key={item.key} className={`h-[${item.h}px] flex items-center`}>
            <Link
              href={item.href}
              className="block"
              data-nav={item.key}
              style={{ transform: `translateY(${item.y ?? 0}px)` }}
            >
              {/* Используем <img>, чтобы не ловить baseline/ratio артефакты */}
              <img
                src={item.src}
                alt={item.alt}
                className="block h-full w-auto"
                draggable={false}
                decoding="async"
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
