import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
}

const BlackBtn: React.FC<Props> = ({children}) => {
  return (
    <button className="btn-balck" type='submit'>
        <span></span>
        {children}
    </button>
  )
}

export default BlackBtn;