import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Registration = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ data: null, errorMessage: null });

  const FormSubmit = async (event) => {
    event.preventDefault();
    const payload = {  firstName,
      lastName,
      email,
      password, };

    try {
      let response = await axios.post("https://reqres.in/api/users", payload, {
        headers: { "Content-Type": "application/json" },
      });

      const token = response.data.createdAt;
      const email= response.data.email;
      const password=response.data.password;
      localStorage.setItem("authToken", token);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      console.log(response);
      if (response.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      setFormData((prevState) => ({
        ...prevState,
        errorMessage: error.response?.data?.error || "Something went wrong",
      }));
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={FormSubmit}>
        <h1 className="registration-heading">Register</h1>

        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
        />

        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        {formData.errorMessage && (
          <p className="registration-error">{formData.errorMessage}</p>
        )}

        <button type="submit" className="registration-button">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Registration;
