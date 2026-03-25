import React from 'react'

import Card from './components/Card'

const App = () => {

  const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/500px-Google_2015_logo.svg.png",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 45,
    location: "Mumbai, India"
  },
  {
    logo: "https://thumbs.dreamstime.com/b/amazon-logo-amazon-logo-white-background-vector-format-avaliable-124289859.jpg",
    company: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 60,
    location: "Mumbai, India"
  },
  {
    logo: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop&resSharp=1",
    company: "Microsoft",
    datePosted: "3 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHour: 50,
    location: "Mumbai, India"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    company: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    payPerHour: 40,
    location: "Mumbai, India"
  },
  {
    logo: "https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png",
    company: "Apple",
    datePosted: "6 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHour: 70,
    location: "Mumbai, India"
  },
  {
    logo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
    company: "Netflix",
    datePosted: "4 days ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHour: 75,
    location: "Mumbai, India"
  },
 
];

  return (
    <div className='parent'>
      {jobs.map((e,index) => {
          return <div key = {index}>
                    <Card 
                    logo={e.logo} 
                    company={e.company}
                    datePosted= {e.datePosted}
                    post={e.post}
                    tag1={e.tag1}
                    tag2={e.tag2}
                    payPerHour={e.payPerHour}
                    location={e.location}
                    />
                </div>
      })}
    </div>
  )
}

export default App
