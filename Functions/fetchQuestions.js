export async function fetchQuestions() {
    try {
        const response = await fetch('https://opentdb.com/api.php?amount=3&category=10&difficulty=easy&type=multiple');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data.results;
    } catch (error) {
        console.error('Error fetching questions:', error);
        return [];
    }
}
