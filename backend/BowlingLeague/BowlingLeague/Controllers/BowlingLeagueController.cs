using BowlingLeague.Data;
using Microsoft.AspNetCore.Mvc;

namespace BowlingLeague.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlingLeagueController : ControllerBase
{
    // Establish database connection to app
    private BowlingLeagueContext _context;

    public BowlingLeagueController(BowlingLeagueContext temp)
    {
        _context = temp;
    }

    [HttpGet(Name = "GetBowlers")]
    // Need to make object here for the sql linq query to work
    public IEnumerable<object> Get()
    {
        // Return bowlers that are on the Marlins and Sharks bowling teams
        var bowlerList = _context.Bowlers
            .Where(b => b.Team != null && 
                        (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
            .Select(b => new 
            {
                b.BowlerId,
                b.BowlerFirstName,
                b.BowlerMiddleInit,
                b.BowlerLastName,
                b.BowlerAddress,
                b.BowlerCity,
                b.BowlerState,
                b.BowlerZip,
                b.BowlerPhoneNumber,
                // Convert all the TeamIds into their relevant names for display on the frontend
                TeamName = b.Team.TeamName 
            })
            .ToList();

        return bowlerList;
        }

    }