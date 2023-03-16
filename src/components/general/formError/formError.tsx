import './formError.scss';
import { FC } from 'react';
import { formErrorProps } from '../../../types/general/generalTypes';
import { errorAlert } from '../../../assets/Icons'; 

const FormError: FC<formErrorProps> = ({ errorText, appear }) => {
    return (
        <div className="error-container">
          {appear ? (
            <>
              {errorAlert}
              <p>]{errorText} </p>
            </>
          ) : null}
        </div>
    )
}

export default FormError