import styled from 'styled-components'

export const FormWrap = styled.form`
  max-width: 100%;
  width: 400px;
  margin: auto;
  box-shadow: 0 2px 4px 2px #afafaf;
  border-radius: 4px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 30px;
  margin-bottom: 20px;
  
  &:after,
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
  }
  &:before {
    height: 1px;
    bottom: 9px;
    background: linear-gradient(to right, rgba(176,176,176,0) 0%,rgba(176,176,176,0) 1%,rgba(176,176,176,1) 20%,rgba(176,176,176,1) 80%,rgba(176,176,176,0) 100%);
  }
  
  &:after {
    width: 20px;
    height: 20px;
    background: #aaaaaa;
    border: 6px solid #fff;
    border-radius: 50%;
    margin: auto;
    bottom: 0;
  }
`


export const FormContent = styled.div`
  background: #fff;
  padding: 40px;
`

export const FormFooter = styled.div`
  background: #eee;
  padding: 40px;
  
  button {
    width: 100%;
    height: 40px;
    background: #f89921;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 2px 4px 2px #d7d7d7;
    
    @media (min-width: 1024px) {
      &:hover {
        opacity: .9;
        box-shadow: 0 2px 4px 2px rgba(0,0,0,0);
      }
    }
  }
`

export const Paragraph = styled.p`
  font-size: 12px;
  color: #999999;
  text-align: center;
  margin-top: 20px;
  
  a {
    color: #f89921;
    text-decoration: none;
    border-bottom: 1px solid #f89921;
    transition: .3s;
    
    @media (min-width: 1024px) {
      &:hover {
        border-color: rgba(0,0,0,0);
      }
    }
  }
`