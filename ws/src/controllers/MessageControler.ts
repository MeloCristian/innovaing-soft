const accountSid = 'ACc6765e026a1c0aed8f041d88b7f7bbdb' // El id de tu cuenta; 
const authToken = 'c3beca97bf97f9344b9172f7d6845e53' // El TOKEN de tu cuenta; 
const client = require('twilio')(accountSid, authToken); 
const MessaginResponse = require('twilio').twiml.MessagingResponse;

export const MessageController = {

    async sendMessage(req: any, res: any) {
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