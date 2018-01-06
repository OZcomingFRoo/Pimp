using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FieldReport.Models
{
    public class ReportTagNumber : SimpleDate
    {
        public string Title { get; set; }
        public int ReportNumberID { get; set; }
    }
}