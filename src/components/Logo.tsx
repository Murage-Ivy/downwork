import { Link} from 'react-router-dom'
import '../index.css'
import { useEffect, useState } from 'react'
import { UserType } from '../types'
function Logo() {
    const [user, setUser] = useState<UserType>({
        id: 0,
        username: "",
        email: "",
        image_url: "",
    })

 

    const getUser = async () => {
        const response = await fetch('auto_login')
        const data = await response.json()
        if (response.ok) {
            setUser(data)
        }
        else {
            console.log(data.error)
        }
    }


    useEffect(() => {
        getUser()
    }, [])


    return (

        <>
            {user.id !== 0 ? <Link to="/postpage"><h1 id="logo"> Shamba <span id="colored-logo">ShapeUp.</span></h1></Link> : <Link to="/"><h1 id="logo"> Shamba <span id="colored-logo">ShapeUp.</span></h1></Link>}

        </>

    )
}

export default Logo