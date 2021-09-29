import React from 'react';

const AddCaldera = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Type</label>
        <input type="text" placeholder="Add Type" />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input type="text" placeholder="Add Time in minutes" />
      </div>
      <div className="form-control">
        <label> is installed</label>
        <input type="checkbox" placeholder="Add Caldera" />
      </div>

      <input type="submit" value="Save Caldera" />
    </form>
  );
};

export default AddCaldera;
