import fetch from 'node-fetch'

import { rawProcessor } from '../../../core/functions/rawProcessor'

import { IHentai } from '../../../core/@types/IHentai'
import { IRawHentai } from '../../../core/@types/IRawHentai'

export const getHentai = async (id: number | string): Promise<IHentai> => {
  const res: IRawHentai = await fetch(
    `https://nhentai.net/api/gallery/${id}`
  ).then(o => o.json())

  return rawProcessor(res)
}
