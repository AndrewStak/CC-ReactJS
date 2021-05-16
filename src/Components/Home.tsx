import { PostItem } from '../models';
import UseFetch from '../UseFetch';
import PostList from './PostList';


const Home = () => {
    let url = `http://localhost:${process.env.REACT_APP_DB_PORT}/posts`;
    console.log(url);    

    const { data, isPending, error } = UseFetch<PostItem[]>(url);
    console.log(data);

    return (
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            { data && <PostList postList={data} />}
        </div>
    );
}

export default Home;
