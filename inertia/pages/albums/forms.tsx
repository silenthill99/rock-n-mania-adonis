import { usePage } from '@inertiajs/react'
import type Album from '#models/album'
import { Form } from '@adonisjs/inertia/react'
import type Artist from '#models/artist'
import { type ChangeEvent, useState } from 'react'

const Forms = () => {
  const { album, artists } = usePage<{ album: Album; artists: Artist[] }>().props
  const active = !!album.id
  const action = active ? 'home' : 'albums.store'
  const [visual, setVisual] = useState(album.imagePath || '')

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setVisual(url)
    }
  }
  return (
    <div className="container mx-auto">
      <h1>{active ? `Editer l'album ${album.name}` : 'Ajouter un album'}</h1>
      <Form route={action}>
        {({ errors }) => (
          <div className={"space-y-5"}>
            <div>
              <label className="label" htmlFor="name">
                Titre de l&#39;album
              </label>
              <input className="input text-black w-full" id="name" name="name" />
              {errors.name && <p className="text-error">{errors.name}</p>}
            </div>
            <div>
              <label className="label" htmlFor="trackList">
                Liste des titres
              </label>
              <textarea className="textarea text-black w-full" id="trackList" name="trackList" />
              {errors.trackList && <p className="text-error">{errors.trackList}</p>}
            </div>
            <div>
              <label htmlFor="releasedAt" className="label">
                Date de sortie
              </label>
              <input
                className="input text-black w-full"
                type="date"
                id="releasedAt"
                name="released_at"
              />
              {errors.released_at && <p className="text-error">{errors.released_at}</p>}
            </div>
            <div>
              <label htmlFor="image" className="label">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="file-input text-black w-full"
                accept="image/jpeg,image/jpg,image/webp"
                onChange={handleChange}
              />
              {errors.image && <p className="text-error">{errors.image}</p>}
              {visual && <img src={visual} alt="Visuel" width={200}/>}
            </div>
            <div>
              <label htmlFor="deezer_url" className="label">
                Lien Deezer
              </label>
              <input
                type="url"
                id="deezer_url"
                name="deezer_url"
                className="input w-full text-black"
              />
              {errors.deezer_url && <p className="text-error">{errors.deezer_url}</p>}
            </div>
            <div>
              <label className="label">Artiste(s)</label>
              <select multiple name="artist_id[]" className="select text-black w-full">
                {artists.map((artist) => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name}
                  </option>
                ))}
              </select>
              {errors.artist_id && <p className="text-error">{errors.artist_id}</p>}
            </div>
            <button type="submit">Créer</button>
          </div>
        )}
      </Form>
    </div>
  )
}

export default Forms
