import { faStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from './Logo'

function LoginContent() {
    const stars = [1, 2, 3, 4, 5].map((star) => {
        return (
            <FontAwesomeIcon icon={faStar} key={star} className="rated-login" />
        )
    })
    return (
        <div id='login-content'>
            <Logo />
            <div id='login-intro'>
                <p>
                    "Joining this agriculture community has been one of the best decisions I've made.
                    Not only have I been able to connect with other farmers who share my passion,
                    but I've also learned so much from the resources available on the website.
                    The forums and blogs are incredibly helpful,
                    and I've found answers to questions I didn't even know I had.
                    Overall, I highly recommend signing up and becoming a member of this community."
                </p>

                <div className="author-info">
                    <img src="../assets/images/countryside-woman-holding-plant-leaves-removebg-preview.png" alt='farmer' />
                    <span id='author-name'>
                        Mama Does
                    </span>
                    <span id='author-stars'>
                        {
                            stars
                        }
                    </span>



                </div>

            </div>

        </div>
    )
}

export default LoginContent