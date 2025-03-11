import { useEffect, useState } from "react";
import { Bowler } from "./types/bowler";

function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/BowlingLeague");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowlers();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Initial</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{bowler.bowlerFirstName}</td>
              <td>{bowler.bowlerMiddleInit}</td>
              <td>{bowler.bowlerLastName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
              <td>{bowler.teamId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
