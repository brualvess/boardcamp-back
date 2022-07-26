import { Router } from 'express';
import { 
    createCategories,
    listCategories
} from './controllers/categoriesControllers.js';
import {
     createGames,
     listGames
     } from './controllers/gamesControllers.js';
import { createCustomers,
         listCustomers,
         listWithId,
         updateCustomers
} from './controllers/customersControllers.js';
import { createRentals,
         listRentals,
         finishRentals,
         deleteRentals
} from './controllers/rentalsControllers.js';
 

const router = Router()

// Category routes
router.post('/categories', createCategories)
router.get('/categories', listCategories)

// Game routes
router.post('/games', createGames)
router.get('/games', listGames)

// Customer routes
router.post('/customers', createCustomers)
router.get('/customers', listCustomers)
router.get('/customers/:id', listWithId)
router.put('/customers/:id', updateCustomers)

// Customer rentals
router.post('/rentals', createRentals)
router.get('/rentals', listRentals)
router.post('/rentals/:id/return', finishRentals)
router.delete('/rentals/:id', deleteRentals)

export default router;