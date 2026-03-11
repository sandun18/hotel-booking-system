import React, { useState } from "react";

const RoomSearch = ({ handleSearchResult }) => {
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [roomType, setRoomType] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        // TODO: Call API to search for available rooms
        handleSearchResult([]);
    };

    return (
        <section className="room-search">
            <form onSubmit={handleSearch}>
                <div>
                    <label>Check-in Date</label>
                    <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
                </div>
                <div>
                    <label>Check-out Date</label>
                    <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
                </div>
                <div>
                    <label>Room Type</label>
                    <input type="text" value={roomType} onChange={(e) => setRoomType(e.target.value)} placeholder="e.g. Single, Double" />
                </div>
                <button type="submit">Search Rooms</button>
            </form>
        </section>
    );
};

export default RoomSearch;
