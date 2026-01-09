import { useState } from 'react';
import syllabusData from './data/planeamiento.json';
import type { SyllabusData } from './types';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TimelineGrid } from './components/TimelineGrid';
import { Footer } from './components/Footer';

/**
 * The main application component for the Syllabus Viewer.
 *
 * @component
 * @description
 * Acts as the container for the entire application. It manages:
 * 1. Data Loading: Imports syllabus data from JSON.
 * 2. State Management: Handles the search filter state.
 * 3. Filtering Logic: Filters weeks based on search terms (matches against title, content, and objectives).
 * 4. Layout: Renders the header, search bar, and the list of WeekCards.
 *
 * Includes type casting for imported JSON data to ensure TypeScript safety.
 *
 * @returns {React.ReactElement} The root application element.
 */
function App() {
  const [filter, setFilter] = useState('');

  // Cast imports to strict type
  const rawData = syllabusData as unknown as SyllabusData;
  const data = rawData.weeks;

  const filteredData = data.filter(entry => {
    const term = filter.toLowerCase();
    const contentMatch = entry.content.some(c => c.toLowerCase().includes(term));
    const objMatch = entry.objectives.some(o =>
      (typeof o === 'string' ? o : JSON.stringify(o)).toLowerCase().includes(term)
    );
    const titleMatch = entry.content.length > 0 && entry.content[0].toLowerCase().includes(term);

    return term === '' || contentMatch || objMatch || titleMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto space-y-8">

        <Header
          title={rawData.metadata.title}
          subtitle={rawData.metadata.semester}
          description={rawData.metadata.description}
        />

        <SearchBar filter={filter} setFilter={setFilter} />

        <TimelineGrid filteredData={filteredData} filter={filter} />

        <Footer
          text={rawData.metadata.university}
        />

      </div>
    </div>
  );
}

export default App;
