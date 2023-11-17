import styled from "styled-components";
import { Slider, SliderBefore } from '../../Editors/EdgeEditor/components/AddEdge/styles';

export const Container = styled.div`
  margin-top: -68px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 500px; 
`;

export const Switch = styled.label`
    margin-top: 20px;
    cursor: pointer;
    position: relative;
    width: 60px;
    height: 34px;
    line-height: 1.5;
    margin-left: -250px;
`;

export const StyledSwitch = styled(Switch)`
  input:checked + ${Slider} {
    background-color: #34C759;
  }

  input:focus + ${Slider} {
    box-shadow: 0 0 1px #34C759;
  }

  input:checked + ${Slider} + ${SliderBefore} {
    transform: translateX(20px);
  }

  &.round {
    ${Slider} {
      border-radius: 34px;
    }

    ${SliderBefore} {
      border-radius: 50%;
    }
  }
`;
