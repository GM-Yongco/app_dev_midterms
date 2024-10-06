import {Router} from "express"
import {log_in} from "../controllers/userController.js"
import {register_func} from "../controllers/userController.js"
import {profile_func} from "../controllers/userController.js"

import {token_funcs} from "../middleware/authMiddleware.js"
import {log_request} from "../middleware/authMiddleware.js"

import {sirs_rateLimiterMiddleware} from "../middleware/rate_limiter.js"

export const router_var = Router()

// =======================================================================
// MAIN_CONTENT~
// =======================================================================

router_var.post('/test', (req, res) => {
    return res.send('TEST')
})

router_var.post('/login', sirs_rateLimiterMiddleware, log_request, log_in)

router_var.post('/register', sirs_rateLimiterMiddleware, log_request, register_func)

router_var.get('/profile', sirs_rateLimiterMiddleware, log_request, token_funcs, profile_func)



