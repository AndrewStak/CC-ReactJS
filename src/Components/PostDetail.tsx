import {useParams} from 'react-router-dom';
import { PostItem } from '../models';
import UseFetch from '../UseFetch';

const PostDetail = () => {
    const id  = useParams();
    const url = `http://localhost:${process.env.REACT_APP_DB_PORT}/posts/` + id;
    const { data, isPending, error } = UseFetch<PostItem>(url);

    const handleDelete = () => {
        fetch(url, {
            method:'DELETE'
        }).then(()=>{

        })
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{error}</div> }
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleDelete}>DELETE</button>
                </article>
            )}
        </div>
    );
}

export default PostDetail;


