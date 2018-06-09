<template>
	<div>
		<div class="row">
			<div class="col-sm-12 col-md-6">
				<!-- new pizza component -->
				<pp-new-pizza></pp-new-pizza>

			</div>
			<div class="col-sm-12 col-md-6">
				<h3>Menu:</h3>
				<table class="table table-hover">
					<thead class="thead-default">
						<th>Item</th>
						<th>Remove from menu</th>
					</thead>
					<tbody>
						<tr>
							<td>Margherita</td>
							<td><button class="btn btn-outline-danger btn-sm">x</button></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<h3>Current orders:</h3>
				<table class="table table-sm">
					<thead class="thead-default">
						<th>Item</th>
						<th>Size</th>
						<th>Qty</th>
						<th>Price</th>
					</thead>
					<tbody>
						<div class="class-number">
							<strong><em>Order Number: 1</em></strong>
							<button class="btn btn-outline-danger btn-sm">x</button>
						</div>
						<tr>
							<td>Margherita</td>
							<td>9"</td>
							<td>1</td>
							<td>6.95</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<hr>
		<div class="row">
			<div class="col-sm-12 col-lg-6">
				<pp-login></pp-login>
			</div>
		</div>
	</div>
</template>

<script>
	import NewPizza from './NewPizza'
	import Login from './Login'

	export default {
		components: {
			ppNewPizza: NewPizza,
			ppLogin: Login
		}, // components

		data() {
			return {
				name: 'Danny'
			}
		},

		beforeRouteEnter: (to, from, next) => {
			next(vm => {
				alert('Hi ' + vm.name)
			})
		}
	}
</script>