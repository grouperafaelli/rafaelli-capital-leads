
import { useState } from 'react';

export default function Simulateur() {
  const [revenu, setRevenu] = useState('');
  const [impot, setImpot] = useState('');
  const [resultat, setResultat] = useState(null);

  const simuler = () => {
    const effort = Math.max(0, 100 - parseInt(impot) / 1000);
    const tri = revenu > 50000 ? 15.6 : 13;
    setResultat({ effort, tri });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Simulateur Fiscal</h1>
      <input
        type="number"
        placeholder="Revenu annuel"
        value={revenu}
        onChange={(e) => setRevenu(e.target.value)}
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Impôt annuel"
        value={impot}
        onChange={(e) => setImpot(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={simuler} className="px-4 py-2 bg-blue-600 text-white rounded">Simuler</button>
      {resultat && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Résultats</h2>
          <p>Effort d’épargne : {resultat.effort} €/mois</p>
          <p>TRI estimé : {resultat.tri} %</p>
        </div>
      )}
    </div>
  );
}
