import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { Waves } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

interface WaterUsageCardProps {
  waterUsage: number;
}

export function WaterUsageCard({ waterUsage }: WaterUsageCardProps) {
  const [history, setHistory] = useState<Array<{ time: string; value: number }>>([]);

  useEffect(() => {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    
    setHistory(prev => {
      const newHistory = [...prev, { time: timeStr, value: parseFloat(waterUsage.toFixed(0)) }];
      return newHistory.slice(-8); // Keep last 8 readings for bar chart
    });
  }, [waterUsage]);

  const getUsageStatus = () => {
    if (waterUsage < 300) return { status: 'Low', color: 'text-emerald-600', bg: 'bg-emerald-50' };
    if (waterUsage > 600) return { status: 'High', color: 'text-red-600', bg: 'bg-red-50' };
    return { status: 'Normal', color: 'text-blue-600', bg: 'bg-blue-50' };
  };

  const statusInfo = getUsageStatus();

  return (
    <Card className="p-6 bg-white border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-cyan-100 rounded-lg">
            <Waves className="w-6 h-6 text-cyan-600" />
          </div>
          <div>
            <h3 className="text-slate-600">Water Usage</h3>
            <span className={`text-xs px-2 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
              {statusInfo.status}
            </span>
          </div>
        </div>
      </div>

      <motion.div
        key={waterUsage}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <span className="text-slate-900 text-4xl">{waterUsage.toFixed(0)}</span>
          <span className="text-slate-500 text-sm ml-1">litres/hour</span>
        </div>
      </motion.div>

      <div className="h-40">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={history}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis 
              dataKey="time" 
              stroke="#64748b"
              fontSize={12}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              domain={[0, 1000]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="#06b6d4"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
