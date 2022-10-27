import React, {useState}  from "react"
import useFetch  from "./usefetch"
import './Users.css'
export default function Users () {
const [page, setPage] = useState(1);
const { loading, error, data } = useFetch(`https://randomuser.me/api/?page=${page}&results=500`)
console.log({loading, error, data});

const PER_PAGE = 3;


const pages = 20;

const skip = page * PER_PAGE - PER_PAGE;

if (loading) {
    return  <div>
    <div className="spinner"></div>
    <div className="circle"></div>
    </div>
    
}

if (!loading && error) {
    return<h3>Error</h3>
}

return (
    <div className="user">
        <h1>Bird App Users</h1>
        {data?. results
        .slice (skip, skip + PER_PAGE)

        .map((each, index) => { 
            const name = `${each.name.title} ${each.name.first} ${each.name.last}`
            const picture =<img src={each.picture.medium}/>
            const username = `${each.login.username}` 
            
            return (
                
               [ 
            
               <>
               <ul>
               <li key={picture}>{picture}</li>
                <li key={name}>Name : {name}</li>
                 <li key={username}>Username : {username}</li>
                
                 </ul>
                </>]
            );
        })}


        {
            <button className="button" disabled={page <= 1}
            onClick={()=> setPage((prev) => prev -1)}>prev</button>
}
{/* <p className="pagination">
    pages: {page} of {pages}
</p> */}
{Array.from({length: pages}, (value, index) =>index + 1).map((each) => (
    <button className="button" onClick={() => setPage(each)}>{each}</button>
))}

{<button
className="button"
disabled = {page>= pages}
aria-disabled= {page >= pages}
onClick={()=> setPage((prev) => prev + 1)}>next</button>}

{/* <p className="pagination">
    pages: {page} of {pages}
</p> */}
    </div>
)
}
