using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class Images
    {
        [Key]
        public int ImageId { get; set; }
        public string ImageUrl { get; set; }
    }
}
