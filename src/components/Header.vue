<template>
	<header class="row">
		<nav class="navbar navbar-expand-md navbar-light">
			<router-link to="/"><a class="navbar-brand">PIZZA PLANET</a></router-link>
			<ul class="nabar-nav">
				<li class="nav-item">
					<router-link to="/"><a class="nav-link">home</a></router-link>
				</li>
				<li class="nav-item">
					<router-link to="/menu"><a class="nav-link">menu</a></router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style>
	header {
		margin-bottom: 20px;
	}

	.navbar-brand {
		font-size: 1.5em;
	}
</style>