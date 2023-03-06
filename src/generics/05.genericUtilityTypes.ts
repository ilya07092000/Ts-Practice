interface CourseGoal {
	title: string;
	description: string;
	completeUntil: Date;
}

// Partial makes all props optional
// Readonly makes all props readonly
function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	const courseGoal: Partial<CourseGoal> = {};

	courseGoal.title = title;
	courseGoal.description = description;
	courseGoal.completeUntil = date;

	return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Ilya', 'Anna'];
names.push('Some Name'); // does not work
names.pop(); // does not work

export {};
