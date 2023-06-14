import { UserInterface } from 'interfaces/user';
import { PlayerInterface } from 'interfaces/player';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  content: string;
  coach_id: string;
  player_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  player?: PlayerInterface;
  _count?: {};
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  coach_id?: string;
  player_id?: string;
}
