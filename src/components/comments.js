import React, { useState, useEffect } from 'react';
import avatar from '../assets/avatar.png';
import likeIco from '../assets/Like.png';
import deleteIco from '../assets/Deletes.png';
import editIco from '../assets/Edit.png';
import InitStates from "../constants/initStates";
import "./Style.css";
import moment from 'moment';


const Comment = ({ comment }) => {

    return (
        <div className='d-flex p-3'>
            <div className='pt-3 user_img_comment'>
                <img className='w-50' src={avatar} />
            </div>
            <div className='comment_box'>
                <div className='d-flex justify-content-between' >
                    <p className='mb-0 comment_Uname'> {comment.username} </p>
                    <p className='mb-0 comment_time'> {moment(comment.createdAt).fromNow()} </p>
                </div>
                <div>
                    <p className='mb-0 comment_prof'> {comment.proffession}</p>
                    <p className='mb-0 comment_title'> {comment.title}</p>
                </div>
                <div className='d-flex pt-2' >
                    <p className='mb-0 comment_mesg_like'> 0 Likes  </p>
                    <p className='mb-0 feedback_ico'> <img style={{ width: 20 }} src={likeIco} /> Likes  </p>
                    <p className='mb-0 feedback_ico'> <img style={{ width: 20 }} src={editIco} /> Edit  </p>
                    <p className='mb-0 feedback_ico'> <img style={{ width: 20 }} src={deleteIco} /> Delete  </p>
                </div>
            </div>
        </div>
    )
}

const PostCompoment = (props) => {
    const [comments, setComments] = useState(props.commentList);
    const [comment, setComment] = useState(InitStates.initComment);

    const onChangeAddComment = (e) => {
        setComment({ ...comment, title: e.target.value, createdAt: new Date().toISOString() })
    }

    useEffect(() => {
        setComments(props.commentList)
    }, [props.commentList])

    const onEnterPress = (e) => {
        e.preventDefault();
        props.commentPost(comment.title);
        setComment(InitStates.initComment)
    }

    return (
        <div>
            <div className='d-flex p-3'>
                <div className='pt-3 user_img_comment'>
                    <img className='w-50' src={avatar} />
                </div>
                <form className='comment_section' onSubmit={onEnterPress}>
                    <div className='pl-3 pt-1'>
                        <input className='comment_input' value={comment.title} onChange={onChangeAddComment} placeholder='Add a Comment' type="text" />
                    </div>
                </form>
            </div>
            {
                comments.map((comment, i) => <Comment comment={comment} key={i} />)
            }

        </div>
    )
}

export default PostCompoment