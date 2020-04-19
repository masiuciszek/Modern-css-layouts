/* eslint-disable import/no-unresolved */
import { Router } from 'express'
import { getAllStores } from '../controllers/store.controller'

const router = Router()

router.route('/').get(getAllStores)

export { router }
