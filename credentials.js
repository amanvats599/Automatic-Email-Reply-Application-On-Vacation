/*
  1.This id , secret and redirected uri obtained from the Google Cloud Console.
    https://console.developers.google.com by creating project there and setting up project.
 
  2.This refresh token is generated from the redirected uri https://developers.google.com/  oauthplayground
    and here authorized this https://mail.google.com scope api by email and in setting of scope api by putting client id and client secret then when authorizes done this generate 
    authorization code .

  3.Exchange authorization code for refresh token by clicking on exchange text. 

  4.import the credentials.js file  

  5.All the steps described in detail explaination available in readme.md check it.

 */


const CLIENT_ID = "788519615381-deebouv1rtsqiv6kt06nc55fvpejuutj.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN ="1//040P7hIGfARVMCgYIARAAGAQSNwF-L9Ir2Y4_lZ5yP3_8XvPNnJ2nSU4v_7GT_qqE0FkW79a8gcH6UqNzvGdC6Bcsm5hwX0zXIiY";
module.exports = { CLIENT_ID, CLEINT_SECRET, REDIRECT_URI, REFRESH_TOKEN };
