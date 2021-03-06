import { styled } from '@styles';

export const PetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  transform: translateY(calc(42px + 1em));
  transition: transform 0.3s;
  bottom: 0;
  width: 100%;
  background-color: #fc5f90;
  color: #fff;
  padding: 15px 0;
`;

export const PetCardContainer = styled.div`
  position: relative;
  height: 310px;
  padding: 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  word-wrap: break-word;
  transition: all 0.2s ease-in-out;
  text-align: center;
  margin-bottom: 25px;
  padding-bottom: 10px;

  &:hover {
    box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    ${PetInfo} {
      height: 100%;
      transform: translateY(0);
      opacity: 0.9;
      bottom: 0;
    }
  }
`;
export const PetImage = styled.span`
  height: 150px;
  overflow: hidden;

  & > img {
    width: 100%;
  }
`;
export const PetName = styled.span`
  font-size: 18px;
  font-weight: 600;
  /* color: #9c27b0; */
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const PetMeta = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;
