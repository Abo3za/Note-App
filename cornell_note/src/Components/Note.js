import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Note = ({ saveNote }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    topicObjective: "",
    name: "",
    date: "",
    classPeriod: "",
    essentialQuestion: "",
    cues: "",
    notes: "",
    summary: "",
  });
  const [errors, setErrors] = useState({});

  // Handle changes in form inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear errors for the current field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Validate form data before submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.topicObjective.trim())
      newErrors.topicObjective = "Topic/Objective is required.";
    if (!formData.date.trim()) newErrors.date = "Date is required.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    saveNote(formData);
    setFormData({
      topicObjective: "",
      name: "",
      date: "",
      classPeriod: "",
      essentialQuestion: "",
      cues: "",
      notes: "",
      summary: "",
    });
    navigate("/saved");
  };

  return (
    <form onSubmit={handleSubmit} className="cornellForm">
      <div className="form-row">
        <label>
          Topic/Objective:
          <input
            name="topicObjective"
            value={formData.topicObjective}
            onChange={handleChange}
          />
          {errors.topicObjective && (
            <p className="error">{errors.topicObjective}</p>
          )}
        </label>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
      </div>
      <div className="form-row">
        <label>
          Date:
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </label>
        <label>
          Class/Period:
          <input
            name="classPeriod"
            value={formData.classPeriod}
            onChange={handleChange}
          />
        </label>
      </div>
      <label className="full-width">
        Essential Question:
        <input
          name="essentialQuestion"
          className="full-width-input"
          value={formData.essentialQuestion}
          onChange={handleChange}
        />
      </label>
      <div className="notes-section">
        <textarea
          name="cues"
          placeholder="Questions & Cues"
          value={formData.cues}
          onChange={handleChange}
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </div>
      <label className="full-width">
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
          style={{ height: "100px" }}
        />
      </label>
      <button type="submit">Save Note</button>
    </form>
  );
};

export default Note;
