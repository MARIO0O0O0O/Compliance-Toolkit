import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Home() {
  // Get all markdown files from the root directory
  const rootDir = process.cwd();
  const files = fs.readdirSync(rootDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  return (
    <main>
      <h1>California Compliance Toolkit</h1>
      <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
        A comprehensive collection of compliance checklists and resources for California employers.
      </p>

      <h2>Available Checklists</h2>
      <ul>
        {mdFiles.map((file) => {
          const fileName = file.replace('.md', '');
          const displayName = fileName
            .replace(/_/g, ' ')
            .replace(/California/g, 'CA')
            .trim();
          
          return (
            <li key={file}>
              <Link href={`/checklist/${fileName}`}>
                {displayName}
              </Link>
            </li>
          );
        })}
      </ul>

      <div style={{ marginTop: '3rem', padding: '1.5rem', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2>About This Toolkit</h2>
        <p>
          This toolkit provides comprehensive compliance checklists for California employment law.
          Each checklist is designed to help employers ensure they are meeting their legal obligations
          under California state law.
        </p>
      </div>
    </main>
  );
}
