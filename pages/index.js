
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Head>
        <title>Rafaelli Leads</title>
        <meta name="description" content="Simulez vos opportunités d’investissement avec Rafaelli Capital Leads" />
      </Head>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4">Bienvenue chez RAFAELLI LEADS</h1>
        <p className="mb-6">Trouvez des solutions d’investissement sur mesure selon votre profil fiscal.</p>
        <a href="/simulateur" className="px-4 py-2 bg-black text-white rounded">Lancer la simulation</a>
      </main>
    </div>
  );
}
