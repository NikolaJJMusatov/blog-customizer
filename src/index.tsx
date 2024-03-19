import { createRoot } from 'react-dom/client';
import { useState, StrictMode, CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [styleApp, setStyleApp] =
		useState<ArticleStateType>(defaultArticleState);

	function setStyleSite(data: ArticleStateType) {
		setStyleApp(data);
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': styleApp.fontFamilyOption.value,
					'--font-size': styleApp.fontSizeOption.value,
					'--font-color': styleApp.fontColor.value,
					'--container-width': styleApp.contentWidth.value,
					'--bg-color': styleApp.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setStyle={setStyleSite} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
