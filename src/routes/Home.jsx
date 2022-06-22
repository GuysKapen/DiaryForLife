import { Header, Feature, Content } from "../container/index";

import { images } from "../constants"

function Home() {
  return (
    <div className="app">
      <Header />
      <Feature />
      <Content title="Recent diaries for quick access" description="Recent and favorite diaries are shown in home tab for easy to keep track of the most favor diaries" image={images.diaryRecent} flip={false} idName="recent"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute top-24 left-8' key={`circle-favorite`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  favorite
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-4 absolute bottom-24 right-8' key={`circle-home`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-8 w-8 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-xl">
                  home
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Write diary with fully customize" description="Fully customize your diary by your own way. Diary editor allow you to write in rich text format (bold, italic, underline, ...). Support insert media into your diary such as image, video or audio. Emoji and timestampt to help you keep track of your diaries easily" image={images.diaryEditor} flip={true} idName="editor"
        circles={
          <>
            <div className='circle-cmp app__flex p-6 absolute left-0 top-0' key={`circle-quill`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-16 w-16 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-4xl">
                  history_edu
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-8 right-0 bottom-0 absolute' key={`circle-text-editor`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  format_color_text
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="View all your diaries in list view" description="List view allow you to keep track of all your diaries in chronological order. Each entry show the name and brief content about the diary for scan your favorite diary" image={images.diaryList} flip={false} idName="list"
        circles={
          <>
            <div className='circle-cmp app__flex p-6 absolute left-0 bottom-0' key={`circle-list`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-700 to-cyan-800 text-3xl">
                list_alt
              </span>
            </div>
            <div className='circle-cmp app__flex p-8 right-0 top-0 absolute' key={`circle-grid`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  grid_view
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Timeline with calendar" description="Display diaries in calendar to aid gain insignt about performance of diary. Keep track of important events and favorites diaries with an ease" image={images.diaryCalendar} flip={true} idName="calendar"
        circles={
          <>
            <div className='circle-cmp app__flex p-5 absolute left-0' key={`circle-calendar`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-14 w-14 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-3xl">
                  calendar_month
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-6 right-0 bottom-0 absolute' key={`circle-event`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  celebration
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Emojis for your diary more memorable" description=" A large collection of emojis is available for you to add to your diary, making your diary more memorable" image={images.diaryEmoji} flip={false} idName="emoji"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute left-12 top-12' key={`circle-enjoy`}>
              <span className='app__flex bg-gradient-to-l rounded-full h-8 w-8 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  mood
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-6 right-12 bottom-12 absolute' key={`circle-happy`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  sentiment_very_satisfied
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Multiple view mode available" description="There are multiple view modes for you to choose from when reviewing your diary. Pick a favorite view mode and enjoy" image={images.diaryView} flip={true} idName="view"
        circles={
          <>
            <div className='circle-cmp app__flex p-4 absolute left-0 top-0' key={`circle-pages`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-10 w-10 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-symbols-outlined text-white text-2xl">
                  pages
                </span>
              </span>
            </div>
            <div className='circle-cmp app__flex p-4 right-0 bottom-0 absolute' key={`circle-stories`}>
              <span className='app__flex bg-gradient-to-l rounded-full p-2 h-12 w-12 text-transparent from-indigo-600 to-blue-600'>
                <span className="material-icons text-white text-2xl">
                  auto_stories
                </span>
              </span>
            </div>
          </>
        } />
      <Content title="Built-in image editor for style image with your taste" description="Built-in image editor ready to boost up your creating diary process. Support multi filters and styles, ... to make your image follow your style" image={images.diaryImageEditor} flip={false} idName="image-editor"
        circles={
          <>
            <div className='circle-cmp app__flex h-16 w-16 absolute top-0' key={`circle-camera`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-700 to-purple-800 text-4xl">
                camera
              </span>
            </div>
            <div className='circle-cmp app__flex bottom-0 right-0 absolute h-20 w-20' key={`circle-image-filter`}>
              <span className="material-icons bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 to-indigo-800 text-4xl">
                palette
              </span>
            </div>
          </>
        } />
      <Content title="Dark mode available" description="Dark mode is ready for you to reduce stress from screen light. Feel ease and comfortable when writing diaries at night" image={images.diaryDarkMode} flip={true} idName="dark-mode"
        circles={
          <>
            <div className='circle-cmp app__flex h-16 w-16' key={`circle-dark-mode`}>
              <span className="material-icons bg-gradient-to-l bg-clip-text text-transparent from-indigo-600 to-indigo-900 text-4xl">
                dark_mode
              </span>
            </div>
            <div className='circle-cmp app__flex bottom-0 right-0 absolute h-20 w-20' key={`circle-theme`}>
              <span className="material-icons bg-gradient-to-r bg-clip-text text-transparent from-indigo-800 to-indigo-600 text-4xl">
                palette
              </span>
            </div>
          </>
        } />
    </div>
  )
}

export default Home 
