﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class Users
    {
        [Key]
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
    }
}
