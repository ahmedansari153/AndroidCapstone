using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Capstone.Models;

namespace Capstone.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        private CapstoneContext _context;

        public HomeController(CapstoneContext context)
        {
            _context = context;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get([FromQuery] string phone)
        {
            IQueryable<Phones> Phones = from p in _context.Phones
                                        select p;
            if (phone != null)
            {
                Phones = Phones.Where(c => c.Name.Contains(phone));
            }

            return Ok(Phones);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            IQueryable<object> Phone = from p in _context.Phones
                                       where p.PhoneId == id
                                       select p;
            return Ok(Phone);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
