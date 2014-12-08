angular-moxtra-directives
=========================

Angular directives for moxtra features like meet, chat draw and clip

## Build/ Deploy
Copy the config.example.json file (in angular-moxtra-directives/app/scripts/). Replace the file contents with the actaul client ID and secret values. Rename the copied file to config.development.json for development and test, and config.production.json for production environment.

If you need a separate config for QA/ test the Gruntfile config will need to be modified.

## Usage
### Meet
`<moxtra-meet container-id="my-meet-container" text="Web Conference Start" frame-width="100%" frame-height="100%" session-info="sessionInfo"> </moxtra-meet>`

SessionInfo contains key attributes like id (session id), clientId, clientSecret, userId, firstName and lastName. Here's an example:
```javascript
    {
      id : 'session-id',
      clientId: 'client-id',
      clientSecret: 'client-secret',
      userId: 'unique-user-id', // ideally this comes from the user context
      firstName: 'John', // ideally this comes from the user context
      lastName: 'Smith' // ideally this comes from the user context
    }
