import axios from 'axios'

import { IRawHentai } from '../../../core/@types/IRawHentai'

export const getHentai = async (id: number | string): Promise<IRawHentai> => {
  const res = await axios.get<IRawHentai>(
    `https://nhentai.net/api/gallery/${id}`
  )

  return res.data
}
