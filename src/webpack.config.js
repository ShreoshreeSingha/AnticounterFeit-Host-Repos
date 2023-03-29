import { resolve } from 'path';

export const entry = './src/index.js';
export const output = {
  filename: 'bundle.js',
  path: resolve(__dirname, 'build'),
};
export const module = {
  rules: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
  ],
};
