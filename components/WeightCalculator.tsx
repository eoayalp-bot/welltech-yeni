"use client";

import React, { useState } from 'react';
import { Calculator, RefreshCw } from 'lucide-react';

export default function WeightCalculator() {
  const [width, setWidth] = useState<number>(1000);
  const [length, setLength] = useState<number>(2000);
  const [thickness, setThickness] = useState<number>(2);
  const [material, setMaterial] = useState<string>('316L');

  const densities: Record<string, number> = {
    '304': 7.93,
    '316L': 7.98,
    '430': 7.70
  };

  const calculateWeight = () => {
    const wMetre = width / 1000;
    const lMetre = length / 1000;
    const density = densities[material];
    return (wMetre * lMetre * thickness * density).toFixed(2);
  };

  return (
    <div className="my-8 bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-inner not-prose">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-[#005284] text-white rounded-xl">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-lg font-black text-[#005284] tracking-tight m-0">Welltech® Paslanmaz Sac Ağırlık Hesaplama</h4>
          <p className="text-xs text-gray-500 m-0">Projeniz için teorik ağırlık hesaplama aracı</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-xs font-bold text-gray-600 tracking-wider uppercase mb-1.5">Malzeme Kalitesi</label>
          <select 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#005284]"
          >
            <option value="316L">AISI 316L (Yoğunluk: 7.98)</option>
            <option value="304">AISI 304 (Yoğunluk: 7.93)</option>
            <option value="430">AISI 430 (Yoğunluk: 7.70)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 tracking-wider uppercase mb-1.5">Sac Kalınlığı (mm)</label>
          <input 
            type="number" 
            value={thickness} 
            onChange={(e) => setThickness(Number(e.target.value))}
            className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#005284]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 tracking-wider uppercase mb-1.5">Genişlik / En (mm)</label>
          <input 
            type="number" 
            value={width} 
            onChange={(e) => setWidth(Number(e.target.value))}
            className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#005284]"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-600 tracking-wider uppercase mb-1.5">Uzunluk / Boy (mm)</label>
          <input 
            type="number" 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full bg-white border border-gray-300 rounded-lg p-2.5 text-sm font-semibold text-gray-800 focus:outline-none focus:border-[#005284]"
          />
        </div>
      </div>

      <div className="bg-[#005284] text-white p-4 rounded-xl flex items-center justify-between shadow-md">
        <span className="text-xs font-bold tracking-widest uppercase text-blue-200">Teorik Toplam Ağırlık</span>
        <div className="text-right">
          <span className="text-2xl font-black tracking-tight">{calculateWeight()}</span>
          <span className="text-sm font-bold text-blue-200 ml-1">KG</span>
        </div>
      </div>
    </div>
  );
}