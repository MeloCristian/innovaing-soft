const jambonz = require('@jambonz/node-client');
const client = jambonz('7c3a9614-172e-402f-9152', 'b04e5b75-9195-4b06-98b4-26bf5ecd407e', {baseUrl: 'https://jambonz.us'});
const {WebhookResponse} = jambonz;

export const JambonzController = {
    customOperation: (req: any, res:any) => {
        const app = new WebhookResponse();
        try {
            const app = new WebhookResponse();
            app.message({
              to: "+573226389389",
              from: "+18573713608",
              text: 'roger that',
              actionHook: '/sms/result'
            });
            res.status(200).json(app);
          } catch (err) {
            res.sendStatus(503);
          }
    }
}