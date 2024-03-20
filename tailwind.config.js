/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind 会扫描你项目中的所有 JS/JSX/TS/TSX 文件
    // 这里可以添加其他你希望 Tailwind 扫描的文件路径
  ],
  content: [],
  theme: {
    extend: {
      screens: {
        //以下是UIUX响应式断点规范
        // xs: { max: "575px" }, // 新增的小屏幕断点(特殊情况备用)
        // => @media (max-width: 575px) { ... }
        sm: { max: "767px" },
        // => @media (max-width: 767px) { ... }
        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 767px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
      },
      padding: {
        btn: "2.5",
      },
      margin: { btn: "2.5" },
      transitionDuration: {
        btn: "0.2s", // 按钮的动画的 transition 时间
      },
      transitionTimingFunction: {
        btn: "ease-in-out", // 按钮的动画的 timing 函数
      },
      scale: {
        active: "0.95",
        hover: "1.05",
      },
    },
  },
  plugins: [],
};
