import express from "express"
import { login, register } from './../controllers/auth.controller.js';
import { body } from 'express-validator'
import { validationResultExpress } from './../middlewares/validationResultExpress.js';

const router = express.Router()

router.post(
    '/login',
    [ 
        body('email', "Formato de email inválido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password','Debe tener como minimo 6 caracteres')
            .trim()
            .isLength({ min: 6 })
            .custom((value, { req })=>{
                if(value !== req.body.repassword){
                    throw new Error('No coinciden las contraseñas')
                }
                return value
            })
    ],
    validationResultExpress,
    login)

router.post(
    '/register',
    [ 
        body('email', "Formato de email inválido")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password','Debe tener como minimo 6 caracteres')
            .trim()
            .isLength({ min: 6 })
            .custom((value, { req })=>{
                if(value !== req.body.repassword){
                    throw new Error('No coinciden las contraseñas')
                }
                return value
            })
    ],
    validationResultExpress,
    register
)

export default router