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
      <div className="container mx-auto p-5 pb-20 lg:p-0">
        <Form route={active ? 'artists.update' : 'artists.store'}>
          {({ errors, processing }) => (
            <div className="grid lg:grid-cols-2 gap-5">
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
                  defaultValue={artist.startedAt?.toString()}
                />
                {errors.started_at && <p className="text-error">{errors.started_at}</p>}
              </div>
              <div>
                <label htmlFor="ended_at" className="label">
                  Date de fin
                </label>
                <Input
                  type="date"
                  className="w-full"
                  id="ended_at"
                  name="ended_at"
                  defaultValue={artist.endedAt?.toString()}
                />
                {errors.started_at && <p className="text-error">{errors.ended_at}</p>}
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
              <div>
                <label className="label" htmlFor="city">
                  Ville d&#39;origine
                </label>
                <Input id="city" name="city" defaultValue={artist.city} className="w-full" />
                {errors.city && <p className="text-error">{errors.city}</p>}
              </div>
              <div className="lg:col-span-2">
                <label htmlFor="short_biography" className="label">
                  Courte biographie
                </label>
                <textarea
                  className="textarea w-full text-black"
                  id="short_biography"
                  name="short_biography"
                  defaultValue={artist.shortBiography}
                />
                {errors.short_biography && <p className="text-error">{errors.short_biography}</p>}
              </div>
              <div>
                <label htmlFor="website_url" className="label">
                  Site internet
                </label>
                <Input
                  type="url"
                  id="website_url"
                  name="website_url"
                  className="w-full"
                  defaultValue={artist.websiteUrl || ''}
                />
                {errors.website_url && <p className="text-error">{errors.website_url}</p>}
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
