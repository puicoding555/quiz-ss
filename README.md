# Project: nv-Room

This project is a variation of the nv-webblog68 project, extended with a new model: **Room**.

## New Model: Room

### Schema
- **roomNumber**: STRING\n- **type**: STRING\n- **price**: FLOAT\n- **status**: STRING\n- **description**: TEXT

## New Controller
A dedicated controller `RoomController` has been added to handle CRUD operations for `Room`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/rooms` - Get all rooms
- **POST** `/room` - Create a new room
- **GET** `/room/:roomId` - Get a room by ID
- **PUT** `/room/:roomId` - Update a room
- **DELETE** `/room/:roomId` - Delete a room

## Usage
Follow standard setup instructions for Client and Server.
