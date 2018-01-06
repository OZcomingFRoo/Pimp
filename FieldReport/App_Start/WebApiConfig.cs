using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace FieldReport
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            var all = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(all);

            config.Routes.MapHttpRoute(
                name: "GetReportById",
                routeTemplate: "api/GetReport/{id}",
                defaults: new { controller = "Report", action = "GetReport" , id = -1 }
            );
            config.Routes.MapHttpRoute(
                name: "SaveReportChangesShortcut",
                routeTemplate: "api/Report/Update",
                defaults: new { controller = "Report", action = "SaveChangesForReport" }
            );
            config.Routes.MapHttpRoute(
                name: "EditReportShortCut",
                routeTemplate: "api/Report/Edit/{Id}",
                defaults: new { controller = "Report", action = "OpenReportForEdit", Id = -1 }
            );
            config.Routes.MapHttpRoute(
                name: "DeleteReportShortCut",
                routeTemplate: "api/Report/Delete/{Id}",
                defaults: new { controller = "Report", action = "DeleteReport" , Id = -1 }
            );
            config.Routes.MapHttpRoute( 
                name: "GetListOfTagReportId",
                routeTemplate: "api/Report/GetList",
                defaults: new { controller = "Report", action = "GetIdList" }
            );

            config.Routes.MapHttpRoute(
                name: "GetRepostByDate",
                routeTemplate: "api/Report/GetReportFrom/{Day}/{Month}/{Year}",
                defaults: new { controller = "Report", action = "GetReportByDate" }
            );
            config.Routes.MapHttpRoute(
                name: "WriteNewReport",
                routeTemplate: "api/Report",
                defaults: new { controller = "Report", action = "Write" }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { controller = "Report", action = "Info" }
            );
        }
    }
}
