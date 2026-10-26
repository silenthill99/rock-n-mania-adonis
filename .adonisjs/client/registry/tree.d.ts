/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  dashboard: typeof routes['dashboard']
  clips: {
    index: typeof routes['clips.index']
    create: typeof routes['clips.create']
    store: typeof routes['clips.store']
    edit: typeof routes['clips.edit']
    update: typeof routes['clips.update']
    delete: typeof routes['clips.delete']
  }
  albums: {
    create: typeof routes['albums.create']
    store: typeof routes['albums.store']
    index: typeof routes['albums.index']
  }
  artists: {
    create: typeof routes['artists.create']
    store: typeof routes['artists.store']
    edit: typeof routes['artists.edit']
    update: typeof routes['artists.update']
  }
}
