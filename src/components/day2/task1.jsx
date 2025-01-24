// import React, { useState } from "react";

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   const plus = () => setCount(prevCount => prevCount + 1);
//   const minc = () => setCount(prevCount => prevCount - 1);

//   return (
//     <div>
//       <h1>Ahmed: {count}</h1>
//       <button onClick={plus} >
//        +
//       </button>
//       <button onClick={minc}>-</button>
//     </div>
//   );
// };

// export default Counter;
import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted: ${JSON.stringify(formData)}`);
  };

  return (
    <div style={{ textAlign: "left", marginTop: "20px" }}>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
