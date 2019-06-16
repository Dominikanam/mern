import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-action']}>
        <strong><FormattedMessage id="postVoteCount" />{props.post.voteCount}</strong>
        <a href="#" onClick={props.onVoteUp} className={styles['vote-up-post']}><FormattedMessage id="voteUpPost" /></a>
        <a href="#" onClick={props.onVoteDown} className={styles['vote-down-post']}><FormattedMessage id="voteDownPost" /></a>
        <a href="#" onClick={props.onDelete} className={styles['delete-post']}><FormattedMessage id="deletePost" /></a>
      </p>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    voteCount: PropTypes.number.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onVoteDown: PropTypes.func.isRequired,
  onVoteUp: PropTypes.func.isRequired,
};

export default PostListItem;
