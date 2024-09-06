import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValues]=useState({
    firstname:'',
    lastname:'',
    email:'',
    gender:'',
    contact:'',
    subject:'',
    resume:'',
    url:'',
    about:''
  })

  const handlechanges = (e)=>{
    setValues({...value,[e.target.name]:[e.target.value]})

  }

  const handlesSubmit = (e) => {

    e.preventDefault()
    // axios.post('URL',value)
    console.log(value);
    
  }

  const ResetFunction =()=>{

    setValues({
      firstname: '', lastname: '',email: '',
    })
  }
  return (

    <div>
      <h1>Fill the Form</h1>

      <form className='form' onSubmit={handlesSubmit}>

        <label htmlFor='firstname'>First Name</label>
        <input type='text' placeholder='Enter first Name' name='firstname'
        onChange={e=> handlechanges(e)} required value={value.firstname}/>
        
        <label htmlFor='lastname'>last Name</label>
        <input type='text' placeholder='Enter first Name' name='lastname'
        onChange={e=> handlechanges(e)} required value={value.firstname}/>
        
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='Enter email' name='email'
        onChange={e=> handlechanges(e)} required value={value.email}/>

        <label htmlFor='contact'>Contact</label>
        <input type='text' placeholder='Entter Phone #' name='contact'
        onChange={e=> handlechanges(e)}/>

        <label htmlFor='gender'>Gender</label>
        <input type='radio' name='gender'
        onChange={e=> handlechanges(e)}/> Male
        <input type='radio' name='gender'
        onChange={e=> handlechanges(e)}/> Female
        <input type='radio' name='gender'
        onChange={e=> handlechanges(e)}/> Other

        <label htmlFor='subject'>Subject</label>
        <select name='subject' id='subject'onChange={e=> handlechanges(e)}>
        <option value="math">Math</option>
        <option value="computer">Computer</option>
        <option value="physics">Physics</option>

        </select>

        <label htmlFor='resume'>Resume</label>
        <input type='file' placeholder='Select Resume' name='resume'
        onChange={e=> handlechanges(e)}/>

        <label htmlFor='url'URL></label>
        <input  type='text' name='url' placeholder='Enter Image URl'
        onChange={e=> handlechanges(e)}/> 

        <label htmlFor='about'>About</label>
        <textarea name='about' id='about' cols={30} rows={10} 
        onChange={e=> handlechanges(e)}placeholder='Enter Discription'></textarea>

        <button type='button' onClick={ResetFunction}>Rest</button>
        <button type='submit'Submit>Submit</button>  
      </form>

    </div>

    
  )

}


export default App
