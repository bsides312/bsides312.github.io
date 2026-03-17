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
			error =
				attempts >= 3
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

				<button class="login-btn" on:click={handleLogin}> AUTHENTICATE </button>
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
			<span class="session-id"
				>SID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</span
			>
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
					<p>
						<span class="log-time">[2026-05-09 18:30]</span> Certificate renewed — expires 2027-05-09
					</p>
					<p><span class="log-time">[2026-05-08 12:00]</span> Scheduled maintenance complete</p>
				</div>
			</div>
		</div>
	</div>
{/if}
