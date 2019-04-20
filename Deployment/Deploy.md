## Disclaimer

I have no idea what I am doing at all with regards to Javascript so this is not well written code or anthing but it should work. So far I have only tested on my machine

## Purpose
Quickly update code to previously created Lambda functions stored without our repository.

## Steps to configure

1. Create your own .env file
   1. Copy .envExample and rename to .env in the root of the repository (This file will be ignored for  Git)
   2. Go to IAM and select users on side pannel and the user you want to act as when making deployment (This is for AWS-SDK node module)
   3. Navigate to Security credentials and create access key and store the Access Key Id and Secret key in the correct locations
2. Perform npm install on the root of the DJMe-Server repo to get all Necessary packages. (Note each lambda functions may contain own npm init steps)
   1. node_modules directory is also properly git ignored I believe

## prerequisites

1. Create lambda function using Management console and properly link to APIGateway as well as other commands
2. Create directory within the Lambda folder with a name that exactly matches the new function created

## Deployment

1. Run Deploy.js (I just use f5 in vscode)
   1. Zips all contents of each sub folder to your local directory 
   2. Makes swk call to update lambda function code 
   3. removes zip files
