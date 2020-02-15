import fetch from 'node-fetch'

import { IRawHentai } from '../../../core/@types/IRawHentai'
import { IRelated } from '../@types/IRelated'

export const getRelated = async (
  id: number | string
): Promise<IRawHentai[]> => {
  const res: IRelated = await fetch(
    `https://nhentai.net/api/gallery/${id}/related`
  ).then(o => o.json())

  return res.result
}
