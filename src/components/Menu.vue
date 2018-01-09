<template>
	<div class="row">
		<div class="col-sm-12 col-md-6">
			<table class="table table-hover">
				<thead class="thead-default">
					<tr>
						<th>Size</th>
						<th>Price</th>
						<th>Add to cart</th>
					</tr>
				</thead>
				<tbody v-for="item in getMenuItems">
					<tr>
						<td><strong>{{ item.name }}</strong></td>
					</tr>
					<tr v-for="option in item.options">
						<td>{{ option.size }}</td>
						<td>{{ option.price }}</td>
						<td>
							<button class="btn btn-sm btn-outline-success"
											type="button"
											@click="addToBasket(item, option)">+</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		
		<!-- Shopping Basket -->
		<div class="col-sm-12 col-md-6">
			<div v-if="basket.length > 0">
				<table class="table">
					<thead class="thead-default">
						<tr>
							<th>Qty</th>
							<th>Item</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody v-for="item in basket">
						<tr>
							<td>
								<button class="btn btn-sm" 
												type="button" 
												@click="decreaseQty(item)">-</button>
								<span>{{ item.qty }}-</span>
								<button class="btn btn-sm" 
												type="button"
												@click="increaseQty(item)">+</button>
							</td>
							<td>{{ item.name }} {{ item.size }}</td>
							<td>{{ item.price * item.qty }}</td>
						</tr>
					</tbody>
				</table>
				<p>Order total: </p>
				<button class="btn btn-success btn-block">Place Order</button>
			</div>
			<div v-else>
				{{ basketText }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				basket: [],
				basketText: 'Your cart is empty',
				getMenuItems: {
					1: {
					  'name': 'Margherita',
					  'description': 'A delicious tomato based pizza topped with mozzarella',
					  'options': [{
					    'size': 9,
					    'price': 6.95
					  }, {
					    'size': 12,
					    'price': 10.95
					  }]
					},
					2: {
					  'name': 'Pepperoni',
					  'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					},
					3: {
					  'name': 'Ham and Pineapple',
					  'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
					  'options': [{
					    'size': 9,
					    'price': 7.95
					  }, {
					    'size': 12,
					    'price': 12.95
					  }]
					}
				} // getMenuItems
			}
		}, // data

		methods: {
			addToBasket (item, option) {
				this.basket.push({
					name: item.name,
					price: option.price,
					size: option.size,
					qty: 1
				})
			}, // addToBasket

			removeFromBasket (item) {
				this.basket.splice(this.basket.indexOf(item), 1)
			}, // removeFromBasket
			
			increaseQty (item) {
				item.qty++
			}, // increaseQty
			
			decreaseQty (item) {
				item.qty--
				if (item.qty < 1) { this.removeFromBasket(item) }
			} // increaseQty
		} // methods
	}
</script>