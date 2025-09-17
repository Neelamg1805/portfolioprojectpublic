# Firebase Setup Guide

This guide will help you set up Firebase authentication for the Portfolio Builder application.

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "portfolio-builder")
4. Choose whether to enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Authentication

1. In your Firebase project dashboard, click on "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Enable "Email/Password" authentication
5. Click "Save"

## Step 3: Get Firebase Configuration

1. In your Firebase project dashboard, click on the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (</>) to add a web app
5. Enter an app nickname (e.g., "Portfolio Builder Web")
6. Click "Register app"
7. Copy the Firebase configuration object

## Step 4: Update Firebase Configuration

### Option 1: Direct Configuration
1. Open `src/lib/firebase.ts`
2. Replace the placeholder configuration with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id"
};
```

### Option 2: Environment Variables (Recommended)
1. Create a `.env` file in your project root
2. Add your Firebase configuration:

```env
VITE_API_KEY=your-actual-api-key
VITE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_PROJECT_ID=your-actual-project-id
VITE_STORAGE_BUCKET=your-project.appspot.com
VITE_MESSAGING_SENDER_ID=your-actual-sender-id
VITE_APP_ID=your-actual-app-id
```

## Step 5: Install Dependencies

Run the following command to install Firebase:

```bash
npm install firebase
```

## Step 6: Test the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:5173`
3. Try to access the dashboard - you should be redirected to the login page
4. Create a new account using the registration page
5. Login with your credentials
6. You should now be able to access the dashboard and download source code

## Features Implemented

- ✅ User registration with email and password
- ✅ User login with email and password
- ✅ Protected routes (dashboard, editor, preview)
- ✅ Automatic redirect to login when accessing protected routes
- ✅ User logout functionality
- ✅ User information display in navigation
- ✅ Download source code requires authentication

## Security Notes

- All user data is stored securely in Firebase
- Passwords are hashed and encrypted by Firebase
- Authentication state is managed by Firebase Auth
- Protected routes automatically redirect unauthenticated users

## Troubleshooting

If you encounter issues:

1. Make sure your Firebase configuration is correct
2. Check that Email/Password authentication is enabled in Firebase Console
3. Verify that your domain is authorized in Firebase Console (for production)
4. Check the browser console for any error messages
5. Ensure all dependencies are installed correctly

## Next Steps

- Configure Firebase Firestore for storing user portfolios
- Add password reset functionality
- Implement user profile management
- Add social login options (Google, GitHub, etc.)
