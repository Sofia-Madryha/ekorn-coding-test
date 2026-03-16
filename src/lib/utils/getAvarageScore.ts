import type { Scores } from '$lib/data';

export const getAverageScore = (scores: Scores): number => {
	const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
	return Math.round(totalScore / Object.values(scores).length);
};
