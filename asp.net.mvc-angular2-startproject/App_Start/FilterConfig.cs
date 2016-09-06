using System.Web;
using System.Web.Mvc;

namespace asp.net.mvc_angular2_startproject
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
