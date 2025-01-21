function Inli() {
    const students = ["student1", "student2", "student3", "student4"];
    return (
      <ul>
        {students.map((student) => (
          <li style={{backgroundColor:"orange" , color:"white" , width:"150px" , margin:"5px"}}>{student}</li>
        ))}
      </ul>
    );
  }
  
  export default Inli;