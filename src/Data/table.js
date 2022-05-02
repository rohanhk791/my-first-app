import React from "react"
import details from './Data/details.json';

function display()
{
  const disp =detail.map(
    (records) => {
     return (
       <tr>
         <td>{records.eid}</td>
         <td>{records.Name}</td>
         <td>{records.project}</td>
         <td>{records.period_days}</td>
       </tr>

      )
    }
  )
return(
  <div>
    <table class = "table table-striped">
    <thead>
      <tr>
        <th>EId</th>
        <th>User Name</th>
        <th>Project</th>
        <th>Period_days</th>
      </tr>
    </thead>
    <tbody>
      {display}
    </tbody>
    </table>
  </div>
)

}

export default display;