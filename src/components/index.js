import React, { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png';
import likeIco from '../assets/Like.png';
import comment from '../assets/Comment.png';
import Comments from '../components/comments';
import InitStates from "../constants/initStates";
import moment from 'moment';
import "./Style.css";


const PostCompoment = (porps) => {
    const [post, setPost] = useState(InitStates.initPost);
    const [showUserComment, setShowUserComment] = useState(false)
    const showComment = () => {
        setShowUserComment(true)
    }

    useEffect(() => {
        if (porps.post) {
            setPost(porps.post)
        }
    }, []);

    const onLikePost = () => {
        if (post.likes.length) return;
        const likePayload = {
            username: "Aleem",
            createdAt: new Date().toISOString()
        }
        porps.likePost(porps.postKey, likePayload)
    }

    const onCommentPost = (title) => {
        const likePayload = {
            username: "John",
            proffession: "Software Developer",
            title,
            createdAt: new Date().toISOString()
        }
        porps.commentPost(porps.postKey, likePayload)
    }

    return (
        <div>
            <div className='d-flex justify-content-center pt-5 mt-5 mb-5'>
                <div className='card_width'>
                    <div className='news_feed_card'>
                        <div className='d-flex p-3'>
                            <div className='pt-3 news_feed_card_top'>
                                <img className='w-50' src={avatar} />
                            </div>
                            <div className='pl-3'>
                                <p className='mb-0 user_name'>{post.username}</p>
                                <p className='mb-0 location' >{post.location}</p>
                                <p className='mb-0 time'>{moment(post.createdAt).fromNow()}</p>
                            </div>
                        </div>
                        <div className='p-3 pt-0 pb-0'>
                            <p className='title'>{post.title}</p>
                        </div>
                        <div className='p-3 pt-0 pb-0'>
                            <p className='like_comment'>{post.likes.length} Likes . {post.comments.length} Comments</p>
                        </div>
                        <div className='comment_cmp'>
                            <div className='d-flex p-3' >
                                <div className='like_btn' onClick={onLikePost}><img src={likeIco} /> Like</div>
                                <div className='comment_btn' onClick={showComment} ><img src={comment} /> Comment</div>
                            </div>
                            {
                                showUserComment && <Comments commentPost={onCommentPost} commentList={post.comments} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCompoment