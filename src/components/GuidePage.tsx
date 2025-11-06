import { Card } from './ui/card';
import { Cpu, Wifi, Database, Code, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export function GuidePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Introduction */}
      <Card className="p-8 mb-6 bg-gradient-to-br from-emerald-50 to-blue-50 border-emerald-200">
        <h2 className="text-slate-900 mb-4">Smart Campus IoT System - Setup Guide</h2>
        <p className="text-slate-700 mb-2">
          This guide will help you understand how the Brookhouse Smart Campus System works and how to connect 
          IoT sensors for real-time environmental monitoring.
        </p>
        <p className="text-slate-600 text-sm">
          The system monitors temperature, humidity, and water usage across campus locations to promote 
          sustainability and efficient resource management.
        </p>
      </Card>

      {/* System Architecture */}
      <div className="mb-6">
        <h3 className="text-slate-900 mb-4">System Architecture</h3>
        <Card className="p-6 bg-white border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
              <div className="p-3 bg-blue-100 rounded-full mb-3">
                <Cpu className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-slate-900 mb-2">IoT Sensors</h4>
              <p className="text-sm text-slate-600">DHT22 (Temp/Humidity) & Flow sensors collect data</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-emerald-50 rounded-lg">
              <div className="p-3 bg-emerald-100 rounded-full mb-3">
                <Wifi className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Microcontroller</h4>
              <p className="text-sm text-slate-600">ESP32/Arduino processes & transmits data via WiFi</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-cyan-50 rounded-lg">
              <div className="p-3 bg-cyan-100 rounded-full mb-3">
                <Database className="w-6 h-6 text-cyan-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Cloud Database</h4>
              <p className="text-sm text-slate-600">Supabase stores real-time sensor readings</p>
            </div>

            <div className="flex flex-col items-center text-center p-4 bg-purple-50 rounded-lg">
              <div className="p-3 bg-purple-100 rounded-full mb-3">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-slate-900 mb-2">Web Dashboard</h4>
              <p className="text-sm text-slate-600">React app displays live data & analytics</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Hardware Requirements */}
      <div className="mb-6">
        <h3 className="text-slate-900 mb-4">Required Hardware Components</h3>
        <Card className="p-6 bg-white border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-slate-900 mb-3">Temperature & Humidity Monitoring</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>DHT22 Sensor</strong> - Digital temperature & humidity sensor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>ESP32 Dev Board</strong> - WiFi-enabled microcontroller</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Power Supply</strong> - 5V USB or battery pack</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Jumper Wires</strong> - For connections</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 mb-3">Water Usage Monitoring</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>YF-S201 Flow Sensor</strong> - Water flow rate sensor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>ESP32 Dev Board</strong> - WiFi-enabled microcontroller</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>12V Power Adapter</strong> - For flow sensor operation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Pipe Fittings</strong> - To install in water line</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      {/* Wiring Diagram */}
      <div className="mb-6">
        <h3 className="text-slate-900 mb-4">Sensor Wiring Connections</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* DHT22 Wiring */}
          <Card className="p-6 bg-white border-slate-200">
            <h4 className="text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-600" />
              DHT22 Temperature/Humidity Sensor
            </h4>
            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">VCC Pin</span>
                <span className="text-emerald-600">→ ESP32 3.3V</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">DATA Pin</span>
                <span className="text-emerald-600">→ ESP32 GPIO 4</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">GND Pin</span>
                <span className="text-emerald-600">→ ESP32 GND</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800">
                Add a 10kΩ pull-up resistor between DATA and VCC for stable readings
              </p>
            </div>
          </Card>

          {/* Flow Sensor Wiring */}
          <Card className="p-6 bg-white border-slate-200">
            <h4 className="text-slate-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-600" />
              YF-S201 Water Flow Sensor
            </h4>
            <div className="bg-slate-50 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">Red Wire (VCC)</span>
                <span className="text-cyan-600">→ ESP32 5V</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">Yellow Wire (Signal)</span>
                <span className="text-cyan-600">→ ESP32 GPIO 2</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded border border-slate-200">
                <span className="text-slate-700">Black Wire (GND)</span>
                <span className="text-cyan-600">→ ESP32 GND</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-amber-50 rounded-lg flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                Install sensor inline with water pipe. Ensure water flows in arrow direction
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Code Setup */}
      <div className="mb-6">
        <h3 className="text-slate-900 mb-4">Arduino Code Setup</h3>
        <Card className="p-6 bg-white border-slate-200">
          <h4 className="text-slate-900 mb-3">ESP32 Sample Code (Arduino IDE)</h4>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-slate-100">
              <code>{`#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// WiFi credentials
const char* ssid = "Your_WiFi_SSID";
const char* password = "Your_WiFi_Password";

// Supabase API endpoint
const char* serverURL = "https://your-project.supabase.co/rest/v1/sensor_data";
const char* apiKey = "your_supabase_api_key";

// DHT22 Sensor
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// Flow Sensor
#define FLOW_PIN 2
volatile int flowPulseCount;
float flowRate = 0.0;

void IRAM_ATTR flowPulseCounter() {
  flowPulseCount++;
}

void setup() {
  Serial.begin(115200);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  // Initialize sensors
  dht.begin();
  pinMode(FLOW_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(FLOW_PIN), flowPulseCounter, FALLING);
}

void loop() {
  // Read temperature and humidity
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();
  
  // Calculate flow rate (L/hour)
  flowRate = (flowPulseCount / 7.5) * 60;
  flowPulseCount = 0;
  
  // Send data to Supabase
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverURL);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("apikey", apiKey);
    
    String jsonData = "{\\"temperature\\":" + String(temp) + 
                      ",\\"humidity\\":" + String(humidity) + 
                      ",\\"water_usage\\":" + String(flowRate) + "}";
    
    int httpCode = http.POST(jsonData);
    http.end();
  }
  
  delay(3000); // Update every 3 seconds
}`}</code>
            </pre>
          </div>
        </Card>
      </div>

      {/* Database Setup */}
      <div className="mb-6">
        <h3 className="text-slate-900 mb-4">Database Configuration (Supabase)</h3>
        <Card className="p-6 bg-white border-slate-200">
          <h4 className="text-slate-900 mb-3">Create Sensor Data Table</h4>
          <p className="text-slate-700 mb-4">
            In your Supabase project, create a table called <code className="px-2 py-1 bg-slate-100 rounded text-sm">sensor_data</code> with the following structure:
          </p>
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto mb-4">
            <pre className="text-sm text-slate-100">
              <code>{`CREATE TABLE sensor_data (
  id BIGSERIAL PRIMARY KEY,
  temperature DECIMAL(5,2),
  humidity DECIMAL(5,2),
  water_usage DECIMAL(10,2),
  location VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable real-time
ALTER PUBLICATION supabase_realtime ADD TABLE sensor_data;`}</code>
            </pre>
          </div>
          <div className="p-4 bg-emerald-50 rounded-lg">
            <h4 className="text-emerald-900 mb-2">Next Steps:</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-emerald-800">
              <li>Get your Supabase project URL and API key from project settings</li>
              <li>Update the Arduino code with your WiFi and Supabase credentials</li>
              <li>Enable Row Level Security (RLS) policies for secure access</li>
              <li>Configure real-time subscriptions in the dashboard</li>
            </ol>
          </div>
        </Card>
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
  );
}
