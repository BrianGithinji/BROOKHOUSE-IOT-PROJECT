import { useState, useEffect } from 'react';
import { TemperatureCard } from './components/TemperatureCard';
import { HumidityCard } from './components/HumidityCard';
import { WaterUsageCard } from './components/WaterUsageCard';
import { AlertPanel } from './components/AlertPanel';
import { SensorMap } from './components/SensorMap';
import { GuidePage } from './components/GuidePage';
import { BookOpen, LayoutDashboard } from 'lucide-react';
import logo from 'figma:asset/79510b4bb184745f3967304903e07d38587bcb0b.png';

export default function App() {
  const [temperature, setTemperature] = useState(22.5);
  const [humidity, setHumidity] = useState(55);
  const [waterUsage, setWaterUsage] = useState(450);
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'guide'>('dashboard');

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(prev => {
        const variation = (Math.random() - 0.5) * 2;
        return Math.max(18, Math.min(35, prev + variation));
      });
      
      setHumidity(prev => {
        const variation = (Math.random() - 0.5) * 4;
        return Math.max(30, Math.min(80, prev + variation));
      });
      
      setWaterUsage(prev => {
        const variation = (Math.random() - 0.5) * 50;
        return Math.max(200, Math.min(800, prev + variation));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src={logo} alt="Brookhouse Schools" className="h-12" />
              <div className="border-l border-slate-300 pl-4">
                <h1 className="text-slate-900">Brookhouse Smart Campus Dashboard</h1>
                <p className="text-slate-600 text-sm">Real-time Environmental Monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'dashboard'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => setCurrentPage('guide')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentPage === 'guide'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Setup Guide
              </button>
              {currentPage === 'dashboard' && (
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-slate-600">Live</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {currentPage === 'dashboard' ? (
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Sample Data Notice */}
          <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <p className="text-amber-800 text-sm font-medium">
                Note: Data being displayed is sample data for prototyping and not real-time data
              </p>
            </div>
          </div>

          {/* Alert Panel */}
          <div className="mb-6">
            <AlertPanel 
              temperature={temperature}
              humidity={humidity}
              waterUsage={waterUsage}
            />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <TemperatureCard temperature={temperature} />
            <HumidityCard humidity={humidity} />
            <WaterUsageCard waterUsage={waterUsage} />
          </div>

          {/* Sensor Map */}
          <div className="mb-6">
            <SensorMap />
          </div>

          {/* Footer */}
          <footer className="bg-white rounded-lg border border-slate-200 p-6">
            <div className="text-center mb-4">
              <p className="text-slate-700">
                <span className="text-emerald-600">🌍</span> Aligned with UN Sustainable Development Goals: 
                <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">SDG 6: Clean Water</span>
                <span className="ml-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">SDG 7: Clean Energy</span>
                <span className="ml-2 px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">SDG 9: Innovation</span>
                <span className="ml-2 px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">SDG 13: Climate Action</span>
              </p>
            </div>
            <div className="text-center pt-4 border-t border-slate-200">
              <p className="text-slate-600">
                In Collaboration With <span className="text-emerald-600">Mount Kenya University</span>
              </p>
            </div>
          </footer>
        </div>
      ) : (
        <GuidePage />
      )}
    </div>
  );
}