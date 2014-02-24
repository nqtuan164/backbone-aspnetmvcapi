using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RESTful.Models;
using Newtonsoft.Json;

namespace RESTful.Controllers
{
    public class UserController : ApiController
    {
        // GET api/user
        public IEnumerable<user> Get()
        {
            dbUserDataContext db = new dbUserDataContext();
            return db.users;
        }

        // GET api/user/5
        public user Get(int id)
        {
            dbUserDataContext db = new dbUserDataContext();
            return db.users.SingleOrDefault(p => p.id == id);
        }

        // POST api/user
        public void Post(user user)
        {
            dbUserDataContext db = new dbUserDataContext();
            db.users.InsertOnSubmit(user);
            db.SubmitChanges();
        }

        // PUT api/user/5
        public void Put(int id, user user)
        {
            dbUserDataContext db = new dbUserDataContext();
            user tmp = db.users.SingleOrDefault(p => p.id == id);
            tmp.firstname = user.firstname;
            tmp.lastname = user.lastname;
            tmp.age = user.age;

            db.SubmitChanges();
        }

        // DELETE api/user/5
        public void Delete(int id)
        {
            dbUserDataContext db = new dbUserDataContext();
            user tmp = db.users.SingleOrDefault(p => p.id == id);
            db.users.DeleteOnSubmit(tmp);
            db.SubmitChanges();
        }
    }
}
