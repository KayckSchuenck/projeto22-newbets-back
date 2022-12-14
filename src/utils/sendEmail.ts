import sgMail from '@sendgrid/mail'
import { authRepository } from '../repositories/authRepository.js'

export async function sendEmail(email:string,data:string){
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const url=`ec2-107-20-117-158.compute-1.amazonaws.com/confirm/${data}`
    try{
        const {email:user}=await authRepository.findByEmail(email)
        const msg = {
            to: user, 
            from: process.env.EMAIL,
            subject: 'Activate your account',
            html:`<button><a href="${url}">Clique aqui para confirmar seu email</a></button>`
        }
        await sgMail.send(msg)
    } catch(e){
        console.log(e)
    }
}