import React, { FC, useContext, useEffect, useRef, useState } from "react"
import './cutomizeAvatarModal.scss';
import Modal from '../../../components/general/modal/modal';
import SubmitButton from '../../../components/general/submitButton/submitButton';
import { buttonType } from '../../../types/general/generalTypes';
import { ProfileContext } from '../../../context/profile/profileContext';
import InputField from '../../../components/general/inputField/inputField';


const CutomizeAvatarModal: FC = () => {
  const { setisCutomizeAvatarModalOpen, isCutomizeAvatarModalOpen, setImgUrl, imgUrl } = useContext(ProfileContext)
  const closeModal = () => setisCutomizeAvatarModalOpen(false);

  const cancelButtonHandler = () => {
    setisCutomizeAvatarModalOpen(false);
    setImgUrl('')
  }

  const uploadedImageReference = useRef<HTMLImageElement>(null);
  const roundAreaReference = useRef<HTMLDivElement | null>(null)
  const container = useRef<HTMLDivElement | null>(null)

  const [zoomLevel, setZoomLevel] = useState(1);
  const [croppedImage, setCroppedImage] = useState<string | null>(null); // HERE CROPPED IMAGE
  const [isDragable, setIsDragable] = useState(false)
  const [naturalSize, setNaturalSize] = useState<null | { width: number, height: number }>(null)
  const [mouseStart, setMouseStart] = useState({ x: 0, y: 0 })
  const [imageStart, setImageStart] = useState({ x: 0, y: 0 })
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [scaleImage, setScaleImage] = useState(1)

  const drag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (naturalSize) {
      if (isDragable && container.current && uploadedImageReference.current) {
        const deltaX = e.clientX - mouseStart.x;
        const deltaY = e.clientY - mouseStart.y;
        const newX = imageStart.x + deltaX;
        const newY = imageStart.y + deltaY;
        setCoords({ x: newX, y: newY })
      }
    }
  }

  const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (uploadedImageReference.current) {
      setIsDragable(true)
      setMouseStart({ x: e.clientX, y: e.clientY })
      setImageStart({ x: uploadedImageReference.current?.offsetLeft, y: uploadedImageReference.current?.offsetTop })
    }
  }

  const handleZoomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZoomLevel(parseFloat(e.target.value));
  };

  const wheelScale = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY > 0) {
      setScaleImage(zoomLevel > 4
        ? scaleImage
        : scaleImage - 0.01)
    } else {
      setScaleImage(zoomLevel < 0
        ? scaleImage
        : scaleImage + 0.01)
    }
  }

  const handleCropImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const image = uploadedImageReference.current!;

    if (roundAreaReference.current) {
      const { x, y, width, height } = roundAreaReference.current.getBoundingClientRect()
      const imagex = uploadedImageReference.current!.getBoundingClientRect().x
      const imagey = uploadedImageReference.current!.getBoundingClientRect().y
      canvas.width = width
      canvas.height = height
      ctx?.drawImage(image, Math.abs(imagex - x), Math.abs(imagey - y), width, height, 0, 0, width, height)
      setCroppedImage(canvas.toDataURL())
      localStorage.setItem('avatar', canvas.toDataURL())
      closeModal()
    }
  };

  useEffect(() => {
    if (!naturalSize || naturalSize.width === 0) {
      const img = new Image()
      img.src = imgUrl
      setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight })
    }
  }, [imgUrl, naturalSize])


  return (
    <Modal
      closeModal={() => { closeModal() }}
      open={isCutomizeAvatarModalOpen}
      additionalClass='customize-avatar'
    >
      <div className="selected-image-container">
        <div className="update-profile-pic">
          Update Profile Picture
        </div>


        {!naturalSize || naturalSize.width === 0 ? null : <div
          className='image-cropper-container'
          ref={container}
          onMouseDown={(e) => {
            onDragStart(e)
          }}
          onMouseUp={() => setIsDragable(false)}
          onMouseMove={(e) => { drag(e) }}
          onMouseLeave={() => setIsDragable(false)}
          onWheel={(e) => { wheelScale(e) }}
        >
          <img crossOrigin="anonymous" src={imgUrl}
            alt="img"
            ref={uploadedImageReference}
            style={{
              width: `${naturalSize?.width}`,
              height: `${naturalSize?.height}`,
              position: 'absolute',
              left: `${coords.x}px`,
              top: `${coords.y}px`,
              zoom: `${scaleImage}`
            }}

          />
          <div
            ref={roundAreaReference}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              height: `${100 / zoomLevel}%`,
              maxHeight: `${Math.min(uploadedImageReference.current?.width as number, uploadedImageReference.current?.height as number)}px`,
              maxWidth: `${Math.min(uploadedImageReference.current?.width as number, uploadedImageReference.current?.height as number)}px`,
              aspectRatio: '1/1',
              border: '2px solid #376ABE',
              zIndex: 1,
              background: 'rgb(55 106 190 / 35%)'
            }}
          />
          <div className='cropper-blur'></div>

        </div>}

        <div className="cropper-section">
          <div className="input-container">
            <div className="minus" onClick={() => setZoomLevel(zoomLevel - 1 < 1 ? zoomLevel : zoomLevel - 1)}>-</div>
            <InputField name='input-range' className='avatar-input-range' type="range" min="1" max="4" step="0.01" value={zoomLevel} onChange={handleZoomChange} />
            <div className="plus" onClick={() => setZoomLevel(zoomLevel + 1 > 4 ? zoomLevel : zoomLevel + 1)}>+</div>
          </div>
        </div>
        <div className="buttons-container">
          <SubmitButton className="cancel-btn" type={buttonType.button} text='Cancel' onClick={cancelButtonHandler} />
          <SubmitButton className='apply-btn' type={buttonType.submit} text='Apply' onClick={handleCropImage} />
        </div>
      </div>
    </Modal>
  )
}

export default CutomizeAvatarModal
