import { usePage } from '@inertiajs/react'
import type Album from '#models/album'
import AppLayout from '~/layouts/app'

const Index = () => {
  const { albums } = usePage<{ albums: Album[] }>().props
  return (
    <div className="container mx-auto">
      <h1>Liste des albums</h1>
      {albums.length === 0 ? (
        <p>Pas d&#39;albums actuellement</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {albums.map((album) => {
            return (
              <div key={album.id} className="card">
                <div className="card-heading">
                  <p>Album {album.name}</p>
                </div>
                <div className="card-body">
                  <img src={album.imagePath} alt={album.name} />
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Index
Index.layout = [AppLayout]
