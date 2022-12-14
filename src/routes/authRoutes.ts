import {Router} from 'express'
import schemaValidateMiddleware from "../middlewares/schemaMiddleware.js";
import { schemaLogin,schemaResendEmail,schemaSignUp } from '../schemas/authSchemas.js';
import { login,signUp,activation,resendEmail } from '../controllers/authControllers.js';

const authRouter=Router();

authRouter.post('/signup',schemaValidateMiddleware(schemaSignUp),signUp)
authRouter.post('/login',schemaValidateMiddleware(schemaLogin),login)
authRouter.get('/confirm/:activationToken',activation)
authRouter.put('/confirm/resend',schemaValidateMiddleware(schemaResendEmail),resendEmail)

export default authRouter