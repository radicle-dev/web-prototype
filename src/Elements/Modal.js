import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Portal, absolute, colors } from '../utils';
import Icon from './Icon';
import { FloatingCard } from './Cards';

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon name="close" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired,
  on: PropTypes.bool.isRequired,
};

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled(FloatingCard)`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 320px;
`;

const CloseButton = styled.button`
  ${absolute({ y: 'top', x: 'right' })};
  border: none;
  background: transparent;
  padding: 12px;
`;

const Background = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.35;
`;
