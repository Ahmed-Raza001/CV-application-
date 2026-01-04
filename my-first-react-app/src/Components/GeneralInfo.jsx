import { useState } from "react";
import "../styles/file.css";

function GeneralInfo() {
  const [edit, setEdit] = useState(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  return (
    <div className="box">
      <h2>General Information</h2>

      {edit ? (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
          <input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
          <input name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
