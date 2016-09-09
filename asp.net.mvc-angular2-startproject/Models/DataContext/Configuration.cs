namespace asp.net.mvc_angular2_startproject.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.IO;
    using System.Linq;
    using System.Reflection;
    using System.Web;
    using System.Web.Hosting;
    using Models;

    internal sealed class Configuration : DbMigrationsConfiguration<WhoIsNearMeDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            MigrationsDirectory = @"DataContexts\Migrations\";
        }

        private void EnableDebuging()
        {
            if (System.Diagnostics.Debugger.IsAttached == false)
                System.Diagnostics.Debugger.Launch();
        }

        protected override void Seed(WhoIsNearMeDb context)
        {
            InitializeLocalData(context);
        }

        #region LocalData
        private void InitializeLocalData(WhoIsNearMeDb context)
        {
            var devices = new List<DevicesModels>{
                new DevicesModels{ID = 1, Latitude = 41.23432, Longitude = 20.1332312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "111111"},
                new DevicesModels{ID = 2, Latitude = 40.43432, Longitude = 21.12312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "22222"},
                new DevicesModels{ID = 3, Latitude = 41.345432, Longitude = 21.622312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "333333"},
                new DevicesModels{ID = 4, Latitude = 41.753432, Longitude = 20.562312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "444444"},
                new DevicesModels{ID = 5, Latitude = 40.123432, Longitude = 20.2343312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "55555"},
                new DevicesModels{ID = 6, Latitude = 42.1233432, Longitude = 21.1112312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "666666"},
                new DevicesModels{ID = 7, Latitude = 40.2333432, Longitude = 20.233312, LastVisit = DateTime.UtcNow, UniqueDeviceID = "777777"},
            };
            devices.ForEach(c => context.Devices.AddOrUpdate(k => k.ID, c));
            context.SaveChanges();
            
        }
        #endregion
    }
}
