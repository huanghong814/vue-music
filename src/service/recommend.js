import { get } from './base'

export function getAlbum () {
  return get('/api/getRecommend')
}
