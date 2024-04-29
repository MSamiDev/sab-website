<template>
	<footer>
		<!-- component -->
		<div
			class="w-full min-h-screen flex items-center justify-center bg-black"
		>
			<div
				class="md:w-2/3 w-full px-4 text-white flex flex-col font-montserrat"
			>
				<div class="w-full text-5xl font-bold">
					<h1 class="w-full md:w-2/3">
						How can we help you. get in touch
					</h1>
				</div>
				<div class="flex mt-8 flex-col md:flex-row md:justify-between">
					<p class="w-full md:w-2/3 text-gray-400">
						To ensure that all Wikipedia content is verifiable, anyone may
						question an uncited claim. If your work has been tagged
					</p>
					<div class="w-44 pt-6 md:pt-0">
						<a
							class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center font-montserrat"
							>Contact US</a
						>
					</div>
				</div>
				<div class="flex flex-col">
					<div class="flex mt-24 mb-12 flex-row justify-between">
						<div
							class="font-bold text-3xl font-anton tracking-wider mb-1 text-white uppercase drop-shadow-xl"
						>
							SAHAR AL BARKAAT
						</div>
						<div class="flex mx-5">
							<a
								class="hidden md:block cursor-pointer text-gray-300 hover:text-white uppercase mx-5"
								>Services</a
							>
							<a
								class="hidden md:block cursor-pointer text-gray-300 hover:text-white uppercase mx-5"
								>About</a
							>
							<a
								class="hidden md:block cursor-pointer text-gray-300 hover:text-white uppercase mx-5"
								>Why us</a
							>
							<a
								class="hidden md:block cursor-pointer text-gray-300 hover:text-white uppercase mx-5"
								>Contact</a
							>
						</div>

						<div
							class="flex flex-row space-x-8 items-center justify-between"
						>
							<a href="https://wa.me/+971566541656">
								<Icon name="bi:whatsapp" color="white" />
							</a>
							<a
								href="https://www.facebook.com/profile.php?id=61558229352729&mibextid=ZbWKwL"
							>
								<Icon name="bi:facebook" color="white" />
							</a>

							<a
								href="https://www.instagram.com/saharalbarakaat?utm_source=qr&igsh=dHA1dWM5OWdsdDE0"
							>
								<Icon name="bi:instagram" color="white" />
							</a>
							<a
								href="https://www.linkedin.com/company/sahar-al-barakaat/"
							>
								<Icon name="bi:linkedin" color="white" />
							</a>
							<a
								href="https://youtube.com/@SaharAlBarakaat?si=BV2yOpTnyZgbQXA4"
							>
								<Icon name="bi:youtube" color="white" />
							</a>
						</div>
					</div>
					<hr class="border-gray-600" />
					<p class="w-full text-center my-12 text-gray-600">
						Copyright © {{ new Date().getFullYear() }} SAB Foodstuff. All
						rights reserved.
					</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup></script>

<style></style>
