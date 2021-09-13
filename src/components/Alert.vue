<template>
	<div class="container">
		<div class="alert" :class="'alert-' + type">
			<span v-if="type === 'danger'">
				<i class="bi bi-exclamation-circle"></i>
			</span>
			<span v-else>
				<i class="bi bi-info-circle"></i>
			</span>
			{{ text }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Alert',
	props: {
		text: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'default',
		},
	},
}
</script>
