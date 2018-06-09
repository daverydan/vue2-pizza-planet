<template>
	<footer class="row">
		<nav class="navbar navbar-toggleable-md navbar-light">
			<ul class="nabar-nav">
				<router-link to="/" tag="li"><a class="nav-link">home</a></router-link>
				<router-link to="/about" tag="li"><a class="nav-link">about</a></router-link>
				<router-link to="/admin" tag="li"><a class="nav-link">admin</a></router-link>
			</ul>
		</nav>
	</footer>
</template>

<style>
	#home {
		background: url('../../src/assets/pizza.jpg');
		height: 800px;
		padding: 10%;
	}

	h1, h2 {
		margin: 6%;
	}

	.background {
		background: #eee;
		opacity: 0.8;
		max-width: 60%;
		margin: 0 auto;
		padding: 20px 0;
	}
</style>