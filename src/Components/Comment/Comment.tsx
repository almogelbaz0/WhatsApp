import './Comment.css';

import React from 'react';

import { CommentType } from '../../Modals/Comment/Comment';

export interface CommentProps {
  comment: CommentType;
  isMyComment: boolean;
}

const Comment = ({ comment, isMyComment }: CommentProps) => {
  return (
    <div className={`${isMyComment ? "myCommentDiv" : "commentDiv"}`}>
      <div className={`${isMyComment ? "myComment" : "comment"}`}>
        {comment.content.getConent()}
      </div>
    </div>
  );
};

export default Comment;
