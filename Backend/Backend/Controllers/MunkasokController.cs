using Backend.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;



namespace Backend.Controllers
{
    public class MunkasokController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select MunkasID,MunkasNeve,MunkasSzakkepzettseg,MunkasOraber,Kep,MunkaNeve from
                    dbo.Munkasok
            ";
            DataTable table = new DataTable();
            using(var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using(var cmd = new SqlCommand(query,con))
                using(var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);

                           
        }

        public string Post(Munkasok mun)
        {
            try
            {
                string query = @"
                    insert into dbo.Munkasok values
                    (
                        '" + mun.MunkasNeve + @"',
                        '" + mun.MunkasSzakkepzettseg + @"',
                        '" + mun.MunkasOraber + @"',
                        '" + mun.Kep + @"',
                        '" + mun.MunkaNeve + @"'
                    )
                                    
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Munkás hozzáadva!";
            }
            catch (Exception)
            {

                return "Hozzáadás sikertelen!";
            }
        }

        public string Put(Munkasok mun)
        {
            try
            {
                string query = @"
                    update dbo.Munkasok set 
                    MunkasNeve='" + mun.MunkasNeve + @"',
                    MunkasSzakkepzettseg='" + mun.MunkasSzakkepzettseg + @"',
                    MunkasOraber='" + mun.MunkasOraber + @"',
                    Kep='" + mun.Kep + @"',
                    MunkaNeve='" + mun.MunkaNeve + @"'
                    where MunkasID=" + mun.MunkasID+@"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Sikeres módosítás!";
            }
            catch (Exception)
            {

                return "Módosítás sikertelen!";
            }
        }

        public string Delete(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Munkasok
                    where MunkasID=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Munkás törölve!";
            }
            catch (Exception)
            {

                return "Törlés sikertelen!";
            }

        }

            [Route("api/Munkasok/GetAllMunkaNeve")]
            [HttpGet]
            public HttpResponseMessage GetAllMunkaNeve()
            {
                string query = @"
                    select MunkaNeve from dbo.Munkak";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return Request.CreateResponse(HttpStatusCode.OK, table);
            

        }

        [Route("api/Munkasok/SaveFile")]
        public string SaveFile()
        {
            try
            {
                var httpRequest = HttpContext.Current.Request;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = HttpContext.Current.Server.MapPath("~/Photos2/" + filename);

                postedFile.SaveAs(physicalPath);

                return filename;


            }
            catch (Exception)
            {

                return "anonymous.png";
            }
        }
    }
}
