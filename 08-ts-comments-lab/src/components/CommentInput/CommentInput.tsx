import React, { Component } from 'react';
import { CommentListener } from '../../shared/shared-types';
import { Comment, IdType } from '../../model/comments.model';

interface Props {
  comment: Comment | undefined;
  onCreate: CommentListener;
}

interface StringMap {
  [key: string]: string;
}

interface State {
  fields: StringMap;
  prevCommentId: IdType | undefined;
}

export default class CommentInput extends Component<Props, State> {
  state = {
    fields: {
      id: '',
      text: '',
      author: '',
    },
    prevCommentId: undefined,
  };
  
  static getDerivedStateFromProps(props: Props, state: State) {
    if(props.comment && props.comment.id !== state.prevCommentId) {
      return {
        fields: {
          id: props.comment.id,
          text: props.comment.text,
          author: props.comment.author,
        },
        prevCommentId: props.comment.id,
      }
    } 
    return null;
  }

  render() {
    return (
      <form className="container" onSubmit={this.handleCommentSubmit}>
        <input type="text" id="id" name="id"  value={this.state.fields.id}
          placeholder="Comment ID" readOnly disabled
        />
        <input type="text" id="text" name="text"  value={this.state.fields.text}
          onChange={this.handleTextChanged} placeholder="Comment text here ..."
        />
        <input type="text" id="author" name="author" value={this.state.fields.author}
          onChange={this.handleTextChanged} placeholder="Comment text here ..."
        />
        <button className="button button5" type="submit">Add Comment</button>
        <button className="button button3" type="reset" onClick={this.handleCommentReset}>
          Reset
        </button>
      </form>
    );
  }

  handleTextChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState(({ fields }) => ({
        fields: { ...fields, [{...event}.target.name]: event.target.value },
    }));
  };

  handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment = {...this.state.fields, id: Comment.getNextId()} as Comment;
    this.props.onCreate(newComment);
    this.reset();
  };

  handleCommentReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.reset();
  };

  private reset() {
    if(this.props.comment) {
      this.setState({
        fields: {
          text: this.props.comment.text,
          author: this.props.comment.author,
        },
      });
    } else {
      this.setState({
        fields: {
          text: '',
          author: '',
        },
      });
    }
  }
}
