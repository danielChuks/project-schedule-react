import React, {Fragment, useState} from 'react'

const InputSechdule = () => {

    const [description, setDescription] = useState("")

    //this function will submit our input when whe form is submited 
    const onSubmitForm = async (event) =>{
        event.preventDefault();
        try {
            const body = { description }
            const response = await fetch("http://localhost:5000/schedules", {
                method: "POST",
                headers : {"Content-Type" : "application/json"}, 
                body: JSON.stringify(body)
            });
            window.location ='/';
        } catch (err) {
            console.error(err.message)
        }
    }

    return(
    <Fragment>
        <div className='container mt-5'>
            <h1 className='text-center'>{'Prepare Your schedules'}</h1>
            <form className='mt-5 d-flex' onSubmit={onSubmitForm}>
                <input type="text" placeholder="Enter Your Schedule" className='form-control mr-1' 
                value={description}
                onChange={event => setDescription(event.target.value) } />
                <button className="btn btn-md btn-primary"> Add </button>
            </form>
        </div>
    </Fragment>
    )
}




export default InputSechdule;