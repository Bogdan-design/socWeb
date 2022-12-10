import React from "react";
import s from "./MyPosts.module.css"
import {Post} from "./Posts/Post";

export const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message="Hi, how a you?" likeCounter={5}/>
                    <Post message="It's my first post" likeCounter={7}/>
                </div>
            </div>
        </div>
    )
}