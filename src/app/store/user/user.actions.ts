import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { iUser } from '../../models/user';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: iUser[] }>(),
    'Load Users Failure': props<{ error: string }>(),
  }
});
