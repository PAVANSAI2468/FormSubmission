import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [list, setlist] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setlist([...list, formData]);
    console.log(list);
    setFormData({ name: "", email: "", phone: "" });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <ul>
        {list.map((user, i) => {
          return (
            <li key={i}>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
