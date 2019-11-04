import { Request, Response, response } from 'express';
import * as HttpStatus from 'http-status';

export default function authFail(req: Request, res: Response) {
    response.sendStatus(HttpStatus.UNAUTHORIZED);
}