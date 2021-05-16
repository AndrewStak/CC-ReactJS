import React from 'react';
import { PostItem } from '../models';

const PostList = (props: { postList: PostItem[] }) => {
    return (
        <div className="blog-list">
            {
                props.postList.map(post => (
                    <div className="blog-preview" key={post.id}>
                        <a href={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>Written by {post.author}</p>
                        </a>
                    </div>
                ))
            }
        </div>
    );
}

export default PostList;
