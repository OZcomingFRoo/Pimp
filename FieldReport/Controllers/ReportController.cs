using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using FieldReport.Models;
using FieldReport.Filters;

namespace FieldReport.Controllers
{

    
    public class ReportController : ApiController
    {
        [HttpGet]
        public string Info()
        {
            return "this is a web api";
        }

        [HttpGet]
        [ModelFilter]
        public IHttpActionResult GetReportByDate([FromUri]SimpleDate date)
        {
            var data = DbFunctions.GetReportsByDate(date);
            return Ok(data);
        }// Get list of certain field reports

        [HttpPost]
        [ModelFilter]
        public IHttpActionResult Write([FromBody]FieldReportDoc text)
        {
            int id = DbFunctions.Report(text);
            return Ok(id);
        } // Post Report

        [HttpGet]
        public IHttpActionResult GetIdList()
        {
            return Ok(DbFunctions.GetListOfReportTags());
        } // Get list of all report Id's to select

        [HttpGet]
        public IHttpActionResult GetReport([FromUri]int id)
        {
            var data = DbFunctions.GetFieldReport(id);
            if (data != null)
                return Ok(data);
            else
                return NotFound();
        }

        [HttpGet]
        public IHttpActionResult LastReport()
        {
            var LR = DbFunctions.LastReport();
            return Ok(LR);
        }

        [HttpGet]
        public IHttpActionResult SearchByWords( [FromUri]string words )
        {
            if (!string.IsNullOrEmpty(words))
            {
                string[] input = Utilities.toWords(words);
                return Ok(DbFunctions.GetReportsByKeyWords(input));
            }
            else
                return BadRequest("Please insert a key words !");
        }

        [HttpDelete]
        public IHttpActionResult DeleteReport([FromUri]int Id)
        {
            if (DbFunctions.DeleteReportFromDB(Id))
                return Ok("Successfully deleted report");
            else
                return NotFound();
        }

        [HttpGet]
        public IHttpActionResult OpenReportForEdit([FromUri]int Id)
        {
            var report = DbFunctions.GetReportForEdit(Id);
            if (report != null)
                return Ok(report);
            else
                return NotFound();
        }

        [HttpPut]
        [ModelFilter]
        public IHttpActionResult SaveChangesForReport([FromBody] FieldReportDoc UpdatedReport)
        {
            int id = DbFunctions.UpdateReport(UpdatedReport);
            return Ok(id);
        }
    }
}
