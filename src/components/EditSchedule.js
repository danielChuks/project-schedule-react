import React, { Fragment, useState} from 'react'


const EditSchedules = ( {schedules} ) => {
    const [description, setDescription ] = useState(schedules.description);

    // edit description function 
    const updateDescription =  async (event) => {
      event.preventDefault();
      try {
        const body ={ description }
        const response = await fetch(`http://localhost:5000/schedules/${schedules.schedule_id}`, {
          method:'PUT',
          headers: {'Content-Type' : "application/json"},
          body: JSON.stringify(body)
        })
        window.location='/'
      }
       catch (err) {
        console.error(err.message)
      }
    }

    return(
<Fragment>
<button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${schedules.schedule_id}`} >
  Edit
</button>

<div className="modal" id={`id${schedules.schedule_id}`}>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Edit schedule</h4>
        <button onClick={() => setDescription(schedules.description) } type="button" className="close" data-dismiss="modal">&times;</button>
      </div>

      <div className="modal-body">
        Edit schedule <input type='text' className='form-control' onChange={event => setDescription(event.target.value)} value={description}/>
      </div>
      <div className="modal-footer">
      <button onClick={event  => updateDescription(event)} type="button" className="btn btn-warning" data-dismiss="modal">Edit</button>
        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</Fragment>
) 
}


export default EditSchedules