import express from "express";
import { fileURLToPath } from "url";
import { dirname} from "path";
import { request } from "http";
import path from "path";
import * as DBManage from "../public/js/db_management.mjs";
export const router = express.Router();

router.post("/login",async function (request,response){
    let loginUsername = request.body.login_uname;
    let loginPassword = request.body.login_psw;
    
    /*
    let query = "SELECT * from Person where Name='" + loginUsername + "' and password='" + loginPassword + "';";
    DBManage.readData(query, response, (result) =>
    {
        if(result.length > 0)
        {
            console.log(result);
            response.statusCode = 200;
    
            response.render("dashboard",
            {
                action: "dashboard_input",
                data: result[0]
            });
        }
        else
        {
            response.redirect("/error");
        }
        
    });
    */
    response.statusCode = 200;
    response.render("dashboard",
    {
        action: null
    }); 
});

router.post("/sign_up",async function (request,response){
    let signupUsername = request.body.sign_up_uname;
    let signupEmail = request.body.sign_up_email;
    let signUpPassword = request.body.sign_up_psw;

    /*
    let query = "Insert into Person values('" + signupUsername + "','" + signupEmail + "','" + signUpPassword + "','Empy');";
    DBManage.writeData(query, response,()=>{
        //window.alert("User successfully added");
        console.log("User successfully added");
        response.redirect("/");
    });
    */
   response.redirect("/"); 
});


router.get("/",(request,response)=>{
    response.statusCode = 200; 
    response.render("form");
    //response.sendFile(path.join(__dirname, ".\views\form.ejs"),(error)=> {console.log("\n Error while loading form.ejs: \n" + error.stack);});
});