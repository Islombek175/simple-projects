const kun = document.querySelector('.day'),
	sana = document.querySelector('.date'),
	oy = document.querySelector('.month'),
	soat = document.querySelector('.hours'),
	daqiqa = document.querySelector('.minutes'),
	soniya = document.querySelector('.seconds')

const days = [
	'',
	'Dushanba',
	'Seshanba',
	'Chorshanba',
	'Payshanba',
	'Juma',
	'Shanba',
	'Yakshanba',
]

const months = [
	'Yanvar',
	'Fevral',
	'Mart',
	'Aprel',
	'May',
	'Iyun',
	'Iyul',
	'Avgust',
	'Sentabr',
	'Oktabr',
	'Noyabr',
	'Dekabr',
]

const setDate = () => {
	const date = new Date()

	if (date.getHours() < 10) {
		soat.innerHTML = `0${date.getHours()}:`
	} else {
		soat.innerHTML = `${date.getHours()}:`
	}

	if (date.getMinutes() < 10) {
		daqiqa.innerHTML = `0${date.getMinutes()}:`
	} else {
		daqiqa.innerHTML = `${date.getMinutes()}:`
	}

	if (date.getSeconds() < 10) {
		soniya.innerHTML = `0${date.getSeconds()}`
	} else {
		soniya.innerHTML = date.getSeconds()
	}

	kun.innerHTML = `${days[date.getDay()]},`
	sana.innerHTML = `${date.getDate()} `
	oy.innerHTML = months[date.getMonth()]
}

setInterval(setDate, 1000)
