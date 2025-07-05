import React from "react";

const TableRow = () => {
   const user = [
    {name :'Nitin', lastname:'Sahu', class: '12th'},
    {name :'Aastha', lastname:'Jain', class: '10th'},
    {name :'Suman', lastname:'Jaat', class: '11th'},
    {name :'Rahul', lastname:'Jaat', class: '1th'},
] 
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Class</th>
      </tr>

      <tbody>
        {user.map((u) => (
          <tr>
            <td>{u.name}</td>
            <td>{u.lastname}</td>
            <td>{u.class}</td>
          </tr>
        ))}
      </tbody>
    </thead>
  );
};

export default TableRow;
