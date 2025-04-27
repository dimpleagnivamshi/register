import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "", 
    age: "", 
    fathername: "",
    mothername: "", 
    city: "", 
    state: "",
    country: "",
    college: "", 
    semester: "", 
    skills: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label><br />
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          /> 
        </div><br /> 
        <div>
          <label>Gender:</label><br /> 
          <select name="gender" value ={formData.gender} onChange={handleChange} required >
          <option value="">Select</option> 
          <option>Male</option> 
          <option>Female</option>
          <option >Other</option> 
          </select>

        </div><br />
        <div>
          <label htmlFor="age">Age:</label><br />
          <input
            id="age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          /> 
        </div><br />
        <div> 
          <label htmlFor="fathername">Father's Name:</label><br />
          <input
            id="fathername"
            type="text"
            name="fathername"
            value={formData.fathername}
            onChange={handleChange}
            required
          /> 
        </div><br /> 
        <div>
          <label htmlFor="mothername">Mother's Name:</label><br />
          <input
            id="mothername"
            type="text"
            name="mothername"
            value={formData.mothername}
            onChange={handleChange}
            required
          />    
        </div><br />
        <div>
          <label htmlFor="city">City:</label><br />
          <select name="city" value={formData.city} onChange={handleChange} required> 
          <option value="">Select</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Ahmedabad">Ahmedabad</option>
          </select>
          </div><br />
          <div>
            <label htmlFor="state">State:</label><br /> 
            <select name="state" value={formData.state} onChange={handleChange} required> 
            <option value="">Select</option> 
            <option value="Telangana">Telangana</option> 
            <option value="Karnataka">Karnataka</option> 
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Gujarat">Gujarat</option>
            </select>
          </div><br />
          <div>
            <label htmlFor="country">Country:</label><br />
            <select name="country" value={formData.country} onChange={handleChange} required> 
            <option value="">Select</option> 
            <option value="India">India</option> 
            <option value="USA">USA</option> 
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            </select> 
            </div><br />
            <div>
              <label htmlFor="college">College:</label><br />
              <input
                id="college"
                type="text"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              /> 
              </div><br /> 
              <div>
                <label htmlFor="semester">Semester:</label><br />
                <input
                  id="semester"
                  type="text"
                  name="semester"
                  value={formData.semester}
                  onChange={handleChange}
                  required
                /> 
                </div> <br /> 
                <div>
                  <label htmlFor="skills">Skills:</label><br />
                  <input
                    id="skills"
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    required
                  /> 
                  </div><br /> 
                  
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;