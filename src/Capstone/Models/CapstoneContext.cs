using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class CapstoneContext : DbContext
    {
        public CapstoneContext(DbContextOptions<CapstoneContext> options)
            : base(options)
         { }

        public DbSet<Images> Images { get; set; }
        public DbSet<Phones> Phones { get; set; }
        public DbSet<Users> Users { get; set; }
    }
}
    