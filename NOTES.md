# NOTES

## Thought Process

The application was designed to keep responsibilities clearly separated between components.
The main page handles data fetching, state management, and transforming the API response, while UI components focus on presentation and user interaction.

The student data from the API is transformed into a simplified `Student` interface that contains only the fields needed for the UI (name, age, average score, active status, etc.).

Filtering, sorting, and searching are implemented using Svelte's reactive `$derived` state so that the UI updates automatically whenever the user changes the search input, sorting option, or filter toggle.

## Assumptions

- The `/api/students` endpoint returns a list of `StudentDataItem`.
- Each item includes `firstName`, `lastName`, `birthdate`, `scores`, and `isActive`.
- The average score is calculated from the `scores` array.
- A student is considered **passed** if their average score is **60 or higher**.
- Student names are displayed as a combination of `firstName` and `lastName`.

## Additional Features Implemented

Although not strictly required, several enhancements were implemented to improve usability and overall polish.

### Loading State

While the API request is in progress, a loading indicator with a spinner is displayed to inform the user that data is being fetched.

### Error Handling

If the request to `/api/students` fails, the UI displays a user-friendly error message instead of leaving the page blank.

### Search

A search input allows users to filter students by name.
The search is case-insensitive and updates results in real time.

### Sorting

Students can be sorted using a dropdown control:

- **Name (alphabetical)**
- **Average score (descending)**

### Filter (Active Students)

A toggle control allows users to filter the list and show only **active students**.

### Responsive Layout

Student cards are displayed in a responsive grid layout:

- 1 column on small screens
- up to 3 columns on larger screens

### Component Structure

The UI is divided into reusable components:

- `Search` – handles search input
- `SortBy` – sorting control
- `IsActive` – toggle for active students
- `StudentsList` – renders the grid layout
- `StudentCard` – displays student information

This structure keeps the code modular and easier to maintain.

## Possible Improvements

- Move data fetching to a SvelteKit `load()` function
- Add unit tests for filtering and sorting logic
- Add pagination for very large lists
