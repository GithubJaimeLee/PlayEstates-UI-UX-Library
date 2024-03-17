## 准备工作 🛠️

在使用 PlayEstate 之前，你需要先安装 Tailwind CSS。以下是在不同框架中安装 Tailwind CSS 的方法：

### Vue

1. 安装 Tailwind CSS：

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2. 在 `tailwind.config.js` 文件中配置 Tailwind CSS：

    ```javascript
    module.exports = {
      content: ["./src/**/*.{html,js,vue}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. 在你的项目中引入 Tailwind CSS：

    在 `main.js` 或 `main.ts` 文件中：

    ```javascript
    import './index.css'
    ```

    在 `index.css` 文件中：

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

### React

1. 安装 Tailwind CSS：

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init
    ```

2. 在 `tailwind.config.js` 文件中配置 Tailwind CSS：

    ```javascript
    module.exports = {
      content: ["./src/**/*.{js,jsx,ts,tsx}"],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3. 在你的项目中引入 Tailwind CSS：

    在 `index.css` 文件中：

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

    在 `index.js` 或 `index.ts` 文件中：

    ```javascript
    import './index.css';
    ```
