import cors from 'cors'
import express from 'express'

const server = express()

server.use(cors())

server.get('/', (res, res) => {
  return res.status(200).send({
    status: 'success',
    code: 201,
  })
})

server.listen(3000)

export default server
