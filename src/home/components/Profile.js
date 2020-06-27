import React from 'react'
import Typical from 'react-typical'

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
          <div className="headercontainer">
            <h1>Oscar Kennedy Smith</h1>
					  <h2>
              <Typical
                loop={1}
                wrapper="b"
                steps={[
                  'Frontend',
                  1000,
                  'Backend',
                  1000,
                  'Full Stack',
                ]}
                />            
              {' '}Developer</h2>
          </div>
			</div>
		</div>
    </div>
	  </section>
  )
}

export default Profile 
