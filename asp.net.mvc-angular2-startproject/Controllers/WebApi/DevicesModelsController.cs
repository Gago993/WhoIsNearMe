using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using asp.net.mvc_angular2_startproject.Models;

namespace asp.net.mvc_angular2_startproject.Controllers.WebApi
{
    public class DevicesModelsController : ApiController
    {
        private WhoIsNearMeDb db = new WhoIsNearMeDb();

        // GET: api/DevicesModels
        public IQueryable<DevicesModels> GetDevices(string uniqueDeviceID = "")
        {
            return db.Devices.Where(d => d.UniqueDeviceID != uniqueDeviceID);
        }

        // GET: api/DevicesModels/5
        [ResponseType(typeof(DevicesModels))]
        public IHttpActionResult GetDevicesModels(int id)
        {
            DevicesModels devicesModels = db.Devices.Find(id);
            if (devicesModels == null)
            {
                return NotFound();
            }

            return Ok(devicesModels);
        }

        // PUT: api/DevicesModels/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDevicesModels(int id, DevicesModels devicesModels)
        {

            return BadRequest();

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != devicesModels.ID)
            {
                return BadRequest();
            }

            db.Entry(devicesModels).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DevicesModelsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/DevicesModels
        [ResponseType(typeof(DevicesModels))]
        public IHttpActionResult PostDevicesModels(DevicesModels devicesModels)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            DevicesModels device = db.Devices.Where(u => u.UniqueDeviceID == devicesModels.UniqueDeviceID).FirstOrDefault();

            if (device != null)
            {
                device.LastVisit = DateTime.UtcNow;
                device.Latitude = devicesModels.Latitude;
                device.Longitude = devicesModels.Longitude;
                db.Entry(device).State = EntityState.Modified;
            }
            else
            {
                devicesModels.ID = 0;
                devicesModels.LastVisit = DateTime.UtcNow;
                device = db.Devices.Add(devicesModels);
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return BadRequest();
            }

            return CreatedAtRoute("DefaultApi", new { id = device.ID }, device);
        }

        // DELETE: api/DevicesModels/5
        [ResponseType(typeof(DevicesModels))]
        public IHttpActionResult DeleteDevicesModels(int id)
        {
            return BadRequest();

            DevicesModels devicesModels = db.Devices.Find(id);
            if (devicesModels == null)
            {
                return NotFound();
            }

            db.Devices.Remove(devicesModels);
            db.SaveChanges();

            return Ok(devicesModels);
        }
        
        [HttpGet]
        [Route("api/devicesmodels/seed")]
        [ResponseType(typeof(IEnumerable<DevicesModels>))]
        public IHttpActionResult PostInitialData()
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

            var data = db.Devices.AddRange(devices);
            db.SaveChanges();
            if(data == null)
            {
                return BadRequest();
            }

            return Ok(data);
        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool DevicesModelsExists(int id)
        {
            return db.Devices.Count(e => e.ID == id) > 0;
        }
    }
}