import {Request, Response} from 'express';
import * as express from 'express';
const restApi = express.Router();

// your existing Express routes
restApi.route('/login')
  .post((req: Request, res: Response) => {
    console.log(req.body);
    res.send({statusCode: 0});
  });
export {restApi};