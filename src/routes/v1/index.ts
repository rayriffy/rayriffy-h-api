import express from 'express'

import encodeRoute from './apis/encode/services'
import galleryRoute from './apis/gallery/services'
import relatedRoute from './apis/related/services'

const router = express.Router()

router.use('/encode', encodeRoute)
router.use('/gallery', galleryRoute)
router.use('/related', relatedRoute)

export default router
