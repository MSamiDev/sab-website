<template>
	<section class="container mx-auto pb-12 px-4">
		<div
			class=" blur-none rounded-3xl z-0 herobackground"
		>
			<!-- <div
      class="bg-center bg-cover bg-no-repeat blur-none rounded-3xl z-0 bg-design-image lg:bg-design-image-large"
    > -->
			<div class>
				<div class="lg:px-12 md:py-36 pb-6 pt-72 px-6 relative rounded-3xl">
					<div
						class="-mx-4 flex flex-wrap items-center mt-24 space-y-6 lg:space-y-0"
					>
						<div class="px-4 w-full md:w-8/12 xl:w-6/12">
							<h2
								class="font-bold text-5xl font-anton tracking-wider	 mb-1 text-white uppercase drop-shadow-xl "
							>
								Sahar Al Barkaat
							</h2>
							<h1 class="capitalize leading-tight mb-2 mt-8 text-white text-2xl drop-shadow-2xl font-montserrat font-semibold ">
								Expand your horizons with us!
							</h1>
							<p class="font-normal mb-6 text-white  drop-shadow-2xl font-montserrat text-xl">
								Your gateway to premium quality food products and unparalleled service excellence.
							</p>
							<NuxtLink 
							
							class=" bg-white rounded-full my-6 px-7 py-3 "
							to="/">

							<div class="inline-block ml-1 p-1.5 text-lg font-montserrat text-black ">
									Contact Now
								</div>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>

</script>

<style>
.herobackground {
	background: url("~/assets/images/hero.webp");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
