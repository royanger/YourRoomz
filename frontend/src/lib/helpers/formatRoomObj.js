export const formatRoomObj = room => {
  return {
    id: room.id,
    wallColor: room.wallColor,
    floorColor: room.floorColor,
    cartitems: room.cartitems,
    furniture: room.furniture,
    roomtype: room.roomtype[0],
  }
}
