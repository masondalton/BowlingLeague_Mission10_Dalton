using BowlingLeague.Data;
using Microsoft.AspNetCore.Mvc;

namespace BowlingLeague.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlingLeagueController : ControllerBase
{
    private BowlingLeagueContext _context;

    public BowlingLeagueController(BowlingLeagueContext temp)
    {
        _context = temp;
    }

    [HttpGet(Name = "GetBowlers")]
    public IEnumerable<Bowler> Get()
    {
            var teamIds = _context.Teams
                .Where(t => t.TeamName == "Marlins" || t.TeamName == "Sharks")
                .Select(t => t.TeamId)
                .ToList(); // Fetch IDs into memory

            var bowlerList = _context.Bowlers
                .Where(b => b.TeamId != null && teamIds.Contains(b.TeamId.Value)) // Avoids IQueryable closure issue
                .ToList();

            return bowlerList;
        }

    }