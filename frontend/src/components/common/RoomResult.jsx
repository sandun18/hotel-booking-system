import React from "react";

const RoomResult = ({ roomSearchResults }) => {
    if (!roomSearchResults || roomSearchResults.length === 0) {
        return null;
    }

    return (
        <section className="room-results">
            {roomSearchResults.map((room, index) => (
                <div key={index} className="room-card">
                    <h3>{room.roomType}</h3>
                    <p>{room.roomDescription}</p>
                    <p>Price: ${room.roomPrice}</p>
                </div>
            ))}
        </section>
    );
};

export default RoomResult;
