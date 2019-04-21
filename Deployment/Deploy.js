require('dotenv').config();


var fs = require('fs');
var archiver = require('archiver-promise');
var path = require('path')

var AWS = require('aws-sdk');
AWS.config.update({
  region:process.env.AWS_DEFAULT_REGION,
//   //accessKeyId: process.env.AWS_ACCESS_KEY_ID
//   //secretAccessKey: process.env.
});


function ZipLambda (LambdaFunction) {
  var finishedzip = LambdaFunction + '.zip'
  var archive = archiver(finishedzip);
  var output = fs.createWriteStream(finishedzip);
  output.on('end', function() {
    console.log('Data has been drained');
  });

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
  archive.on('warning', function(err) {
      if (err.code === 'ENOENT') {
        // log warning
      } else {
        // throw error
        throw err;
      }
    });

  archive.on('error', function(err){
      throw err;
  });

  archive.pipe(output);

  var origpath = __dirname + '/../Lambda/' + LambdaFunction
  var zipPath = path.resolve(origpath)
  
  archive.directory(zipPath, false);
  //archive.glob(zipPath + '\\index.js',false)
  //archive.file(zipPath)
  console.log('Right before finalize' + LambdaFunction)
  return archive.finalize();
  console.log(archive.readable)
  return finishedzip  
}

function DeployLambda (LambdaFunction, ZipLoc) {
  var lambda = new AWS.Lambda();
  fs.chmod(ZipLoc, 0777, function (err) {
    if (err) { throw err; }
    // done
  })
  var x = fs.readFileSync(ZipLoc)
  var params = {
    FunctionName: 'TestLambda', /* required */
    //Qualifier: 'STRING_VALUE'
  };
  lambda.getFunction(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

  var params = {
    FunctionName: LambdaFunction, 
    //DryRun: true, 
    Publish: true, 
    //S3Bucket: "myBucket", 
    //S3Key: "myKey", 
    //S3ObjectVersion: "1", 
    ZipFile: x
   };
   lambda.updateFunctionCode(params, function(err, data) {
     if (err) console.log(err, err.stack); // an error occurred
     else     console.log(data);           // successful response
     /* Example successful response
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
   fs.unlinkSync(ZipLoc)
}

var srcPath = __dirname + '/../Lambda'
var resolvedPath = path.resolve(srcPath)
function getDirectories(path) {
  return fs.readdirSync(path).filter(function (file) {
    return fs.statSync(path+'/'+file).isDirectory();
  });
}

var AllDirs = getDirectories(resolvedPath)
for(let i = 0; i < AllDirs.length; i++){
  console.log(AllDirs[i]);
  async function waitzippromise(Dir) {
  var ZipLocation = await ZipLambda(Dir)
    ZipLocation = Dir + '.zip'
    DeployLambda(Dir,ZipLocation)
    console.log("I think I am done");
  }
  waitzippromise(AllDirs[i])
}

return

output.on('end', function() {
    console.log('Data has been drained');
  });

  // good practice to catch warnings (ie stat failures and other non-blocking errors)
archive.on('warning', function(err) {
    if (err.code === 'ENOENT') {
      // log warning
    } else {
      // throw error
      throw err;
    }
  });

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

archive.directory('Tester/', false);
archive.finalize();

console.log("end")