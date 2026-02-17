async function createPassport() {
	return await fetch(
		`${security}://${ip}:${port}/api/passports/create/passport`,
		{
			method: 'POST',
		}
	).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось создать паспорт');
		}
		return response.json();
	});
}

async function getPassport() {
	return await fetch(`${security}://${ip}:${port}/api/passports/get/passport`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ sessionId: getCookie('idSession') }),
	}).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось получить паспорт');
		}
		return response.json();
	});
}

async function getPassports(a) {
	return await fetch(
		`${security}://${ip}:${port}/api/passports/get/passports`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ auth: a }),
		}
	).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось получить паспорта');
		}
		return response.json();
	});
}

async function updatePassport(data) {
	return await fetch(`${security}://${ip}:${port}/api/passports/update`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось сохранить паспорт');
		}
		return response;
	});
}

async function authenticate(data) {
	return await fetch(`${security}://${ip}:${port}/api/authenticate`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось пройти аутентификацию');
		}
		return response;
	});
}

async function confirm(data) {
	return await fetch(
		`${security}://${ip}:${port}/api/passports/confirm/passport`,
		{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
	).then(response => {
		if (!response.ok) {
			throw new Error('Не получилось принять аутентификацию');
		}
		return response;
	});
}
