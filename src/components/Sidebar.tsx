import { faSignOut } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement, useContext } from "react"
import Logo from "./Logo"
import { postContext } from "../contexts/PostContext"

function Sidebar() {

  const { getCategory } = useContext(postContext)

  const handleClick = (categoryName: string) => {
    getCategory(categoryName)
  }
  const topics: Array<{
    name: string,
    image: string
  }> = [
      {
        name: "Vegetables",
        image: "../assets/images/front-view-smiley-woman-holding-box.jpg"
      },
      {
        name: "Fruits",
        image: "../assets/images/colorful-fruits-tasty-fresh-ripe-juicy-white-desk.jpg"
      },
      {
        name: "Animals",
        image: "../assets/images/farm-with-goats.jpg"
      },
      {
        name: "Weeds",
        image: "../assets/images/AdobeStock_7445262_Preview.jpeg"

      }
    ]

  const topicsList: Array<ReactElement<HTMLDivElement>> = topics.map((topic, index) => {
    return (
      <div className="topic" key={index} onClick={() => handleClick(topic.name)}>
        <img src={topic.image} alt={topic.name} />
        <h4>{topic.name}</h4>
      </div>
    )
  })

  return (
    <div id="sidebar">
      <Logo />
      <div id="sidebar-content">
        {topicsList}
      </div>
      <div className="logout">
        <FontAwesomeIcon icon={faSignOut} id="logout-icon" />
        <h4>Logout</h4>
      </div>
    </div>
  )
}

export default Sidebar