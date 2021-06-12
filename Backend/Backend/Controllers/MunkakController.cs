using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Backend.Models;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

namespace Backend.Controllers
{
    public class MunkakController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"
                    select MunkaID,MunkaNeve from
                    dbo.Munkak
            ";
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

        public string Post(Munkak mk)
        {
            try
            {
                string query = @"
                    insert into dbo.Munkak values
                    ('" + mk.MunkaNeve + @"')
                                    
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Munka hozzáadva!";
            }
            catch (Exception)
            {

                return "Hozzáadás sikertelen!";
            }
        }

        public string Put(Munkak mk)
        {
            try
            {
                string query = @"
                     update dbo.Munkak set MunkaNeve=
                    '" + mk.MunkaNeve + @"'
                    where MunkaID=" + mk.MunkaID + @"
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

        public string Deletet(int id)
        {
            try
            {
                string query = @"
                    delete from dbo.Munkak
                    where MunkaID=" + id + @"
                    ";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["VRUzemAppDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Munka törölve!";
            }
            catch (Exception)
            {

                return "Törlés sikertelen!";
            }
        }
    }
}
