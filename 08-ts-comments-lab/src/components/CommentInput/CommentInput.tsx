import React, { Component, Fragment } from 'react';
import { CommentListener, NoArgListener } from '../../shared/shared-types';
import { Comment, IdType } from '../../model/comments.model';

interface Props {
  comment: Comment | undefined;
  onSubmit: CommentListener;
  onCancel: NoArgListener;
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
  
  static getDerivedStateFromProps({comment = ({id:'', text:'', author:''} as unknown as Comment)}: Props,
                                  state: State) {
    if((comment && comment.id) !== state.prevCommentId) {
      return {
        fields: {
          id: comment.id,
          text: comment.text,
          author: comment.author,
        },
        prevCommentId: comment.id,
      }
    }
    return null;
  }

  render() {
    return (
      <Fragment>
      <h2>{this.props.comment? 'Edit Comment': 'Add New Comment' }</h2>
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
        <button className="button button5" type="submit">{this.props.comment? 'Edit Comment': 'Add Comment' }</button>
        <button className="button button3" type="reset" onClick={this.handleCommentReset}>
          Reset
        </button>
        { this.props.comment &&
          <button className="button button2" type="button" onClick={this.handleCommentCancel}>
            Cancel
          </button>
        }
      </form>
      </Fragment>
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
    const newComment = {...this.state.fields, id: this.state.fields.id || Comment.getNextId()} as Comment;
    this.props.onSubmit(newComment);
    this.reset();
  };

  handleCommentReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.reset();
  };

  handleCommentCancel= (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.props.onCancel();
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
