import React from 'react';
import './App.css';
import Header from './Header'
import Menu from './Menu'
import Blogs from './Blogs'

const App = () =>{

  const blogs = [
    {
      title: 'Man must explore, and this is exploration at its greatest',
      subtitle: 'Problems look mighty small from 150 miles up',
      author: 'Start Bootstrap',
      datePosted: 'September 24, 2018'
    },{
      title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      subtitle: '',
      author: 'Start Bootstrap',
      datePosted: 'September 18, 2018'
    },{
      title: 'Science has not yet mastered prophecy',
      subtitle: 'We predict too much for the next year and yet far too little for the next ten',
      author: 'Start Bootstrap',
      datePosted: 'August 24, 2018'
    },{
      title: 'Failure is not an option',
      subtitle: "Many say exploration is part of our destiny, but it's actually our duty to future generations.",
      author: 'Start Bootstrap',
      datePosted: 'July 8, 2018'
    }
  ]

  const displayBlogs = blogs.map((blog, i) =>{
    return <Blogs key={blog.title + i}
                  title={blog.title}
                  subtitle={blog.subtitle}
                  author={blog.author}
                  datePosted={blog.datePosted}
    />
  })

  return (
    <div>
      <Header />
        <Menu />
      {displayBlogs}
      </div>
  )
}

export default App;
