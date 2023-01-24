import React from 'react'
import './HireWorker.scss'
import { motion } from "framer-motion";
import { workerModalProps } from '../../types/types';
import { close } from "../../assets/Icons";
import InputField from '../../components/InputField/InputField'

function HireWorker({setIsOpenModal}: workerModalProps) {
    const closeModal = () => setIsOpenModal(false);
  return (
    <motion.div
      onClick={closeModal}
      initial={{ 
        opacity: 0 
      }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        alignItems:'center',
        transition: {
          delay: 0.3,
        },
      }}
      className="hire-worker"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="hire-worker-container"
        initial={{
          y: 0
        }}
       animate={{
        y: 80,
        transition:{
          duration: .5
        }
       }}
       exit={{
        y:0,
        transition: {
            delay: .5,
            duration: .5,
        },
      }}
      >
        <div className="hire-worker-header">
          <span onClick={closeModal}>{close}</span>
        </div>
        <p className='hire-worker-title'>Add new user</p>
        <div className="hire-worker-form">
            <div className="form-inputs-wrapper">
                <div className="form-worker-control">
                    <label htmlFor="position">Position</label>
                    <InputField type='text' name='position'/>
                </div>
                <div className="form-worker-control">
                    <label htmlFor="position">Email</label>
                    <InputField type='email' name='email'/>
                </div>
                <div className="form-worker-control">
                    <label htmlFor="position">Wage</label>
                    <InputField type='text' name='wage'/>
                </div>
                <div className="form-worker-control">
                    <label htmlFor="position">Work Hour</label>
                    <InputField type='text' name='work-hour'/>
                </div>
            </div>
            <div className="hire-worker-functions">
                <p className='user-function'>User Function</p>
            </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default HireWorker
