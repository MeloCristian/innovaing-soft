const accountSid = 'ACc6765e026a1c0aed8f041d88b7f7bbdb' // El id de tu cuenta; 
const authToken = 'cde464871fa44512934bc2e754bf238c' // El TOKEN de tu cuenta; 
import  Twilio  from "twilio";

export const MessageController = {

    async sendMessage(req: any, res: any) {
        const client = Twilio(accountSid, authToken);
       try {
        const {number, message} = req.body;
        const response = await client.messages.create({
            body: message, 
            from: 'whatsapp:+14155238886', // El número que te proporcionen       
            to: `whatsapp:+573226389389`
         });
 
         console.log(response);
 
         return res.json({
             msg: 'Mensaje enviado correctamente'
         });
       } catch (error) {
            console.log(error);
            return res.status(500).send()
       }
    },
}