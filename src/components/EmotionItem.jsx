import React from 'react';

const EmotionItem = ({
  emotion_id,
  emotion_desc,
  emotion_img,
  onClick,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        'EmotionItem',
        isSelected ? `Emotion_on_${emotion_id}` : 'Emotion_off',
      ].join(' ')}
    >
      <img src={emotion_img} alt="" />
      <span>{emotion_desc}</span>
    </div>
  );
};

export default EmotionItem;
