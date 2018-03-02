using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace NetCoreAngularTest
{
  [Route("api/[controller]")]
  public class MenuItemsController : Controller
  {
    [HttpGet]
    public MenuItem Get()
    {
      return new MenuItem
      {
        Value = "root",
        Children = new MenuItem[]
      {
        new MenuItem
        {
          Id = 1,
          Value = "Client 1",
          Children = new MenuItem[]
          {
            new MenuItem
            {
              Id = 2,
              Value = "Engagement 1",
              Children = new MenuItem []
              {
                new MenuItem
                {
                  Id = 3,
                  Value = "Entity 1"
                },
                new MenuItem
                {
                  Id = 4,
                  Value = "Entity 2"
                }
              }
            },
            new MenuItem
            {
              Id = 5,
              Value = "Engagement 2",
              Children = new MenuItem []
              {
                new MenuItem
                {
                  Id = 6,
                  Value = "Entity 3"
                },
                new MenuItem
                {
                  Id = 7,
                  Value = "Entity 4"
                }
              }
            }
          }
        },
        new MenuItem
        {
          Id = 8,
          Value = "Client 2",
          Children = new MenuItem[]
          {
            new MenuItem
            {
              Id = 9,
              Value = "Engagement 3",
              Children = new MenuItem[]
              {
                new MenuItem
                {
                  Id = 10,
                  Value = "Entity 5"
                },
                new MenuItem
                {
                  Id = 11,
                  Value = "Entity 6"
                }
              }
            },
            new MenuItem
            {
              Id = 12,
              Value = "Engagement 4",
              Children = new MenuItem[]
              {
                new MenuItem
                {
                  Id = 13,
                  Value = "Entity 7"
                },
                new MenuItem
                {
                  Id = 14,
                  Value = "Entity 8"
                }
              }
            }
          }
        }
      }
      };
    }

    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
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
