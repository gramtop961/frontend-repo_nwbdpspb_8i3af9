import React from 'react'
import HeroChapter from './components/HeroChapter'
import ProjectsChapter from './components/ProjectsChapter'
import ProcessChapter from './components/ProcessChapter'
import VisionAndFooter from './components/VisionAndFooter'

function App() {
  return (
    <div className="bg-white text-gray-900 antialiased">
      <HeroChapter />
      <ProjectsChapter />
      <ProcessChapter />
      <VisionAndFooter />
    </div>
  )
}

export default App
