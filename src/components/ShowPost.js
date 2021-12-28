import { useEffect, useState } from "react";
import axios from 'axios'
import './styles.css'

const ShowPost = () => {
       
    const [data, setData] = useState([])
    const [image, setImage] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    } , [])

    const showImage = (e, id) => {

        axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
        .then(response => 
            {
                 e.target.innerHTML+= `<img src=${response.data.url} alt="default Image"  width="100px" height="100px"  />`
            }
     )
        .catch(error => console.log(error))
    }

    const postLists = data.map((data, index) => {
        return(
            index < 6 && <li key={data.id}  onClick={(e) => showImage(e , data.id)}  className="post_listStyle">
            <h3>{data.title}</h3>
            <p>
                {data.body}
            </p>

       </li>   
        )
    })
    return(
        <>
            <h2 className="post_header">Post Lists</h2>
            {data.length > 0 ?
                <ul>
                {postLists}
                </ul> : 
                <p>
                    Loading...
                </p>
            }
        </>
    )
}

export default ShowPost;