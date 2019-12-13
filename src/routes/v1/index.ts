import express from 'express'

import encodeRoute from './api/encode/services'
import galleryRoute from './api/gallery/services'
import relatedRoute from './api/related/services'

const router = express.Router()

router.use('/encode', encodeRoute)
router.use('/gallery', galleryRoute)
router.use('/related', relatedRoute)

export default router
