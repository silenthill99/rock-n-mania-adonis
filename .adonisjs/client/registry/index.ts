/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'dashboard': {
    methods: ["GET","HEAD"],
    pattern: '/dashboard',
    tokens: [{"old":"/dashboard","type":0,"val":"dashboard","end":""}],
    types: placeholder as Registry['dashboard']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'clips.index': {
    methods: ["GET","HEAD"],
    pattern: '/clips',
    tokens: [{"old":"/clips","type":0,"val":"clips","end":""}],
    types: placeholder as Registry['clips.index']['types'],
  },
  'clips.create': {
    methods: ["GET","HEAD"],
    pattern: '/clips/create',
    tokens: [{"old":"/clips/create","type":0,"val":"clips","end":""},{"old":"/clips/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['clips.create']['types'],
  },
  'clips.store': {
    methods: ["POST"],
    pattern: '/clips',
    tokens: [{"old":"/clips","type":0,"val":"clips","end":""}],
    types: placeholder as Registry['clips.store']['types'],
  },
  'clips.edit': {
    methods: ["GET","HEAD"],
    pattern: '/clips/:id/edit',
    tokens: [{"old":"/clips/:id/edit","type":0,"val":"clips","end":""},{"old":"/clips/:id/edit","type":1,"val":"id","end":""},{"old":"/clips/:id/edit","type":0,"val":"edit","end":""}],
    types: placeholder as Registry['clips.edit']['types'],
  },
  'clips.update': {
    methods: ["PUT"],
    pattern: '/clips/:id',
    tokens: [{"old":"/clips/:id","type":0,"val":"clips","end":""},{"old":"/clips/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clips.update']['types'],
  },
  'clips.delete': {
    methods: ["DELETE"],
    pattern: '/clips/:id',
    tokens: [{"old":"/clips/:id","type":0,"val":"clips","end":""},{"old":"/clips/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['clips.delete']['types'],
  },
  'albums.create': {
    methods: ["GET","HEAD"],
    pattern: '/albums/create',
    tokens: [{"old":"/albums/create","type":0,"val":"albums","end":""},{"old":"/albums/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['albums.create']['types'],
  },
  'albums.store': {
    methods: ["POST"],
    pattern: '/albums',
    tokens: [{"old":"/albums","type":0,"val":"albums","end":""}],
    types: placeholder as Registry['albums.store']['types'],
  },
  'artists.create': {
    methods: ["GET","HEAD"],
    pattern: '/artists/create',
    tokens: [{"old":"/artists/create","type":0,"val":"artists","end":""},{"old":"/artists/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['artists.create']['types'],
  },
  'artists.store': {
    methods: ["POST"],
    pattern: '/artists',
    tokens: [{"old":"/artists","type":0,"val":"artists","end":""}],
    types: placeholder as Registry['artists.store']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
