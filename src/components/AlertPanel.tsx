import { Card } from './ui/card';
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AlertPanelProps {
  temperature: number;
  humidity: number;
  waterUsage: number;
}

export function AlertPanel({ temperature, humidity, waterUsage }: AlertPanelProps) {
  const alerts = [];

  // Temperature alerts
  if (temperature > 30) {
    alerts.push({
      id: 'temp-high',
      type: 'warning',
      icon: AlertTriangle,
      message: 'High temperature detected in campus areas',
      value: `${temperature.toFixed(1)}°C`,
      color: 'orange'
    });
  } else if (temperature < 18) {
    alerts.push({
      id: 'temp-low',
      type: 'info',
      icon: Info,
      message: 'Low temperature detected',
      value: `${temperature.toFixed(1)}°C`,
      color: 'blue'
    });
  }

  // Humidity alerts
  if (humidity > 70) {
    alerts.push({
      id: 'humidity-high',
      type: 'warning',
      icon: AlertTriangle,
      message: 'High humidity levels detected',
      value: `${humidity.toFixed(1)}%`,
      color: 'blue'
    });
  } else if (humidity < 35) {
    alerts.push({
      id: 'humidity-low',
      type: 'info',
      icon: Info,
      message: 'Low humidity levels - air may be dry',
      value: `${humidity.toFixed(1)}%`,
      color: 'amber'
    });
  }

  // Water usage alerts
  if (waterUsage > 650) {
    alerts.push({
      id: 'water-high',
      type: 'warning',
      icon: AlertTriangle,
      message: 'Unusually high water consumption detected',
      value: `${waterUsage.toFixed(0)} L/h`,
      color: 'red'
    });
  }

  if (alerts.length === 0) {
    return (
      <Card className="p-4 bg-emerald-50 border-emerald-200">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
          <p className="text-emerald-800">All systems operating within normal parameters</p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-2">
      <h3 className="text-slate-700 mb-2">Real-time Alerts</h3>
      <AnimatePresence>
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const colorClasses = {
            orange: 'bg-orange-50 border-orange-200 text-orange-800',
            blue: 'bg-blue-50 border-blue-200 text-blue-800',
            amber: 'bg-amber-50 border-amber-200 text-amber-800',
            red: 'bg-red-50 border-red-200 text-red-800'
          };

          const iconColorClasses = {
            orange: 'text-orange-600',
            blue: 'text-blue-600',
            amber: 'text-amber-600',
            red: 'text-red-600'
          };

          return (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={`p-4 ${colorClasses[alert.color as keyof typeof colorClasses]}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Icon className={`w-5 h-5 ${iconColorClasses[alert.color as keyof typeof iconColorClasses]}`} />
                    <p>{alert.message}</p>
                  </div>
                  <span className="px-3 py-1 bg-white rounded-full text-sm">
                    {alert.value}
                  </span>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
