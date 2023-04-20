import { FC, ReactNode, useState } from "react";
import './dropdown.scss'
import { DropDownType } from "../../../types/general/generalTypes";
import { dropdownIcon } from "../../../assets/pipelineIcons";

const Dropdown: FC<DropDownType> = ({
    icon,
    text,
    editIcon,
    options,
    pipelineOptions = [],
    textIcon,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(
        undefined
    );

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="dropdown">
            <div
                className={`dropdown-icon-section ${!editIcon && "edit-notallow"}`}
                onClick={handleDropdownClick}
            >
                <div className="icon">{icon as ReactNode}</div>
                <div className="selected-option">{selectedOption ?? text}</div>
                <div className={`${!editIcon ? "no-edit-icon" : ''} dropdown-icon`}>
                    {dropdownIcon}
                </div>
            </div>
            <div className={`dropdown-options ${!editIcon ? "noedit-icon-options" : ""} ${isOpen ? "dropdown-options-open" : ""}`}>
                <div className="dropdown-options-head">
                    <div className="title-row">
                        <div className="dropdown-options-title">{text}</div>
                        <div className="dropdown-header-icon">
                            {textIcon}
                        </div>
                    </div>
                    {
                        pipelineOptions.map((pipeline: string) =>
                            <div className="dropdown-options-headline"
                                key={pipeline}
                                onClick={() => handleOptionClick(pipeline)}
                            >{pipeline}</div>
                        )
                    }

                </div>
                <div className="options">
                    {options.map((option) => (
                        <div className="option-row">
                            <div className="option-icon">{option.icon}</div>
                            <p className="dropdown-option" >
                                {option.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            {editIcon && <div className="edit">{editIcon as ReactNode}</div>}
        </div>
    );
};

export default Dropdown;

