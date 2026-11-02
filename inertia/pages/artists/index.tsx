import AppLayout from '~/layouts/app'
import { usePage } from '@inertiajs/react'
import type Artist from '#models/artist'

const Index = () => {
  const { artists } = usePage<{ artists: Artist[] }>().props
  return (
    <div>
      <h1>Liste des artistes</h1>
      {artists.map((artist) => (
        <div key={artist.id} className="card border">
          <p>{artist.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Index
Index.layout = [AppLayout]
