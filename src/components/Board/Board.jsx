import "./Board.css";

const tileData = Array.from({ length: 40 }, (_, i) => {
  const cornerTiles = {
    0:  { col: 12, row: 12 },
    10: { col: 1,  row: 12 },
    20: { col: 1,  row: 1 },
    30: { col: 12, row: 1 }
  };

  if (cornerTiles[i]) {
    return { ...cornerTiles[i], width: 2, height: 2, index: i };
  }

  // Bottom row (tiles 1 to 9)
  if (i > 0 && i < 10) {
    return {
      col: 12 - i,
      row: 12,
      width: 1,
      height: 2,
      index: i,
    };
  }

  // Left column (tiles 11 to 19)
  if (i > 10 && i < 20) {
    return {
      col: 1,
      row: 12 - (i - 10),
      width: 2,
      height: 1,
      index: i,
    };
  }

  // Top row (tiles 21 to 29)
  if (i > 20 && i < 30) {
    return {
      col: i - 19 + 1,
      row: 1,
      width: 1,
      height: 2,
      index: i,
    };
  }

  // Right column (tiles 31 to 39)
  if (i > 30 && i < 40) {
    return {
      col: 12,
      row: i - 29 + 1,
      width: 2,
      height: 1,
      index: i,
    };
  }

  return null;
});


export default function Board() {
  return (
    <div className="board_container">
      <div className="board_grid">

        <div className="player_tolkens">
         <div className="player_tolken" id="tolken_1">
            p1
         </div>
        </div>

        {tileData.map((tile, i) => (
          <div
            key={i}
            className={`tile ${tile.width === 2 && tile.height === 2 ? "corner" : ""}`}
            style={{
              gridColumn: `${tile.col} / span ${tile.width}`,
              gridRow: `${tile.row} / span ${tile.height}`,
            }}
          >
            Tile {tile.index}
          </div>
        ))}
      </div>
    </div>
  );
}