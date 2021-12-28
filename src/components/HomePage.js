import ShowPost from "./ShowPost";
import FirstPost from "./FirstPost";
import { Route, Switch, Routes } from 'react-router-dom'

const HomePage = () => {
    
    return(
        <>
            <ShowPost />

            <Routes>
                <Route path="/" exact component={HomePage} />
                <Route path="/firstPost" component={FirstPost} />
            </Routes>
        </>
    )
}
export default HomePage;


