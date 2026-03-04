<script lang="ts">
	// Access control — encoded credentials
	const _u = atob('YnNpZGVzMzEy');
	const _k = atob('bjB0LWEtZmxhZw==');

	// Encrypted asset — XOR with repeating key
	const _payload = '7d 01 71 5b 05 40 54 02';

	let username = '';
	let password = '';
	let authenticated = false;
	let error = '';
	let attempts = 0;

	function handleLogin() {
		attempts++;
		if (username === _u && password === _k) {
			authenticated = true;
			error = '';
		} else {
			error = attempts >= 3
				? 'Access Denied — Maximum attempts reached. Session logged.'
				: 'Access Denied — Invalid Credentials';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') handleLogin();
	}
</script>

<svelte:head>
	<title>BSides312 — Admin Portal</title>
</svelte:head>

{#if !authenticated}
	<div class="login-container">
		<div class="login-box">
			<div class="login-header">
				<div class="lock-icon">🔒</div>
				<h1>BSides312 Admin</h1>
				<p class="subtitle">Access Restricted — Authorized Personnel Only</p>
			</div>

			<div class="login-form">
				<div class="form-group">
					<label for="username">
						<i class="field-icon">▸</i> Username
					</label>
					<input
						id="username"
						type="text"
						bind:value={username}
						on:keydown={handleKeydown}
						placeholder="Enter username"
						autocomplete="off"
					/>
				</div>

				<div class="form-group">
					<label for="password">
						<i class="field-icon">▸</i> Password
					</label>
					<input
						id="password"
						type="password"
						bind:value={password}
						on:keydown={handleKeydown}
						placeholder="Enter password"
						autocomplete="off"
					/>
				</div>

				{#if error}
					<div class="error-msg">{error}</div>
				{/if}

				<button class="login-btn" on:click={handleLogin}>
					AUTHENTICATE
				</button>
			</div>

			<div class="login-footer">
				<p>System Version: 3.12.0</p>
				<p>Last maintenance: 2026-02-01</p>
			</div>
		</div>
	</div>
{:else}
	<div class="dashboard">
		<div class="dash-header">
			<span class="status-dot"></span>
			<span>SECURE SESSION ACTIVE</span>
			<span class="session-id">SID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</span>
		</div>

		<div class="dash-content">
			<div class="sys-info">
				<h2>System Status</h2>
				<div class="info-grid">
					<div class="info-item">
						<span class="info-label">Node</span>
						<span class="info-value">chi-prod-01</span>
					</div>
					<div class="info-item">
						<span class="info-label">Uptime</span>
						<span class="info-value">127d 14h 33m</span>
					</div>
					<div class="info-item">
						<span class="info-label">Last Login</span>
						<span class="info-value">2026-05-10 08:42 CST</span>
					</div>
					<div class="info-item">
						<span class="info-label">Status</span>
						<span class="info-value nominal">Nominal</span>
					</div>
				</div>
			</div>

			<div class="transmission">
				<div class="transmission-header">
					<span class="blink">●</span> CLASSIFIED — CLEARANCE GRANTED
				</div>
				<div class="transmission-body">
					<pre>========================================
ENCRYPTED ASSET CODE:
{_payload}

CIPHER: XOR
KEY: Considering all the BSides,
     what makes this one unique?
========================================</pre>
				</div>
			</div>

			<div class="sys-log">
				<h3>Recent Activity</h3>
				<div class="log-entries">
					<p><span class="log-time">[2026-05-10 08:42]</span> Admin login from 10.312.0.1</p>
					<p><span class="log-time">[2026-05-09 23:15]</span> Backup completed — 0 errors</p>
					<p><span class="log-time">[2026-05-09 18:30]</span> Certificate renewed — expires 2027-05-09</p>
					<p><span class="log-time">[2026-05-08 12:00]</span> Scheduled maintenance complete</p>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Login Page */
	.login-container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 20px;
		background: radial-gradient(ellipse at center, #0d1117 0%, #010409 100%);
	}

	.login-box {
		width: 100%;
		max-width: 420px;
		background: rgba(13, 17, 23, 0.95);
		border: 1px solid #30363d;
		border-radius: 12px;
		overflow: hidden;
	}

	.login-header {
		text-align: center;
		padding: 40px 30px 20px;
		border-bottom: 1px solid #30363d;
	}

	.lock-icon {
		font-size: 2.5rem;
		margin-bottom: 15px;
	}

	.login-header h1 {
		font-family: 'Courier New', monospace;
		font-size: 1.4rem;
		color: #5dbdfc;
		margin-bottom: 8px;
	}

	.subtitle {
		color: #8b949e;
		font-size: 0.85rem;
		margin: 0;
	}

	.login-form {
		padding: 30px;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-group label {
		display: block;
		color: #8b949e;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		margin-bottom: 8px;
	}

	.field-icon {
		color: #5dbdfc;
		font-style: normal;
	}

	.form-group input {
		width: 100%;
		padding: 12px 15px;
		background: #010409;
		border: 1px solid #30363d;
		border-radius: 6px;
		color: #c9d1d9;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		transition: border-color 0.2s;
		box-sizing: border-box;
	}

	.form-group input:focus {
		outline: none;
		border-color: #5dbdfc;
		box-shadow: 0 0 0 2px rgba(93, 189, 252, 0.15);
	}

	.form-group input::placeholder {
		color: #484f58;
	}

	.error-msg {
		background: rgba(248, 81, 73, 0.1);
		border: 1px solid rgba(248, 81, 73, 0.4);
		color: #f85149;
		padding: 10px 15px;
		border-radius: 6px;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		margin-bottom: 20px;
	}

	.login-btn {
		width: 100%;
		padding: 12px;
		background: transparent;
		border: 2px solid #5dbdfc;
		color: #5dbdfc;
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		font-weight: bold;
		letter-spacing: 2px;
		border-radius: 6px;
		cursor: pointer;
		transition: all 0.2s;
	}

	.login-btn:hover {
		background: rgba(93, 189, 252, 0.1);
		transform: translateY(-1px);
	}

	.login-btn:active {
		background: #5dbdfc;
		color: #0d1117;
		transform: translateY(0);
	}

	.login-footer {
		padding: 15px 30px;
		border-top: 1px solid #30363d;
		text-align: center;
	}

	.login-footer p {
		color: #484f58;
		font-family: 'Courier New', monospace;
		font-size: 0.7rem;
		margin: 3px 0;
	}

	/* Dashboard */
	.dashboard {
		max-width: 900px;
		margin: 100px auto 60px;
		padding: 0 20px;
	}

	.dash-header {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 15px 20px;
		background: rgba(13, 17, 23, 0.95);
		border: 1px solid #238636;
		border-radius: 8px;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		color: #3fb950;
		margin-bottom: 30px;
	}

	.status-dot {
		width: 8px;
		height: 8px;
		background: #3fb950;
		border-radius: 50%;
		animation: pulse 2s ease-in-out infinite;
	}

	.session-id {
		margin-left: auto;
		color: #484f58;
	}

	.sys-info {
		background: rgba(13, 17, 23, 0.95);
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 25px;
		margin-bottom: 25px;
	}

	.sys-info h2 {
		font-family: 'Courier New', monospace;
		font-size: 1.1rem;
		color: #8b949e;
		margin-bottom: 20px;
		padding-bottom: 10px;
		border-bottom: 1px solid #30363d;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 15px;
	}

	.info-item {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.info-label {
		color: #484f58;
		font-family: 'Courier New', monospace;
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.info-value {
		color: #c9d1d9;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
	}

	.info-value.nominal {
		color: #3fb950;
	}

	.transmission {
		background: rgba(13, 17, 23, 0.95);
		border: 2px solid #bf40bf;
		border-radius: 8px;
		overflow: hidden;
		margin-bottom: 25px;
	}

	.transmission-header {
		background: rgba(191, 64, 191, 0.15);
		padding: 12px 20px;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		color: #bf40bf;
		font-weight: bold;
		border-bottom: 1px solid rgba(191, 64, 191, 0.3);
	}

	.blink {
		animation: blink 1s step-end infinite;
	}

	.transmission-body {
		padding: 20px;
	}

	.transmission-body pre {
		color: #e6db74;
		font-family: 'Courier New', monospace;
		font-size: 0.85rem;
		line-height: 1.6;
		margin: 0;
		white-space: pre-wrap;
		word-break: break-all;
	}

	.sys-log {
		background: rgba(13, 17, 23, 0.95);
		border: 1px solid #30363d;
		border-radius: 8px;
		padding: 25px;
	}

	.sys-log h3 {
		font-family: 'Courier New', monospace;
		font-size: 0.95rem;
		color: #8b949e;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid #30363d;
	}

	.log-entries p {
		font-family: 'Courier New', monospace;
		font-size: 0.8rem;
		color: #8b949e;
		margin: 6px 0;
		line-height: 1.5;
	}

	.log-time {
		color: #484f58;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.4; }
	}

	@keyframes blink {
		0%, 100% { opacity: 1; }
		50% { opacity: 0; }
	}

	@media (max-width: 576px) {
		.login-header {
			padding: 30px 20px 15px;
		}

		.login-form {
			padding: 20px;
		}

		.dash-header {
			flex-wrap: wrap;
			font-size: 0.75rem;
		}

		.session-id {
			margin-left: 0;
			width: 100%;
		}
	}
</style>
