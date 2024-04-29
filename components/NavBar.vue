<template>
	<header class="flex flex-col lg:flex-row justify-between items-center my-3">
		<div class="flex w-full lg:w-auto items-center justify-between mx-7">
			<NuxtLink href="/" class="flex justify-center items-center">
				<img src="~/assets/images/logos/SABonly_Trans.png" class="w-24" />
				<img src="~/assets/images/logos/SABname_Trans.png" class="w-40" />
			</NuxtLink>
			<div class="block lg:hidden">
				<button
					@click="open = !open"
					class="text-gray-800 h-16 w-16 bg-transparent border-none transition-all opa"
				>
					<svg
						fill="currentColor"
						class="w-7 h-7"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path
							:class="open ? 'opacity-100' : 'opacity-0'"
							class="transition-all"
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
						></path>
						<path
							:class="open ? 'opacity-0' : 'opacity-100'"
							class="transition-all"
							fill-rule="evenodd"
							d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
						></path>
					</svg>
				</button>
			</div>
		</div>
		<div class="flex flex-row space-x-8 items-center justify-between">
				<a href="https://wa.me/+971566541656">
					<Icon name="bi:whatsapp" color="#920204" />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61558229352729&mibextid=ZbWKwL"
				>
					<Icon name="bi:facebook" color="#920204" />
				</a>

				<a
					href="https://www.instagram.com/saharalbarakaat?utm_source=qr&igsh=dHA1dWM5OWdsdDE0"
				>
					<Icon name="bi:instagram" color="#920204" />
				</a>
				<a href="https://www.linkedin.com/company/sahar-al-barakaat/">
					<Icon name="bi:linkedin" color="#920204" />
				</a>
				<a href="https://youtube.com/@SaharAlBarakaat?si=BV2yOpTnyZgbQXA4">
					<Icon name="bi:youtube" color="#920204" />
				</a>
			</div>
		<nav
			:class="open ? 'block' : 'hidden'"
			class="w-full lg:w-auto mt-2 lg:flex lg:mt-0 mx-7 transition-all"
		>
			<ul class="flex flex-col lg:flex-row lg:gap-3 list-none">
				<li v-for="item of menuitems">
					<NuxtLink
						:href="item.path"
						class="flex lg:px-3 py-2 text-gray-600 hover:text-gray-900 no-underline font-montserrat"
					>
						{{ item.title }}
					</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts" setup>
const menuitems = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Products",
		path: "/",
	},
	{
		title: "About",
		path: "/",
	},
	{
		title: "Contact",
		path: "/",
	},
];

import { ref } from "vue";

const open = ref(false);
</script>

<style></style>
