import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'clips.index': { paramsTuple?: []; params?: {} }
    'clips.create': { paramsTuple?: []; params?: {} }
    'clips.store': { paramsTuple?: []; params?: {} }
    'clips.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'clips.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'clips.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'albums.create': { paramsTuple?: []; params?: {} }
    'albums.store': { paramsTuple?: []; params?: {} }
    'artists.create': { paramsTuple?: []; params?: {} }
    'artists.store': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'clips.index': { paramsTuple?: []; params?: {} }
    'clips.create': { paramsTuple?: []; params?: {} }
    'clips.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'albums.create': { paramsTuple?: []; params?: {} }
    'artists.create': { paramsTuple?: []; params?: {} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'dashboard': { paramsTuple?: []; params?: {} }
    'clips.index': { paramsTuple?: []; params?: {} }
    'clips.create': { paramsTuple?: []; params?: {} }
    'clips.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'albums.create': { paramsTuple?: []; params?: {} }
    'artists.create': { paramsTuple?: []; params?: {} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'clips.store': { paramsTuple?: []; params?: {} }
    'albums.store': { paramsTuple?: []; params?: {} }
    'artists.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'clips.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'clips.delete': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}