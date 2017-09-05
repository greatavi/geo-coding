# geo-coding
Dropping a pin on google map according to the names in the dataset

Technogolgies used:
* HTML5
* CSS
* Javascript
* BootStrap
* NodeJS (express module)
* MongoDB

## Installing Git
`sudo yum install git`

## Cloning from git
`git clone https://github.com/greatavi/geo-coding.git`

## Downloading node
`curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -`

## Installing node
`sudo yum -y install nodejs`

## Installing node modules
`npm install`

## Install Mongodb
`https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-red-hat/`

## Import sample test data
`mongoimport -d phydb -c physicians --type csv --file data/physician_sample_data.csv --headerline`

## Install Forever module to restart the server automatically if it dies
`sudo npm install forever -g`

## Start the server in the background
`nohup sudo forever bin/www > output.log &`


Features:
* Input first name, middle name and last name (eg: David C Pan) and press submit.
* The physician will be displayed on the map with a marker. On hove of this marker it will display the name
* On click on the marker, it will display more details about the physician