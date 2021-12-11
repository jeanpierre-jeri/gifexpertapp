import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(!inputValue) {
      alert('Debe ingresar un valor para buscar')
      return
    }
    setCategories(categories => [ inputValue, ...categories])
    setInputValue('')
    
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Buscar categoria..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          />
          <button>Buscar</button>
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
