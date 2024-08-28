
import { Request, Response, Router } from 'express';


export class AppRouter {
   static get routes(): Router {
        const router = Router();


        router.get('/', (req:Request, res:Response) => {
             res.send('Hello from Server whit Typescript and POO');
        });



        return router;
   };

}