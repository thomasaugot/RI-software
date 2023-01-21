import React from 'react'
import TextField from '../../components/TextField/TextField'
import WorkerCard from '../../components/WorkerCard/WorkerCard'
import { close } from '../../assets/Icons'
import { workerCardProps, workerModalProps } from '../../types/types'
import './WorkerModal.scss'

const workerData: Array<workerCardProps> = [
  {
    workerNames: 'Emery Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'Lead Team A'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Phillip Curtis',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Phillip Curtis',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Ahmad Vetrovs',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Jaxson Franci',
    workerPosition: 'CTO'
  },
  {
    workerNames: 'Alfredo Stanton',
    workerPosition: 'CTO'
  }
]

function WorkerModal({setIsOpenModal}:workerModalProps) {
  return (
    <div className='worker-modal'>
       <div className='worker-modal-container'>
      <div className='worker-modal-head'>
        <div className="workder-modal-close">
          <span onClick={() => setIsOpenModal(false)}>{close}</span>
        </div>
        <div className="worker-modal-head-input">
          <TextField placeholder='Search' name='search' isSearchInput={true}/>
        </div>
      </div>
      <div className="worker-modal-user-list">
        {workerData.map(({workerNames, workerPosition}, i)=>(
          <WorkerCard workerNames={workerNames} workerPosition={workerPosition}/>
        ))}
      </div>
    </div>
    </div>
   
  )
}

export default WorkerModal
