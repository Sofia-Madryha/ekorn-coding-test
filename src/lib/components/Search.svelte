<script lang="ts">
	interface SearchProps {
		searchValue: string;
	}

	let { searchValue = $bindable() }: SearchProps = $props();
</script>

<label class="search">
	<input
		type="text"
		placeholder="Search by name..."
		name="search students"
		autocomplete="off"
		bind:value={searchValue}
	/>
</label>

<style>
	.search {
		width: 100%;
	}
	input {
		width: 100%;
		padding: 10px 14px;
		border-radius: 8px;
		border: 1px solid #ddd;
		font-size: 16px;
		transition: border 0.2s ease;
	}

	input:focus {
		outline: none;
		border-color: #3110b3;
	}

	@media (min-width: 768px) {
		.search {
			max-width: 300px;
		}
	}
</style>
