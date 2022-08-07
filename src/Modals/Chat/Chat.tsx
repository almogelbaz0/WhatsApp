import { CommentType } from '../Comment/Comment';
import { UserType } from '../User/User';

export type ChatType = {
  id: number;
  participants: UserType[];
  comments: CommentType[];
  type: "group" | "private";
};

export type GroupChatType = ChatType & {
  name: string;
};
