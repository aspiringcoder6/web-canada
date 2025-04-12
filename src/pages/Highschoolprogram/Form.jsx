import React, { useState } from "react";

const RegistrationForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    nationality: "",
    residency: "",
    dob: "",
    program: "",
    programStart: "",
    programWeeks: "",
    accommodation: "",
    accommodationStart: "",
    accommodationWeeks: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  const inputClass = (name) =>
    `w-full border-1 rounded-md p-2 mt-1 ${
      errors[name] ? "border-red-500" : "border-[#23417e]"
    }`;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-9/10 max-w-3xl mx-auto p-6 border-1 rounded-md shadow bg-white border-[#23417e] text-[#23417e] text-left"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Type your answer here"
            onChange={handleChange}
            className={inputClass("firstName")}
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("lastName")}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label>Email address*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Type your answer here"
            onChange={handleChange}
            className={inputClass("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <label>Nationality*</label>
          <input
            type="text"
            name="nationality"
            placeholder="Type your answer here"
            value={formData.nationality}
            onChange={handleChange}
            className={inputClass("nationality")}
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality}</p>
          )}
        </div>

        <div>
          <label>Country of Residency*</label>
          <input
            type="text"
            name="residency"
            value={formData.residency}
            placeholder="Type your answer here"
            onChange={handleChange}
            className={inputClass("residency")}
          />
          {errors.residency && (
            <p className="text-red-500 text-sm">{errors.residency}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label>Date of Birth*</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("dob")}
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        <div className="md:col-span-2">
          <label>Programs*</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className={inputClass("program")}
          >
            <option value="">Select your answer</option>
            <option value="Program A">Program A</option>
            <option value="Program B">Program B</option>
          </select>
          {errors.program && (
            <p className="text-red-500 text-sm">{errors.program}</p>
          )}
        </div>

        <div>
          <label>Program Start Date*</label>
          <input
            type="date"
            name="programStart"
            value={formData.programStart}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("programStart")}
          />
          {errors.programStart && (
            <p className="text-red-500 text-sm">{errors.programStart}</p>
          )}
        </div>

        <div>
          <label>Number of weeks*</label>
          <input
            type="number"
            name="programWeeks"
            value={formData.programWeeks}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("programWeeks")}
          />
          {errors.programWeeks && (
            <p className="text-red-500 text-sm">{errors.programWeeks}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label>Accommodation*</label>
          <select
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className={inputClass("accommodation")}
          >
            <option value="">Select your answer</option>
            <option value="Dorm">Dorm</option>
            <option value="Apartment">Apartment</option>
          </select>
          {errors.accommodation && (
            <p className="text-red-500 text-sm">{errors.accommodation}</p>
          )}
        </div>

        <div>
          <label>Accommodation Start Date*</label>
          <input
            type="date"
            name="accommodationStart"
            value={formData.accommodationStart}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("accommodationStart")}
          />
          {errors.accommodationStart && (
            <p className="text-red-500 text-sm">{errors.accommodationStart}</p>
          )}
        </div>

        <div>
          <label>Number of weeks*</label>
          <input
            type="number"
            name="accommodationWeeks"
            value={formData.accommodationWeeks}
            onChange={handleChange}
            placeholder="Type your answer here"
            className={inputClass("accommodationWeeks")}
          />
          {errors.accommodationWeeks && (
            <p className="text-red-500 text-sm">{errors.accommodationWeeks}</p>
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="mt-6 w-fit p-5 bg-[#23417e] text-white py-2 rounded-4xl hover:bg-blue-700"
        >
          Submit Registration
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
