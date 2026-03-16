<script lang="ts">
	import StudentCard from '$lib/components/StudentCard.svelte';

	interface Student {
		id: string;
		name: string;
		age: number;
		averageScore: number;
		activeLabel: 'Yes' | 'No';
		passedLabel: 'Yes' | 'No';
	}

	interface StudentListProps {
		students: Student[];
	}

	const { students }: StudentListProps = $props();
</script>

<ul>
	{#if students.length === 0}
		<li class="empty">
			<p>No students found.</p>
		</li>
	{:else}
		{#each students as student (student.id)}
			<li>
				<StudentCard
					id={student.id}
					name={student.name}
					age={student.age}
					averageScore={student.averageScore}
					activeLabel={student.activeLabel}
					passedLabel={student.passedLabel}
				/>
			</li>
		{/each}
	{/if}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
		gap: 30px;
	}

	.empty {
		grid-column: 1 / -1;
		text-align: center;
		font-size: 18px;
		color: #777;
		padding: 40px;
	}

	@media (min-width: 768px) {
		ul {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (min-width: 1024px) {
		ul {
			grid-template-columns: 1fr 1fr 1fr;
		}
	}
</style>
