import styled from 'styled-components'

export const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  
  select {
    border: none;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    outline: none;
    cursor: pointer;
    padding: 5px 0 6px;
    border-bottom: 1px solid #aaa;
    width: calc(100% - 100px);
    
      
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
  }
 
  &.error {
    select {
      border-color: #ff3000;
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  label,
  select {
    transition: .2s;
  }

  label {
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
