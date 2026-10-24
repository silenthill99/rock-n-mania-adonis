import React from 'react'
import { usePage } from '@inertiajs/react'
import type Clip from '#models/clip'
import { Form } from '@adonisjs/inertia/react'
import Input from '~/components/input'
import Label from '~/components/label'

const Forms = () => {
  const { clip } = usePage<{ clip: Clip }>().props
  const active = !!clip.id
  const route = active ? 'clips.update' : 'clips.store'
  return (
    <div className="container mx-auto">
      <h1>Ajouter un clip</h1>
      <Form route={route} routeParams={clip.id}>
        {({ errors }) => (
          <>
            <div>
              <Label htmlFor="title">Nom</Label>
              <Input id="title" name="title" defaultValue={clip.title} />
              <p>{errors.title}</p>
            </div>
            <div>
              <Label htmlFor="url">URL</Label>
              <Input type="url" id="url" name="url" value={clip.url} />
              <p>{errors.url}</p>
            </div>
            <button type="submit" className="btn">
              Créer un clip
            </button>
          </>
        )}
      </Form>
    </div>
  )
}

export default Forms
