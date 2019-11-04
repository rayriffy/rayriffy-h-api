import cors from 'cors'
import express from 'express'

import { IResponse } from './@types/IResponse'
import { getImageFunction } from './functions/getImage'

const server = express()

server.use(cors())

server.get('/', async(req, res) => {
  const response: IResponse<{docs: string}> = {
    status: 'success',
    code: 201,
    response: {
      message: 'hello',
      data: {
        docs: 'https://github.com/rayriffy/rayriffy-h-api#api',
      },
    },
  }

  return res.status(200).send(response)
})

server.get('/encode/:id', async(req, res) => {
  try {
    const {id} = req.params

    const image = await getImageFunction(id)

    const response: IResponse<string> = {
      status: 'success',
      code: 201,
      response: {
        message: 'image encoded',
        data: `data:image/jpeg;base64,${image}`,
      },
    }
  
    return res.status(200).send(response)
  } catch(e) {
    console.log(e)

    const response: IResponse<any> = {
      status: 'failed',
      code: 407,
      response: {
        message: 'puppeteer crash',
        data: e,
      },
    }

    return res.status(400).send(response)
  }
})

server.all('*', (req, res) => {
  const response: IResponse<null> = {
    status: 'failed',
    code: 405,
    response: {
      message: 'route not found / invalid method',
      data: null,
    },
  }

  return res.status(405).send(response)
})

server.listen(3000)

export default server
