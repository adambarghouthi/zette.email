# How to run

- Clone project
- `cd` into project directory
- `npm i` to download node packages
- `npm run dev` to run on `localhost:3000`

## How to test

### Method 1

- Go to [localhost:3000](localhost:3000) or [zette.email](https://zette.email)
- Enter an email in the textfield
- Click "Send email" button
- Find the email in your inbox

### Method 2

- Send a POST request to `zette.email/api/emails` with JSON body that contains

```
{
    to: string,
    subject: string, // optional
    text: string, // optional
}
```
