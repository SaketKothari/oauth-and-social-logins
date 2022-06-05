# oauth-and-social-logins
OAuth 2.0, which stands for “Open Authorization”, is a standard designed to allow a website or application to access resources hosted by other web apps on behalf of a user. 

#

### Principles of OAuth2.0
* OAuth 2.0 is an authorization protocol and NOT an authentication protocol. As such, it is designed primarily as a means of granting access to a set of resources, for example, remote APIs or user’s data.
* OAuth 2.0 uses Access Tokens. An Access Token is a piece of data that represents the authorization to access resources on behalf of the end-user. 
* OAuth 2.0 doesn’t define a specific format for Access Tokens. However, in some contexts, the JSON Web Token (JWT) format is often used. 
* This enables token issuers to include data in the token itself. Also, for security reasons, Access Tokens may have an expiration date.

#

### OAuth2.0 Roles
<img src="https://img.shields.io/badge/-Resource Owner-blue" alt="Resource Owner"/> &nbsp; 
<img src="https://img.shields.io/badge/-Client-blue" alt="Client"/> &nbsp; 
<img src="https://img.shields.io/badge/-Authorization Server-blue" alt="Authorization Server"/> &nbsp; 
<img src="https://img.shields.io/badge/-Resource Server-blue" alt="Resource Server"/> &nbsp;

#

### OAuth 2.0 Scopes
Scopes are an important concept in OAuth 2.0. They are used to specify exactly the reason for which access to resources may be granted. Acceptable scope values, and which resources they relate to, are dependent on the Resource Server.

#

### OAuth 2.0 Access Tokens and Authorization Code
* The OAuth 2 Authorization server may not directly return an Access Token after the Resource Owner has authorized access. 
* Instead, and for better security, an Authorization Code may be returned, which is then exchanged for an Access Token.  
* In addition, the Authorization server may also issue a Refresh Token with the Access Token. 
* Unlike Access Tokens, Refresh Tokens normally have long expiry times and may be exchanged for new Access Tokens when the latter expires. 
* Because Refresh Tokens have these properties, they have to be stored securely by clients.

#

### How Does OAuth 2.0 Work?
* The Client requests authorization (authorization request) from the Authorization server, supplying the client id and secret to as identification; it also provides the scopes and an endpoint URI (redirect URI) to send the Access Token or the Authorization Code to.
* The Authorization server authenticates the Client and verifies that the requested scopes are permitted.
* The Resource owner interacts with the Authorization server to grant access.
* The Authorization server redirects back to the Client with either an Authorization Code or Access Token, depending on the grant type, as it will be explained in the next section. A Refresh Token may also be returned.
* With the Access Token, the Client requests access to the resource from the Resource server.
