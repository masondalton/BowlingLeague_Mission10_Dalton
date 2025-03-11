// Frontend model for the bowler data,
// notice teamName is changed from teamId because of backend conversion
export type Bowler = {
  bowlerId: number;

  bowlerLastName: string;

  bowlerFirstName: string;

  bowlerMiddleInit: string;

  bowlerAddress: string;

  bowlerCity: string;

  bowlerState: string;

  bowlerZip: string;

  bowlerPhoneNumber: string;

  teamName: string;
};
