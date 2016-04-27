# uncle-rusty

uncle-rusty (backend) is a console based application to help support staff making product installation for a customer.

uncle-rusty is built on MEAN stack. Support staff may choose to install/modify one or more products out of four initially (Mobilecommerce, Mobileticket, Mobilticketbulk, jobsite).

Once setup configuration details are entered, all the information are saved into MongoDB. Saved information in MongoDB may be used later to make the modifications in the future.

#### Products
* **Mobile Commerce**
* **Mobile Ticket**
* **Mobile Ticket Bulk**
* **Jobsite**

### Version
1.0.0

### Prerequisites

Please install node.js, mongodb to run the application and karma, mocha and chai to run unit tests. 

* [node.js] - evented I/O for the backend
* [MongoDB] - MongoDB is an open-source, document database designed for ease of development and scaling.
* [Karma.js] - A javascript test runner.
* [Mocha.js] - Mocha is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion library.
* [Chai.js] - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework..

### Installation (Prompts and Mongo)
```sh
$ cd <project-folder> : application folder. e.g. c:\uncle-rusty is the <project-folder>.
$ npm install : It installs everything required to run the application.
$ cd scripts/JadeTransform : Change directory to main entry point.
$ node run-mongo-import.js OR $ node run-mongo-import
```

### Installation (Promppts and Jade)
```sh
$ cd <project-folder> : application folder. e.g. c:\uncle-rusty is the <project-folder>.
$ npm install : It installs everything required to run the application.
$ cd scripts/JadeTransform : Change directory to main entry point.
$ node run-jade-transfrom.js OR $ node run-jade-transfrom
```

### Examples

All examples assume you have already completed installation
```
prompt: Do you wish to continue?:  (yes) y
prompt: Enter a company code that will be part of the subdomain. For example, enter cai for cai.evodevelop.com:  (newco) newco 
company code is: newco
prompt: Is this a new customer?:  (y) y
New or existing customer: y
```

```
prompt: Is this a new customer?:  (y) n
New or existing customer: n
prompt: Do you want to modify non-product related company information?:  (y) y
prompt: Is the company status active?:  (y) y
company status: y
prompt: What is the company email name?:  (Newco Corp) Newco Corp
company email name: Newco Corp
```

```
prompt: Do you want to install MobileEcommerce?:  (y) y
product installing: MobileEcommerce
prompt: Is this setup for a command series?:  (n) n
System type integra
prompt: What is their End Point (What server is the IIS (CS) or Integra Rest service located)?:  (http://localhost)  http://localhost
End point : http://localhost
```

```
prompt: Enter a relative path to the Mongo JSON input folder containing the .json files to be modified:  (./mongo_english) mongo_english
input folder: ./mongo_english
prompt: Enter a relative path to the Mongo JSON output folder where the transformed .json files will be written to.:  (./mongo_english_out)  mongo_english_out
output folder: ./mongo_english_out
prompt: Output to folder only and do not import into mongo?:  (n) 
```


   [MongoDB]: <http://www.mongodb.org/>
   [node.js]: <http://nodejs.org>
   [Karma.js]: <http://karma-runner.github.io/>
   [Mocha.js]: <http://mochajs.org/>
   [Chai.js]: <http://chaijs.com/>


### Importance of source folder

There are 2 input folders: jade_english and mongo_english.  
jade_english is the location of the jade source files that have a token that will be replaced with values from config-jade.js when run-jade-transform.js is run.
It is also possible that jade templates are in a different language.  Thus a user can change it to jade_spanish.
mongo_english is the location of the .json mongo import files that have a token that will be replaced with values from config-mongo.js when run-mongo-import.js is run.
It is also possible that .json mongo import files are in a different language.  Thus a user can change it to mongo_spanish.
config-prompt.js is a list of text prompts that are displayed to the user.  Prompt text can be modified in this file (also important if you want to change the prompts to Spanish).

### Importance of the output folder

There are 2 output folders: jade_english_out and mongo_english_out.  
jade_english_out is the location of the transformed jade source files that are outputted to this folder when run-jade-transform.js is run.
It is also possible that jade templates are in a different language.  Thus a user can change it to jade_spanish_out.
mongo_english_out is the location of the transformed .json mongo import files that are outputted to this folder when run-mongo-import is run.
It is also possible that .json mongo import files are in a different language.  Thus a user can change it to mongo_spanish_out.

### Config already rendered mongo meaning

When you execute 'node run-mongo-import.js' a prompt will ask:
"Output to folder only and do not import into mongo?";
This means that a process, will replace tokens with config values, in the source .json mongo files and output these files to the mongo_english_out folder. 
If the user enters y for output to folder only, the transformed mongo json files will not be imported into the mongo db.
If the user enters n for output to folder only, the transformed mongo json files will be outputed to the folder and also imported into the mongo db.

### Config already rendered jade meaning

When you execute "node run-jade-transform.js" it will ask the user:
'Do you want to output the transformed .jade files to the local output folder ONLY?'
This means that jade source files will be transformed and written to the output folder (by replacing token with values from the config file).
This also means that the transformed jade files will not be copied to the Amazon S3 folder.
There is also another user prompt:
'Do you want to push already (previously) rendered .jade files to the S3 Bucket?'
This means that if you say yes to the output to folder ONLY prompt:
'Do you want to output the transformed .jade files to the local output folder ONLY?'
These files are previously rendered and you can now push these previously rendered files to the S3 directory without generating new output jade files.
