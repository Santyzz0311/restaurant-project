import './App.css'
import Panel from './components/Panel'
import SideBar from './components/SideBar'

function App() {

  return (
    <>
      <main className='fixed w-full h-full'>
        <aside className='w-64 h-full float-left bg-red-600 flex flex-col justify-center items-center gap-y-8'>
          <SideBar />
        </aside>
        <section className='w-full h-full'>
          <Panel />
        </section>
      </main>
    </>
  )
}

export default App
