import React, { useEffect, useContext } from "react";
import { MapBox } from "./Styles";
import axiosWithAuth from "./axiosWithAuth";
import { DungeonContext } from "../contexts/DungeonContext";

const Map = () => {
  const { room, setRoom } = useContext(DungeonContext);
  const { rooms, setRooms } = useContext(DungeonContext);
  const { player, setPlayer } = useContext(DungeonContext);
  const { currentPlayerRoom, setCurrentPlayerRoom } = useContext(
    DungeonContext
  );

  useEffect(() => {
    const getMap = () => {
      axiosWithAuth()
        .get("/adv/rooms/")
        .then((res) => {
          console.log("Rooms data: ", res.data);
          setRooms(res.data.all_rooms);
          for (let i = 0; i < res.data.all_rooms.length; i++) {
            res.data.all_rooms[i].y *= -1;
            if (
              res.data.all_rooms[i].id === res.data.room_id ||
              res.data.all_rooms[i].room_id === res.data.room_id
            ) {
              setRoom(res.data.all_rooms[i]);
            }
          }
        })
        .catch((err) => console.log("Error getting rooms: ", err));
    };
    getMap();
  }, []);

  console.log("Current player room: ", currentPlayerRoom);

  useEffect(() => {
    var canvas = document.getElementById("map");

    const roomWidth = 40;
    const roomHeight = 40;

    const roomPadding = 10;

    let centerpoint = {
      x: Math.round(
        canvas.width / 2 -
          currentPlayerRoom.x * (roomWidth + roomPadding) -
          (roomWidth + roomPadding) / 2
      ),
      y: Math.round(
        canvas.height / 2 -
          currentPlayerRoom.y * (roomHeight + roomPadding) -
          (roomHeight + roomPadding) / 2
      ),
    };

    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "black";
      ctx.font = "12px serif";

      for (var i = 0; i < rooms.length; i++) {
        const leftOffset =
          centerpoint.x +
          rooms[i].x * (roomWidth + roomPadding) +
          roomPadding / 2;
        const topOffset =
          centerpoint.y +
          rooms[i].y * (roomHeight + roomPadding) +
          roomPadding / 2;
        ctx.fillStyle = "blue";
        if (
          currentPlayerRoom.id === rooms[i].id ||
          currentPlayerRoom.id === rooms[i].id
        ) {
          ctx.fillStyle = "red";
        }
        ctx.fillRect(leftOffset, topOffset, roomWidth, roomHeight);
        ctx.strokeRect(leftOffset, topOffset, roomWidth, roomHeight);
        ctx.fillStyle = "white";
        ctx.fillText(rooms[i].id, leftOffset + 15, topOffset + 20);
        ctx.fillStyle = "purple";
        if (rooms[i].n_to > 0) {
          ctx.fillRect(
            leftOffset + roomWidth / 2 - roomPadding / 2,
            topOffset - roomPadding / 2,
            roomPadding,
            roomPadding / 2
          );
        }
        if (rooms[i].e_to > 0) {
          ctx.fillRect(
            leftOffset + roomWidth,
            topOffset + roomHeight / 2 - roomPadding / 2,
            roomPadding / 2,
            roomPadding
          );
        }
        if (rooms[i].s_to > 0) {
          ctx.fillRect(
            leftOffset + roomWidth / 2 - roomPadding / 2,
            topOffset + roomWidth,
            roomPadding,
            roomPadding / 2
          );
        }
        if (rooms[i].w_to > 0) {
          ctx.fillRect(
            leftOffset - roomPadding / 2,
            topOffset + roomHeight / 2 - roomPadding / 2,
            roomPadding / 2,
            roomPadding
          );
        }
      }
    }
  });

  return (
    <MapBox>
      <canvas id="map" width="600" height="600"></canvas>
    </MapBox>
  );
};

export default Map;
