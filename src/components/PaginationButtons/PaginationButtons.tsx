import { FC, MouseEvent } from "react";

import './PaginationButtons.scss';

type PaginationButtonsSet = {
    number: number,
    setNum: any
}
const PaginationButtons: FC<PaginationButtonsSet> = ({number, setNum}) => {
    return (
        <button className="pagination-button" onClick={()=>{setNum(number)}}>
            {number}
        </button>
    );
};

export default PaginationButtons;