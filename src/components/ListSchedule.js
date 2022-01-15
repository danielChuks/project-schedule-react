import React, { Fragment, useState, useEffect } from 'react';

import EditSchedules from './EditSchedule';

const ListSchedules = () => {
  //the state of the app is initialized here
  const [schedules, setSchedules] = useState([]);

  //delete function
  const deleteSchedule = async (id) => {
    try {
      const deleteSchedule = await fetch(
        `http://localhost:5000/schedules/${id}`, {
          method: 'DELETE',
        }
      );

      setSchedules(schedules.filter(schedule => schedule.schedule_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getSchedules = async () => {
    try {
      const response = await fetch('http://localhost:5000/schedules');
      const jsonData = await response.json();

    setSchedules(jsonData)
    } catch (err) {
      console.error(err.message);
    }
  };

  // On every componentDIdMount it going to rerun the state of the app
  // the empty array added to useEffect is to enure we only make one request
  useEffect(() => {
    getSchedules();
  }, []);

  return (
    <Fragment>
      <div className="mt-5 container">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          {/* we are mapping through the  array of description we are getting fromthe database */}
          {schedules.map((schedule) => (
            <tr key={schedule.schedule_id}>
              <td>{schedule.description}</td>
              <td> <EditSchedules schedules={ schedule }/></td>
              <td>
                <button
                  className="btn btn-md btn-danger"
                  onClick={() => deleteSchedule(schedule.schedule_id)}
                >
                  {' '}
                  Delete{' '}
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Fragment>
  );
};

export default ListSchedules;
