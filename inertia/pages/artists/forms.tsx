import AppLayout from '~/layouts/app'
import Page from '~/components/page'
import { Form } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import type Artist from '#models/artist'
import Input from '~/components/input'
import FileInput from '~/components/file-input'

const Forms = () => {
  const { artist } = usePage<{ artist: Artist }>().props
  const active = !!artist.id

  const image = artist.imagePath || ''
  const logo = artist.logoPath || ''

  return (
    <Page title={active ? `Modifier l'artiste ${artist.name}` : 'Ajouter un nouvel artiste'}>
      <div className="container mx-auto">
        <Form route={active ? 'artists.update' : 'artists.store'}>
          {({ errors, processing }) => (
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="label">
                  Nom
                </label>
                <Input id="name" name="name" className="w-full" defaultValue={artist.name} />
                {errors.name && <p className="text-error">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Type
                </label>
                <Input id="type" name="type" className="w-full" defaultValue={artist.type} />
                {errors.type && <p className="text-error">{errors.type}</p>}
              </div>
              <div>
                <label htmlFor="started_at" className="label">
                  Date de début
                </label>
                <Input
                  type="date"
                  className="w-full"
                  id="started_at"
                  name="started_at"
                  defaultValue={artist.name}
                />
                {errors.started_at && <p className="text-error">{errors.started_at}</p>}
              </div>
              <FileInput
                label="Image"
                name="image"
                imageUrl={image}
                className="w-full"
                error={errors.image}
              />
              <FileInput
                label="Logo"
                name="logo"
                imageUrl={logo}
                className="w-full"
                error={errors.logo}
              />
              <div>
                <label htmlFor="country" className="label">
                  Pays d&#39;origine
                </label>
                <Input
                  id="country"
                  name="country"
                  defaultValue={artist.country}
                  className="w-full"
                />
                {errors.country && <p className="text-error">{errors.country}</p>}
              </div>
              <button className="btn btn-primary" disabled={processing}>
                {active ? 'Mettre à jour' : 'Ajouter'}
              </button>
            </div>
          )}
        </Form>
      </div>
    </Page>
  )
}

export default Forms
Forms.layout = [AppLayout]
