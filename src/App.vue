<template>
  <div id="app">
		<div class="container">
			<pp-header></pp-header>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>

		<div class="container">
			<div class="row mt-5">
				<div class="col-sm-12 col-md-4">
					<router-view name="ordering-guide"></router-view>
				</div>

				<div class="col-sm-12 col-md-4">
					<router-view name="delivery"></router-view>
				</div>

				<div class="col-sm-12 col-md-4">
					<router-view name="history"></router-view>
				</div>
			</div>
		</div>

		<div class="container">
			<pp-footer></pp-footer>
		</div>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	components: {
		ppHeader: Header,
		ppFooter: Footer,
	}
}
</script>

<style>

</style>
