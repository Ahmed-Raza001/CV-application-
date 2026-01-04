import { useState } from "react";
import "../styles/file.css";

function Education() {
  const [edit, setEdit] = useState(true);
  const [edu, setEdu] = useState({
    school: "",
    title: "",
    date: "",
  });

  function handleChange(e) {
    setEdu({ ...edu, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEdit(false);
  }

  return (
    <div className="box">
      <h2>Education</h2>

      {edit ? (
        <form onSubmit={handleSubmit}>
          <input
            name="school"
            placeholder="School / College Name"
            value={edu.school}
            onChange={handleChange}
          />
          <input
            name="title"
            placeholder="Title of Study"
            value={edu.title}
            onChange={handleChange}
          />
          <input
            name="date"
            placeholder="Date of Study"
            value={edu.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {edu.school}</p>
          <p>Title: {edu.title}</p>
          <p>Date: {edu.date}</p>
          <button onClick={() => setEdit(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
