# NestFire Example
This NestJS project shows how to deploy to Firebase Functions using NestFire.

> Node version used in this example: `v22.11.0`

## Steps
1. Run `nest new project-name` to create a new NestJS project.
2. If you don't have a firebase project, create one at [Firebase Console](https://console.firebase.google.com/).
3. Run `firebase init` to initialize Firebase in your project. (If you don't have Firebase CLI, install it using `npm install -g firebase-tools`).
4. Firebase init answers for this example:
    - **Question:** Which Firebase features do you want to set up for this directory?
        - **Answer:** Functions: Configure a Cloud Functions directory and its files.
    - **Question:**: Please select an option:
      - **Answer:** Use an existing project. And select your Firebase project.
    - **Question:** What language would you like to use to write Cloud Functions?
        - **Answer:** JavaScript
    - **Question:** Do you want to use ESLint to catch probable bugs and enforce style?
        - **Answer:** No
    - **Question:** Do you want to install dependencies with npm now?
        - **Answer:** No
5. Delete the `functions` folder created by Firebase.
6. In the `firebase.json` file, change this:
```json
{
  //...
  "functions": {
    //...
    "source": ".",
    "runtime": "nodejs22",
    //...
  }
  //...
}
```
7. Run `npm i nestfire` to install NestFire.
8. Go into the `src` folder and create a module `nest g resource user`
  - Options: 
    - REST API
    - Yes

In my case NestJS doesn't install `@nestjs/mapped-types` but it is imported in the `update-user.dto.ts` file. So I had to install it manually.

9. In the module add the decorator
```typescript
@FirebaseHttps(EnumFirebaseFunctionVersion.V1, { memory: '256MB' })
```
```typescript
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { EnumFirebaseFunctionVersion, FirebaseHttps } from 'nestfire';

@FirebaseHttps(EnumFirebaseFunctionVersion.V1, { memory: '256MB' })
@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

```

10. Generate a firebase service account:
> **To generate a private key file for your service account:**
> 1. In the Firebase console, open Settings > [Service Accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk?fb_utm_source=chatgpt.com&_gl=1*bcauiw*_ga*NDkyNDQxNTI4LjE3NDI1MDc1ODA.*_ga_CW55HF8NVT*czE3NDc2ODU0MDUkbzUwJGcxJHQxNzQ3Njg1OTAyJGo1MSRsMCRoMCRkZS1xTjE2TUlaRU9UMG9QaFQteFFJeFhPV1o5SEhCSkcxZw..)
> 2. Click Generate New Private Key, then confirm by clicking Generate Key.
> 3. Securely store the JSON file containing the key.

11. Create a `.env` file in the root of the project and add your service account:
Add your service account json file path to the `.env` file:
```env
SERVICE_ACCOUNT_KEY_PATH="./serviceAccountKey.json"
```

12. In you package.json file add `"main": "src/index.js"`
```json
{
  //...
  "main": "src/index.js",
  //...
}
```

13. Go to the root to your project in the console and run `npm run build` to build the project.

14. Run `firebase deploy --only functions` to deploy the project to Firebase.