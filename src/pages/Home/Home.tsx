import React from 'react'
import BaseLayout from '../../layouts/BaseLayout'
import WorkerModal from '../../Modals/WorkerModal/WorkerModal'

function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const onOpenModal = () => {
    setIsOpen(true)
  }
  return (
    <BaseLayout>
      <div style={{padding:'1rem 2rem'}}>
        <h1>Home page</h1>
        <button 
        onClick={onOpenModal}
        style={{
          padding:".9em 2rem",
          backgroundColor:'#4970B5',
          color:'#fff',
          border: 'none',
          borderRadius:'10px',
          cursor:'pointer'
        }}>
          open Modal
        </button>
        {isOpen && <WorkerModal setIsOpenModal={setIsOpen}/>}
      </div>
    </BaseLayout>
  )
}

export default Home
