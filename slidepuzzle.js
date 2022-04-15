let tiles = []

window.onload = function() {
    let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", ""];

    // パネルを取得
    let panel = document.getElementById("panel");

    // タイルを作成
    numbers.forEach((value, index) => {
        let tile = document.createElement("div");
        tile.id = "tile";
        tile.onclick = click;
        tile.index = index;
        tile.textContent = value;
        panel.appendChild(tile);
        // tilesとして保持しておく
        tiles.push(tile);
    });
}

// シャッフル関数
function shuffle(numbers) {

    document.getElementById("dev").click();

    for (i = 0; i < 50; i++) {
        let randNum = (int)(Math.random() * 4);
        switch(randNum) {
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
}

function click(e) {
    // クリック位置を取得
    let i = e.target.index;
    tiles.forEach((tile, index) => {
        // タイルが空の場所を探す
        if (tile.textContent === "") {
            // 空タイルとクリック位置が同じならそこに移動させる
            if (index === (i + 3)) {
                // 上に移動
                swap(index, i);
            } else if (index === (i - 3)) {
                // 下に移動
                swap(index, i);
            } else if (index === (i + 1)) {
                // 右に移動
                swap(index, i);
            } else if (index === (i - 1)) {
                // 左に移動
                swap(index, i);
            }
        }
    });
}

function swap(i, j){
    // タイルの数字を入れ替える
    let tmp = tiles[i].textContent;
    tiles[i].textContent = tiles[j].textContent;
    tiles[j].textContent = tmp;
}