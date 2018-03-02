using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace NetCoreAngularTest
{
  [Route("api/[controller]")]
  public class ChampionsController : Controller
  {

    private static List<Champion> championsList = new List<Champion>() {
              new Champion { Id = 1, Name = "Lux"},
              new Champion { Id = 2, Name = "Ashe"},
              new Champion { Id = 3, Name = "Cho Gath"},
              new Champion { Id = 4, Name = "Fiddlesticks"},
              new Champion { Id = 5, Name = "Gangplank"},
              new Champion { Id = 6, Name = "Kalista"},
              new Champion { Id = 7, Name = "Kassadin"},
              new Champion { Id = 8, Name = "Kha Zix"},
              new Champion { Id = 9, Name = "Master Yi"},
              new Champion { Id = 10, Name = "Nidalee"},
              new Champion { Id = 11, Name = "Ryze"},
              new Champion { Id = 12, Name = "Sona"},
              new Champion { Id = 13, Name = "Sion"},
              new Champion { Id = 14, Name = "Talon"},
              new Champion { Id = 15, Name = "Thresh"},
              new Champion { Id = 16, Name = "Teemo"},
              new Champion { Id = 17, Name = "Twitch"}
      };

    [HttpGet]
    public IEnumerable<Champion> Get()
    {
      return championsList;
    }

    [HttpGet("{id}")]
    public Champion Get(int id)
    {
      return championsList.FirstOrDefault(c => c.Id == id);
    }

    [HttpPost]
    public void Post([FromBody]string value)
    {
    }

    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
