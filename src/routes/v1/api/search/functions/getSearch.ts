import axios from 'axios'

import { rawProcessor } from '../../../core/functions/rawProcessor'

import { IHentai } from '../../../core/@types/IHentai'
import { IRawHentai } from '../../../core/@types/IRawHentai'

interface IAPIResponse {
  result: IRawHentai[]
  num_pages: number
  per_page: number
}

export const getSearch = async (
  query: string,
  page: number | string = 1
): Promise<IHentai[]> => {
  const res = await axios.get<IAPIResponse>(
    `https://nhentai.net/api/galleries/search?query="${query}"&page=${page}`
  )

  return res.data.result.map(o => rawProcessor(o))
}
