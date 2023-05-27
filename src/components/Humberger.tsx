import React from 'react';
import Styled from 'styled-components';

const Humberger: React.FC = () => {
    var icon1 = document.getElementById("a");
    var icon2 = document.getElementById("b");
    var icon3 = document.getElementById("c");

    const MenuClicked = () => {
        icon1?.classList.toggle('a');
        icon2?.classList.toggle('c');
        icon3?.classList.toggle('b');
    };
    return (
        <HumbergerIcon id="icon" onClick = {()=>MenuClicked()}>
          <div className="icon-1" id="a"></div>
          <div className="icon-2" id="b"></div>
          <div className="icon-3" id="c"></div>
          <div className="clear"></div>
        </HumbergerIcon>
    )
}

export default Humberger;

const HumbergerIcon = Styled.div`
    position: relative;
    height: 60px;
    width: 60px;
    // top: 10%;
    // left: 3%;
    z-index: 1000;
    cursor: pointer;
    // border-radius: 50%;
    // background: rgba(255,255,255,0.2);

    .icon-1, .icon-2, .icon-3 {
        position: absolute;
        left: 25%;
        top: 50%;
        width: 32px;
        height: 3px;
        border-radius: 100px;
        background-color: #003B3f;
        transition: all 0.2s cubic-bezier(.63,.46,0,1.35);
    }

    .icon-1 {
      transform: translateY(8px);
      animation-delay: 100ms;
    }

    .icon-3 {
      transform: translateY(-8px);
      animation-delay: 250ms;
    }

    .icon-1.a {
        transform: rotate(40deg);
      }
      .icon-3.b {
        transform: rotate(-40deg);
      }
      .icon-2.c {
        opacity: 0;
      }

      .clear {
        clear: both;
      }
`