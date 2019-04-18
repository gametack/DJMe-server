require('dotenv').config();
var file_system = require('fs');

var AWS = require('aws-sdk');
var output = null
AWS.config.update({
    region:'us-east-1',
    //accessKeyId: process.env.AWS_ACCESS_KEY_ID
    //secretAccessKey: process.env.
});

var lambda = new AWS.Lambda();
var x = file_system.readFileSync('D:\\PersonalGitHub\\DJMe-server\\Lambda\\TestLambda.zip')
var params = {
    FunctionName: 'TestLambda', /* required */
    //Qualifier: 'STRING_VALUE'
  };
  lambda.getFunction(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

  var params = {
    FunctionName: "TestLambda", 
    DryRun: false, 
    Publish: true, 
    //S3Bucket: "myBucket", 
    //S3Key: "myKey", 
    //S3ObjectVersion: "1", 
    ZipFile: x
   };
   lambda.updateFunctionCode(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     /*
     data = {
      CodeSha256: "LQT+0DHxxxxcfwLyQjzoEFKZtdqQjHXanlSdfXBlEW0VA=", 
      CodeSize: 123, 
      Description: "", 
      FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:myFunction", 
      FunctionName: "myFunction", 
      Handler: "index.handler", 
      LastModified: "2016-11-21T19:49:20.006+0000", 
      MemorySize: 128, 
      Role: "arn:aws:iam::123456789012:role/lambda_basic_execution", 
      Runtime: "python2.7", 
      Timeout: 123, 
      Version: "1", 
      VpcConfig: {
      }
     }
     */
   });

/**
var params = {
    FunctionVersion: 'ALL',
    //Marker: 'marker=0',
    //MasterRegion: 'ALL',
    MaxItems: '10'
  };
  lambda.listFunctions(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
        output = data
        console.log(data);           // successful response
    }    
  });
console.log("Finished")
console.log("after")

*/