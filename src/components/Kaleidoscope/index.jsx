// @flow

import React from 'react'
import { withPrefix } from 'gatsby-link'

class Kaleidoscope extends React.Component {
  static defaultProps = {
    width: 1127,
    height: 800
  }

  // https://i.pinimg.com/564x/0d/29/08/0d2908c0e5769a1d2c615f6698146f29.jpg
  // https://i.pinimg.com/564x/c5/11/a6/c511a67fb9645652849862b832353fda.jpg
  // https://i.pinimg.com/564x/e7/15/fa/e715fa7cf39662c1947077723c5a8d2a.jpg
  // https://i.pinimg.com/564x/7a/87/6b/7a876bd3482e1dcbbf04abf9c576637a.jpg
  // https://i.pinimg.com/564x/e3/c5/96/e3c596b8c350d33c77e4d3e971e2afa2.jpg
  // https://i.pinimg.com/564x/f5/46/a0/f546a06646616170df716e3b65abd648.jpg
  // https://i.pinimg.com/564x/ae/f1/9b/aef19bcca81f1fce17a459800e6d08cc.jpg
  // https://i.pinimg.com/564x/2f/eb/d9/2febd90d39810923332c0b2c66455cf6.jpg
  // https://i.pinimg.com/564x/32/94/e0/3294e00f8a65811771aa8e5f8f0dd3e2.jpg
  // https://i.pinimg.com/564x/6b/bd/3c/6bbd3ce0f5ebfe368132fe67a6148c02.jpg
  // https://i.pinimg.com/564x/06/42/19/064219e8b9d66291c312b9d7397769c1.jpg
  // https://i.pinimg.com/564x/85/b0/23/85b023daa7374212dde2279da7fb8b92.jpg
  // https://i.pinimg.com/564x/5f/50/c8/5f50c8c5ecbbf570661db62307040d4f.jpg
  // https://i.pinimg.com/564x/03/9e/4c/039e4c979ed8e3c0bd796217f8f4fb57.jpg
  // https://i.pinimg.com/564x/c6/0a/a8/c60aa84912fcfb24645b671cc910d699.jpg
  // https://i.pinimg.com/564x/50/2e/36/502e36f2a042d5de7ddf52fb7b8e5429.jpg
  // https://i.pinimg.com/564x/8a/d0/d8/8ad0d819789852ef3ca535226637295d.jpg
  // https://i.pinimg.com/564x/1a/a9/61/1aa96174c280acc6631e00f37b9e60f5.jpg
  // https://i.pinimg.com/564x/1b/55/5e/1b555e5de1d43a2f698dcbd9349357cf.jpg
  // https://i.pinimg.com/564x/9b/0b/37/9b0b373354c5c6d5ec0ad534bbff83a7.jpg
  // https://i.pinimg.com/564x/85/c7/15/85c715d9c3ec26b4156e68726c17561c.jpg
  // https://i.pinimg.com/564x/ae/2e/48/ae2e48b58f27cb6502df425548559ecb.jpg
  // https://i.pinimg.com/564x/f4/42/17/f4421712d9f6a834d982ef4fafccaace.jpg

  render() {
    return(
      <svg width={this.props.width} height={this.props.height} viewBox="0,0,100,100">
        <defs>
          <clipPath id="myMask">
            <path d="M-0.05,0 L100, 41.5 L100, -1,L0, 0Z"/>
          </clipPath>
        </defs>

        <symbol id="img">
          <image x="0" y="0" href="https://i.pinimg.com/564x/f4/42/17/f4421712d9f6a834d982ef4fafccaace.jpg" height="100" width="100" ></image>
        </symbol>

        <symbol id="sym01">
          <g clipPath="url(#myMask)">
            <g transform="translate(-50 -50)">
              <use href="#img" x="0" y="0">
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="60s"
                  repeatCount="indefinite"/>
              </use>
            </g>
          </g>
        </symbol>

        <symbol id="sym02">
          <use href="#sym01" x="50" y="50" />
          <use href="#sym01" x="50" y="50" transform="rotate(45 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(90 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(135 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(180 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(225 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(270 50 50)"/>
          <use href="#sym01" x="50" y="50" transform="rotate(315 50 50)"/>
        </symbol>

        <g>
          <rect width="100" height="100" />
          <use href="#sym02" x="0" y="0"/>
          <use href="#sym02" x="0" y="0" transform="translate(100 0) scale(-1 1)"/>
        </g>

      </svg>
    )
  }
}

export default Kaleidoscope
