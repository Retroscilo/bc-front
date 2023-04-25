import React, { useState } from "react";
import { TextField, FormControl, FormControlLabel, Checkbox, Card, Button } from "@mui/material";
// @ts-ignore
import style from "./style.module.css";
import action from "./action";

export default function LoginForm() {
	const [form, setForm] = useState({
		email: "",
		password: "",
		CGU: false,
	});

	function onChange(e) {
		setForm({ ...form, [e.target.id]: e.target.value });
	}

	async function onSubmit() {
		const res = await action(form);
	}

	return (
		<Card sx={{ maxWidth: 500, maxHeight: 300, p: 5 }}>
			<FormControl className={style.form}>
				<TextField onChange={onChange} id="email" label="Email" variant="outlined" margin="normal" fullWidth />
				<TextField onChange={onChange} id="password" label="Mot de passe" variant="outlined" margin="normal" fullWidth />
				<FormControlLabel sx={{ width: "100%" }} control={<Checkbox />} label="Authorisez-vous bio-coop à ..." />
				<Button variant="contained" onClick={onSubmit}>
					Connection
				</Button>
			</FormControl>
		</Card>
	);
}
