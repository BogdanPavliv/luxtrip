import React, {ReactNode} from 'react';

type WhiteBtnProps = {
    children: ReactNode;
    loadMoreItems?: () => void;
}

const WhiteBtn: React.FC<WhiteBtnProps> = ({children, loadMoreItems}) => {
  return (
    <button className="btn-white" type="button" onClick={loadMoreItems}>
      <span></span> {children}
    </button>
  )
}

export default WhiteBtn;