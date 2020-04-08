import { Request, Response} from 'express';
import createUser from './services/CreateUser';

// string, number, boolean, object, Array
// iterfaces

export function hellowWorld(req: Request, res: Response) {
  const user = createUser({ 
    email: 'rafael@gmail.com', 
    password: '123456' ,
    techs: [
     'Node.JS',
     'ReactJS',
     'React Native',
     { title: 'Javascript', score: 100 }
    ],
  });

  return res.json({ message: 'Hello World' });
}
