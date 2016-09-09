using System;
using System.Data.Entity;

namespace asp.net.mvc_angular2_startproject.Models
{
    public class WhoIsNearMeDb : DbContext
    {
        public Guid ID { get; set; }
        public DbSet<DevicesModels> Devices { get; set; }

        public WhoIsNearMeDb() : base("DefaultConnection")
        {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;
            this.ID = Guid.NewGuid();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        

    }
}