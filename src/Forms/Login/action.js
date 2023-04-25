export default async function LoginAction(form) {
	try {
		const res = await fetch("http://localhost:3000/v1/auth/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(form),
		});
		if (res.status === 200) window.location.replace(window.location.origin + "/");
	} catch (e) {
		console.log(e);
	}
}
