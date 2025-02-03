"use client";

import React from 'react';
import Links from "./links/Links";
import Link from 'next/link';

import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from "../../hooks/useMediaQuery";
import { RootState } from '../../store/store';

import { toggleMenu } from "../../store/headerSlice";
import { openModal } from "../../store/modalSlice";

type TopOfPageProps = {
  isTopOfPage: boolean;
}

const HeaderComponent = ({isTopOfPage}: TopOfPageProps) => {
  const dispatch = useDispatch();
  const isMenuToggled = useSelector((state: RootState) => state.header.isMenuToggled);
  // const isModalOpen = useSelector((state: RootState) => state.modal.isModalOpen);
  const isAboveMediumScreens = useMediaQuery("(max-width: 991px)");
  const headerBackground = isTopOfPage ? "" : "#e2d3ce";

  return (
    <>
        <header className='header' style={{backgroundColor: headerBackground}}>
        <div className="container-lg">
            <div className="header__inner">
                  <div className="action__btn action__btn-md">Call Me</div>
                  <Link className="logo" href={"/"}>
                    <img className="logo__img" src="/img/logo.svg" alt="logo" />
                  </Link>
                {isAboveMediumScreens ? (
                  <button className={isMenuToggled ? "menu__btn menu__btn--active" : "menu__btn"} id='menu__btn' onClick={() => dispatch(toggleMenu())}>
                    <span className='nav-icon'></span>
                  </button>
                ) : (
                  <nav className="header__nav">
                    <Links/>
                    <div className="action">
                      <a className="action__btn" href='#' onClick={() => dispatch(openModal())}>
                          <svg
                              className="action__btn-top"
                              width="22"
                              height="10"
                              viewBox="0 0 22 10"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  d="M10.9506 0.416992L9.85895 2.4859L8.80249 4.55481C9.55962 6.00745 10.2287 7.2664 10.977 8.69263L13.1516 4.55481L12.0335 2.4859L10.9506 0.416992Z"
                              />
                              <path
                                  d="M21.9114 7.46877L21.8057 7.40714L21.7001 7.33671L21.5856 7.27508L21.48 7.20465L21.3655 7.14302L21.2599 7.0814L21.1542 7.01977L21.0398 6.95814L20.9253 6.89651L20.8197 6.84369L20.7052 6.78206L20.5908 6.72044L20.4851 6.65881L20.3707 6.60599L20.2562 6.54436L20.1418 6.49154L20.0273 6.43871L19.9129 6.38589L19.7984 6.32426L19.7368 6.29785L18.7244 8.50762L18.7684 8.52523L18.874 8.56925L18.9709 8.62207L19.0765 8.6749L19.1734 8.71892L19.2702 8.77174L19.3759 8.82456L19.4727 8.87738L19.5695 8.9214L19.6664 8.97423L19.772 9.03585L19.8689 9.08868L19.9657 9.1415L20.0626 9.19432L20.1594 9.24715L20.2562 9.30877L20.3531 9.3616L20.4499 9.41442L20.5468 9.47605L20.6436 9.53767L20.7316 9.5905L21.9994 7.52159L21.9114 7.46877Z"
                              />
                              <path
                                  d="M17.1753 5.31201L17.0521 5.2768L16.9288 5.24158L16.8056 5.19756L16.6823 5.16235L16.559 5.13593L16.427 5.10072L16.3037 5.0655L16.1805 5.03029L16.0572 5.00388L15.9252 4.96866L15.8019 4.93345L15.6787 4.90703L15.5466 4.88062L15.4233 4.85421L15.2913 4.819L15.168 4.79258L15.036 4.77498L14.9127 4.74856L14.8423 4.73096L14.4021 7.1168L14.4549 7.12561L14.5694 7.15202L14.6838 7.16963L14.7895 7.19604L14.9039 7.22245L15.0184 7.24886L15.1328 7.27527L15.2385 7.30169L15.3529 7.31929L15.4674 7.35451L15.573 7.38092L15.6875 7.40733L15.8019 7.44255L15.9076 7.46896L16.0132 7.49537L16.1277 7.53059L16.2333 7.5658L16.3478 7.59221L16.4534 7.62743L16.5679 7.66264L16.6119 7.68025L17.3426 5.36484L17.2986 5.35603L17.1753 5.31201Z"
                              />
                              <path
                                  d="M7.1213 4.72218L6.98925 4.74859L6.85719 4.77501L6.73393 4.79261L6.60187 4.81903L6.47862 4.85424L6.34656 4.88065L6.22331 4.90706L6.09125 4.93348L5.968 4.96869L5.84474 5.00391L5.72149 5.03032L5.58943 5.06553L5.46618 5.10075L5.34292 5.13596L5.21967 5.16238L5.09641 5.19759L4.97316 5.24161L4.8411 5.27683L4.72665 5.31204L4.67383 5.32965L5.40455 7.64507L5.43976 7.62746L5.55421 7.59224L5.65986 7.56583L5.76551 7.53062L5.87996 7.4954L5.99441 7.46899L6.10005 7.44258L6.2145 7.40736L6.32015 7.38095L6.4346 7.35454L6.54025 7.31932L6.6547 7.30172L6.76915 7.2753L6.8836 7.24889L6.98925 7.22248L7.1037 7.19607L7.21815 7.16966L7.3326 7.15205L7.44705 7.12564L7.55269 7.10803L7.61432 7.09923L7.17413 4.71338L7.1213 4.72218Z"
                              />
                              <path
                                  d="M2.2176 6.27151L2.10315 6.32434L1.9887 6.38596L1.87425 6.43879L1.7598 6.49161L1.64535 6.54443L1.5309 6.60606L1.41645 6.65888L1.302 6.72051L1.19635 6.78214L1.0819 6.84377L0.967449 6.89659L0.861802 6.95822L0.747352 7.01984L0.641706 7.08147L0.527255 7.1431L0.421609 7.20472L0.307159 7.27515L0.201512 7.33678L0.095866 7.40721L-0.000976562 7.46004L1.27558 9.52895L1.35482 9.47612L1.45166 9.41449L1.5397 9.36167L1.63654 9.30885L1.73339 9.24722L1.83023 9.1944L1.93587 9.14157L2.03272 9.08875L2.12956 9.03593L2.2264 8.9743L2.32324 8.92148L2.42009 8.87746L2.52573 8.82464L2.62258 8.77181L2.71942 8.71899L2.82506 8.67497L2.92191 8.62215L3.02755 8.56932L3.1244 8.5253L3.23004 8.48128L3.28287 8.45487L2.27042 6.25391L2.2176 6.27151Z"
                              />
                          </svg>
                          <div className="action-crawn">Call Me Back</div>
                          <svg
                              className="action__btn-bottom"
                              width="22"
                              height="10"
                              viewBox="0 0 22 10"
                              xmlns="http://www.w3.org/2000/svg"
                          >
                              <path
                                  d="M10.9506 0.416992L9.85895 2.4859L8.80249 4.55481C9.55962 6.00745 10.2287 7.2664 10.977 8.69263L13.1516 4.55481L12.0335 2.4859L10.9506 0.416992Z"
                              />
                              <path
                                  d="M21.9114 7.46877L21.8057 7.40714L21.7001 7.33671L21.5856 7.27508L21.48 7.20465L21.3655 7.14302L21.2599 7.0814L21.1542 7.01977L21.0398 6.95814L20.9253 6.89651L20.8197 6.84369L20.7052 6.78206L20.5908 6.72044L20.4851 6.65881L20.3707 6.60599L20.2562 6.54436L20.1418 6.49154L20.0273 6.43871L19.9129 6.38589L19.7984 6.32426L19.7368 6.29785L18.7244 8.50762L18.7684 8.52523L18.874 8.56925L18.9709 8.62207L19.0765 8.6749L19.1734 8.71892L19.2702 8.77174L19.3759 8.82456L19.4727 8.87738L19.5695 8.9214L19.6664 8.97423L19.772 9.03585L19.8689 9.08868L19.9657 9.1415L20.0626 9.19432L20.1594 9.24715L20.2562 9.30877L20.3531 9.3616L20.4499 9.41442L20.5468 9.47605L20.6436 9.53767L20.7316 9.5905L21.9994 7.52159L21.9114 7.46877Z"
                              />
                              <path
                                  d="M17.1753 5.31201L17.0521 5.2768L16.9288 5.24158L16.8056 5.19756L16.6823 5.16235L16.559 5.13593L16.427 5.10072L16.3037 5.0655L16.1805 5.03029L16.0572 5.00388L15.9252 4.96866L15.8019 4.93345L15.6787 4.90703L15.5466 4.88062L15.4233 4.85421L15.2913 4.819L15.168 4.79258L15.036 4.77498L14.9127 4.74856L14.8423 4.73096L14.4021 7.1168L14.4549 7.12561L14.5694 7.15202L14.6838 7.16963L14.7895 7.19604L14.9039 7.22245L15.0184 7.24886L15.1328 7.27527L15.2385 7.30169L15.3529 7.31929L15.4674 7.35451L15.573 7.38092L15.6875 7.40733L15.8019 7.44255L15.9076 7.46896L16.0132 7.49537L16.1277 7.53059L16.2333 7.5658L16.3478 7.59221L16.4534 7.62743L16.5679 7.66264L16.6119 7.68025L17.3426 5.36484L17.2986 5.35603L17.1753 5.31201Z"
                              />
                              <path
                                  d="M7.1213 4.72218L6.98925 4.74859L6.85719 4.77501L6.73393 4.79261L6.60187 4.81903L6.47862 4.85424L6.34656 4.88065L6.22331 4.90706L6.09125 4.93348L5.968 4.96869L5.84474 5.00391L5.72149 5.03032L5.58943 5.06553L5.46618 5.10075L5.34292 5.13596L5.21967 5.16238L5.09641 5.19759L4.97316 5.24161L4.8411 5.27683L4.72665 5.31204L4.67383 5.32965L5.40455 7.64507L5.43976 7.62746L5.55421 7.59224L5.65986 7.56583L5.76551 7.53062L5.87996 7.4954L5.99441 7.46899L6.10005 7.44258L6.2145 7.40736L6.32015 7.38095L6.4346 7.35454L6.54025 7.31932L6.6547 7.30172L6.76915 7.2753L6.8836 7.24889L6.98925 7.22248L7.1037 7.19607L7.21815 7.16966L7.3326 7.15205L7.44705 7.12564L7.55269 7.10803L7.61432 7.09923L7.17413 4.71338L7.1213 4.72218Z"
                              />
                              <path
                                  d="M2.2176 6.27151L2.10315 6.32434L1.9887 6.38596L1.87425 6.43879L1.7598 6.49161L1.64535 6.54443L1.5309 6.60606L1.41645 6.65888L1.302 6.72051L1.19635 6.78214L1.0819 6.84377L0.967449 6.89659L0.861802 6.95822L0.747352 7.01984L0.641706 7.08147L0.527255 7.1431L0.421609 7.20472L0.307159 7.27515L0.201512 7.33678L0.095866 7.40721L-0.000976562 7.46004L1.27558 9.52895L1.35482 9.47612L1.45166 9.41449L1.5397 9.36167L1.63654 9.30885L1.73339 9.24722L1.83023 9.1944L1.93587 9.14157L2.03272 9.08875L2.12956 9.03593L2.2264 8.9743L2.32324 8.92148L2.42009 8.87746L2.52573 8.82464L2.62258 8.77181L2.71942 8.71899L2.82506 8.67497L2.92191 8.62215L3.02755 8.56932L3.1244 8.5253L3.23004 8.48128L3.28287 8.45487L2.27042 6.25391L2.2176 6.27151Z"
                              />
                          </svg>
                      </a>
                    </div>
                  </nav>
                )}
            </div>
        </div>
        </header>

        {/* Mobile menu modal */}
      {isAboveMediumScreens && isMenuToggled && (
        <div className="mobile-menu__nav">
          <Links/>
        </div>
      )}

    </>
    
  )
}

export default HeaderComponent;