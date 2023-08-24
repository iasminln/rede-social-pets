const ModalConfirmation = ({ children, handleClickModal }) => {

  return (
    <div className='background-confirmation' onClick={handleClickModal}>
      <div className='box-confirmation' onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default ModalConfirmation