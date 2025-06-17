import { useParams } from "react-router-dom";

const Blog=()=>{
    const {id} = useParams();

    return(
        <div>
            {id}번 블로그 페이지입니다.
        </div>
    );
}

export default Blog;