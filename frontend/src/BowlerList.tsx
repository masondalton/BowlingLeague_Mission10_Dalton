import { useEffect, useState } from "react";
import { Bowler } from "./types/bowler";
import "./BowlerList.css";

// Component for the list of bowlers to display
function BowlerList() {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  // Hook to be able to fetch the bowler data
  useEffect(() => {
    const fetchBowlers = async () => {
      const response = await fetch("https://localhost:5000/BowlingLeague");
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowlers();
  }, []);

  return (
    // Return table using table styling from bowlerlist.css
    <>
      <table className="bowler-table">
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
              <td>{bowler.teamName}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BowlerList;
