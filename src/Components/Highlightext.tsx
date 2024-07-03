function Highlightext({ text, styles }: { text: string; styles?: string }) {
 return <span className={`text-secondary ${styles}`}>{` ${text} `}</span>;
}

export default Highlightext;
