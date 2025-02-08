import styles from '../styles/text-bubble.module.css'

type ShapeKey = 'shape1' | 'shape2' | 'shape3';

type TextLine = {
  text: string;
  weight?: 'normal' | 'bold' | 'lighter' | number;
  className?: string;
  fontSize?: string | number;
  textAnchor?: 'start' | 'middle' | 'end';
  x?: number;  // Add individual x position
  y?: number;  // Add individual y position
}

export default function ClippedTextSVG({ 
  shape, 
  text, 
  x = 0, 
  y = 0,
  lineHeight = 25,
  firstLineSpacing = 40 // Add new prop for spacing after first line
}: { 
  shape: ShapeKey, 
  text: (string | TextLine)[], 
  x?: number, 
  y?: number,
  lineHeight?: number,
  firstLineSpacing?: number
}) {
  // Define different SVG paths
  const shapes = {
    shape1: "M1436.34,88.21l-199.89,67-1235,5.41Q.73,137.46,0,114.34,1.61,58,3.22,1.63L673.84,0l660.95,21.23Z",
    shape2: "M1252.29,47.82q9.74,70.86,19.48,141.71L0,171.81l60.22-40.74,334.77-23L373.74,63.77,524.29,0Z",
    shape3: "M8.86,5.31Q4.42,97.43,0,189.53l618.17,12.39,74.4-37.19,134.61,12.4L875,136.39l230.26-1.77L1270,62l-88.56-46.05L929.92,0Z"
  };

  // Convert all items to TextLine objects
  const textLines = text.map(line => 
    typeof line === 'string' ? { text: line } : line
  );

  return (
    <svg className={styles.svgContainer} viewBox="0 0 1436.34 160.59" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f5f5f0" d={shapes[shape]} />
      {textLines.map((line, index) => (
        <text 
          key={index}
          x={line.x ?? x} // Use individual x if provided, otherwise use default
          y={line.y ?? (y + (index === 0 ? 0 : firstLineSpacing + (index - 1) * lineHeight))} // Use individual y if provided
          className={`${styles.textStyle} ${line.className || ''}`}
          style={{ 
            fontWeight: line.weight || 'normal',
            fontSize: line.fontSize || '1.2rem'
          }}
        >
          {line.text}
        </text>
      ))}
    </svg>
  );
}
