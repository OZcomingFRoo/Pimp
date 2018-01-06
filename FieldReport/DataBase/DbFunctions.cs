using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FieldReport.Models;


namespace FieldReport
{
    public static class DbFunctions
    {
        private const string ConnetionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename='C:\Users\lonez\Documents\Visual Studio 2015\Projects\Pimp\FieldReport\App_Data\FieldReportDB.mdf';Integrated Security=True;MultipleActiveResultSets=True;Application Name=EntityFramework";

        /// <summary>
        /// Get full report fields from a specific date
        /// </summary>
        /// <param name="date"></param>
        /// <returns></returns>
        public static IEnumerable<FieldReport> GetReportsByDate(SimpleDate date)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var Results = DB.FieldReports.Where(EachReport => EachReport.ReportDate.Year == (int)date.Year);
                Results = Results.Where(EachReport => EachReport.ReportDate.Month == (int)date.Month);
                Results = Results.Where(EachReport => EachReport.ReportDate.Day == (int)date.Day);
                return Results;
            }
        } //Get list of Reports
        
        /// <summary>
        /// Get a short list of Field report (can filter with date)
        /// </summary>
        /// <returns></returns>
        public static IEnumerable<ReportTagNumber> GetListOfReportTags()
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                List<ReportTagNumber> list = new List<ReportTagNumber>();
                foreach (var item in DB.FieldReports)
                {
                    list.Add(new ReportTagNumber() { ReportNumberID = item.Id,
                        SetDate = item.ReportDate , Title = item.Title });
                }
                return list;
            }
        }//Get list of Report Id

        /// <summary>
        /// Write a new Report
        /// </summary>
        /// <param name="documentary"></param>
        public static int Report(FieldReportDoc documentary)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                DB.FieldReports.Add(documentary.ConvertToRow());
                DB.SaveChanges();
                var id = ByNewestId();
                return id;
            }
        } // Post/Create new Report
        
        /// <summary>
        /// Gets the specific Report , will return null if not found
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public static FieldReportDoc GetFieldReport(int ID)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var item = DB.FieldReports.SingleOrDefault(One => One.Id == ID);
                if (item != null)
                {
                    var R = new FieldReportDoc()
                    {
                        Id = item.Id,
                        Date = new SimpleDate(item.ReportDate),
                        Text = Utilities.RenderTextTohtml(item.Content),
                        Title = item.Title
                    };
                    return R;
                }
                else
                    return null;
            }
        } // Get One

        public static FieldReportDoc LastReport()
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var dates = (from item in DB.FieldReports
                            select item.ReportDate).ToList();

                DateTime MaxDate = Utilities.FindYoungestDate(dates);

                var FilteredReports = DB.FieldReports.Where(report =>
                report.ReportDate.Year == MaxDate.Year && report.ReportDate.Month == MaxDate.Month
                && report.ReportDate.Day == MaxDate.Day).ToList();

                FieldReport FR = FilteredReports.OrderByDescending(fr => fr.Id).First();

                return new FieldReportDoc() {
                    Id = FR.Id,
                    Date = FR.ReportDate.ToSimpleDate(),
                    Text = Utilities.RenderTextTohtml(FR.Content),
                    Title = FR.Title
                };
            }
        }// Get Letest report Written 

        public static IEnumerable<FieldReportDoc> GetReportsByKeyWords(string [] words)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var ReportTable = DB.FieldReports.ToList();
                var FR = new List<FieldReport>(); // filterResult
                for (int i = 0; i < words.Length; i++)
                {
                    FR.AddRange(ReportTable.Where(report => 
                        (report.Content.Contains(words[i]) && //1st if he contains word from words Table
                        !FR.Exists(item => item.Id == report.Id) )) //2nd is he already in FR 
                        .ToList());
                }

                var documents = new List<FieldReportDoc>();
                documents = (from item in FR
                            select new FieldReportDoc() {
                                Id = item.Id ,
                                Date = new SimpleDate(item.ReportDate),
                                Text = item.Content,
                                Title = item.Title
                            }).ToList();
                return documents;
            }
        } //Get list of Reports

        private static int ByNewestId()
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var Ids = (from item in DB.FieldReports
                             select item.Id).ToList();
                int Retunred_Id = Ids.Max();
                return Retunred_Id;
            }
        }

        public static bool DeleteReportFromDB(int ID)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var row = DB.FieldReports.SingleOrDefault(One => One.Id == ID);
                if (row != null)
                {
                    DB.FieldReports.Remove(row);
                    DB.SaveChanges();
                    return true;
                }
                else
                    return false;
            }
        } // Delete Report

        public static FieldReportDoc GetReportForEdit(int ID)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var item = DB.FieldReports.SingleOrDefault(One => One.Id == ID);
                if (item != null)
                {
                    var R = new FieldReportDoc()
                    {
                        Id = item.Id,
                        Date = new SimpleDate(item.ReportDate),
                        Text = Utilities.BackToOldNativeString(item.Content), // In here we render the text back to native string
                        Title = item.Title
                    };
                    return R;
                }
                else
                    return null;
            }
        }

        public static int UpdateReport(FieldReportDoc Updated)
        {
            using (FieldReportDBEntities DB = new FieldReportDBEntities())
            {
                var row = DB.FieldReports.SingleOrDefault(rw => rw.Id == Updated.Id);
                if (row != null)
                {
                    row.ReportDate = Updated.Date.ToDateTime; // Date
                    row.Title = Updated.Title; // Title
                    row.Content = Utilities.StoreInSQL(Updated.Text); // Text/Content
                    DB.SaveChanges();
                    return Updated.Id.Value;
                }
                else
                    return -1;
            }
            
        }
    }
}



///// <summary>
///// Get a short list of Field report (can filter with date)
///// </summary>
///// <param name="date"></param>
///// <returns></returns>
//public static IEnumerable<ReportTagNumber> GetListOfReportTags(SimpleDate date)
//{
//    using (FieldReportDBEntities DB = new FieldReportDBEntities())
//    {
//        if (date != null) //Return By Date
//        {
//            var Filter = DB.FieldReports.Where(EachReport => EachReport.ReportDate.Year == (int)date.Year);
//            Filter = Filter.Where(EachReport => EachReport.ReportDate.Month == (int)date.Month);
//            Filter = Filter.Where(EachReport => EachReport.ReportDate.Day == (int)date.Day);
//            List<ReportTagNumber> Results = Filter.Select(item => new ReportTagNumber()
//            {
//                ReportNumberID = item.Id , Day = (ushort)item.ReportDate.Day,
//                Year = (ushort)item.ReportDate.Year, Month = (ushort)item.ReportDate.Month
//            }).ToList();
//            return Results;
//        }
//        else //Return All
//            return DB.FieldReports.Select(item => new ReportTagNumber()
//            {
//                ReportNumberID = item.Id,
//                Day = (ushort)item.ReportDate.Day,
//                Year = (ushort)item.ReportDate.Year,
//                Month = (ushort)item.ReportDate.Month
//            }).ToList();
//    }
//}
//Get list of Report Id/Tag number by date