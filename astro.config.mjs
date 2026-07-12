// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/phantoms-gift',
  integrations: [
    starlight({
      title: '華爾街幽靈的禮物',
      description: '頂尖交易員敗中求勝的三個祕密:規則一、規則二,與行為修正的漫長修練。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '打好基礎',
          items: [
            { label: '序章 真相的旁觀者:華爾街幽靈', slug: 'unit00' },
            { label: '第1章 交易備戰:成功的前奏', slug: 'unit01' },
          ],
        },
        {
          label: '幽靈的核心規則',
          items: [
            { label: '第2章 規則 1:不正確就盡快平倉', slug: 'unit02' },
            { label: '第3章 規則 2:獲利關鍵在於加碼', slug: 'unit03' },
            { label: '第4章 規則 1+2 市場實戰', slug: 'unit04' },
          ],
        },
        {
          label: '不同市場的應用',
          items: [
            { label: '第5章 當沖交易:規則造就短線高手', slug: 'unit05' },
            { label: '第6章 選擇權：規則下的無風險交易', slug: 'unit06' },
            { label: '第7章 圖表與指標：大師的天機', slug: 'unit07' },
          ],
        },
        {
          label: '心性與修練',
          items: [
            { label: '第8章 行為修正：紀律的養成', slug: 'unit08' },
            { label: '第9章 找回創造力：交易者的遊戲', slug: 'unit09' },
            { label: '第10章 零偏誤：對抗交易情緒', slug: 'unit10' },
          ],
        },
        {
          label: '危機與應變',
          items: [
            { label: '第11章 絕處逢生：重創之後的計畫', slug: 'unit11' },
            { label: '第12章 市場不會永遠正確', slug: 'unit12' },
            { label: '第13章 規則 3:爆量是套現良機', slug: 'unit13' },
            { label: '第14章 戰勝不確定性:三場意外的啟示', slug: 'unit14' },
          ],
        },
        {
          label: '打造你的計畫',
          items: [
            { label: '第15章 你的交易計畫', slug: 'unit15' },
            { label: '第16章 第二套計畫', slug: 'unit16' },
            { label: '第17章 執行交易:排除不理想的下單', slug: 'unit17' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
