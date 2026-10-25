/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.get('/dashboard', [controllers.Dashboard]).as('dashboard')
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

router.group(() => {
  router.get('/clips', [controllers.Clips, 'index'])
})

router
  .group(() => {
    router.get('/clips/create', [controllers.Clips, 'create'])
    router.post('/clips', [controllers.Clips, 'store'])
    router.get('/clips/:id/edit', [controllers.Clips, 'edit'])
    router.put('/clips/:id', [controllers.Clips, 'update'])
    router.delete('/clips/:id', [controllers.Clips, 'delete'])
  })
  .use(middleware.auth())

router.group(() => {
  router.get('/albums/create', [controllers.Albums, 'create'])
  router.post('/albums', [controllers.Albums, 'store'])
})

router.group(() => {
  router.get('/artists/create', [controllers.Artists, 'create'])
  router.post('/artists', [controllers.Artists, 'store'])
  router.get('/artist/:id/edit', [controllers.Artists, 'edit'])
  router.put('/artist/:id', [controllers.Artists, 'update'])
})
