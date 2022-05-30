// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import queryString from "node:querystring";
import cookieHandler from "cookies";
type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("GET /api/auth");
  const c = new cookieHandler(req, res);

  //signout
  if (req.query.hasOwnProperty("signout")) {
    try {
      await c.set("access_token");
      console.log("successfully deleted cookies!\nredirecting to homepage");
      res.redirect("/");
    } catch (e) {
      console.log(e);
      console.log("there was an error while signing out :(");
    }
  }
  //get access token and send back cookies
  else {
    //400
    //no cookies or code in url
    if (
      !req.cookies.hasOwnProperty("access_token") &&
      !req.query.hasOwnProperty("code")
    ) {
      console.log("user does not have cookies OR code, bad request");
      res.status(400).redirect("/");
    }
    //check for cookie first
    //if no cookie get code and request acces token
    else {
      //if cookie installed
      if (req.cookies.hasOwnProperty("access_token")) {
        console.log(
          "user has access_token with value " + req.cookies.access_token
        );

        res.redirect("/account");
      }
      //no cookie, get code
      else if (req.query.hasOwnProperty("code")) {
        console.log("user has code from url querty");
        console.log("requesting access token...");

        try {
          const data = await axios.post(
            "https://accounts.spotify.com/api/token",
            queryString.stringify({
              grant_type: "authorization_code",
              code: req.query.code,
              redirect_uri: process.env.REDIRECT_URI_DECODED,
            }),
            {
              headers: {
                Authorization: "Basic " + process.env.BASE64_AUTHORIZATION,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          console.log(data.data);

          try {
            //save access_token cookie
            //expire in 1 hour (same as spotify cookie)
            let expirationDate: Date = new Date(Date.now() + 3600000); //1 hour 

            await c.set("access_token", data.data.access_token, {maxAge: 3600000});
            console.log("successfully saved cookies!");
            res.status(200).redirect("/account");
          } catch (e) {
            console.log(e);
            console.log("could not save cookies :(");
            res.status(500).redirect("/");
          }
        } catch (e) {
          console.log(e);
          console.log("error while getting access token :(");

          res.status(500).redirect("/");
        }
      }
      //400
      else {
        res.status(400).redirect("/");
      }
    }
  }
}
