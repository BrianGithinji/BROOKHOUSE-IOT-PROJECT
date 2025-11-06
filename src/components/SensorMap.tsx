import { Card } from './ui/card';
import { MapPin, Activity } from 'lucide-react';

export function SensorMap() {
  const sensors = [
    { id: 1, name: 'Main Building', position: { top: '20%', left: '30%' }, status: 'active' },
    { id: 2, name: 'Library', position: { top: '45%', left: '60%' }, status: 'active' },
    { id: 3, name: 'Science Lab', position: { top: '60%', left: '25%' }, status: 'active' },
    { id: 4, name: 'Sports Complex', position: { top: '35%', left: '75%' }, status: 'active' },
    { id: 5, name: 'Cafeteria', position: { top: '70%', left: '50%' }, status: 'active' },
  ];

  return (
    <Card className="p-6 bg-white border-slate-200 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <MapPin className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="text-slate-900">Sensor Locations</h3>
          <p className="text-sm text-slate-600">Active monitoring points across campus</p>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border-2 border-dashed border-slate-300 h-80">
        {/* Campus map visualization */}
        <div className="absolute inset-0 p-8">
          {sensors.map((sensor) => (
            <div
              key={sensor.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: sensor.position.top, left: sensor.position.left }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-emerald-400 rounded-full opacity-20 animate-ping" />
                <div className="relative bg-white p-2 rounded-full shadow-lg border-2 border-emerald-500 cursor-pointer hover:scale-110 transition-transform">
                  <Activity className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-slate-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-xl">
                    {sensor.name}
                    <div className="text-emerald-400">● Active</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3 border border-slate-200">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-slate-700">Active Sensor</span>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-3 border border-slate-200">
          <p className="text-xs text-slate-600">Total Sensors</p>
          <p className="text-slate-900 text-2xl">{sensors.length}</p>
        </div>
      </div>
    </Card>
  );
}
