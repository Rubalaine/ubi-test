import { keyframes } from "styled-components";

export const moveInLeft = keyframes`
 0% {
        opacity: 0;
        transform: translateX(30px);
    }
    80%{
        transform: translateX(-8px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;
export const moveInRight = keyframes`
 0% {
        opacity: 0;
        transform: translateX(-30px);
    }
    80%{
        transform: translateX(8px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;
export const moveInBottom = keyframes`
  0% {
        opacity: 0;
        transform: translateY(30px);
    }
    80%{
        transform: translateY(-5px);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`;
