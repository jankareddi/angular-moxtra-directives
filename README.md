angular-moxtra-directives
=========================

Angular directives for moxtra features like meet, chat draw and clip

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
