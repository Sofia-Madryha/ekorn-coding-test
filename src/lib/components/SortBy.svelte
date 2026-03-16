<script lang="ts">
	interface SortByProps {
		sortBy: 'name' | 'score';
	}

	let { sortBy = $bindable() }: SortByProps = $props();
</script>

<div class="sort-by">
	<label for="sort">Sort by:</label>
	<select id="sort" bind:value={sortBy} aria-label="Sort students by">
		<option value="name">Name</option>
		<option value="score">Average Score</option>
	</select>
</div>

<style>
	.sort-by {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.sort-by label {
		font-weight: 500;
		white-space: nowrap;
		font-size: 14px;
		color: #6f626b;
	}

	.sort-by select {
		appearance: none;
		padding: 10px 36px 10px 14px;
		border-radius: 10px;
		border: 1px solid #ddd;
		font-size: 15px;
		background: #fff;
		cursor: pointer;

		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' fill='none' stroke='%236f626b' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		background-position: right 12px center;
		background-size: 14px;

		transition:
			border 0.2s ease,
			box-shadow 0.2s ease,
			background 0.2s ease;
	}

	.sort-by select:hover {
		border-color: #bdb6be;
	}

	.sort-by select:focus {
		outline: none;
		border-color: #3110b3;
		box-shadow: 0 0 0 3px rgba(49, 16, 179, 0.15);
	}
</style>
