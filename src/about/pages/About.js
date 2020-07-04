import React from 'react'

import AboutList from '../components/AboutList'
import Header from '../components/Header'

import profile from '../../assets/profile.png'
import webdev from '../../assets/webdev.jpeg'
import sports from '../../assets/sports.jpg'
import techlaw from '../../assets/techlaw.jpg'
import traveller from '../../assets/traveller.jpg'
import teamplayer from '../../assets/teamplayer.jpeg'

const ABOUT_ITEMS = [
  {
    id: "a1",
    image: profile,
    title: "Who Am I",
    blurb: "Web Dev  |  Lawyer  |  Sportsman",
    body: "My name is Oscar and I have a background in international business, law and now web development. I am an optimistic extrovert with an enthusiasm for pragmatism and a love of tech. Approachable and adaptable, I enjoy social gatherings and learning about other people and their motivations in life. I am passionate about all things tech and am excited to commence work in web development.",
    fade: "fade-right"
  },
  {
    id: "a2",
    image: webdev,
    title: "Why Web Dev",
    blurb: "Relevant  |  Creative  |  Beneficial",
    body: "I have decided to become a developer because I want to understand the technologies that will ultimately come to govern our future society. With the discovery of web development, my love for tech has evolved to be about more than just personal enjoyment and interest. Tech is everywhere and in everything. We are living through a monumental passage of time as we transition into the digital age and I want to be at the forefront of that wave. Technology is going to be so intricately entwined in the fabric of our future global society and web development is at the heart of this. I feel at this point in time there are few other professions more pertinent or more relevant than that of web development. Transferring logical concepts from my own mind into readable, usable code also allows me to be creative. I enjoy the challenge of understanding what makes good UI and UX. I feel there is something so elegant and beautiful about the construction of efficient, logical code and algorithms. I also genuinely enjoy reading other people’s code and deciphering its author’s intentions. ",
    fade: "fade-left"
  },
  {
    id: "a3",
    image: sports,
    title: "Hobbies",
    blurb: "Football  |  Golfing  |  Acting",
    body: "I am passionate about sport and acting. To fuel my competitive urge growing up, I routinely played soccer and baseball, dabbled in AFL and cricket, and even satisfied my curiosity of ice hockey and gridiron. Now, as the athleticism of youth wanes, I love to play golf and indoor futsal. I take an interest in most professional sports and know an unhealthy amount about European football (soccer) leagues and AFL. Theatre is my other passion. I love to act in community plays and productions around Brisbane and the Sunshine Coast. It has been an immensely rewarding and creative outlet ever since I performed in my first play when I was 13. Not only do I love the excitement of performance, I also love that the people involved in the arts are incredibly accepting and passionate.", 
    fade: "fade-right",
  },
  {
    id: "a4",
    image: teamplayer,
    title: "Team Player",
    blurb: "Driven  |  Social  |  Empathetic",
    body: "From my life experiences and living abroad to my previous involvement in a variety of industries working alongside people from all walks of life, I feel I would add value to a team through my adaptability, patience, attentiveness and empathy. Through extroversion and a genuine interest in other people, I enjoy engaging in conversation and fuelling a social atmosphere. However, I am also acutely aware that others may prefer or feel more comfortable in a more solitary environment and so I adapt accordingly. I feel I know when to take charge and lead proactively, and when take instructions and lead by example. I am also passionate about the backend of web development. I am thoroughly enjoying the challenges that come with designing a beneficial UI and UX that is visually appealing and functional but understanding the manipulation of data and logic is where I feel I thrive. Thanks to Coder Academy, I have a solid foundational knowledge of the backend in both the MERN stack and Ruby on Rails.",
    fade: "fade-left",
  },
  {
    id: "a5",
    image: traveller,
    title: "Traveller",
    blurb: "California  |  Spain  |  London",
    body: "Born and bred in Brisbane, I have lived here most of my life. However, I have also resided beyond its borders. In 2008, I moved to California for a year where I went to high school as a Rotary international exchange student. At 17, it was challenging, but I came to learn there are good people wherever you go and I formed some lifelong friendships, both with American kids and other exchange students from places like Brazil, Argentina and France. During university, I lived and studied in Madrid for a semester. It was another huge life experience that was once again a real pleasure to be able to share it with a group of wonderfully diverse people. I would love to live in London or somewhere else in the UK. When visiting as a tourist in 2015, I was struck by an odd sense of familiarity, a feeling of connection I found to be unique throughout my travels. From the cold weather to the fireplaces, the tech boffins to the football obsessives, I think I could find myself quite at home there one day. ",
    fade: ""
  },
  {
    id: "a6",
    image: techlaw,
    title: "5 Years Time",
    blurb: "Senior  |  Security  |  Advocate",
    body: "In 5 years, I see myself as an accomplished senior web developer with a comprehensive knowledge of the backend in a variety of powerful and progressive languages. It is then that I would like to expand my knowledge into cyber security and machine learning. My ultimate goal is to utilise my legal experience and oral and written advocacy skills to bridge the gap between policymakers and tech. The current generation of lawmakers and those who wield political power have a concerning lack of technological understanding. The traditional ways of a national executive branch enacting laws through legislation will be thrown into disarray as code becomes the more powerful and influential medium that will govern our future global civilisation. With knowledge of the legal system and the intricacies of code, it is my aim to be well-positioned to disseminate an understanding of both and help to navigate the precarious balance of how technology will come to influence our lives in a globally digitised society.",
    fade: ""
  },
];

const About = () => {
  return (
    <div>
      <Header/>
      <AboutList items={ABOUT_ITEMS}/>
    </div>
  )
}

export default About 