import AppLayout from '~/layouts/app'
import Page from '~/components/page'
import { Form } from '@adonisjs/inertia/react'
import { usePage } from '@inertiajs/react'
import type Artist from '#models/artist'
import Input from '~/components/input'

const Forms = () => {
  const { artist } = usePage<{ artist: Artist }>().props
  const active = !!artist.id
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
                {errors.name && <p className="text-error">
                  {errors.name}
                </p>
                }
              </div>
              <div>
                <label htmlFor="type" className="label">
                  Type
                </label>
                <Input id="type" name="type" className="w-full" defaultValue={artist.type} />
                {errors.name && <p className="text-error">
                  {errors.type}
                </p>}
              </div>
              <button className="btn btn-primary">{active ? 'Mettre à jour' : 'Ajouter'}</button>
            </div>
          )}
        </Form>
      </div>
    </Page>
  )
}

export default Forms
Forms.layout = [AppLayout]
