import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Users } from '../../models/user';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Load Users Success': props<{ data: Users[] }>(),
    'Load Users Failure': props<{ error: string }>(),
  }
});
