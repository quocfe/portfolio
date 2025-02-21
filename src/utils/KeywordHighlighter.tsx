import React from 'react';
import { keywords } from '../constant';

interface KeywordHighlighterProps {
	content: string;
}

const KeywordHighlighter: React.FC<KeywordHighlighterProps> = ({ content }) => {
	if (!keywords.length) return <>{content}</>;
	const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');

	const highlightedContent = content.replace(
		regex,
		(match) => `<span class="highlight">${match}</span>`
	);

	return <span dangerouslySetInnerHTML={{ __html: highlightedContent }} />;
};

export default KeywordHighlighter;
