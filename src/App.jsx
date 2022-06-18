import { useState } from 'react'
import './App.scss'
import { Header, Feature, Content } from "./container/index";

import { Navbar } from "./components";
import { images } from "./constants"

function App() {
  console.log(images.diaryRecent);
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Feature />
      <Content title="Recent diaries for quick access" description="Recent and favorite diaries are shown in home tab for easy to keep track of the most favor diaries" image={images.diaryRecent} flip={false} />
      <Content title="Write diary with fully customize" description="Fully customize your diary by your own way. Diary editor allow you to write in rich text format (bold, italic, underline, ...). Support insert media into your diary such as image, video or audio. Emoji and timestampt to help you keep track of your diaries easily" image={images.diaryEditor} flip={true} />
      <Content title="View all your diaries in list view" description="List view allow you to keep track of all your diaries in chronological order. Each entry show the name and brief content about the diary for scan your favorite diary" image={images.diaryList} flip={false} />
      <Content title="Timeline with calendar" description="Display diaries in calendar to aid gain insignt about performance of diary. Keep track of important events and favorites diaries with an ease" image={images.diaryCalendar} flip={true} />
      <Content title="Emojis for your diary more memorable" description=" A large collection of emojis is available for you to add to your diary, making your diary more memorable" image={images.diaryEmoji} flip={false} />
      <Content title="Multiple view mode available" description="There are multiple view modes for you to choose from when reviewing your diary. Pick a favorite view mode and enjoy" image={images.diaryView} flip={false} />
      <Content title="Built-in image editor for style image with your taste" description="Built-in image editor ready to boost up your creating diary process. Support multi filters and styles, ... to make your image follow your style" image={images.diaryImageEditor} flip={false} />
      <Content title="Dark mode available" description="Dark mode is ready for you to reduce stress from screen light. Feel ease and comfortable when writing diaries at night" image={images.diaryDarkMode} flip={false}
        circles={
          <>
            <div className='circle-cmp app__flex h-16 w-16' key={`circle-flutter`}>
            <span class="material-icons text-indigo-600">
                home
              </span>
            </div>
            <div className='circle-cmp app__flex bottom-0 right-0 absolute h-24 w-24' key={`circle-sass`}>
              <span class="material-icons text-red-400 text-4xl">
                favorite
              </span>
            </div>
          </>
        } />
      {/* <Content /> */}
      {/* <Content /> */}
      {/* <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer /> */}
    </div>
  )
}

export default App
