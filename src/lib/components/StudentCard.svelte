<script lang="ts">
	interface StudentCardProps {
		id: string;
		name: string;
		age: number;
		averageScore: number;
		activeLabel: 'Yes' | 'No';
		passedLabel: 'Yes' | 'No';
	}
	let { id, name, age, averageScore, activeLabel, passedLabel }: StudentCardProps = $props();
</script>

<div class="card">
	<h2>{name}</h2>
	<div class="card-content">
		<p>Age: <span>{age}</span></p>
		<p>Average Score: <span>{averageScore}</span></p>
		<p>Active: <span class={activeLabel === 'No' ? 'red' : ''}>{activeLabel}</span></p>
		<p>Passed: <span class={passedLabel === 'No' ? 'red' : ''}>{passedLabel}</span></p>
		<p>ID: <span>{id}</span></p>
	</div>
</div>

<style>
	h2 {
		font-size: 24px;
		color: #4b3d47;
	}

	.card {
		background-color: #fff;
		box-shadow: 0px 6px 20px 0px rgba(86, 87, 75, 0.14);
		border-radius: 6px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.card-content p {
		font-size: 20px;
		color: #6f626b;
		display: flex;
		justify-content: space-between;
	}

	.card-content span {
		font-weight: bold;
		color: #000000;
	}

	.card-content span.red {
		color: #ff4d4d;
	}
</style>
