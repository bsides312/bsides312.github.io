<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="card mb-3">
	<div class="card-body when-where-body">
		<h3 class="card-title">
			<i class="bi bi-geo-alt-fill text-danger me-2"></i>When and Where
		</h3>
		<div class="when-where-top">
			<div class="when-where-datetime">
				<p class="mb-1"><strong>Date:</strong> June 13, 2027</p>
				<p class="mb-1"><strong>Doors:</strong> 8am</p>
				<p class="mb-1"><strong>Talks:</strong> 9am&ndash;6PM</p>
				<p class="mb-0"><strong>After-Party:</strong> 6PM&ndash;8PM</p>
			</div>
			<div class="when-where-address">
				<p class="mb-1">Irish American Heritage Center</p>
				<p class="mb-1">4626 N Knox Ave, Chicago, IL</p>
				<p class="mb-0"><small>TONS of parking!</small></p>
			</div>
		</div>
		<iframe
			src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8!2d-87.7425!3d41.9645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fcc7f9c0f0f0f%3A0x0!2s4626%20N%20Knox%20Ave%2C%20Chicago%2C%20IL!5e0!3m2!1sen!2sus!4v1234567890"
			width="100%"
			height="200"
			class="map-iframe"
			allowfullscreen
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			title="Irish American Heritage Center Location"
		></iframe>
		<div class="when-where-btns">
			<a
				href="https://maps.app.goo.gl/RuApEvazVQGJAXHi7"
				target="_blank"
				rel="noopener"
				class="btn-primary"
			>
				<i class="bi bi-box-arrow-up-right"></i>Open in Google Maps
			</a>
			<a href="{base}/about#faq" class="btn-primary">
				<i class="bi bi-question-circle-fill"></i>FAQs
			</a>
		</div>
	</div>
</div>
