import styled from "styled-components";

export const MapBox = styled.div`
  border: solid 2px black;
  text-align: center;
  height: 600px;
  width: 600px;
`;

export const AuthBox = styled.div`
  border: solid 1px white;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 400px;
  background-color: white;
`;

export const BackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10%;
  text-align: center;
`;

export const PlayerBox = styled.div`
  text-align: center;
  width: 80%;
`;

export const GameBox = styled.div`
  text-align: center;
  padding: 0 30px;
  height: 95vh;
  width: 90vw;
  margin: 0 auto;
`;

export const HudBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px;
  background-color: lightgrey;
  border: 1px solid grey;
  border-radius: 15px;
  height: 20%;
`;

export const MoveButton = styled.button`
  background-color: grey;
  padding: 10px;
  border: 2px solid grey;
  border-radius: 20px;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 25px;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CenterMap = styled.div`
  display: flex;
  justify-content: center;
`;
