/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ExternalLink, Info } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#bcebfd] flex items-center justify-center p-4 font-['微軟正黑體',sans-serif]">
      <div id="bookstore-card" className="w-full max-w-[450px] bg-white rounded-[15px] shadow-[0_10px_25px_rgba(0,0,0,0.1)] overflow-hidden">
        {/* Top Section */}
        <div 
          id="card-header"
          className="h-[330px] bg-cover bg-center flex items-end justify-start p-5 relative bg-slate-800"
          style={{ 
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6), transparent), url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80')` 
          }}
        >
          <div className="flex items-baseline gap-2">
            <h2 id="card-title" className="text-white text-[26px] font-bold">浮光書店</h2>
            <span id="card-subtitle" className="text-white/80 text-sm pb-1">IlluminationBooks</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div id="card-body" className="p-[25px]">
          <ul className="space-y-2.5 list-none">
            <li className="text-sm text-[#444] leading-relaxed">
              <h3 className="inline text-[15px] text-[#004299] font-bold">地址：</h3>
              號 2 樓, No. 16赤峰街47巷大同區台北市103
            </li>
            <li className="text-sm text-[#444] leading-relaxed">
              <h3 className="inline text-[15px] text-[#004299] font-bold">電話：</h3>
              02 2550 7288
            </li>
            <li className="text-sm text-[#444] leading-relaxed">
              <h3 className="inline text-[15px] text-[#004299] font-bold">開放時間：</h3>
              今日正常營業 · 14:00–21:30
            </li>
          </ul>

          {/* Buttons */}
          <div id="card-actions" className="mt-5 flex gap-2.5">
            <a 
              id="btn-website"
              href="#" 
              className="flex-1 text-center py-2.5 bg-[#5fc9f3] text-white rounded-md text-sm transition-colors duration-300 hover:bg-black flex items-center justify-center gap-2"
            >
              <ExternalLink size={16} />
              前往網站
            </a>
            <a 
              id="btn-more"
              href="#" 
              className="flex-1 text-center py-2.5 border border-[#5fc9f3] text-[#5fc9f3] rounded-md text-sm transition-colors duration-300 hover:bg-[#f5f5f5] flex items-center justify-center gap-2"
            >
              <Info size={16} />
              更多訊息
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

