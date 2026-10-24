import { type ReactNode } from 'react'
import FlashToasts from '~/components/flash_toasts'
import NavLink, { type NavItem } from '~/components/nav_link'
import { usePage } from '@inertiajs/react'
import { Link } from '@adonisjs/inertia/react'

/**
 * Top-level app navigation. Add an entry here for every new area of your
 * app, and it shows up in the navigation bar with its active state handled.
 */
const nav: NavItem[] = [
  { label: 'Accueil', route: 'home' },
  { label: 'Quelques clips', route: 'clips.index' },
]

export default function AppLayout({ children }: { children: ReactNode }) {
  const { user } = usePage().props
  return (
    <>
      <header className="container mx-auto">
        <nav className="flex items-center justify-between">
          <ul className="flex gap-2">
            {nav.map((link, i) => (
              <li key={i}>
                <NavLink route={link.route}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          {user ? (
            <Link route="dashboard">Tableau de bord</Link>
          ) : (
            <ul className="flex items-center gap-2">
              <li>
                <Link route="session.create">Se connecter</Link>
              </li>
              <li>
                <Link route="new_account.create">Créer un compte</Link>
              </li>
            </ul>
          )}
        </nav>
      </header>

      <div className="app-main">{children}</div>
      <FlashToasts />
    </>
  )
}
