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
        // GET api/Home gets all data back
        [HttpGet]
        public IActionResult Get([FromQuery] string Name)
        {
            IQueryable<Phones> Phones = from p in _context.Phones
                                        select p;

            // api/Home?Name=$(Name)
            if (Name != null)
            {
                Phones = Phones.Where(c => c.Name.Contains(Name));
            }

            return Ok(Phones);
        }

        // GET api/values/5 gets data with that Id
        [HttpGet("{cpuid}")]
        public IActionResult Get(int cpuid)
        {
            IQueryable<object> Phone = from p in _context.Phones
                                       where p.processorType == cpuid
                                       select new { p.PhoneId, p.Carrier, p.Name, p.AndroidVersion, p.DisplayResolution, p.ScreenSize, p.BatteryMah, p.WaterProof, p.Price, p.ReleaseDate, p.WirelessCharging}
                                       
                                       ;
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
