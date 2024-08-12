import type { Configuration, RuleSetRule } from 'webpack';

const rules: RuleSetRule[] = [
  {
    exclude: /node_modules/,
    test: /\.ts$/,
    use: 'ts-loader',
  },
];

const config: Configuration = {
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: `${__dirname}/dist`,
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'eval-source-map',
};

export default config;
