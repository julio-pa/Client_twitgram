import PostCard from '../posts/PostCard';
import { get_tweets_list } from '../../redux/actions/tweets/tweets'
import { useEffect } from 'react';
import { connect } from 'react-redux'


const Posts = ({
  get_tweets_list,
  posts,
}) => {

  useEffect(() => {
    get_tweets_list()
  }, []);

  return (
    <div>
      {posts && posts.map((post, index) => (
        <PostCard data={post} key={index} index={index} />
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  posts: state.tweets.tweets_list,
  count: state.tweets.count,
  next: state.tweets.next,
  previous: state.tweets.previous,
})

export default connect(mapStateToProps, {
  get_tweets_list,
})(Posts);
