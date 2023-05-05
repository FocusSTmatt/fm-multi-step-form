import styled from 'styled-components';

const MobileBackground = () => {

  return (
    <div className='mobile-bg'>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
        <Number>4</Number>
    </div>
  )

  
  
}

export default MobileBackground

const Number = styled.h3`
    background: ${props => props.$primary ? "red" : "purple"};
`