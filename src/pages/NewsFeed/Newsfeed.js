import React, { useState } from 'react'
import avatar from '../../assets/avatar.png'
import imgs from '../../assets/Img.png'
import "./Style.css"
import PostCompoment from '../../components';
import MockPosts from '../../constants/dummyPost';
import InitStates from "../../constants/initStates";


const Newsfeed = () => {
    const [posts, setPosts] = useState(MockPosts);
    const [post, setPost] = useState(InitStates.initPost);

    const onChangeNewaFeed = (e) => {
        setPost({ ...post, title: e.target.value, createdAt: new Date().toISOString() });
    }

    const onSavePost = (e) => {
        e.preventDefault();
        const clonePosts = [...posts];
        clonePosts.push(post);
        setPosts(clonePosts);
        setPost(InitStates.initPost);
    }

    const onPostLike = (postIndex, likePayload) => {
        const clonePosts = [...posts];
        clonePosts[postIndex].likes = [...clonePosts[postIndex].likes, likePayload];
        setPosts(clonePosts);
    }

    const onPostComment = (postIndex, likePayload) => {
        const clonePosts = [...posts];
        clonePosts[postIndex].comments = [...clonePosts[postIndex].comments, likePayload];
        setPosts(clonePosts);
    }

    return (
        <div className='p-4'>
            <div className='d-flex justify-content-center pt-5 mt-5'>
                <div className='card_width'>
                    <div className='news_feed_card'>
                        <form onSubmit={onSavePost}>
                            <div className='d-flex pb-5 mb-4 p-3'>
                                <div className='pt-3 news_feed_card_top'>
                                    <img className='w-50' src={avatar} />
                                </div>
                                <div className='pl-3 input_div'>
                                    <textarea value={post.title} onChange={onChangeNewaFeed} required wrap="soft" placeholder='What is on your mind?' className='pt-1 pl-3 input_text autosize' type="text" ></textarea>
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div className='d-flex justify-content-between p-3'>
                                <div className='upload_image_btn'>
                                    <img src={imgs} /> Photo/Video
                                </div>
                                <div>
                                    <button type="submit" className='btn btn-primary'>Post It</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {
                posts.map((post, i) => <PostCompoment commentPost={onPostComment} likePost={onPostLike} post={post} postKey={i} key={i} />)
            }

        </div>
    )
}

export default Newsfeed