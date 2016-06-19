using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Capstone.Models
{
    public class Phones
    {
        [Key]
        public int PhoneId { get; set; }
        public string Name { get; set; }
        public string Carrier { get; set; }
        public string DisplayResolution { get; set; }
        public string Processor { get; set; }
        public int RamSize { get; set; }
        public bool MicroUsb { get; set; }
        public bool USBC { get; set; }
        public bool ExpandableStorage { get; set; }
        public decimal Price { get; set; }
        public bool WaterProof { get; set; }
        public string GPU { get; set; }
        public string AndroidVersion { get; set; }
        public bool WirelessCharging { get; set; }
        public bool QuickCharging { get; set; }
        public string Camera { get; set; }
        [ForeignKey("Images")]
        public int ImageId { get; set; }
        public int BatteryMah { get; set; }
        public DateTime ReleaseDate { get; set; }
        public decimal ScreenSize { get; set; }
        public int processorType { get; set; } 
    }
}
