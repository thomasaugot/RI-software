import './pipeline.scss'
import SubmitButton from '../../components/general/submitButton/submitButton'
import { addPipelineIcon, forcastIcon, listPipelineIcon, pipelineIcon, tickIcon } from '../../assets/pipelineIcons'
import DropDown from '../../components/general/dropdown/dropdown'
import { editMessageIcon } from '../../assets/chatIcons';
import PipelineSection from '../../components/pipeline/pipelineSection/pipelineSection'
import { useEffect, useState } from 'react';
import { projects } from './pipelineMockData';
import ListProjectsView from '../../components/pipeline/projectsTableView/projectsTableView'
import PipelineLayout from '../../layouts/pipelineLayout/pipelineLayout'

const Pipeline = () => {
    const [activeIndex, setActiveIndex] = useState('pipeline');
    const options = [
        { icon: addPipelineIcon, value: 'new-pipeline', text: 'New pipeline' }
    ]

    const [totalAmount, setTotalAmount] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);

    useEffect(() => {
        const projectDetails = projects.reduce((acc, project) => {
            acc['totalAmount'] = acc['totalAmount'] + project.amount;
            acc['totalProjects'] = projects.length;
            return acc
        }, { totalAmount: 0, totalProjects: 0 })
        setTotalAmount(projectDetails['totalAmount']);
        setTotalProjects(projectDetails['totalProjects']);
    }, [])

    const handleIconClick = (view: string) => {
        setActiveIndex(view);
    };
    const pipelineOptions = ['Integration', 'Testing', ' Build', 'Deployment']
    return (
        <PipelineLayout>
            <div className="pipeline-wrapper">
                <div className="pipeline-page-title">
                    Deals
                </div>

                <div className="pipeline-page-header">
                    <div className="left">
                        <div className="layout-options">
                            <div className={`bar ${activeIndex === "pipeline" ? 'active' : ''}`} onClick={() => handleIconClick("pipeline")}>
                                {pipelineIcon}
                            </div>
                            <div className={`justify ${activeIndex === "list" ? 'active' : ''}`} onClick={() => handleIconClick("list")}>
                                {listPipelineIcon}

                            </div>
                            <div className={`price ${activeIndex === "forecast" ? 'active' : ''}`} onClick={() => handleIconClick("forecast")}>
                                {forcastIcon}

                            </div>
                        </div>

                        <SubmitButton text="Add Deal" />
                    </div>
                    <div className="middle">

                        <div className="amount-deals">
                            {totalAmount}.000 $ - {totalProjects} deals
                        </div>

                    </div>
                    <div className="right">

                        <div className="pipeline-dropdown">
                            <DropDown
                                text='Pipeline'
                                pipelineOptions={pipelineOptions}
                                textIcon={tickIcon}
                                icon={pipelineIcon}
                                editIcon={editMessageIcon}
                                options={options} />
                        </div>

                        <div className="user-dropdown">
                            <DropDown text='Ahmad Vetrovs' pipelineOptions={pipelineOptions} textIcon={tickIcon} icon={pipelineIcon} options={options} />
                        </div>
                    </div>
                </div>
                {(activeIndex === "pipeline") &&
                    <div className="projects-section">
                        <PipelineSection pipelineTitle="Lead In" />
                        <PipelineSection pipelineTitle="Meeting Arranged" />
                        <PipelineSection pipelineTitle="Proposal Made" />
                        <PipelineSection pipelineTitle="Negoitation Started" />
                    </div>
                }
                {(activeIndex === "list") &&
                    <div className="list-section">
                        <ListProjectsView />
                    </div>
                }
                <div className="pipeline-button-container">
                    <div className='drag-drop-section delete-div'>Delete</div>
                    <div className='drag-drop-section failed-div'>Failed</div>
                    <div className='drag-drop-section success-div'>Success</div>
                    <div className='drag-drop-section move-to-div'>Move to</div>
                </div>
            </div>
        </PipelineLayout>
    )
}

export default Pipeline
