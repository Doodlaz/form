import styled from 'styled-components'

export const RadioWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  label {
    transition: .2s;
  }
  
  input {
    margin: 0;
  }
  
  label {
    cursor: pointer;
    padding: 5px 4px 6px;
    border-bottom: 1px solid #aaa;
    font-size: 14px;
  }
  
  [type="radio"]:checked + label {
    color: #f89921;
    border-color: #f89921;
  }

  p {
    font-size: 14px;
    color: #f89921;
    width: 100px;
    padding-right: 16px;
  }
  
  
`

export const ErrorMessage = styled.div`
  color: #fff;
  position: absolute;
  right: 0;
  font-size: 12px;
  padding: 10px 20px;
  background: #ff3000;
  transform: translateX(calc(100% + 20px));
  box-shadow: 0 2px 4px 2px #c7c7c7;
  transition: .3s;
  
  &:before {
    content: '';
  	width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-right: 9px solid #ff3000;
    border-bottom: 8px solid transparent;
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
`
