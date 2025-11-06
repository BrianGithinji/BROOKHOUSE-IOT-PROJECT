import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Droplets } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

interface HumidityCardProps {
  humidity: number;
}

export function HumidityCard({ humidity }: HumidityCardProps) {
  const [history, setHistory] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    setHistory(prev => {
      const newHistory = [...prev, { time: timeStr, value: parseFloat(humidity.toFixed(1)) }];
      return newHistory.slice(-10); // Keep last 10 readings
    });
  }, [humidity]);

  const getHumidityStatus = () => {
    if (humidity < 40) return { status: 'Low', color: 'text-amber-600', bg: 'bg-amber-50' };
    if (humidity > 70) return { status: 'High', color: 'text-blue-600', bg: 'bg-blue-50' };
    return { status: 'Optimal', color: 'text-emerald-600', bg: 'bg-emerald-50' };
  };

  const statusInfo = getHumidityStatus();
  const percentage = Math.min(100, Math.max(0, humidity));

  return (
    <Card className="p-6 bg-white border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Droplets className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-slate-600">Humidity</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
              {statusInfo.status}
            </span>
          </div>
        </div>
      </div>

      <motion.div
        key={humidity}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-4">
          <span className="text-slate-900 text-4xl">{humidity.toFixed(1)}</span>
          <span className="text-slate-500 text-xl ml-1">%</span>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="time" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              domain={[0, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              fill="#93c5fd"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
