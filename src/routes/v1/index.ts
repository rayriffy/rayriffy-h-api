import express from 'express'

import encodeRoute from './encode/services'
import galleryRoute from './gallery/services'
import relatedRoute from './related/services'

const router = express.Router()

router.use('/encode', encodeRoute)
router.use('/gallery', galleryRoute)
router.use('/related', relatedRoute)

export default router
