<script lang="ts">
	interface IsActiveProps {
		isActive: boolean;
	}

	let { isActive = $bindable() }: IsActiveProps = $props();
</script>

<div class="toggle-wrapper">
	<p>Show active only</p>
	<label class="toggle">
		<input type="checkbox" id="btnToggle" name="btnToggle" bind:checked={isActive} />
		<span class="slider"></span>
	</label>
</div>

<style>
	.toggle-wrapper {
		display: flex;
		flex-direction: column;
		align-items: end;
		font-size: 14px;
		color: #6f626b;
	}
	.toggle {
		position: relative;
		display: flex;
		width: 32px;
		height: 20px;
	}

	.toggle input {
		display: none;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #333;
		transition: 0.4s;
		border-radius: 10px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 2px;
		bottom: 3px;
		background-color: #fff;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #057b05;
	}

	input:checked + .slider:before {
		transform: translateX(14px);
	}
</style>
