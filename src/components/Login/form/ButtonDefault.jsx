import { IconSpinner } from '../../Utils/Icons/IconSpinner'

const ButtonDefault = ({ children, loading, ...props }) => {


  return (
    <>
      {loading ?
        <button {...props} disabled className='button-default'><IconSpinner /></button> :
        <button {...props} className='button-default'>{children}</button>
      }

    </>
  )
}

export default ButtonDefault;