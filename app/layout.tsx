import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import { RootLayoutClient } from './layout-client';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Planning Poker - Votación en Tiempo Real',
  description:
    'Aplicación profesional de Planning Poker para equipos Scrum. Votación en tiempo real, salas compartidas y estadísticas instantáneas.',
  keywords: [
    'Planning Poker',
    'Scrum',
    'Agile',
    'Estimación',
    'Equipo',
    'Tiempo Real',
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  authors: [{ name: 'Planning Poker Team' }],
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Planning Poker',
    description: 'Votación ágil en tiempo real para tu equipo',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="min-h-full flex flex-col text-neutral-50 font-poppins" style={{ background: 'linear-gradient(to bottom right, #0f172a, #581c6d, #0f172a)' }}>
        <RootLayoutClient>
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
