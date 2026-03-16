<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	import type { StudentDataItem } from '$lib/data';
	import { Search, SortBy, IsActive, StudentsList } from '$lib/components';
	import { calculateAge, getAverageScore } from '$lib/utils';

	interface Student {
		id: string;
		name: string;
		age: number;
		averageScore: number;
		activeLabel: 'Yes' | 'No';
		passedLabel: 'Yes' | 'No';
	}

	// Fetch from GET /api/students, transform the response into the Student type, and assign to students
	let students = $state<Student[]>([]);
	let searchValue = $state('');
	let sortBy = $state<'name' | 'score'>('name');
	let isActive = $state(false);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		// TODO: fetch from /api/students, parse the response as StudentDataItem[], transform into students
		try {
			const response = await fetch('/api/students');

			const data = await response.json();
			students = data.map((item: StudentDataItem) => {
				const avarageScore = getAverageScore(item.scores);
				return {
					id: item.id,
					name: item.firstName + ' ' + item.lastName,
					age: calculateAge(item.birthdate),
					averageScore: avarageScore,
					activeLabel: item.isActive ? 'Yes' : 'No',
					passedLabel: avarageScore >= 60 ? 'Yes' : 'No'
				};
			});
		} catch (e) {
			error = 'Something went wrong while fetching the students';
		} finally {
			loading = false;
		}
	});

	const filteredStudents = $derived.by(() => {
		const query = searchValue.trim().toLowerCase();

		let result = [...students];

		if (query) {
			result = result.filter((student) => student.name.toLowerCase().includes(query));
		}

		if (isActive) {
			result = result.filter((student) => student.activeLabel === 'Yes');
		}

		if (sortBy === 'name') {
			result = [...result].sort((a, b) => a.name.localeCompare(b.name));
		}

		if (sortBy === 'score') {
			result = [...result].sort((a, b) => b.averageScore - a.averageScore);
		}

		return result;
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main>
	{#if loading}
		<div class="status loading">
			<div class="spinner"></div>
			<p>Loading students...</p>
		</div>
	{:else if error}
		<div class="status error">
			<p>⚠ {error}</p>
		</div>
	{:else}
		<div class="wrapper">
			<div class="header">
				<h1>Students</h1>

				<Search bind:searchValue />
			</div>
			<div class="controls">
				<SortBy bind:sortBy />
				<IsActive bind:isActive />
			</div>
			<StudentsList students={filteredStudents} />
		</div>
	{/if}
</main>

<style>
	main {
		padding: 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.status {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 12px;
		padding: 40px 50px;
		border-radius: 14px;
		font-size: 18px;
		font-weight: 500;
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
	}

	.loading {
		background: #f7f7fb;
		color: #4b3d47;
	}

	.spinner {
		width: 36px;
		height: 36px;
		border: 4px solid #e3e3e3;
		border-top: 4px solid #3110b3;
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	.error {
		background: #fff0f0;
		color: #c0392b;
		border: 1px solid #f3c2c2;
	}

	.wrapper {
		max-width: 1024px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.header {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 10px;
	}

	.controls {
		display: flex;
		justify-content: end;
		flex-wrap: wrap;
		gap: 10px;
	}

	h1 {
		font-size: 32px;
		color: #4b3d47;
	}

	@media (min-width: 420px) {
		.controls {
			justify-content: space-between;
		}
	}

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
