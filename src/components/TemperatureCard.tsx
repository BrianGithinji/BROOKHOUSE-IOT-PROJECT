import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Thermometer } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

interface TemperatureCardProps {
  temperature: number;
}

export function TemperatureCard({ temperature }: TemperatureCardProps) {
  const [history, setHistory] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    setHistory(prev => {
      const newHistory = [...prev, { time: timeStr, value: parseFloat(temperature.toFixed(1)) }];
      return newHistory.slice(-10); // Keep last 10 readings
    });
  }, [temperature]);

  const getTemperatureStatus = () => {
    if (temperature < 20) return { status: 'Cool', color: 'text-blue-600', bg: 'bg-blue-50' };
    if (temperature > 28) return { status: 'Warm', color: 'text-orange-600', bg: 'bg-orange-50' };
    return { status: 'Optimal', color: 'text-emerald-600', bg: 'bg-emerald-50' };
  };

  const statusInfo = getTemperatureStatus();

  return (
    <Card className="p-6 bg-white border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-orange-100 rounded-lg">
            <Thermometer className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h3 className="text-slate-600">Temperature</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
              {statusInfo.status}
            </span>
          </div>
        </div>
      </div>

      <motion.div
        key={temperature}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <span className="text-slate-900 text-4xl">{temperature.toFixed(1)}</span>
          <span className="text-slate-500 text-xl ml-1">°C</span>
        </div>
      </motion.div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="time" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              domain={[15, 35]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#f97316" 
              strokeWidth={2}
              dot={{ fill: '#f97316', r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
