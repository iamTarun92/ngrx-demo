import { CanActivateFn } from '@angular/router';

export const aGuard: CanActivateFn = (route, state) => {
  return true;
};
