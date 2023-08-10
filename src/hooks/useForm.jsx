import { useRef, useState } from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um email válido'
  }
}

const useForm = (type) => {
  const valueRef = useRef()
  const [error, setError] = useState(null)

  const validate = (valueRef) => {
    if (type === false) return true;
    if (valueRef.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (types[type] && !types[type].regex.test(valueRef?.current?.value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  return {
    valueRef,
    validate: () => validate(valueRef),
    error
  }
}

export default useForm;