import { ChatType } from '../Chat/Chat';
import { UserType } from '../User/User';
import { Content } from './Content/Content';

export type CommentType = {
  sender: UserType;
  time: Date;
  content: Content;
  chat?: ChatType;
};
