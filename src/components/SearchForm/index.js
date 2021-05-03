import React, { useState } from 'react'

function SeachForm({onSubmit}){
    const [keyword, setKeyword] = useState('')

    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({keyword})
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return(

        <form onSubmit={handleSubmit} className='form-group col-12 d-flex aling-item-center justify-content-center'>
        <input className='form-control p-4 col-4 ' placeholder='search a gift here...' onChange={handleChange} type='text' value={keyword} />
        <button className='btn btn-info'>Buscar</button>
        </form>
    )
}

// react.memo: memoria el componente, para solo 
// renderizarlo si cambian sus props
export default React.memo(SeachForm)