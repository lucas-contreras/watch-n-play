const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const appBuild = path.resolve(appDirectory, "build");
const appSrc = path.resolve(appDirectory, "src");
const appPublic = path.resolve(appDirectory, "public");
const appHtml = path.resolve(appDirectory, "public/index.html");
const publicURL = "/";

module.exports = {
	mode: "development",
	entry: path.resolve(appSrc, "index.tsx"),
	output: {
		path: appBuild,
		filename: "[name].[contenthash].js",
		publicPath: publicURL,
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ["babel-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	devtool: "inline-source-map",
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: appHtml,
			filename: "index.html",
		}),
	],
	devServer: {
		port: 8080,
		contentBase: appPublic,
		publicPath: publicURL,
		hot: true,
		open: true,
		historyApiFallback: true,
	},
};
