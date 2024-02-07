//Import all required hooks and dependencies
import { useContext, useState, useEffect }   from "react"
import { useNavigate }            from "react-router-dom"
import { CurrentUser }            from "../../Contexts/CurrentUser"
import { HashLink }               from "react-router-hash-link";



export default function Home () {
    //WE REQUIRE A TOAST FOR WHEN A PERSON ABANDONS A GAME, read from the url for now but thats not a good method
    //need to check if the value is true or error
    const [data, setData] = useState(null)
    useEffect(() => {
        const serverFetchTest = async () => {
            const response = await fetch(`https://boggle-backend-413ebb7ed653.herokuapp.com/api`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setData(data.message);
        }
        serverFetchTest();
    })
    

    return(
        <main>
            <h1> Welcome to Boggle</h1>
            {data}
        </main>
    )
}