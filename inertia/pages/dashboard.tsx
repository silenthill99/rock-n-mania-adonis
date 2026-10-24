import Page from '~/components/page'
import AppLayout from '~/layouts/app'
import { Link } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import type Album from '#models/album'

export default function Dashboard() {
  const { user, albums } = usePage<{ albums: Album[] }>().props
  return (
    <Page title="Dashboard" hideTitle>
      <div className="container mx-auto">
        <h1>Tableau de bord de {user?.fullName}</h1>
        <Link route="session.destroy" className="btn btn-error">
          Se déconnecter
        </Link>
        <section>
          <h2>Albums</h2>
          <Link route="albums.create">Ajouter un nouvel album</Link>
          {albums.length !== 0 ? (
            <table className={"table"}>

            </table>
          ) : (
            <p>Pas d&#39;albums actuellement</p>
          )}
        </section>
      </div>
    </Page>
  )
}

Dashboard.layout = [AppLayout]
