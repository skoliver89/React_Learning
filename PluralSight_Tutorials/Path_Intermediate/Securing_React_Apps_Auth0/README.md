# Notes

- Client-Side React apps are generally a SPA; thus, you should use an Implicit Flow for auth.
- OAuth is for authorization only, it does not handle authentication.
- Authentication will be handled by OpenID Connect (OIDC) in this tutorial
- JWT.io -> JWT decoder
- OIDC: Identity Token -> User data
- OAuth: Access Token -> Permissions/Scopes
- JWTs can't be revoked; good idea to set short lifespan like 10 hours
  <br />

## Implicit Flow

1. Your app directs the browser to the Auth0 sign-in
1. Auth0 redirects to your app, at the callback URL you chose
1. Your app reads the tokens from the URL  
   <br />

## Layers using OAuth and OIDC

1. (top) OpenID Connect
   - Adds:
     1. ID Token (JWT)
        - JWT will not be encrypted for this tutorial, but can be
     1. UserInfo endpoint
     1. Standard Scopes (permissions)
2. (mid) OAuth 2.0
3. (btm) HTTP
   <br />

## JWT Parts

1. Header
   - Type
   - Hash Algorithm
   - Key ID
2. Body
   - User Identity Claims
3. Signature
   - Verify the sender
   - Assure content is legit
