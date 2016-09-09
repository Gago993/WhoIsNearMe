using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace asp.net.mvc_angular2_startproject.Models
{
    public class DevicesModels
    {
        [Key]
        public int ID { get; set; }

        public double Latitude { get; set; }

        public double Longitude { get; set; }

        public string UniqueDeviceID { get; set; }

        public DateTime LastVisit { get; set; }
    }

   
}