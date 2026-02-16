'use client';

import { useState } from 'react';
import { Calendar, User, Phone, Mail, Star, TrendingUp, BarChart, Calculator, Map as MapIcon } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart as ReBarChart, Bar } from 'recharts';
import { Property } from '@/data/properties';


export function VirtualTour({ url }: { url: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-12">
      <div className="p-6 border-b border-gray-100 flex items-center gap-3">
        <MapIcon className="h-5 w-5 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">360° Virtual Tour</h2>
      </div>
      <div className="aspect-video w-full bg-gray-100">
        <iframe
          src={url}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Virtual Tour"
        ></iframe>
      </div>
    </div>
  );
}

export function MortgageCalculator({ price }: { price: number }) {
  const [downPayment, setDownPayment] = useState(price * 0.2);
  const [interestRate, setInterestRate] = useState(4.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const loanAmount = price - downPayment;
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;
  const monthlyPayment = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Mortgage Calculator</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Sale Price (LKR)</label>
            <input type="number" value={price} readOnly className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-500 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Down Payment (LKR)</label>
            <input 
              type="number" 
              value={downPayment} 
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Interest Rate (%)</label>
              <input 
                type="number" 
                step="0.1"
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" 
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Loan Term (Years)</label>
              <select 
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
              >
                <option value={15}>15 Years</option>
                <option value={20}>20 Years</option>
                <option value={30}>30 Years</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center bg-blue-50 rounded-2xl p-8">
          <div className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Monthly Payment</div>
          <div className="text-2xl font-black text-blue-900 mb-4">LKR{Math.round(monthlyPayment).toLocaleString()}</div>
          <p className="text-center text-blue-700/70 text-sm">
            Based on a loan amount of LKR{(price - downPayment).toLocaleString()} after a {Math.round((downPayment / price) * 100)}% down payment.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Statistics({ stats }: { stats: Property['statistics'] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
      <div className="flex items-center gap-3 mb-8">
        <BarChart className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-900">Property Statistics</h2>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="h-[300px]">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Page Views (Last 6 Months)
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={stats.views}>
              <defs>
                <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Area type="monotone" dataKey="value" stroke="#2563eb" fillOpacity={1} fill="url(#colorViews)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="h-[300px]">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Price Appreciation
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <ReBarChart data={stats.priceHistory}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Bar dataKey="price" fill="#2563eb" radius={[4, 4, 0, 0]} />
            </ReBarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export function PropertyReviews({ reviews }: { reviews: Property['reviews'] }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
          <h2 className="text-2xl font-bold text-gray-900">Property Reviews ({reviews.length})</h2>
        </div>
        <button className="text-blue-600 font-bold hover:underline">Write a Review</button>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
            <div className="flex items-center gap-4 mb-4">
              <img src={review.avatar} className="h-12 w-12 rounded-full object-cover" alt={review.user} />
              <div>
                <h4 className="font-bold text-gray-900">{review.user}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3 w-3 LKR{i < review.rating ? 'fill-yellow-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span>•</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ScheduleTour() {
  const [selectedDay, setSelectedDay] = useState('Today');
  const days = ['Today', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-bold text-gray-900">Schedule a Tour</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Select a Day</label>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-colors LKR{
                  selectedDay === day ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 block">Select a Time</label>
          <div className="grid grid-cols-2 gap-2">
            {['10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'].map((time) => (
              <button key={time} className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-colors">
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 pt-4 border-t border-gray-100">
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="text" placeholder="Your Name" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="tel" placeholder="Phone Number" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" />
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
          Request a Visit
        </button>
        <p className="text-[10px] text-center text-gray-400">
          By clicking request a visit, you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
