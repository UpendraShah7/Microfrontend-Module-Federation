import React from 'react';

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        My App
      </header>
      <main>{children}</main>
    </div>
  );
}