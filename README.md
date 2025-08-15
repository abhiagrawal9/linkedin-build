# Linkedin Clone (React App)

Built using React.js, Redux, Firebase and Material UI.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c15f77d7-091c-4bbe-949b-b43b134079c7/deploy-status)](https://app.netlify.com/projects/abhi27shek/deploys)

[Website URL](https://abhi27shek.netlify.app/)

## Firebase Configuration

To connect your app to Firebase, create a `.env` file in the root of the project with the following content (replace with your own Firebase project values if needed):

```
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_DATABASE_URL=your_database_url
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
```

**Note:**

- The `.env` file is automatically loaded by Create React App.
- Do **not** commit your `.env` file to version control as it contains sensitive information.

### Start Dev Server

In the project directory, you can run:

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Build For Production

In the project directory, you can run:

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the official documentaion about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

QUICK DEMO:
<https://drive.google.com/file/d/1JMPwvTzBOv5KPHh1wtr_-mvW2Tbphmv4/view?usp=sharing>

Also deployed with netlify.
