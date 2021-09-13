<template>
	<div class="container">
		<img :src="spinner" alt="Loading..." class="spinner-img" />
	</div>
</template>

<script>
import spinner from '../assets/spinner.svg'

export default {
	name: 'Spinner',
	setup() {
		return { spinner }
	},
}
</script>

<style scoped>
.spinner-img {
	width: 80px;
	display: block;
	margin: auto;
}
</style>
