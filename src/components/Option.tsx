import { useContext } from "react"
import { postContext } from "../contexts/PostContext"
import { PostIdType } from "../types"


function Option({postId}:PostIdType) {
    const { handleDelete } = useContext(postContext)
    return (
        <div className='option' onClick={(event:React.MouseEvent<HTMLDivElement, MouseEvent>) => handleDelete(event, postId)}>
            Delete
        </div>
    )
}

export default Option