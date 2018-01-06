using System;
using System.ComponentModel.DataAnnotations;
using FieldReport;

namespace FieldReport.Models
{
    public class FieldReportDoc
    {
        public int ?Id { get; set; }
        [Required]
        public SimpleDate Date { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public string Title { get; set; }

        public FieldReport ConvertToRow()
        {
            return new FieldReport() {
                Title = this.Title,
                ReportDate = Date.ToDateTime,
                Content = Utilities.StoreInSQL(Text) };
        }
    }
}