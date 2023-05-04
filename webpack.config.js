import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config= {
    mode: 'production',
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, './dist/js'),
  },

  plugins: [
    new UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
};

export default config