import React, { Component } from 'react';
import { CommentListener } from '../../shared/shared-types';
import { Comment } from '../../model/comments.model';

interface Props {
  comment: Comment | undefined;
  onCreate: CommentListener;
}

interface StringMap {
  [key: string]: string;
}

interface State {
  fields: StringMap;
}

export default class CommentInput extends Component<Props, State> {
  state = {
    fields: {
      text: '',
      author: '',
    },
  };

  render() {
    return (
      <form className="container" onSubmit={this.handleCommentSubmit}>
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
    this.props.onCreate({...this.state.fields} as Comment);
    this.reset();
  };

  handleCommentReset = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    this.reset();
  };

  private reset() {
    this.setState({
      fields: {
        text: '',
        author: '',
      },
    });
  }
}
