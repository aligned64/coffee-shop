import { CanActivateFn } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

export const usrGuard: CanActivateFn = () => {
  console.log('authGuard#canActivate called');
  let res: any

  return false;
};
