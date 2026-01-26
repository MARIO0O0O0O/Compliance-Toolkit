import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export async function generateStaticParams() {
  const rootDir = process.cwd();
  const files = fs.readdirSync(rootDir);
  const mdFiles = files.filter(file => file.endsWith('.md'));

  return mdFiles.map((file) => ({
    slug: file.replace('.md', ''),
  }));
}

export default function ChecklistPage({ params }: { params: { slug: string } }) {
  const rootDir = process.cwd();
  const filePath = path.join(rootDir, `${params.slug}.md`);
  
  let content = '';
  let notFound = false;

  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (error) {
    notFound = true;
  }

  if (notFound) {
    return (
      <main>
        <h1>Checklist Not Found</h1>
        <p>The requested checklist could not be found.</p>
        <Link href="/" style={{ color: '#0070f3', marginTop: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
      </main>
    );
  }

  const displayName = params.slug
    .replace(/_/g, ' ')
    .replace(/California/g, 'CA')
    .trim();

  return (
    <main>
      <Link href="/" style={{ color: '#0070f3', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to Home
      </Link>
      <h1>{displayName}</h1>
      <div style={{ 
        backgroundColor: 'white', 
        padding: '2rem', 
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        whiteSpace: 'pre-wrap',
        fontFamily: 'monospace',
        lineHeight: '1.8'
      }}>
        {content}
      </div>
    </main>
  );
}
