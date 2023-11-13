import React, { useEffect, useState } from 'react';

import { IconSpan } from '../IconSpan/IconSpan';
import { SelectIconContainer } from './styles';

interface RenderIconProps {
  currentMode: string;
  mode: string;
  onClick: () => void;
}

const RenderIcon: React.FC<RenderIconProps> = ({ currentMode, mode, onClick }) => {
  const [selected, setSelected] = useState(false);

  const iconRelation: { [key: string]: string } = {
    'Add': 'add',
    'Delete': 'delete_forever',
    'Edit': 'edit',
    'Clean': 'restart_alt',
    'Export': 'file_download',
    'Import': 'file_upload',
    'Help': 'question_mark',
  };

  useEffect(() => {
    if (currentMode === mode) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [mode, currentMode]);

  return (
    <SelectIconContainer onClick={onClick} selected={selected}>
      <IconSpan className='material-symbols-outlined' selected={selected}>
        {iconRelation[mode]}
      </IconSpan>
    </SelectIconContainer>
  );
};

export default RenderIcon;
