import { useState } from "react";
import "./Styles/file.css";

function Experience() {
  const [edit, setEdit] = useState(true);
  const [exp, setExp] = useState({
    company: "",
    position: "",
    responsibilities: "",
    from: "",
    to: "",
  });

  function handleChange(e) {
    setExp({ ...exp, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  return (
    <div className="box">
      <h2>Practical Experience</h2>

      {edit ? (
        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Company Name"
            value={exp.company}
            onChange={handleChange}
          />
          <input
            name="position"
            placeholder="Position Title"
            value={exp.position}
            onChange={handleChange}
          />
          <input
            name="responsibilities"
            placeholder="Main Responsibilities"
            value={exp.responsibilities}
            onChange={handleChange}
          />
          <input
            name="from"
            placeholder="From"
            value={exp.from}
            onChange={handleChange}
          />
          <input
            name="to"
            placeholder="To"
            value={exp.to}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Company: {exp.company}</p>
          <p>Position: {exp.position}</p>
          <p>Responsibilities: {exp.responsibilities}</p>
          <p>
            Duration: {exp.from} - {exp.to}
          </p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
