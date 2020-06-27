import React from 'react'

import './Profile.css'
import profile from '../../assets/profile.png'

export const Profile = () => {
  return (
    <section className="banner parallax" id="home">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="main-author-img">
						<img src={profile} alt="author image" />
					</div>

					<h1>Oscar Kennedy Smith</h1>
					<div className="typing-title">
					</div>
					<h2>Web Developer</h2>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Profile 
