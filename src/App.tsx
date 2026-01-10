import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { TimelineGrid } from './components/TimelineGrid';
import { Footer } from './components/Footer';
import { EditModeProvider, useEditMode } from './context/EditModeContext';
import { FloatingControls } from './components/FloatingControls';

function SyllabusContent() {
  const [filter, setFilter] = useState('');
  const { syllabus } = useEditMode();

  const data = syllabus.weeks;

  const filteredData = data.filter(entry => {
    const term = filter.toLowerCase();
    const contentMatch = entry.content.some(c => c.toLowerCase().includes(term));
    const objMatch = entry.objectives.some(o =>
      (typeof o === 'string' ? o : JSON.stringify(o)).toLowerCase().includes(term)
    );
    const titleMatch = (entry.title?.toLowerCase().includes(term)) || (entry.content.length > 0 && entry.content[0].toLowerCase().includes(term));

    return term === '' || contentMatch || objMatch || titleMatch;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <FloatingControls />
      <div className="max-w-4xl mx-auto space-y-8">

        <Header
          title={syllabus.metadata.title}
          subtitle={syllabus.metadata.semester}
          description={syllabus.metadata.description}
        />

        <SearchBar filter={filter} setFilter={setFilter} />

        <TimelineGrid filteredData={filteredData} filter={filter} />

        <Footer
          text={syllabus.metadata.university}
        />

      </div>
    </div>
  );
}

function App() {
  return (
    <EditModeProvider>
      <SyllabusContent />
    </EditModeProvider>
  );
}

export default App;
