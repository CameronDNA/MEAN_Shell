# MEAN_Shell

## Getting Started
1. You need 2 Command Prompts open as I've seperated the Api and Client Side
2. API command prompt cd \MEAN_Shell and npm i
3. Administrator Client command prompt cd \MEAN_Shell\client and then npm install --global --production windows-build-tools --vs2015
4. On the Client Command Prompt now run npm i
4. API command prompt - npm start 
5. Client command prompt - npm start 
6. Navigate to http://localhost:4200/

## API
The API has a proxy setting so that you can refer to http://localhost:4200/api/ and it will target the Api
All API calls refer to \MEAN_Shell\api\routes\index.js