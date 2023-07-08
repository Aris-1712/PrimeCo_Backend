import { CanActivate, ExecutionContext } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    try {
      const request = context.switchToHttp().getRequest();
      // we use a hardcoded string to validate the user for sake of simplicity
      let valid = jwt.verify(request.headers?.authorization,'test123');
      return valid;
    } catch (err) {
        return false
    }
  }
}
