import { useState, CSSProperties } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';
import styles from './App.module.scss';

export const App = () => {
	const [styleApp, setStyleApp] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': styleApp.fontFamilyOption.value,
					'--font-size': styleApp.fontSizeOption.value,
					'--font-color': styleApp.fontColor.value,
					'--container-width': styleApp.contentWidth.value,
					'--bg-color': styleApp.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setStyle={setStyleApp} />
			<Article />
		</main>
	);
};
