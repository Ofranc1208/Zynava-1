import React from 'react';
import styles from './ProcessMenu.module.css';

interface ProcessMenuProps {
  onTopicClick: (topic: string) => void;
}

const ProcessMenu: React.FC<ProcessMenuProps> = ({ onTopicClick }) => {
  const processTopics = [
    'How does the selling process work?',
    'What are the legal requirements?',
    'How much can I get for my settlement?',
    'What are the risks and benefits?',
    'How long does the process take?',
    'Ask me anything else'
  ];

  const handleTopicClick = (topic: string) => {
    onTopicClick(topic);
  };

  return (
    <div className={styles.menu}>
      {processTopics.map((topic, index) => (
        <button
          key={index}
          className={styles.menuBtn}
          onClick={() => handleTopicClick(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default ProcessMenu;
