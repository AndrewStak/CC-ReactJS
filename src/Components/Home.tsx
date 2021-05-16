import React, { useEffect, useState } from 'react';
import { PostItem } from '../models';
import PostList from './PostList';

const Home = () => {
    const [data, setData] = useState<PostItem[]>([]);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    let url = 'http://localhost:8000/posts';

    useEffect(() => {
        fetch(url).then(res=>{
            if(!res.ok) throw Error('Could not fetch the data');
            return res.json();
        })
        .then(data=>{
            setData(data);
            setisPending(false);
            setError(null);
            console.log(data);
        })
        .catch(err=>{
            setisPending(false);
            setError(err.message);
        });

        return () => {
            
        };
    }, [url]);
    


    return (
        <div className="home">
            <div>{error}</div>
            <div>Loading...</div>
            <PostList postList={data} />
        </div>
    );
}

export default Home;
