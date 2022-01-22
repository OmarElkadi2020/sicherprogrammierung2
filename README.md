# psta-wp2-omar

## Author Name:

    Elkadi, Omar.

## Matrikel Num :

    711750/755264.

## Proj Name:

    DIT Health Observer.

## Link zum MyGit-Repository
	- https://mygit.th-deg.de/oe01264/PStA-WP2-OmarElkadi1.git

## Description of the planed Impelementation of Prof. Garmann requirements:

        - the Patient fill a form with his name Matrikel/ID number **adress**,sickness and the expected days of absence, he can also upload a files(sick notes) as a evidence.
        - the Backend saves the all patient infos in a MongoDB
        - The Frontend can retriev the data of all patients and enabele the user to filter it.
        - the Frontend can shows a statistics graph of the new Covid-19 patients in Deggendorf and Bayern from the Start of panadimie til the currunt day.
		* the Data would be Provided from the Robert-Koch-Institute API
        - the Frontend get a dynamic data from an API collect the data of a Accelometer sensor in a smartphone client app called 'Data Collector: share sensors data'


## Project setup

```
npm install
```

### Compiles and hot-reloads for development

	```
	- run Frontend:
		- npm run serve
	- run Backend:
		- cd ./server
		- npm run start
	- send the accelometer telemtry from your Android phone
		- run the Data Collector: share sensors data on your phone and share the accelometer telemtry; **more about that in the first slide in the Power pint file**
	```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
