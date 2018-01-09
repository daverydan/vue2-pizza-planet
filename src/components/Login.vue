<template>
	<div class="row">
		<form>
			<div class="form-group">
				<label>Email</label>
				<input type="email" class="form-control" id="email" placeholder="Enter email">
			</div>

			<div class="form-group">
				<label>Password</label>
				<input type="password" class="form-control" id="password" placeholder="Enter password">
			</div>

			<button class="btn btn-primary" 
							type="button"
							@click.prevent="signIn">Sign in</button>
			<button class="btn btn-danger"
							type="button"
							@click.prevent="signOut">Log out</button>
		</form>
	</div>
</template>

<script>
	import Firebase from 'firebase'

	export default {
		methods: {
			signIn () {
				var email = document.getElementById('email').value;
				var password = document.getElementById('password').value;

				Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
					var errorCode = error.code;
					var errorMessage = error.message;

					if (errorCode === 'auth/wrong-password') {
						alert('Wrong password')
					} else {
						alert(errorMessage)
					}
				});
			}, // signIn
			signOut () {
				Firebase.auth().signOut().then(function() {
					alert('logged out')
				}).catch(function(error) {
					alert(error)
				});
			} // signOut
		} // methods
	}
</script>